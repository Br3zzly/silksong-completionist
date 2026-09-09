import { TAB_GROUPS, GROUP_LABELS, type TabId } from "./categories";
import type { DictMapWithSaveData } from "@/dictionary";
import { categoryProgress } from "@/utils/collection";
import { LazyImage } from "./ui/LazyImage";

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
      <button type="button" aria-pressed={activeTab === "Stats"} onClick={() => onSelect("Stats")}>
        Overview
      </button>
      {Object.entries(TAB_GROUPS).map(([group, tabs]) => (
        <fieldset key={group} className="categories">
          <legend>{GROUP_LABELS[group as keyof typeof GROUP_LABELS]}</legend>
          {tabs.map(tab => {
            const category = data?.allItems[tab.tabId];
            const quill =
              tab.tabId === "Mapping Supplies"
                ? Object.values(category?.sections.Quills?.act_1 ?? {})[0]?.saveMeta?.value
                : undefined;
            const quillName = typeof quill === "number" ? ["", "White", "Red", "Purple"][quill] : undefined;
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
                {category && <small>{categoryProgress(category, tab.hasPercentProgression, browse)}</small>}
                {quillName && <LazyImage src={`quills/MapWith${quillName}Quill.png`} alt={`${quillName} Quill`} />}
              </button>
            );
          })}
        </fieldset>
      ))}
    </nav>
  );
}
