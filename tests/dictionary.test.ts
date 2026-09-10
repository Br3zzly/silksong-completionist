import { expect, it } from "vitest";
import { ALL_TRACKED_CATEGORIES, NORMALISED_DICT_MAP } from "@/dictionary";
import { computeDictMapWithSaveData } from "@/utils/data";
import { getAssetUrl } from "@/utils/assets";

it("preserves category counts, unique visible rows, and all item images outside the deferred WIP category", () => {
  expect(ALL_TRACKED_CATEGORIES).toHaveLength(26);
  for (const category of ALL_TRACKED_CATEGORIES) {
    if (category.name === "Caches & Secrets") continue;
    const normalized = NORMALISED_DICT_MAP[category.name];
    expect(normalized.totalCount).toBe(category.sections.reduce((sum, section) => sum + section.items.length, 0));
    const keys = new Set<string>();
    for (const section of category.sections)
      for (const item of section.items) {
        const key = JSON.stringify([section.name, item.whichAct, item.name]);
        expect(keys.has(key), key).toBe(false);
        keys.add(key);
        if (item.additionalMeta?.imageAsset) expect(getAssetUrl(item.additionalMeta.imageAsset)).not.toBe("");
      }
  }
  for (const name of ["WhiteQuill", "RedQuill", "PurpleQuill"])
    expect(getAssetUrl("quills/" + name + ".png")).not.toBe("");
});

it.each([0, 1])("keeps completion weights at 100%% for game mode %i", permadeathMode => {
  const result = computeDictMapWithSaveData(NORMALISED_DICT_MAP, { playerData: { silk: 0, permadeathMode } }, false);
  expect(Object.values(result.allItems).reduce((sum, category) => sum + category.totalPercent, 0)).toBeCloseTo(100);
  expect(result.totalCompletedPercent).toBe(0);
});

it("show-everything works without a save and never mutates the dictionary", () => {
  const before = JSON.stringify(NORMALISED_DICT_MAP);
  expect(computeDictMapWithSaveData(NORMALISED_DICT_MAP, null, true).allItems).toBe(NORMALISED_DICT_MAP);
  computeDictMapWithSaveData(NORMALISED_DICT_MAP, { playerData: { silk: 0, permadeathMode: 0 } }, false);
  expect(JSON.stringify(NORMALISED_DICT_MAP)).toBe(before);
});
