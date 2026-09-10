import { useState, useEffect, useMemo, useRef } from "react";
import { useSaveFile } from "@/hooks/useSaveFile";
import { NORMALISED_DICT_MAP } from "@/dictionary";
import { computeDictMapWithSaveData } from "@/utils/data";
import { defaultFilters, type FilterChange } from "@/utils/collection";
import type { TabId } from "./categories";
import { footerConfig } from "./links";
import { SaveControls } from "./SaveControls";
import { SaveSummary } from "./SaveSummary";
import { Filters } from "./Filters";
import { CategoryNavigation } from "./CategoryNavigation";
import { CategoryContent } from "./CategoryContent";
import { MenuBackground } from "./MenuBackground";
import { MenuButton } from "./ui/MenuButton";
import backToTopArrow from "@/assets/ui/back-to-top.png";
import titleArtwork from "@/assets/branding/silksong-completionist-title.webp";

export default function App() {
  const save = useSaveFile();
  const [activeTab, setActiveTab] = useState<TabId>("Stats");
  const [browse, setBrowse] = useState(false);
  const [globalFilters, setGlobalFilters] = useState(defaultFilters);
  const contentRef = useRef<HTMLElement>(null);
  const previousTab = useRef(activeTab);
  const hasSave = save.state.isSaveFileDecrypted && !!save.state.saveData;
  const savedData = useMemo(
    () => (hasSave ? computeDictMapWithSaveData(NORMALISED_DICT_MAP, save.state.saveData, false) : null),
    [hasSave, save.state.saveData]
  );
  const browseData = useMemo(
    () => (browse ? computeDictMapWithSaveData(NORMALISED_DICT_MAP, null, true) : null),
    [browse]
  );
  const data = browse ? browseData : savedData;
  useEffect(() => {
    setBrowse(false);
    setGlobalFilters(defaultFilters());
    // Loading resets the selected category without navigating to its content.
    previousTab.current = "Stats";
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
    <>
      <MenuBackground />
      <header id="top" className="site-header">
        <h1 className="site-title">
          <img
            className="site-title-art"
            src={titleArtwork}
            alt="Silksong Completionist"
            width={2120}
            height={1180}
            fetchPriority="high"
          />
        </h1>
      </header>
      <main>
        <div className="panel-frame" aria-hidden="true">
          <span className="panel-corner panel-corner-top-left" />
          <span className="panel-corner panel-corner-top-right" />
          <span className="panel-corner panel-corner-bottom-left" />
          <span className="panel-corner panel-corner-bottom-right" />
        </div>
        <div className="save-menu-layout">
          <div className="save-menu-controls">
            <SaveControls save={save}>
              <MenuButton type="button" aria-pressed={browse} onClick={() => setBrowse(!browse)}>
                {browse ? "Return to save progress" : "Browse all items"}
              </MenuButton>
            </SaveControls>
          </div>
          <SaveSummary data={savedData} loadId={save.state.loadId} />
        </div>
        {data && (
          <>
            <Filters value={globalFilters} onChange={changeGlobal} browse={browse} />
            <CategoryNavigation
              activeTab={activeTab}
              onSelect={tab => setActiveTab(tab === activeTab ? "Stats" : tab)}
              data={data}
              browse={browse}
            />
            <section ref={contentRef} aria-label="Category content">
              {activeTab !== "Stats" && (
                <CategoryContent name={activeTab} data={data} filters={globalFilters} browse={browse} />
              )}
            </section>
          </>
        )}
        {!browse && save.state.isSaveFileDecrypted && !hasSave && (
          <p>This save cannot be used to calculate Silksong progress. You can still edit its JSON.</p>
        )}
      </main>
      <footer className="site-footer">
        <nav className="footer-links" aria-label="Footer links">
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
        </nav>
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
      <a className="back-to-top" href="#top" aria-label="Back to top" title="Back to top">
        <img src={backToTopArrow} alt="" width={44} height={44} />
      </a>
    </>
  );
}
