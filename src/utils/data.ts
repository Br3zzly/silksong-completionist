import { createSaveParser, isItemInCurrentGameMode, type ParseResult } from "@/dictionary/parsers";
import type {
  NormalisedDictMap,
  NormalizedItem,
  NormalizedCategory,
  NormalizedSection,
  DictMapWithSaveData,
  ItemPath,
} from "@/dictionary/types";

import type { SilksongSave } from "./saveValidation";

export function computeDictMapWithSaveData(
  normalisedDict: NormalisedDictMap,
  parsedJson: SilksongSave | null,
  inShowEverythingMode: boolean
): DictMapWithSaveData {
  if (inShowEverythingMode) {
    return {
      totalCompletedPercent: 0,
      allItems: normalisedDict,
      missingItemPaths: [] as ItemPath[],
      completedItemPaths: [] as ItemPath[],
    };
  }

  if (!parsedJson) throw new Error("Validated save data is required to compute progress.");
  const parseItem = createSaveParser(parsedJson);
  return computeProgress(normalisedDict, item =>
    isItemInCurrentGameMode(item, parsedJson) ? parseItem(item.parsingInfo) : null
  );
}

export type ManualGameMode = "classic" | "steelSoul";

// Manual tracking has no save to read, so collection comes from the user's ticked item paths.
export function computeDictMapWithManualData(
  normalisedDict: NormalisedDictMap,
  collected: ReadonlySet<ItemPath>,
  gameMode: ManualGameMode
): DictMapWithSaveData {
  const isClassic = gameMode === "classic";
  return computeProgress(normalisedDict, (item, path) => {
    if ((item.onlyFoundInSteelSoulMode && isClassic) || (item.onlyFoundInClassicMode && !isClassic)) return null;
    if (item.name === "Game Mode") return { unlocked: false, returnValue: isClassic ? 0 : 1 };
    const unlocked = collected.has(path);
    const killsRequired = item.additionalMeta?.killsRequired;
    return killsRequired === undefined ? { unlocked } : { unlocked, returnValue: unlocked ? killsRequired : 0 };
  });
}

export const itemPath = (categoryName: string, sectionName: string, actKey: string, itemName: string): ItemPath =>
  `${categoryName}.${sectionName}.${actKey}.${itemName}`;

// Returning null from resolveItem excludes the item, e.g. when it belongs to another game mode.
function computeProgress(
  normalisedDict: NormalisedDictMap,
  resolveItem: (item: NormalizedItem, path: ItemPath) => ParseResult | null
): DictMapWithSaveData {
  // Filter by the current game mode first, then track missing/completed items
  let totalCompletedPercent = 0;
  const allItemsFilteredByGameMode: NormalisedDictMap = {};
  const missingItemPaths: ItemPath[] = [];
  const completedItemPaths: ItemPath[] = [];

  for (const [categoryName, category] of Object.entries(normalisedDict)) {
    const categoryFilteredByGameMode: NormalizedCategory = {
      name: category.name,
      description: category.description,
      descriptionMarkup: category.descriptionMarkup,
      totalPercent: 0,
      totalCount: 0,
      sections: {},
    };

    // Variables for tracking Hunter's Journal category's metadata
    let journalEncountered = 0;
    let journalCompleted = 0;
    const isJournalCategory = categoryName === "Hunter's Journal";

    let categoryCompletedPercent = 0;
    let categoryCompletedCount = 0;

    for (const [sectionName, section] of Object.entries(category.sections)) {
      const sectionFilteredByGameMode: NormalizedSection = {
        name: section.name,
        description: section.description,
        descriptionMarkup: section.descriptionMarkup,
        totalPercent: 0,
        totalCount: 0,
        act_0: {},
        act_1: {},
        act_2: {},
        act_3: {},
      };

      for (const actKey of ["act_0", "act_1", "act_2", "act_3"] as const) {
        for (const [itemName, item] of Object.entries(section[actKey])) {
          const path = itemPath(categoryName, sectionName, actKey, itemName);
          const result = resolveItem(item, path);
          if (!result) continue; // Skip items not in current game mode

          const { unlocked, returnValue } = result;
          const killsAchieved = typeof returnValue === "number" ? returnValue : undefined;

          const isJournalEntry =
            isJournalCategory && killsAchieved !== undefined && item.additionalMeta?.killsRequired !== undefined;

          const isJournalEntryComplete = isJournalEntry && killsAchieved >= (item.additionalMeta?.killsRequired ?? 0);

          if (isJournalEntry) {
            if (killsAchieved > 0) journalEncountered++;
            if (isJournalEntryComplete) journalCompleted++;
          }

          const itemWithSaveData = {
            ...item,
            saveMeta: {
              unlocked,
              value: returnValue,
              ...(isJournalEntry
                ? {
                    journalMeta: {
                      killsAchieved,
                      hasBeenEncountered: killsAchieved > 0,
                      hasBeenCompleted: isJournalEntryComplete,
                    },
                  }
                : {}),
            },
          };

          sectionFilteredByGameMode[actKey][itemName] = itemWithSaveData;
          sectionFilteredByGameMode.totalCount++;
          sectionFilteredByGameMode.totalPercent += item.completionPercent ?? 0;

          if (!unlocked || (isJournalEntry && !isJournalEntryComplete)) {
            missingItemPaths.push(path);
            continue;
          }

          completedItemPaths.push(path);
          categoryCompletedCount++;
          categoryCompletedPercent += item.completionPercent ?? 0;
        }
      }

      if (sectionFilteredByGameMode.totalCount > 0) {
        categoryFilteredByGameMode.sections[sectionName] = sectionFilteredByGameMode;
        categoryFilteredByGameMode.totalCount += sectionFilteredByGameMode.totalCount;
        categoryFilteredByGameMode.totalPercent += sectionFilteredByGameMode.totalPercent;
      }
    }

    if (categoryFilteredByGameMode.totalCount > 0) {
      categoryFilteredByGameMode.saveMeta = {
        completedCount: categoryCompletedCount,
        completedPercent: categoryCompletedPercent,
      };

      if (isJournalCategory) {
        categoryFilteredByGameMode.saveMeta.journalMeta = {
          encountered: journalEncountered,
          completed: journalCompleted,
        };
      }

      allItemsFilteredByGameMode[categoryName] = categoryFilteredByGameMode;

      totalCompletedPercent += categoryCompletedPercent;
    }
  }

  return {
    totalCompletedPercent,
    allItems: allItemsFilteredByGameMode,
    missingItemPaths,
    completedItemPaths,
  };
}

export function toggleActInFilter(actFilter: Set<1 | 2 | 3>, act: 1 | 2 | 3): Set<1 | 2 | 3> {
  // Prevent toggling an act if it's the only one selected
  const shouldNotToggleAct = actFilter.size === 1 && actFilter.has(act);
  if (shouldNotToggleAct) return actFilter;

  const newFilter = new Set(actFilter);
  if (newFilter.has(act)) {
    newFilter.delete(act);
  } else {
    newFilter.add(act);
  }
  return newFilter;
}
