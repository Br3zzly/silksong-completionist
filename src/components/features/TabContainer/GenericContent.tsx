import type { TabContentProps } from "./types";
import type { NormalizedSection, NormalizedItem } from "@/dictionary";
import { getHoverBlurClassNames, cn } from "@/utils";

import { CategoryHeader, SectionHeader, StatusBar, EmptyState } from "./shared";
import { Table, MapButton } from "@/components/ui";

export function GenericContent({
  tabLabel,
  showSpoilers,
  showMissingOnly,
  inShowEverythingMode,
  actFilter,
  computedData,
  onTabFilterChange,
}: TabContentProps) {
  if (!tabLabel || !computedData) {
    return (
      <div className="text-white text-center">
        🚧 The "{tabLabel}" category hasn't been implemented yet.{" "}
        <a
          href="https://github.com/Br3zzly/silksong-completionist"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 underline"
        >
          Can you help?
        </a>{" "}
        🚧
      </div>
    );
  }

  const { category, hasVisibleItems, sectionEntries, sectionsLength } = computedData;

  if (!category) {
    return <div className="text-white text-center">Category "{tabLabel}" not found.</div>;
  }

  return (
    <>
      <CategoryHeader title={tabLabel || category.name} description={category.description} />

      <StatusBar
        inShowEverythingMode={inShowEverythingMode}
        tabLabel={tabLabel}
        hasVisibleItems={hasVisibleItems}
        hasMultipleSections={sectionsLength > 1}
        showMissingOnly={showMissingOnly}
        showSpoilers={showSpoilers}
        actFilter={actFilter}
        onTabFilterChange={onTabFilterChange}
      />

      {!hasVisibleItems && <EmptyState />}

      {hasVisibleItems &&
        sectionEntries.map(([sectionName, section]) => (
          <GenericSectionTable
            key={sectionName}
            section={section}
            sectionsLength={sectionsLength}
            showSpoilers={showSpoilers ?? false}
            categoryName={tabLabel || category.name}
          />
        ))}
    </>
  );
}

function GenericSectionTable({
  section,
  sectionsLength,
  showSpoilers,
  categoryName,
}: {
  section: NormalizedSection & { items: NormalizedItem[] };
  sectionsLength: number;
  showSpoilers: boolean;
  categoryName: string;
}) {
  const { items } = section;

  if (items.length === 0) return null;

  // Special case for Quills section - only show header, no table, pass section data for a rich description
  const isQuillsSection = section.name === "Quills";
  const tableContainer = !isQuillsSection && (
    <div
      className={cn(
        "bg-gray-900/50 border-2 border-gray-600/30 overflow-hidden",
        sectionsLength === 1 && "border-t-0 rounded-b-lg", // Single section - connect this container to status bar above
        section.name || section.description || section.descriptionMarkup // Header info exists?
          ? sectionsLength > 1 && "rounded-b-lg" // Multi-section with header - connect this container to section header
          : sectionsLength > 1 && "rounded-lg" // Multi-section without header - standalone container
      )}
    >
      <Table<NormalizedItem>
        isFixedLayout={true}
        tableData={items}
        enableVirtualization={items.length > 100}
        rowClassName={() =>
          `border-b border-gray-700 last:border-none group bg-gray-800/30 hover:bg-gray-700/40 transition-colors`
        }
        columns={[
          {
            width: "56px",
            cellClassName: "text-center align-middle",
            renderCell: (item: NormalizedItem) => (
              <span className={item.saveMeta?.unlocked ? "text-green-400" : "text-red-400"}>
                {item.saveMeta?.unlocked ? "[x]" : "[ ]"}
              </span>
            ),
          },
          {
            width: "56px",
            headerClassName: "px-2 py-3 text-center text-gray-300 font-medium",
            cellClassName: "text-center align-middle",
            renderCell: (item: NormalizedItem) => (
              <span className="text-xs text-blue-200 mt-1 font-normal">
                {item.completionPercent ? `+${item.completionPercent}%` : ""}
              </span>
            ),
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
              const parts = [categoryName];
              if (sectionsLength > 1 && section.name) {
                parts.push(section.name);
              }
              parts.push(item.name);
              const fullName = parts.join(" · ");
              return <MapButton mapLink={item.mapLink} titleName={fullName} />;
            },
          },
        ]}
      />
    </div>
  );

  return (
    <div className="mb-8">
      {/* Section Headers for multi-section categories only */}
      {sectionsLength > 1 && (
        <SectionHeader
          name={section.name}
          description={section.description}
          descriptionMarkup={section.descriptionMarkup}
          showSpoilers={showSpoilers}
          sectionData={isQuillsSection ? section : undefined}
          className={isQuillsSection ? "rounded-b-lg border-b-2" : ""}
        />
      )}

      {tableContainer}
    </div>
  );
}
