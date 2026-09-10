import type { ReactNode } from "react";
import { TAB_GROUPS, GROUP_LABELS, type TabId } from "./categories";
import type { DictMapWithSaveData } from "@/dictionary";
import { categoryProgress } from "@/utils/collection";

export function CategoryNavigation({
  activeTab,
  onSelect,
  data,
  browse,
  filters,
}: {
  activeTab: TabId;
  onSelect: (tab: TabId) => void;
  data: DictMapWithSaveData | null;
  browse: boolean;
  filters: ReactNode;
}) {
  return (
    <nav aria-label="Categories">
      <div className="category-filter-row">{filters}</div>
      {Object.entries(TAB_GROUPS).map(([group, tabs]) => (
        <div key={group} className={`category-group category-group-${group}`}>
          <span className="category-corner" aria-hidden="true" />
          <div className="category-header">
            <h2>{GROUP_LABELS[group as keyof typeof GROUP_LABELS]}</h2>
          </div>
          <fieldset className="categories">
            <legend className="sr-only">{GROUP_LABELS[group as keyof typeof GROUP_LABELS]}</legend>
            {tabs.map(tab => {
              const category = data?.allItems[tab.tabId];
              return (
                <button
                  type="button"
                  key={tab.tabId}
                  disabled={!data}
                  aria-label={`Switch to ${tab.tabId} tab`}
                  aria-pressed={activeTab === tab.tabId}
                  title={Object.keys(category?.sections ?? {}).join(", ")}
                  onClick={() => onSelect(tab.tabId)}
                >
                  {tab.tabId}
                  {category && (
                    <small
                      className={
                        tab.hasPercentProgression && category.totalPercent > 0 ? "completion-percentage" : undefined
                      }
                    >
                      {categoryProgress(category, tab.hasPercentProgression, browse)}
                    </small>
                  )}
                </button>
              );
            })}
          </fieldset>
        </div>
      ))}
    </nav>
  );
}
