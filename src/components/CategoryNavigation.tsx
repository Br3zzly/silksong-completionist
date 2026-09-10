import { TAB_GROUPS, GROUP_LABELS, type TabId } from "./categories";
import type { DictMapWithSaveData } from "@/dictionary";
import { categoryProgress } from "@/utils/collection";

export function CategoryNavigation({
  activeTab,
  onSelect,
  data,
  browse,
}: {
  activeTab: TabId;
  onSelect: (tab: TabId) => void;
  data: DictMapWithSaveData | null;
  browse: boolean;
}) {
  return (
    <nav aria-label="Categories">
      {Object.entries(TAB_GROUPS).map(([group, tabs]) => (
        <fieldset key={group} className="categories">
          <legend>{GROUP_LABELS[group as keyof typeof GROUP_LABELS]}</legend>
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
      ))}
    </nav>
  );
}
