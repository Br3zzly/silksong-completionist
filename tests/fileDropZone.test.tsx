import { afterEach, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { createPortal } from "react-dom";
import { useFileDropZone } from "@/hooks/useFileDropZone";

afterEach(cleanup);

function Harness({ onFile }: { onFile: (file: File) => void }) {
  const dropZone = useFileDropZone(onFile);
  return (
    <main {...dropZone.handlers} data-active={dropZone.active}>
      <button>Load save</button>
      {createPortal(<button>Dialog content</button>, document.body)}
    </main>
  );
}

const file = new File(["save"], "user1.dat");
const fileTransfer = () => ({ dataTransfer: { types: ["Files"], files: [file], dropEffect: "none" } });

it("keeps the highlight while moving across descendants and loads a dropped file once", () => {
  const onFile = vi.fn();
  render(<Harness onFile={onFile} />);
  const panel = screen.getByRole("main");
  const button = screen.getByRole("button", { name: "Load save" });
  const transfer = fileTransfer();
  fireEvent.dragEnter(panel, transfer);
  fireEvent.dragEnter(button, transfer);
  fireEvent.dragLeave(panel, transfer);
  expect(panel.dataset.active).toBe("true");
  expect(fireEvent.dragOver(button, transfer)).toBe(false);
  expect(transfer.dataTransfer.dropEffect).toBe("copy");
  fireEvent.drop(button, transfer);
  expect(onFile).toHaveBeenCalledExactlyOnceWith(file);
  expect(panel.dataset.active).toBe("false");
});

it("does not intercept text drags or events from a portaled dialog", () => {
  const onFile = vi.fn();
  render(<Harness onFile={onFile} />);
  const panel = screen.getByRole("main");
  const text = { dataTransfer: { types: ["text/plain"], files: [] } };
  fireEvent.dragEnter(panel, text);
  expect(fireEvent.dragOver(panel, text)).toBe(true);
  fireEvent.drop(panel, text);
  const dialog = screen.getByRole("button", { name: "Dialog content" });
  fireEvent.dragEnter(dialog, fileTransfer());
  fireEvent.drop(dialog, fileTransfer());
  expect(panel.dataset.active).toBe("false");
  expect(onFile).not.toHaveBeenCalled();
});

it("clears the highlight when the file leaves the panel", () => {
  render(<Harness onFile={vi.fn()} />);
  const panel = screen.getByRole("main");
  fireEvent.dragEnter(panel, fileTransfer());
  fireEvent.dragLeave(panel, fileTransfer());
  expect(panel.dataset.active).toBe("false");
});

it.each(["dragend", "drop", "blur", "Escape"])("clears the highlight after %s", event => {
  const onFile = vi.fn();
  render(<Harness onFile={onFile} />);
  const panel = screen.getByRole("main");
  fireEvent.dragEnter(panel, fileTransfer());
  if (event === "Escape") fireEvent.keyDown(window, { key: "Escape" });
  else fireEvent(window, new Event(event));
  expect(panel.dataset.active).toBe("false");
  expect(onFile).not.toHaveBeenCalled();
});
