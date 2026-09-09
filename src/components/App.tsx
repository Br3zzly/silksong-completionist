import { useState, useEffect, useMemo, useRef } from "react";
import { useSaveFile } from "@/hooks/useSaveFile";
import { NORMALISED_DICT_MAP } from "@/dictionary";
import { computeDictMapWithSaveData } from "@/utils/data";
import { formatPercent } from "@/utils/general";
import { defaultFilters, type FilterChange } from "@/utils/collection";
import type { TabId } from "./categories";
import { footerConfig } from "./links";
import { SaveControls } from "./SaveControls";
import { Filters } from "./Filters";
import { CategoryNavigation } from "./CategoryNavigation";
import { CategoryContent } from "./CategoryContent";

export default function App() {
  const save = useSaveFile();
  const [activeTab, setActiveTab] = useState<TabId>("Stats");
  const [browse, setBrowse] = useState(false);
  const [globalFilters, setGlobalFilters] = useState(defaultFilters);
  const contentRef = useRef<HTMLElement>(null);
  const previousTab = useRef(activeTab);
  const hasSave = save.state.isSaveFileDecrypted && !!save.state.saveData;
  const data = useMemo(
    () => (hasSave || browse ? computeDictMapWithSaveData(NORMALISED_DICT_MAP, save.state.saveData, browse) : null),
    [hasSave, browse, save.state.saveData]
  );
  useEffect(() => {
    setBrowse(false);
    setGlobalFilters(defaultFilters());
    setActiveTab("Stats");
  }, [save.state.loadId]);
  useEffect(() => {
    if (previousTab.current === activeTab) return;
    previousTab.current = activeTab;
    const element = contentRef.current;
    if (
      element &&
      (element.getBoundingClientRect().top >= window.innerHeight || element.getBoundingClientRect().bottom <= 0)
    )
      element.scrollIntoView({ block: "start" });
  }, [activeTab]);
  const changeGlobal: FilterChange = (key, value) => setGlobalFilters(previous => ({ ...previous, [key]: value }));
  return (
    <main id="top">
      <h1>Silksong Completionist</h1>
      <SaveControls save={save} />
      <button type="button" aria-pressed={browse} onClick={() => setBrowse(!browse)}>
        {browse ? "Return to save progress" : "Browse all items"}
      </button>
      <Filters value={globalFilters} onChange={changeGlobal} browse={browse} disabled={!data} />
      {data && !browse && (
        <p>
          Total completion: <strong>{formatPercent(data.totalCompletedPercent)}</strong>
        </p>
      )}
      <CategoryNavigation
        activeTab={activeTab}
        onSelect={tab => setActiveTab(tab === activeTab ? "Stats" : tab)}
        data={data}
        browse={browse}
      />
      <section ref={contentRef} aria-label="Category content">
        {data && !(browse && activeTab === "Stats") ? (
          <CategoryContent name={activeTab} data={data} filters={globalFilters} browse={browse} />
        ) : (
          <p>
            {save.state.isSaveFileDecrypted && !hasSave && !browse
              ? "This save cannot be used to calculate Silksong progress. You can still edit its JSON."
              : browse
                ? "Choose a category to browse."
                : "Load a save file or browse all items."}
          </p>
        )}
      </section>
      <footer>
        <a href="#top">Back to top</a>
        {footerConfig.links.map(link => (
          <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
        <a
          href="https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Silksong
        </a>
        <span>
          By <a href={footerConfig.author.url}>{footerConfig.author.name}</a>, with{" "}
          {footerConfig.contributors.map((person, i) => (
            <span key={person.url}>
              {i > 0 && ", "}
              <a href={person.url}>{person.name}</a>
            </span>
          ))}
        </span>
      </footer>
    </main>
  );
}
