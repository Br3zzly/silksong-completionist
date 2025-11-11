import type { ReactElement } from "react";
import { type TabContentProps } from "./types";
import type { NormalizedItem } from "@/dictionary";
import { getHoverBlurClassNames } from "@/utils";

import { CategoryHeader, StatusBar, EmptyState } from "./shared";
import { Table, MapButton, LazyImage } from "@/components/ui";

export function BossesContent({
  tabLabel,
  showSpoilers,
  showMissingOnly,
  inShowEverythingMode,
  actFilter,
  computedData,
  onTabFilterChange,
}: TabContentProps): ReactElement {
  if (!computedData) {
    return <div className="text-white text-center">No "Bosses" data available.</div>;
  }

  const { category, hasVisibleItems, sectionEntries } = computedData;

  if (!category) {
    return <div className="text-white text-center">Category "Bosses" not found.</div>;
  }

  const items = sectionEntries.flatMap(([, section]) => section.items);

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
          <Table<NormalizedItem>
            isFixedLayout={true}
            tableData={items}
            enableVirtualization={items.length > 100}
            rowClassName="border-b border-gray-700 last:border-none group bg-gray-800/30 hover:bg-gray-700/40 transition-colors"
            columns={[
              {
                width: "128px",
                cellClassName: "text-center align-middle ml-4",
                renderCell: (item: NormalizedItem) => {
                  if (!item.additionalMeta?.imageAsset) return null;
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
                      {item.saveMeta?.unlocked && (
                        <LazyImage
                          src="journal/Completed_Entry_Border.png"
                          alt="Completed Entry Ring"
                          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                        />
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
              {
                width: "260px",
                header: "Details",
                cellClassName: (item: NormalizedItem) =>
                  `relative min-w-[140px] max-w-[260px] ${getHoverBlurClassNames({ shouldBlur: !item.saveMeta?.unlocked && !showSpoilers })}`,
                renderCell: (item: NormalizedItem) => item.completionDetails,
              },
              {
                width: "48px",
                header: "Act",
                cellClassName: (item: NormalizedItem) =>
                  `w-[48px] text-center ${getHoverBlurClassNames({ shouldBlur: !item.saveMeta?.unlocked && !showSpoilers })}`,
                renderCell: (item: NormalizedItem) => item.whichAct,
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
        </div>
      )}
    </>
  );
}
