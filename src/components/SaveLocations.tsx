import { useState } from "react";
import { PLATFORM_OPTIONS } from "./savePlatforms";

export function SaveLocations() {
  const [selected, setSelected] = useState(PLATFORM_OPTIONS[0].id);
  const [message, setMessage] = useState("");
  const platform = PLATFORM_OPTIONS.find(option => option.id === selected)!;
  return (
    <>
      <label>
        Platform{" "}
        <select
          value={selected}
          onChange={event => {
            setSelected(event.target.value as typeof selected);
            setMessage("");
          }}
        >
          {PLATFORM_OPTIONS.map(option => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      {(platform.sections ?? [platform]).map(option => (
        <section key={option.id}>
          <h3>{option.label}</h3>
          <code>{option.saveFilePath}</code>
          {option.saveFilePath && (
            <button
              type="button"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(option.saveFilePath!);
                  setMessage("Copied " + option.label + " path.");
                } catch {
                  setMessage("Could not copy. Select and copy the path above.");
                }
              }}
            >
              Copy {option.label} path
            </button>
          )}
        </section>
      ))}
      <p role="status">{message}</p>
      <div>{platform.note}</div>
    </>
  );
}
