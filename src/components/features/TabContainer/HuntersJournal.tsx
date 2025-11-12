import type { ReactElement } from "react";
import { lazy, Suspense } from "react";
import type { TabContentProps } from "./types";
import type { NormalizedItem } from "@/dictionary";
import { getHoverBlurClassNames } from "@/utils";

import { CategoryHeader, StatusBar, EmptyState } from "./shared";

const Table = lazy(() =>
  import("@/components/ui").then(module => ({ default: module.Table }))
) as typeof import("@/components/ui").Table;
const MapButton = lazy(() => import("@/components/ui").then(module => ({ default: module.MapButton })));
const LazyImage = lazy(() => import("@/components/ui").then(module => ({ default: module.LazyImage })));

export function HuntersJournalContent({
  tabLabel,
  showSpoilers,
  showMissingOnly,
  inShowEverythingMode,
  actFilter,
  computedData,
  onTabFilterChange,
}: TabContentProps): ReactElement {
  if (!computedData) {
    return <div className="text-white text-center">No "Journal" data available.</div>;
  }

  const { category, hasVisibleItems, sectionEntries } = computedData;

  if (!category) {
    return <div className="text-white text-center">Category "Hunter's Journal" not found.</div>;
  }

  const items = sectionEntries.flatMap(([, section]) => section.items);

  const table = (
    <Table<NormalizedItem>
      isFixedLayout={true}
      tableData={items}
      enableVirtualization={items.length > 100}
      rowClassName="border-b border-gray-700 last:border-none group bg-gray-800/30 hover:bg-gray-700/40 transition-colors"
      rowTitle={(item: NormalizedItem) => {
        if (item.additionalMeta?.completesEntries && item.additionalMeta.completesEntries.length > 0) {
          return `This entry also completes: ${item.additionalMeta.completesEntries.join(", ")}`;
        } else if (item.additionalMeta?.completedByEntry) {
          return `This entry is also completed by completing ${item.additionalMeta.completedByEntry}`;
        }
        return undefined;
      }}
      columns={[
        {
          width: "128px",
          cellClassName: "text-center align-middle ml-4",
          renderCell: (item: NormalizedItem) => {
            if (!item.additionalMeta?.imageAsset) return null;
            const killsAchieved = item.saveMeta?.journalMeta?.killsAchieved ?? 0;
            const killsRequired = item.additionalMeta?.killsRequired ?? 0;
            const isCompleted = item.saveMeta?.journalMeta?.hasBeenCompleted ?? false;
            const isInProgress = item.saveMeta?.journalMeta?.hasBeenEncountered && !isCompleted;
            const shouldBlur = !item.saveMeta?.unlocked && !showSpoilers;

            return (
              <div
                className={`relative w-12 h-12 mx-auto ${getHoverBlurClassNames({ shouldBlur, onGroupHover: true })}`}
              >
                <LazyImage
                  src={item.additionalMeta.imageAsset}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
                {isCompleted && (
                  <LazyImage
                    src="journal/Completed_Entry_Border.png"
                    alt="Completed Entry Ring"
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                  />
                )}
                {isInProgress && (
                  <span className="absolute bottom-0 right-0 bg-yellow-500 text-gray-800 border-yellow-400/30 text-[8px] font-bold px-1 rounded-tl rounded-br leading-tight">
                    {killsAchieved} / {killsRequired}
                  </span>
                )}
              </div>
            );
          },
        },
        {
          width: "220px",
          header: "Name",
          cellClassName: (item: NormalizedItem) =>
            `${getHoverBlurClassNames({ shouldBlur: !item.saveMeta?.unlocked && !showSpoilers })}`,
          renderCell: (item: NormalizedItem) => item.name,
        },
        ...(!inShowEverythingMode
          ? [
              {
                width: "130px",
                header: "Kills Achieved",
                headerClassName: "px-2 py-3 text-center text-gray-300 font-medium",
                cellClassName: (item: NormalizedItem) =>
                  `text-center ${getHoverBlurClassNames({ shouldBlur: !item.saveMeta?.unlocked && !showSpoilers })}`,
                renderCell: (item: NormalizedItem) => item.saveMeta?.journalMeta?.killsAchieved ?? 0,
              },
            ]
          : []),
        {
          width: "130px",
          header: "Kills Required",
          headerClassName: "px-2 py-3 text-center text-gray-300 font-medium",
          cellClassName: (item: NormalizedItem) =>
            `text-center ${getHoverBlurClassNames({ shouldBlur: !item.saveMeta?.unlocked && !showSpoilers })}`,
          renderCell: (item: NormalizedItem) => item.additionalMeta?.killsRequired ?? "N/A",
        },
        {
          width: "64px",
          cellClassName: (item: NormalizedItem) =>
            `text-center ${getHoverBlurClassNames({ shouldBlur: !item.saveMeta?.unlocked && !showSpoilers })}`,
          renderCell: (item: NormalizedItem) => {
            const fullName = `${tabLabel || category.name} · ${item.name}`;
            return <MapButton mapLink={item.mapLink} titleName={fullName} />;
          },
        },
      ]}
    />
  );

  return (
    <>
      <CategoryHeader title={tabLabel || category.name} description={category.description} />

      <StatusBar
        inShowEverythingMode={inShowEverythingMode}
        tabLabel={tabLabel}
        hasVisibleItems={hasVisibleItems}
        hasMultipleSections={false}
        showMissingOnly={showMissingOnly}
        showSpoilers={showSpoilers}
        actFilter={actFilter}
        onTabFilterChange={onTabFilterChange}
      />

      {!hasVisibleItems && <EmptyState />}

      {hasVisibleItems && (
        <div className="bg-gray-900/50 border-2 border-gray-600/30 rounded-b-lg border-t-0 overflow-hidden">
          <Suspense fallback={<div className="text-center py-4 text-gray-400">Loading...</div>}>{table}</Suspense>
        </div>
      )}
    </>
  );
}
