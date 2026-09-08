import { afterEach, beforeEach, expect, it, vi } from "vitest";
import { act, cleanup, fireEvent, render, renderHook, screen } from "@testing-library/react";
import { useSaveFile } from "@/hooks/useSaveFile";
import { encodeData, downloadFile } from "@/utils";
import App from "@/components/App";

vi.mock("@/utils", async importOriginal => ({ ...(await importOriginal<object>()), downloadFile: vi.fn() }));
vi.mock("@monaco-editor/react", () => ({
  default: ({ value, onChange }: { value: string; onChange: (value: string) => void }) => (
    <textarea aria-label="JSON editor" value={value} onChange={event => onChange(event.target.value)} />
  ),
}));

class Reader {
  static pending: Reader[] = [];
  result: ArrayBuffer | null = null;
  onload?: () => void;
  onerror?: () => void;
  readAsArrayBuffer() {
    Reader.pending.push(this);
  }
  finish(value: unknown) {
    const bytes = encodeData(JSON.stringify(value));
    this.result = bytes.buffer as ArrayBuffer;
    this.onload?.();
  }
}
beforeEach(() => {
  Reader.pending = [];
  vi.stubGlobal("FileReader", Reader);
  HTMLElement.prototype.scrollIntoView = vi.fn();
  HTMLDialogElement.prototype.showModal = function () {
    this.open = true;
  };
  HTMLDialogElement.prototype.close = function () {
    this.open = false;
  };
});
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  vi.clearAllMocks();
});
const save = { playerData: { silk: 0, permadeathMode: 0 } };

it("blocks encrypted export inside the handler and recovers after a valid edit", () => {
  const { result } = renderHook(useSaveFile);
  act(() => result.current.handlers.handleFile(new File([], "user1.dat")));
  act(() => Reader.pending[0].finish(save));
  expect(result.current.state.loadId).toBe(1);
  act(() => result.current.handlers.setJsonText("{"));
  expect(result.current.state.canExportEncrypted).toBe(false);
  act(() => result.current.handlers.saveEncrypted());
  expect(downloadFile).not.toHaveBeenCalled();
  act(() => result.current.handlers.savePlain());
  expect(downloadFile).toHaveBeenCalledWith("{", "user1.json");
  act(() => result.current.handlers.setJsonText(JSON.stringify({ playerData: { silk: 0, Tools: { savedData: {} } } })));
  act(() => result.current.handlers.saveEncrypted());
  expect(downloadFile).toHaveBeenCalledTimes(1);
  act(() => result.current.handlers.setJsonText("{}"));
  expect(result.current.state.errorMessage).not.toBe("");
  expect(result.current.state.saveData).toBe(null);
  act(() => result.current.handlers.setJsonText(JSON.stringify(save)));
  expect(result.current.state.errorMessage).toBe("");
  expect(result.current.state.loadId).toBe(1);
  act(() => result.current.handlers.saveEncrypted());
  expect(downloadFile).toHaveBeenLastCalledWith(expect.any(Uint8Array), "user1.dat");
});

it("ignores stale file reads after replacement and clearing", () => {
  const { result } = renderHook(useSaveFile);
  act(() => result.current.handlers.handleFile(new File([], "old.dat")));
  act(() => result.current.handlers.handleFile(new File([], "new.dat")));
  act(() => Reader.pending[1].finish(save));
  act(() => Reader.pending[0].finish({ playerData: { silk: 12 } }));
  expect(result.current.state.fileName).toBe("new.dat");
  expect(result.current.state.saveData?.playerData.silk).toBe(0);
  expect(result.current.state.loadId).toBe(1);
  act(() => result.current.handlers.handleFile(new File([], "pending.dat")));
  act(() => result.current.handlers.clearFile());
  act(() => Reader.pending[2].finish(save));
  expect(result.current.state.fileName).toBe("");
  expect(result.current.state.isSaveFileDecrypted).toBe(false);
});

it("invalid replacements and read errors remove old progress without resetting loadId", () => {
  const { result } = renderHook(useSaveFile);
  act(() => result.current.handlers.handleFile(new File([], "save.dat")));
  act(() => Reader.pending[0].finish(save));
  act(() => result.current.handlers.handleFile(new File([], "broken.dat")));
  expect(result.current.state.saveData).toBe(null);
  act(() => Reader.pending[1].onerror?.());
  expect(result.current.state.errorMessage).toContain("unsupported");
  expect(result.current.state.loadId).toBe(1);
});

it("preserves active tab and filters while editing, updates progress immediately, resets only on successful load", async () => {
  render(<App />);
  const upload = screen.getByLabelText("Upload save file");
  fireEvent.change(upload, { target: { files: [new File([], "save.dat")] } });
  act(() => Reader.pending[0].finish(save));
  fireEvent.click(screen.getByRole("button", { name: /Mask Shards/ }));
  await screen.findByRole("table");
  const missingToggle = screen.getAllByRole("button", { name: /Showing missing items/ }).at(-1)!;
  fireEvent.click(missingToggle);
  expect(screen.getByText("Mask Shard #1").closest("tr")?.textContent).toContain("[ ]");
  fireEvent.click(screen.getByRole("button", { name: "Edit save file" }));
  const editor = await screen.findByRole("textbox", { name: "JSON editor" });
  fireEvent.change(editor, {
    target: {
      value: JSON.stringify({ playerData: { silk: 5, permadeathMode: 0, PurchasedBonebottomHeartPiece: true } }),
    },
  });
  expect(screen.getByRole("table")).toBeTruthy();
  expect(screen.getByText("Mask Shard #1").closest("tr")?.textContent).toContain("[x]");
  expect(screen.getByRole("button", { name: /Showing all items/ })).toBeTruthy();
  expect(screen.getByText("0.25%")).toBeTruthy();
  expect(screen.getByRole("heading", { name: "Mask Shards" })).toBeTruthy();
  fireEvent.change(editor, { target: { value: "{" } });
  expect(screen.getByRole("button", { name: /Download as.*encrypted/ }).hasAttribute("disabled")).toBe(true);
  fireEvent.change(editor, { target: { value: JSON.stringify(save) } });
  expect(screen.getByRole("heading", { name: "Mask Shards" })).toBeTruthy();
  fireEvent.click(screen.getByRole("button", { name: "Close modal" }));
  fireEvent.change(upload, { target: { files: [new File([], "save.dat")] } });
  act(() => Reader.pending[1].finish(save));
  expect(screen.getByRole("heading", { name: "At a glance..." })).toBeTruthy();
});
