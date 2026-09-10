import { afterEach, beforeEach, expect, it, vi } from "vitest";
import { act, cleanup, render, screen } from "@testing-library/react";
import { SaveSummary } from "@/components/SaveSummary";
import { NORMALISED_DICT_MAP } from "@/dictionary";
import { computeDictMapWithSaveData } from "@/utils/data";

const frames = new Map<number, FrameRequestCallback>();
let nextFrame = 0;
let media: EventTarget & { matches: boolean };

beforeEach(() => {
  frames.clear();
  nextFrame = 0;
  media = Object.assign(new EventTarget(), { matches: false });
  vi.stubGlobal("matchMedia", () => media);
  vi.spyOn(document, "hidden", "get").mockReturnValue(false);
  vi.spyOn(performance, "now").mockReturnValue(0);
  vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => {
    frames.set(++nextFrame, callback);
    return nextFrame;
  });
  vi.stubGlobal("cancelAnimationFrame", (id: number) => frames.delete(id));
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

function data(extra: Record<string, unknown> = {}, completion = 80) {
  const parsed = computeDictMapWithSaveData(
    NORMALISED_DICT_MAP,
    { playerData: { silk: 0, geo: 100, ShellShards: 700, playTime: 3661, permadeathMode: 0, ...extra } },
    false
  );
  return { ...parsed, totalCompletedPercent: completion };
}

function advance(time: number) {
  const callbacks = [...frames.values()];
  frames.clear();
  act(() => callbacks.forEach(callback => callback(time)));
}

const countText = (container: HTMLElement, selector: string) =>
  container.querySelector(`${selector} dd [aria-hidden]`)?.textContent;

it("shows the broken spool and placeholders without save data", () => {
  const { container } = render(<SaveSummary data={null} loadId={0} />);
  expect(screen.getByRole("region", { name: "Save summary" }).getAttribute("data-loaded")).toBe("false");
  expect(screen.getByRole("progressbar").getAttribute("aria-valuenow")).toBeNull();
  expect(container.querySelector(".summary-spool-broken")).toBeTruthy();
  expect(countText(container, ".summary-currency")).toBe("-");
  expect(countText(container, ".summary-playtime")).toBe("0H 0M");
  expect(container.querySelector(".summary-game-mode")).toBeNull();
  expect(frames.size).toBe(0);
});

it("keeps percentage, silk, currency and playtime on the same clock and lands on exact values", () => {
  const { container, rerender } = render(<SaveSummary data={null} loadId={0} />);
  rerender(<SaveSummary data={data()} loadId={1} />);
  expect(container.querySelector(".summary-percentage")?.textContent).toBe("0%");
  // Accessible values expose the final save data without announcing every frame.
  expect(screen.getByRole("progressbar").getAttribute("aria-valuenow")).toBe("80");
  advance(1050);
  expect(container.querySelector(".summary-silk-winding")).toBeTruthy();
  expect(container.querySelector(".summary-spool")?.getAttribute("data-glowing")).toBe("false");
  expect(container.querySelector(".summary-percentage")?.textContent).toBe("70%");
  expect(container.querySelector<HTMLElement>(".summary-spool")?.style.getPropertyValue("--silk-fill")).toBe("70%");
  expect(countText(container, ".summary-currency")).toBe("87");
  expect(countText(container, ".summary-playtime")).toBe("0H 53M");
  advance(1850);
  expect(container.querySelector(".summary-silk-winding")).toBeNull();
  expect(container.querySelector(".summary-spool")?.getAttribute("data-glowing")).toBe("true");
  expect(container.querySelector(".summary-percentage")?.textContent).toBe("80%");
  expect(countText(container, ".summary-currency")).toBe("100");
  expect(countText(container, ".summary-playtime")).toBe("1H 1M");
  expect(frames.size).toBe(0);
});

it("does not glow on an empty spool", () => {
  const { container } = render(<SaveSummary data={data({}, 0)} loadId={1} />);
  expect(container.querySelector(".summary-spool")?.getAttribute("data-glowing")).toBe("false");
  expect(container.querySelector(".summary-silk-winding")).toBeNull();
});

it("cancels a replaced or cleared save's count-up and updates editor changes immediately", () => {
  const { container, rerender } = render(<SaveSummary data={null} loadId={0} />);
  rerender(<SaveSummary data={data()} loadId={1} />);
  advance(800);
  rerender(<SaveSummary data={data({ geo: 2 }, 10)} loadId={2} />);
  expect(frames.size).toBe(1);
  advance(1850);
  expect(countText(container, ".summary-currency")).toBe("2");
  expect(container.querySelector(".summary-percentage")?.textContent).toBe("10%");
  rerender(<SaveSummary data={data({ geo: 15 }, 20)} loadId={2} />);
  expect(countText(container, ".summary-currency")).toBe("15");
  expect(container.querySelector(".summary-percentage")?.textContent).toBe("20%");
  expect(frames.size).toBe(0);
  rerender(<SaveSummary data={data()} loadId={3} />);
  rerender(<SaveSummary data={null} loadId={3} />);
  advance(1850);
  expect(countText(container, ".summary-currency")).toBe("-");
  expect(frames.size).toBe(0);
});

it("finishes immediately for reduced motion, including a preference change during playback", () => {
  const { container, rerender } = render(<SaveSummary data={null} loadId={0} />);
  rerender(<SaveSummary data={data()} loadId={1} />);
  act(() => {
    media.matches = true;
    media.dispatchEvent(new Event("change"));
  });
  expect(countText(container, ".summary-currency")).toBe("100");
  expect(frames.size).toBe(0);
  rerender(<SaveSummary data={data({ geo: 0, playTime: 90061 })} loadId={2} />);
  expect(countText(container, ".summary-currency")).toBe("0");
  expect(countText(container, ".summary-playtime")).toBe("25H 1M");
  expect(frames.size).toBe(0);
});

it.each([
  [0, "Classic", "classic"],
  [1, "Steel Soul", "steel-soul"],
  [2, "Steel Soul (Dead)", "steel-soul"],
  ["On", "Steel Soul", "steel-soul"],
  ["Dead", "Steel Soul (Dead)", "steel-soul"],
])("shows game mode %s with the matching spool", (mode, label, asset) => {
  const { container } = render(<SaveSummary data={data({ permadeathMode: mode })} loadId={1} />);
  expect(screen.getByText(label)).toBeTruthy();
  expect(container.querySelector(".summary-game-mode img")?.getAttribute("src")).toContain(asset);
});

it("handles absent or unusable optional stats without displaying NaN or a false zero", () => {
  const { container } = render(
    <SaveSummary
      data={data({ geo: undefined, ShellShards: Infinity, playTime: -1, permadeathMode: null })}
      loadId={1}
    />
  );
  expect(countText(container, ".summary-currency")).toBe("-");
  expect(countText(container, ".summary-playtime")).toBe("-");
  expect(container.querySelector(".summary-game-mode img")).toBeNull();
  expect(container.textContent).not.toContain("NaN");
});
