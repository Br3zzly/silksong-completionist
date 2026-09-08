import { useState, useEffect } from "react";
import { FiltersBar } from "./FiltersBar";
import { FiltersBarToggler } from "./FiltersBarToggler";

import type { TabFilters } from "../TabContainer/types";

export type ActFilter = Set<1 | 2 | 3>;

interface FilterControlsProps {
  hasUploadedSaveFile: boolean;
  hasUploadedSaveData: boolean;
  globalFilters: Required<TabFilters>;
  inShowEverythingMode: boolean;
  onGlobalFilterChange: (filterType: string, value: boolean | ActFilter) => void;
  onShowEverythingToggle: () => void;
}

export function FilterControls({
  hasUploadedSaveFile,
  hasUploadedSaveData,
  globalFilters,
  inShowEverythingMode,
  onGlobalFilterChange,
  onShowEverythingToggle,
}: FilterControlsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (hasUploadedSaveFile) {
      setIsExpanded(false);
    }
  }, [hasUploadedSaveFile]);

  return (
    <div className="mt-0">
      <FiltersBar
        hasUploadedSaveFile={hasUploadedSaveFile}
        hasUploadedSaveData={hasUploadedSaveData}
        globalFilters={globalFilters}
        inShowEverythingMode={inShowEverythingMode}
        onGlobalFilterChange={onGlobalFilterChange}
        onShowEverythingToggle={() => {
          if (inShowEverythingMode && !hasUploadedSaveData) {
            setIsExpanded(false);
          }
          onShowEverythingToggle();
        }}
        isExpanded={isExpanded}
      />
      <FiltersBarToggler
        isExpanded={isExpanded}
        onToggle={() => setIsExpanded(!isExpanded)}
        hasUploadedSaveFile={hasUploadedSaveFile}
        inShowEverythingMode={inShowEverythingMode}
      />
    </div>
  );
}
