import { afterEach, beforeEach, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { NORMALISED_DICT_MAP } from "@/dictionary";
import { computeDictMapWithManualData } from "@/utils/data";
import { categoryProgress, defaultFilters, filterSections } from "@/utils/collection";
import App from "@/components/App";

vi.mock("@/components/ui/LocalSaveEditor", () => ({ default: () => null }));

const storageKey = "silksong-completionist-manual-progress";
beforeEach(() => {
  localStorage.clear();
  Element.prototype.scrollIntoView = () => {};
});
afterEach(cleanup);

it("counts ticked items as collected and completes journal entries", () => {
  const masks = NORMALISED_DICT_MAP["Mask Shards"];
  const [sectionName, section] = Object.entries(masks.sections)[0];
  const [shardName, shard] = Object.entries(section.act_1)[0];
  const journal = NORMALISED_DICT_MAP["Hunter's Journal"].sections.default.act_0;
  const [entryName] = Object.keys(journal);
  const data = computeDictMapWithManualData(
    NORMALISED_DICT_MAP,
    new Set([`Mask Shards.${sectionName}.act_1.${shardName}`, `Hunter's Journal.default.act_0.${entryName}`]),
    "classic"
  );
  expect(data.totalCompletedPercent).toBe(shard.completionPercent);
  expect(data.allItems["Mask Shards"].saveMeta?.completedCount).toBe(1);
  const hunters = data.allItems["Hunter's Journal"];
  expect(hunters.saveMeta?.journalMeta).toEqual({ encountered: 1, completed: 1 });
  expect(categoryProgress(hunters, false, false)).toBe(`1 / ${hunters.totalCount}`);
  const missing = filterSections(data.allItems["Mask Shards"], data, defaultFilters(), false).flatMap(s => s.items);
  expect(missing.some(item => item.name === shardName)).toBe(false);
});

it("filters mode-exclusive items by the chosen game mode", () => {
  const count = (mode: "classic" | "steelSoul") =>
    computeDictMapWithManualData(NORMALISED_DICT_MAP, new Set(), mode).allItems.Bosses.totalCount;
  expect(count("classic")).not.toBe(count("steelSoul"));
});

it("persists ticked items and the manual session across visits", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "Track manually" }));
  fireEvent.click(screen.getByRole("button", { name: /Switch to Lost Fleas tab/ }));
  const [first] = screen.getAllByRole("button", { name: /^Mark .* as collected$/ });
  fireEvent.click(first);
  expect(first.getAttribute("aria-pressed")).toBe("true");
  const stored = JSON.parse(localStorage.getItem(storageKey)!);
  expect(stored.active).toBe(true);
  expect(stored.collected).toHaveLength(1);
  expect(stored.collected[0]).toMatch(/^Lost Fleas\./);

  cleanup();
  render(<App />);
  screen.getByRole("button", { name: "Exit manual tracking" });
  const fleas = screen.getByRole("button", { name: /Switch to Lost Fleas tab/ });
  within(fleas).getByText(/^1 \//);
});
