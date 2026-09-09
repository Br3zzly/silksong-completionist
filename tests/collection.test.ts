import { expect, it } from "vitest";
import { NORMALISED_DICT_MAP, type NormalizedItem } from "@/dictionary";
import { computeDictMapWithSaveData, toggleActInFilter } from "@/utils/data";
import { categoryProgress, defaultFilters, filterSections, statValue } from "@/utils/collection";

it("keeps collected items out of missing results while preserving act-independent entries", () => {
  const data = computeDictMapWithSaveData(
    NORMALISED_DICT_MAP,
    { playerData: { silk: 0, permadeathMode: 0, PurchasedBonebottomHeartPiece: true } },
    false
  );
  const filters = defaultFilters();
  const masks = data.allItems["Mask Shards"];
  expect(
    filterSections(masks, data, filters, false)
      .flatMap(section => section.items)
      .some(item => item.name === "Mask Shard #1")
  ).toBe(false);
  filters.showMissingOnly = false;
  expect(
    filterSections(masks, data, filters, false)
      .flatMap(section => section.items)
      .some(item => item.name === "Mask Shard #1")
  ).toBe(true);
  filters.actFilter = new Set([2]);
  expect(
    filterSections(masks, data, filters, false)
      .flatMap(section => section.items)
      .every(item => item.whichAct === 0 || item.whichAct === 2)
  ).toBe(true);
  expect(filterSections(data.allItems.Stats, data, filters, false).flatMap(section => section.items)).toHaveLength(4);
  expect(categoryProgress(masks, true, false)).toBe("0.25% / 5%");
  expect(categoryProgress(masks, true, true)).toBe("5%");
});

it("retains journal encounter/completion counts and excludes completed entries from missing results", () => {
  const first = Object.values(NORMALISED_DICT_MAP["Hunter's Journal"].sections.default.act_0)[0];
  if (Array.isArray(first.parsingInfo) || first.parsingInfo.type !== "journal")
    throw new Error("Expected a journal parser");
  const required = first.additionalMeta!.killsRequired!;
  for (const kills of [0, 1, required]) {
    const data = computeDictMapWithSaveData(
      NORMALISED_DICT_MAP,
      {
        playerData: {
          silk: 0,
          permadeathMode: 0,
          EnemyJournalKillData: { list: [{ Name: first.parsingInfo.internalId, Record: { Kills: kills } }] },
        },
      },
      false
    );
    const category = data.allItems["Hunter's Journal"];
    const visible = filterSections(category, data, defaultFilters(), false).flatMap(section => section.items);
    expect(visible.some(item => item.name === first.name)).toBe(kills < required);
    expect(category.saveMeta?.journalMeta?.encountered).toBe(kills > 0 ? 1 : 0);
    expect(category.saveMeta?.journalMeta?.completed).toBe(kills >= required ? 1 : 0);
    if (kills === 1)
      expect(categoryProgress(category, false, false)).toBe(`0 / ${category.totalCount} (+1 Encountered)`);
  }
});

it("keeps the last selected act and formats all game modes and zero-valued stats", () => {
  const acts = new Set([2] as const);
  expect(toggleActInFilter(acts, 2)).toBe(acts);
  const item = (name: string, value: unknown) => ({ name, saveMeta: { value } }) as NormalizedItem;
  for (const [value, expected] of [
    [0, "Classic"],
    [1, "Steel Soul"],
    [2, "Steel Soul (Dead)"],
    ["On", "Steel Soul"],
    ["Dead", "Steel Soul (Dead)"],
  ])
    expect(statValue(item("Game Mode", value))).toBe(expected);
  expect(statValue(item("Game Mode", "other"))).toBe("Steel Soul (Bugged)");
  expect(statValue(item("Playtime", 3661))).toBe("01h 01m 01s");
  expect(statValue(item("Rosaries", 0))).toBe("0");
});
