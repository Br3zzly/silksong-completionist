import { TextWithEmojiButton, PillButton, Separator, CustomScrollbars } from "@/components/ui";
import { cn, toggleActInFilter } from "@/utils";
import type { ActFilter } from "./index";

function ShowEverythingButton({
  inShowEverythingMode,
  onClick,
}: {
  inShowEverythingMode: boolean;
  onClick: () => void;
}) {
  return (
    <TextWithEmojiButton
      text={inShowEverythingMode ? "Nope, take me back!" : "Show me, everything!"}
      emoji={inShowEverythingMode ? "🐵" : "🙈"}
      emojiClassName={inShowEverythingMode ? "-mt-0.5" : ""}
      onClick={onClick}
    />
  );
}

function ShowMissingOnlyButton({
  showMissingOnly,
  onClick,
  disabled = false,
}: {
  showMissingOnly: boolean;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <TextWithEmojiButton
      text={showMissingOnly ? "Showing missing items" : "Showing all items!"}
      emoji={showMissingOnly ? "🔒" : "🔓"}
      emojiClassName="-mt-0.5"
      onClick={onClick}
      disabled={disabled}
    />
  );
}

function SpoilersButton({
  showSpoilers,
  onClick,
  disabled = false,
}: {
  showSpoilers: boolean;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <TextWithEmojiButton
      text={showSpoilers ? "Spoilers are shown!" : "Spoilers are blurred"}
      emoji={showSpoilers ? "😮" : "🤫"}
      emojiPosition="left"
      onClick={onClick}
      disabled={disabled}
    />
  );
}

interface FiltersBarProps {
  hasUploadedSaveFile: boolean;
  hasUploadedSaveData: boolean;
  globalFilters: {
    showSpoilers: boolean;
    showMissingOnly: boolean;
    actFilter: ActFilter;
  };
  inShowEverythingMode: boolean;
  onGlobalFilterChange: (filterType: string, value: boolean | ActFilter) => void;
  onShowEverythingToggle: () => void;
  isExpanded: boolean;
}

export function FiltersBar({
  hasUploadedSaveFile,
  hasUploadedSaveData,
  globalFilters,
  inShowEverythingMode,
  onGlobalFilterChange,
  onShowEverythingToggle,
  isExpanded,
}: FiltersBarProps) {
  const { showSpoilers, showMissingOnly, actFilter } = globalFilters;
  const actOptions = [
    { value: 1 as const, label: "Act I" },
    { value: 2 as const, label: "Act II" },
    { value: 3 as const, label: "Act III" },
  ];

  const filtersDisabled = (!hasUploadedSaveFile || !hasUploadedSaveData) && !inShowEverythingMode;

  const toggleAct = (act: 1 | 2 | 3) => {
    if (filtersDisabled) return;
    const newFilter = toggleActInFilter(actFilter, act);
    onGlobalFilterChange("actFilter", newFilter);
  };

  return (
    <div
      className={cn(
        "transition-all duration-300 ease-in-out overflow-hidden",
        isExpanded ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
      )}
    >
      <div className="bg-gradient-to-br from-gray-800/40 to-gray-800/20 border-2 border-gray-600/30 border-t-0">
        <CustomScrollbars containerHeight={200}>
          <div className="p-8 flex items-center justify-between gap-6 text-sm min-w-[720px]">
            <div className="w-[200px] flex justify-end">
              {hasUploadedSaveFile ? (
                <ShowMissingOnlyButton
                  showMissingOnly={showMissingOnly}
                  onClick={() => onGlobalFilterChange("showMissingOnly", !showMissingOnly)}
                  disabled={filtersDisabled}
                />
              ) : (
                <ShowEverythingButton inShowEverythingMode={inShowEverythingMode} onClick={onShowEverythingToggle} />
              )}
            </div>

            <Separator orientation="vertical" />

            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="flex items-center gap-1.5">
                {actOptions.map(option => {
                  const isSelected = actFilter.has(option.value);
                  return (
                    <PillButton
                      key={option.label}
                      onClick={() => toggleAct(option.value)}
                      disabled={filtersDisabled}
                      selected={isSelected}
                      aria-label={`Toggle ${option.label}`}
                    >
                      {option.label}
                    </PillButton>
                  );
                })}
              </div>
            </div>

            <Separator orientation="vertical" />

            <div className="w-[200px] flex justify-start">
              <SpoilersButton
                showSpoilers={showSpoilers}
                onClick={() => onGlobalFilterChange("showSpoilers", !showSpoilers)}
                disabled={filtersDisabled}
              />
            </div>
          </div>
        </CustomScrollbars>
      </div>
    </div>
  );
}
