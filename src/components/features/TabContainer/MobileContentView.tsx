import type { NormalizedSection, NormalizedItem } from "@/dictionary";
import { SectionHeader } from "./shared";
import { MobileItemCard } from "@/components/ui";

interface MobileContentViewProps {
  sectionEntries: [string, NormalizedSection & { items: NormalizedItem[] }][];
  sectionsLength: number;
  showSpoilers: boolean;
  categoryName: string;
}

export function MobileContentView({
  sectionEntries,
  sectionsLength,
  showSpoilers,
  categoryName,
}: MobileContentViewProps) {
  return (
    <div className="mobile-content space-y-6">
      {sectionEntries.map(([sectionName, section]) => (
        <MobileSectionView
          key={sectionName}
          section={section}
          sectionsLength={sectionsLength}
          showSpoilers={showSpoilers}
          categoryName={categoryName}
        />
      ))}
    </div>
  );
}

interface MobileSectionViewProps {
  section: NormalizedSection & { items: NormalizedItem[] };
  sectionsLength: number;
  showSpoilers: boolean;
  categoryName: string;
}

function MobileSectionView({ section, sectionsLength, showSpoilers, categoryName }: MobileSectionViewProps) {
  const { items } = section;

  if (items.length === 0) return null;

  const isQuillSection = section.name === "Quills";

  return (
    <div className="mobile-section">
      {sectionsLength > 1 && (
        <SectionHeader
          name={section.name}
          description={section.description}
          descriptionMarkup={section.descriptionMarkup}
          showSpoilers={showSpoilers}
          sectionData={section}
          className={isQuillSection ? "rounded-b-lg" : ""}
        />
      )}

      {!isQuillSection && (
        <div className="mobile-items space-y-3 mt-4">
          {items.map(item => (
            <MobileItemCard
              key={item.name}
              item={item}
              showSpoilers={showSpoilers}
              categoryName={categoryName}
              sectionName={sectionsLength > 1 ? section.name : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
}
