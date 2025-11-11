import { isItemUnlockedInPlayerSave, isItemInCurrentGameMode } from "@/dictionary/parsers";
import type {
  NormalisedDictMap,
  NormalizedCategory,
  NormalizedSection,
  DictMapWithSaveData,
  ItemPath,
} from "@/dictionary/types";

export function computeDictMapWithSaveData(
  normalisedDict: NormalisedDictMap,
  parsedJson: unknown,
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

  // Filter by given save file's current game mode first, then track missing/completed items
  let totalCompletedPercent = 0;
  const allItemsFilteredByGameMode: NormalisedDictMap = {};
  const missingItemPaths: ItemPath[] = [];
  const completedItemPaths: ItemPath[] = [];

  for (const [categoryName, category] of Object.entries(normalisedDict)) {
    const categoryFilteredByGameMode: NormalizedCategory = {
      name: category.name,
      description: category.description,
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
          if (!isItemInCurrentGameMode(item, parsedJson)) {
            continue; // Skip items not in current game mode
          }

          const { unlocked, returnValue } = isItemUnlockedInPlayerSave(item.parsingInfo, parsedJson);
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
                      hasBeenEncountered: isJournalEntry ? killsAchieved > 0 : undefined,
                      hasBeenCompleted: isJournalEntry ? isJournalEntryComplete : undefined,
                    },
                  }
                : {}),
            },
          };

          sectionFilteredByGameMode[actKey][itemName] = itemWithSaveData;
          sectionFilteredByGameMode.totalCount++;
          sectionFilteredByGameMode.totalPercent += item.completionPercent ?? 0;

          const itemPath: ItemPath = `${categoryName}.${sectionName}.${actKey}.${itemName}`;

          if (!unlocked || (isJournalEntry && !isJournalEntryComplete)) {
            missingItemPaths.push(itemPath);
            continue;
          }

          completedItemPaths.push(itemPath);
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

export function getActFilterText(
  actFilter?: Set<1 | 2 | 3>,
  { returnEmpty = false }: { returnEmpty?: boolean } = {}
): string {
  if (returnEmpty) return "";

  if (!actFilter || actFilter.size === 0) {
    return "from zero ⚠️ Acts";
  } else if (actFilter.size === 3) {
    return "from all Acts";
  } else {
    const acts = Array.from(actFilter)
      .sort()
      .map(act => `Act ${["I", "II", "III"][act - 1]}`);
    return `from ${acts.join(", ")}`;
  }
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
