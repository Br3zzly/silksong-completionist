import { useState, useEffect, useMemo, useRef, type CSSProperties } from "react";
import { useSaveFile } from "@/hooks/useSaveFile";
import { useFileDropZone } from "@/hooks/useFileDropZone";
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
  const dropZone = useFileDropZone(save.handlers.handleFile);
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
      <main
        {...dropZone.handlers}
        data-drag-active={dropZone.active}
        style={{ "--save-drop-hint-top": `${dropZone.hintTop}px` } as CSSProperties}
      >
        <div className="panel-frame" aria-hidden="true">
          <span className="panel-corner panel-corner-top-left" />
          <span className="panel-corner panel-corner-top-right" />
          <span className="panel-corner panel-corner-bottom-left" />
          <span className="panel-corner panel-corner-bottom-right" />
        </div>
        <div className="save-drop-overlay" aria-hidden="true">
          <div className="save-drop-hint">
            <span className="save-drop-orb" />
            <span>Drop save file</span>
          </div>
        </div>
        <span className="sr-only" role="status">
          {dropZone.active ? "Drop save file anywhere in this panel" : ""}
        </span>
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
            <CategoryNavigation
              activeTab={activeTab}
              onSelect={tab => setActiveTab(tab === activeTab ? "Stats" : tab)}
              data={data}
              browse={browse}
              filters={<Filters value={globalFilters} onChange={changeGlobal} browse={browse} />}
            />
            <section ref={contentRef} aria-label="Category content">
              {activeTab !== "Stats" && (
                <>
                  <hr className="category-content-divider" aria-hidden="true" />
                  <CategoryContent name={activeTab} data={data} filters={globalFilters} browse={browse} />
                </>
              )}
            </section>
          </>
        )}
        {!browse && save.state.isSaveFileDecrypted && !hasSave && (
          <p>This save cannot be used to calculate Silksong progress. You can still edit its JSON.</p>
        )}
      </main>
      <footer className="site-footer">
        <div className="footer-credit">
          <span className="footer-credit-label">Created by</span>
          <a className="footer-author" href={footerConfig.author.url}>
            {footerConfig.author.name}
          </a>
        </div>
        <div className="footer-credit">
          <span className="footer-credit-label">With help from</span>
          <div className="footer-contributors">
            {footerConfig.contributors.map(person => (
              <a key={person.url} href={person.url}>
                {person.name}
              </a>
            ))}
          </div>
        </div>
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
      </footer>
      <a className="back-to-top" href="#top" aria-label="Back to top" title="Back to top">
        <img src={backToTopArrow} alt="" width={44} height={44} />
      </a>
    </>
  );
}
