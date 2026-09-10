import type { CategorySection, DictMapWithSaveData, NormalizedItem } from "@/dictionary/types";
import { filterSections, type Filters } from "@/utils/collection";
import { MapButton } from "./ui/MapButton";
import { LazyImage } from "./ui/LazyImage";

function Description({
  description,
  descriptionMarkup,
  spoilers,
  section,
}: Pick<CategorySection, "description" | "descriptionMarkup"> & { spoilers: boolean; section?: unknown }) {
  return (
    <>
      {description && <p>{description}</p>}
      {descriptionMarkup && (
        <div>{typeof descriptionMarkup === "function" ? descriptionMarkup(spoilers, section) : descriptionMarkup}</div>
      )}
    </>
  );
}

function EntryImage({ item, journal }: { item: NormalizedItem; journal: boolean }) {
  const meta = item.saveMeta?.journalMeta;
  const completed = journal ? meta?.hasBeenCompleted : item.saveMeta?.unlocked;
  return (
    <div className="entry-image">
      {item.additionalMeta?.imageAsset && <LazyImage src={item.additionalMeta.imageAsset} alt={item.name} />}
      {completed && (
        <LazyImage src="journal/Completed_Entry_Border.png" alt="Completed Entry Ring" className="completion-ring" />
      )}
      {journal && meta?.hasBeenEncountered && !completed && (
        <small>
          {meta.killsAchieved} / {item.additionalMeta?.killsRequired}
        </small>
      )}
    </div>
  );
}

function ItemTable({
  items,
  categoryName,
  sectionName,
  spoilers,
  browse,
}: {
  items: NormalizedItem[];
  categoryName: string;
  sectionName?: string;
  spoilers: boolean;
  browse: boolean;
}) {
  const journal = categoryName === "Hunter's Journal",
    bosses = categoryName === "Bosses";
  return (
    <div className="table-scroll" tabIndex={0} role="region" aria-label={`${categoryName} entries`}>
      <table>
        <thead>
          <tr>
            <th scope="col">{journal || bosses ? "Entry" : "Collected"}</th>
            {!journal && !bosses && <th scope="col">Completion</th>}
            <th scope="col">Name</th>
            {journal ? (
              <>
                {!browse && <th scope="col">Kills Achieved</th>}
                <th scope="col">Kills Required</th>
              </>
            ) : (
              <>
                <th scope="col">Details</th>
                <th scope="col">Act</th>
              </>
            )}
            <th scope="col">Map</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            const blur = !item.saveMeta?.unlocked && !spoilers ? "spoiler" : undefined;
            const meta = item.additionalMeta;
            const related = meta?.completesEntries?.length
              ? `This entry also completes: ${meta.completesEntries.join(", ")}`
              : meta?.completedByEntry || meta?.completedBy
                ? `This entry is also completed by completing ${meta.completedByEntry ?? meta.completedBy}`
                : undefined;
            return (
              <tr
                key={JSON.stringify([item.name, item.whichAct, item.parsingInfo])}
                data-index={index}
                title={journal ? related : undefined}
              >
                <td className={journal || bosses ? blur : undefined}>
                  {journal || bosses ? (
                    <EntryImage item={item} journal={journal} />
                  ) : (
                    <span aria-label={item.saveMeta?.unlocked ? "Collected" : "Not collected"}>
                      {item.saveMeta?.unlocked ? "[x]" : "[ ]"}
                    </span>
                  )}
                </td>
                {!journal && !bosses && (
                  <td className="completion-percentage">
                    {item.completionPercent ? `+${item.completionPercent}%` : ""}
                  </td>
                )}
                <td className={blur}>{item.name}</td>
                {journal ? (
                  <>
                    {!browse && <td className={blur}>{item.saveMeta?.journalMeta?.killsAchieved ?? 0}</td>}
                    <td className={blur}>{meta?.killsRequired ?? "N/A"}</td>
                  </>
                ) : (
                  <>
                    <td className={blur}>{item.completionDetails}</td>
                    <td className={blur}>{item.whichAct}</td>
                  </>
                )}
                <td className={blur}>
                  <MapButton
                    mapLink={item.mapLink}
                    titleName={[categoryName, sectionName, item.name].filter(Boolean).join(" / ")}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function CategoryContent({
  name,
  data,
  filters,
  browse,
}: {
  name: string;
  data: DictMapWithSaveData;
  filters: Filters;
  browse: boolean;
}) {
  const category = data.allItems[name];
  if (!category) return <p>Category "{name}" not found.</p>;
  const sections = filterSections(category, data, filters, browse);
  const hasItems = sections.some(section => section.items.length);
  const flat = name === "Hunter's Journal" || name === "Bosses";
  return (
    <section>
      <h2>{name}</h2>
      <Description {...category} spoilers={filters.showSpoilers} />
      {!hasItems ? (
        <p>No items match the current filters.</p>
      ) : flat ? (
        <ItemTable
          items={sections.flatMap(section => section.items)}
          categoryName={name}
          spoilers={filters.showSpoilers}
          browse={browse}
        />
      ) : (
        sections
          .filter(section => section.items.length)
          .map(section => (
            <section key={section.name}>
              {sections.length > 1 && (
                <>
                  <h3>{section.name}</h3>
                  <Description
                    {...section}
                    spoilers={filters.showSpoilers}
                    section={section.name === "Quills" ? section : undefined}
                  />
                </>
              )}
              {section.name !== "Quills" && (
                <ItemTable
                  items={section.items}
                  categoryName={name}
                  sectionName={sections.length > 1 ? section.name : undefined}
                  spoilers={filters.showSpoilers}
                  browse={browse}
                />
              )}
            </section>
          ))
      )}
    </section>
  );
}
