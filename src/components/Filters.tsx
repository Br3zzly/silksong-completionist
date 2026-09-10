import { toggleActInFilter } from "@/utils/data";
import type { Filters as FilterValues, FilterChange } from "@/utils/collection";

export function Filters({
  value,
  onChange,
  browse,
  disabled = false,
}: {
  value: FilterValues;
  onChange: FilterChange;
  browse: boolean;
  disabled?: boolean;
}) {
  return (
    <fieldset className="controls category-filters" disabled={disabled} aria-description="Applies to all categories">
      <legend className="sr-only">Global filters</legend>
      <svg
        className="filter-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <title>Filters — apply to all categories</title>
        <path d="M3 6h4m4 0h10M3 12h10m4 0h4M3 18h4m4 0h10" />
        <path d="M7 3v6m10 0v6M7 15v6" />
      </svg>
      <button
        type="button"
        disabled={browse}
        aria-pressed={!browse && value.showMissingOnly}
        aria-label={!browse && value.showMissingOnly ? "Showing missing items" : "Showing all items"}
        onClick={() => onChange("showMissingOnly", !value.showMissingOnly)}
      >
        {browse ? "All items" : value.showMissingOnly ? "Missing only" : "All items"}
      </button>
      <button
        type="button"
        aria-pressed={value.showSpoilers}
        aria-label={value.showSpoilers ? "spoilers shown" : "spoilers blurred"}
        onClick={() => onChange("showSpoilers", !value.showSpoilers)}
      >
        {value.showSpoilers ? "Spoilers shown" : "Spoilers blurred"}
      </button>
      <span className="filter-acts">
        {([1, 2, 3] as const).map(act => (
          <button
            type="button"
            key={act}
            aria-pressed={value.actFilter.has(act)}
            onClick={() => onChange("actFilter", toggleActInFilter(value.actFilter, act))}
          >
            Act {["I", "II", "III"][act - 1]}
          </button>
        ))}
      </span>
    </fieldset>
  );
}
