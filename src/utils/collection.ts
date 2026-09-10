import type { DictMapWithSaveData, NormalizedCategory, NormalizedItem, NormalizedSection } from "@/dictionary";
import { formatPercent, formatSecondsToHMS } from "./general";

export type Act = 1 | 2 | 3;
export interface Filters {
  showMissingOnly: boolean;
  showSpoilers: boolean;
  actFilter: Set<Act>;
}
export const defaultFilters = (): Filters => ({
  showMissingOnly: true,
  showSpoilers: false,
  actFilter: new Set([1, 2, 3]),
});
export type FilterChange = <K extends keyof Filters>(key: K, value: Filters[K]) => void;
export type SectionWithItems = NormalizedSection & { items: NormalizedItem[] };

export function filterSections(
  category: NormalizedCategory,
  data: DictMapWithSaveData,
  filters: Filters,
  browse: boolean
): SectionWithItems[] {
  const missing = filters.showMissingOnly && !browse ? new Set(data.missingItemPaths) : null;
  return Object.entries(category.sections).map(([sectionName, section]) => ({
    ...section,
    items: ([0, 1, 2, 3] as const).flatMap(act => {
      if (act !== 0 && !filters.actFilter.has(act)) return [];
      return Object.entries(section[`act_${act}`])
        .filter(([name]) => !missing || missing.has(`${category.name}.${sectionName}.act_${act}.${name}`))
        .map(([, item]) => item);
    }),
  }));
}

export function categoryProgress(category: NormalizedCategory, usePercent: boolean, browse: boolean): string {
  if (category.name === "Caches & Secrets") return "Work in progress";
  const journal = category.saveMeta?.journalMeta;
  if (journal && !browse)
    return (
      `${journal.completed} / ${category.totalCount}` +
      (journal.encountered !== journal.completed ? ` (+${journal.encountered - journal.completed} Encountered)` : "")
    );
  const percent = usePercent && category.totalPercent > 0;
  const total = percent ? category.totalPercent : category.totalCount;
  const current = percent ? (category.saveMeta?.completedPercent ?? 0) : (category.saveMeta?.completedCount ?? 0);
  const format = percent ? formatPercent : String;
  return browse ? format(total) : `${format(current)} / ${format(total)}`;
}

const GAME_MODES: Record<string, string> = {
  0: "Classic",
  1: "Steel Soul",
  2: "Steel Soul (Dead)",
  On: "Steel Soul",
  Dead: "Steel Soul (Dead)",
};
export function statValue(item: NormalizedItem): string {
  const value = item.saveMeta?.value;
  if (item.name === "Game Mode") return GAME_MODES[String(value)] ?? "Steel Soul (Bugged)";
  if (item.name === "Playtime")
    return typeof value === "number" ? formatSecondsToHMS(value).replace(/(\d+):(\d+):(\d+)/, "$1h $2m $3s") : "";
  return value === undefined ? "" : String(value);
}
