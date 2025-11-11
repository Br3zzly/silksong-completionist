import { useState, type ReactElement, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import type { TabId } from "./tabs";
import { TabProgress } from "./TabProgress";
import type { TabInfo } from "./index";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils";

interface TabButtonProps {
  tab: {
    tabId: TabId;
    hasProgress?: boolean;
    isPercentProgression?: boolean;
  };
  isActive: boolean;
  onSelect: (tab: TabId) => void;
  tabInfo?: TabInfo;
  hasUploadedSaveData: boolean;
  inShowEverythingMode: boolean;
  fullWidth?: boolean;
}

export function TabButton({
  tab,
  isActive,
  onSelect,
  tabInfo,
  hasUploadedSaveData,
  inShowEverythingMode,
  fullWidth = false,
}: TabButtonProps): ReactElement {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const isDisabled = !hasUploadedSaveData && !inShowEverythingMode;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setMousePos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePos(null);
  };

  const tabButtonStyles = cn(
    "w-full py-2 font-semibold border transition-all duration-300",
    tabInfo?.progress ? "rounded-t rounded-b-none border-b-0" : "rounded",
    isDisabled && "bg-gray-700/30 text-gray-400 border-gray-600/30 opacity-50 cursor-not-allowed",
    isActive &&
      !isDisabled &&
      "bg-blue-500/20 text-blue-300 border-blue-400/40 shadow-sm shadow-blue-500/10 cursor-pointer",
    !isActive &&
      !isDisabled &&
      "bg-gray-700/30 text-gray-400 border-gray-600/30 group-hover:border-gray-500/50 group-hover:text-gray-300 cursor-pointer"
  );

  return (
    <div
      className={cn("flex flex-col relative", fullWidth ? "flex-1 min-w-[120px]" : "min-w-[120px]")}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Button
        onClick={() => onSelect(tab.tabId)}
        disabled={isDisabled}
        className={tabButtonStyles}
        aria-pressed={isActive}
        aria-label={`Switch to ${tab.tabId} tab`}
      >
        {tab.tabId}
      </Button>
      {tabInfo?.progress && <TabProgress inShowEverythingMode={inShowEverythingMode} progress={tabInfo.progress} />}
      {tabInfo?.sectionNames &&
        isHovering &&
        mousePos &&
        createPortal(
          <div
            className="fixed z-50 pointer-events-none"
            style={{
              left: `${mousePos.x - 0.5}px`,
              top: `${mousePos.y + 17.5}px`,
            }}
          >
            <div className="bg-gray-900/95 backdrop-blur-sm border border-gray-600 rounded shadow-xl px-3 py-2 w-max min-w-[140px] max-w-[250px]">
              <ul className="text-xs text-gray-300 space-y-1">
                {tabInfo.sectionNames.map(name => (
                  <li key={name} className="flex items-center gap-1.5 whitespace-nowrap">
                    <span className="text-blue-400">•</span>
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
