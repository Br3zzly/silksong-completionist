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
    <fieldset className="controls" disabled={disabled}>
      <legend>Global filters</legend>
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
    </fieldset>
  );
}
