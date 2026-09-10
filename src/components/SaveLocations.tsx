import { useEffect, useState } from "react";
import { PLATFORM_OPTIONS, type PlatformOption } from "./savePlatforms";
import collectedFull from "@/assets/ui/collected-full.png";

function SaveLocationPath({ option }: { option: PlatformOption }) {
  const [feedback, setFeedback] = useState<{ copied: boolean } | null>(null);

  useEffect(() => {
    if (!feedback?.copied) return;
    const timeout = window.setTimeout(() => setFeedback(null), 2400);
    return () => window.clearTimeout(timeout);
  }, [feedback]);

  return (
    <section className="save-location">
      <div className="save-location-heading">
        <h3>{option.label}</h3>
        <span className="save-path-feedback" data-visible={!!feedback?.copied} role="status">
          {feedback?.copied && (
            <>
              <img src={collectedFull} alt="" width={18} height={18} />
              Copied
            </>
          )}
        </span>
      </div>
      {option.saveFilePath && (
        <button
          type="button"
          className="save-path"
          data-copied={!!feedback?.copied}
          aria-label={`${option.label} save path, click to copy`}
          title="Click to copy"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(option.saveFilePath!);
              setFeedback({ copied: true });
            } catch {
              setFeedback({ copied: false });
            }
          }}
        >
          <code>{option.saveFilePath}</code>
        </button>
      )}
      {feedback && !feedback.copied && (
        <p className="save-path-error" role="status">
          Could not copy. Select the path and copy it manually.
        </p>
      )}
    </section>
  );
}

export function SaveLocations() {
  const [selected, setSelected] = useState(PLATFORM_OPTIONS[0].id);
  const platform = PLATFORM_OPTIONS.find(option => option.id === selected)!;
  return (
    <>
      <fieldset className="save-platforms">
        <legend className="sr-only">Platform</legend>
        {PLATFORM_OPTIONS.map(option => (
          <button
            key={option.id}
            type="button"
            aria-label={option.label}
            title={option.label}
            aria-pressed={selected === option.id}
            onClick={() => setSelected(option.id)}
          >
            {option.id === "PC" ? "PC" : option.id === "GamePass" ? "Game Pass" : "Switch"}
          </button>
        ))}
      </fieldset>
      {(platform.sections ?? [platform]).map(option => (
        <SaveLocationPath key={`${selected}-${option.id}`} option={option} />
      ))}
      <div>{platform.note}</div>
    </>
  );
}
