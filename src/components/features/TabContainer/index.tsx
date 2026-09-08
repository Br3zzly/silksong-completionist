import { useMemo, useRef, useEffect } from "react";
import type { TabContainerProps, TabContentProps, ComputedTabData } from "./types";
import { GenericContent } from "./GenericContent";
import { StatsContent } from "./Stats";
import { HuntersJournalContent } from "./HuntersJournal";
import { BossesContent } from "./Bosses";
import type { TabId } from "@/components/features/TabBar/tabs";
import type { ActFilter } from "@/components/features/FilterControls";
import type { DictMapWithSaveData, NormalizedCategory, NormalizedItem, ItemPath } from "@/dictionary";
import { formatSecondsToHMS } from "@/utils";
import type { StatsItemWithDisplay } from "./types";

import { NoSaveDataAvailable } from "./shared";

function computeTabData(
  category: NormalizedCategory | null,
  tabLabel: TabId,
  effectiveFilters: { showMissingOnly: boolean; showSpoilers: boolean; actFilter: ActFilter },
  inShowEverythingMode: boolean,
  dictMapWithSaveData: DictMapWithSaveData | null
): ComputedTabData {
  if (!category || !dictMapWithSaveData) {
    return {
      category: null,
      hasVisibleItems: false,
      sectionEntries: [],
      sectionsLength: 0,
    };
  }

  const { showMissingOnly, actFilter } = effectiveFilters;

  // If showMissingOnly (and not inShowEverythingMode), only include items in missingItemPaths
  const filterPaths = showMissingOnly && !inShowEverythingMode ? new Set(dictMapWithSaveData.missingItemPaths) : null;

  const sectionEntries = Object.entries(category.sections).map(([sectionName, section]) => {
    const items: NormalizedItem[] = [];

    for (const actKey of ["act_0", "act_1", "act_2", "act_3"] as const) {
      // Skip acts not in the filter
      if (actKey !== "act_0" && !actFilter.has(parseInt(actKey.split("_")[1]) as 1 | 2 | 3)) {
        continue;
      }

      for (const [itemName, item] of Object.entries(section[actKey])) {
        if (filterPaths) {
          const itemPath: ItemPath = `${category.name}.${sectionName}.${actKey}.${itemName}`;
          if (!filterPaths.has(itemPath)) {
            continue;
          }
        }

        items.push(item);
      }
    }

    return [sectionName, { ...section, items }] as [string, typeof section & { items: NormalizedItem[] }];
  });

  const hasVisibleItems = sectionEntries.some(([, section]) => section.items.length > 0);

  const sectionsLength = Object.keys(category.sections).length;

  // Pre-compute stats items with display values
  let statsItems: StatsItemWithDisplay[] | undefined;
  if (tabLabel === "Stats") {
    const statsCategory = dictMapWithSaveData.allItems["Stats"];
    const rawStatsItems = Object.values(statsCategory.sections["default"]["act_0"]);

    statsItems = rawStatsItems.map(item => {
      const rawValue = item.saveMeta?.value as string | number | boolean | undefined;
      let displayValue = "";
      let detailedValue: string | undefined;

      const gameModeMap: Record<number | string, string> = {
        0: "Classic",
        1: "Steel Soul",
        2: "Steel Soul (Dead)",
        On: "Steel Soul",
        Dead: "Steel Soul (Dead)",
        default: "Steel Soul (Bugged)",
      };

      switch (item.name) {
        case "Game Mode":
          displayValue = gameModeMap[rawValue as keyof typeof gameModeMap] ?? gameModeMap["default"];
          break;

        case "Playtime":
          if (typeof rawValue === "number") {
            const totalTime = formatSecondsToHMS(rawValue);
            displayValue = totalTime.replace(/(\d+):(\d+):(\d+)/, "$1h $2m $3s");
          }
          break;

        default:
          if (rawValue !== undefined) {
            displayValue = String(rawValue);
          }
          break;
      }

      return {
        ...item,
        displayValue,
        rawValue,
        detailedValue,
      };
    });
  }

  return {
    category,
    hasVisibleItems,
    sectionEntries,
    sectionsLength,
    statsItems,
  };
}

export function TabContainer(props: TabContainerProps) {
  const {
    activeTab,
    hasUploadedSaveFile,
    hasUploadedSaveData,
    dictMapWithSaveData,
    globalFilters,
    tabFilterMap,
    inShowEverythingMode,
    onTabFilterChange,
  } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const prevActiveTabRef = useRef<TabId | null>(null);

  const effectiveFilters = useMemo(() => {
    const tabSpecificFilters = activeTab ? tabFilterMap.get(activeTab) : undefined;
    return {
      showMissingOnly: tabSpecificFilters?.showMissingOnly ?? globalFilters.showMissingOnly,
      showSpoilers: tabSpecificFilters?.showSpoilers ?? globalFilters.showSpoilers,
      actFilter: tabSpecificFilters?.actFilter ?? globalFilters.actFilter,
    };
  }, [globalFilters, tabFilterMap, activeTab]);

  // Scroll to TabContainer when activeTab changes (only if not in view)
  useEffect(() => {
    if (activeTab && prevActiveTabRef.current !== activeTab && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      // Check if ANY part is visible
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;

      if (!isInView) {
        containerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    prevActiveTabRef.current = activeTab;
  }, [activeTab]);

  const computedData = useMemo(() => {
    const category = dictMapWithSaveData?.allItems[activeTab];
    if (!category || !dictMapWithSaveData) return undefined;
    return computeTabData(category, activeTab, effectiveFilters, inShowEverythingMode, dictMapWithSaveData);
  }, [dictMapWithSaveData, activeTab, effectiveFilters, inShowEverythingMode]);

  if (!activeTab) {
    return null;
  }

  if (
    (!hasUploadedSaveFile && !inShowEverythingMode) ||
    (inShowEverythingMode && activeTab === "Stats") // Don't render the Stats tab when inShowEverythingMode
  ) {
    return <NoSaveDataAvailable variant="NO_SAVE_FILE" />;
  }

  if (!inShowEverythingMode && hasUploadedSaveFile && !hasUploadedSaveData) {
    return <NoSaveDataAvailable variant="CORRUPTED_SAVE_DATA" />;
  }

  const tabContentProps: TabContentProps = {
    tabLabel: activeTab,
    showSpoilers: effectiveFilters.showSpoilers,
    showMissingOnly: effectiveFilters.showMissingOnly,
    inShowEverythingMode,
    actFilter: effectiveFilters.actFilter,
    computedData,
    onTabFilterChange,
  };

  const getTabContent = (activeTab: TabId) => {
    switch (activeTab) {
      case "Stats":
        return <StatsContent {...tabContentProps} tabLabel="At a glance..." />;
      case "Hunter's Journal":
        return <HuntersJournalContent {...tabContentProps} />;
      case "Bosses":
        return <BossesContent {...tabContentProps} />;
      default:
        return <GenericContent {...tabContentProps} />;
    }
  };

  return (
    <div ref={containerRef} className="text-white">
      {getTabContent(activeTab)}
    </div>
  );
}
