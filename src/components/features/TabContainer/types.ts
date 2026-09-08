import type { TabId } from "@/components/features/TabBar/tabs";
import type { ActFilter } from "@/components/features/FilterControls";
import type { DictMapWithSaveData, NormalizedCategory, NormalizedSection, NormalizedItem } from "@/dictionary";

export interface SectionWithItems extends NormalizedSection {
  items: NormalizedItem[]; // Pre-computed items filtered by actFilter
}

export interface StatsItemWithDisplay extends NormalizedItem {
  displayValue: string;
  rawValue: string | number | boolean | undefined;
  detailedValue?: string;
}

export interface TabFilters {
  showSpoilers?: boolean;
  showMissingOnly?: boolean;
  actFilter?: ActFilter;
}

export interface ComputedTabData {
  category: NormalizedCategory | null;
  hasVisibleItems: boolean;
  sectionEntries: [string, SectionWithItems][];
  sectionsLength: number;
  statsItems?: StatsItemWithDisplay[]; // For Stats tab only
}

export interface TabContainerProps {
  activeTab: TabId;
  dictMapWithSaveData: DictMapWithSaveData | null;
  hasUploadedSaveFile: boolean;
  hasUploadedSaveData: boolean;
  inShowEverythingMode: boolean;
  globalFilters: Required<TabFilters>;
  tabFilterMap: Map<TabId, TabFilters>;
  onTabFilterChange: (filterType: string, value: boolean | ActFilter) => void;
}

export interface TabContentProps {
  tabLabel: string;
  showSpoilers: boolean;
  showMissingOnly: boolean;
  inShowEverythingMode: boolean;
  actFilter: ActFilter;
  computedData: ComputedTabData | undefined;
  onTabFilterChange: (filterType: string, value: boolean | ActFilter) => void;
}
