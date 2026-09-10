import { useId, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import type { DictMapWithSaveData } from "@/dictionary";
import { statValue } from "@/utils/collection";
import { formatPercent } from "@/utils/general";
import brokenSpool from "@/assets/ui/status/spool-broken.webp";
import emptySpool from "@/assets/ui/status/spool-empty.webp";
import rosaryIcon from "@/assets/ui/status/rosaries.webp";
import shardIcon from "@/assets/ui/status/shards.webp";
import classicIcon from "@/assets/ui/status/classic.webp";
import steelIcon from "@/assets/ui/status/steel-soul.webp";
import silkWinding from "@/assets/ui/status/silk-winding.webp";

const REPAIR_DURATION = 250;
const COUNT_DURATION = 1600;

// One clock drives the silk and every number. Edits update immediately; a new
// file replays the reveal. Cleanup prevents an old file's animation surviving.
function useSummaryProgress(data: DictMapWithSaveData | null, loadId: number) {
  const previousLoad = useRef(loadId);
  const [progress, setProgress] = useState(1);
  useLayoutEffect(() => {
    const newLoad = previousLoad.current !== loadId;
    previousLoad.current = loadId;
    if (!data) {
      setProgress(0);
      return;
    }
    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!newLoad || !reducedMotion || reducedMotion.matches || document.hidden) {
      setProgress(1);
      return;
    }
    setProgress(0);
    let frame = 0;
    const start = performance.now() + REPAIR_DURATION;
    const finish = () => {
      cancelAnimationFrame(frame);
      setProgress(1);
    };
    const tick = (now: number) => {
      const elapsed = Math.min(1, Math.max(0, (now - start) / COUNT_DURATION));
      setProgress(1 - (1 - elapsed) ** 3);
      if (elapsed < 1) frame = requestAnimationFrame(tick);
    };
    const onMotionChange = () => {
      if (reducedMotion.matches) finish();
    };
    const onVisibilityChange = () => {
      if (document.hidden) finish();
    };
    frame = requestAnimationFrame(tick);
    reducedMotion.addEventListener("change", onMotionChange);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      cancelAnimationFrame(frame);
      reducedMotion.removeEventListener("change", onMotionChange);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [data, loadId]);
  return progress;
}

function numericStat(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value) && value >= 0 ? value : null;
}

function Count({ value, progress, time = false }: { value: number | null; progress: number; time?: boolean }) {
  const format = (number: number) =>
    time ? `${Math.floor(number / 3600)}H ${Math.floor((number % 3600) / 60)}M` : String(Math.floor(number));
  return (
    <>
      <span aria-hidden="true">{value === null ? "-" : format(value * progress)}</span>
      <span className="sr-only">{value === null ? "-" : format(value)}</span>
    </>
  );
}

export function SaveSummary({ data, loadId }: { data: DictMapWithSaveData | null; loadId: number }) {
  const windingClipId = useId();
  const progress = useSummaryProgress(data, loadId);
  const stats = data?.allItems.Stats.sections.default.act_0;
  const completion = data?.totalCompletedPercent ?? 0;
  const displayedCompletion = Math.round(completion * progress * 100) / 100;
  const fill = Math.min(100, Math.max(0, displayedCompletion));
  const targetFill = Math.min(100, Math.max(0, Math.round(completion * 100) / 100));
  // Each winding stays on its own fixed pivot. Only the reveal edge advances;
  // neither the rod nor the settled silk texture moves with the counter.
  const silkPosition = (fill / 100) * 242;
  const windingIndex = Math.floor(silkPosition / 12);
  const windingFrame = Math.min(4, Math.floor(((silkPosition % 12) / 12) * 5));
  const filling = !!data && progress > 0 && progress < 1 && fill > 0;
  const glowing = !!data && progress === 1 && fill > 0;
  const mode = stats?.["Game Mode"];
  const gameMode = mode?.saveMeta?.value == null ? "-" : statValue(mode);
  return (
    <section className="save-summary" aria-label="Save summary" data-loaded={!!data}>
      <div
        className="summary-completion"
        role="progressbar"
        aria-label="Total completion"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={data ? Math.min(100, Math.max(0, completion)) : undefined}
        aria-valuetext={data ? formatPercent(completion) : "No save loaded"}
      >
        <div
          className="summary-spool"
          aria-hidden="true"
          data-glowing={glowing}
          style={{ "--silk-fill": `${fill}%` } as CSSProperties}
        >
          <img className="summary-spool-broken" src={brokenSpool} alt="" width={135} height={45} />
          <div className="summary-spool-intact">
            <img src={emptySpool} alt="" width={270} height={46} />
            <div className="summary-silk-track">
              <div className="summary-silk-texture" />
              <div className="summary-silk-glow">
                <div className="summary-silk-texture" />
              </div>
              {filling && (
                <svg className="summary-silk-winding" viewBox="0 0 242 46" overflow="visible">
                  <defs>
                    <clipPath id={windingClipId} clipPathUnits="userSpaceOnUse">
                      {/* Keep the last winding cut to its final width from its first frame. */}
                      <rect x={-40} y={-128} width={40 + (targetFill / 100) * 242} height={302} />
                    </clipPath>
                  </defs>
                  <g clipPath={`url(#${windingClipId})`}>
                    <svg
                      x={windingIndex * 12 + 6 - 20}
                      y={23 - 64}
                      width={40}
                      height={128}
                      viewBox={`${windingFrame * 40} 0 40 128`}
                      overflow="hidden"
                    >
                      <image href={silkWinding} width={200} height={128} />
                    </svg>
                  </g>
                </svg>
              )}
            </div>
          </div>
        </div>
        <span className="summary-percentage completion-percentage" aria-hidden="true">
          {data ? formatPercent(displayedCompletion) : null}
        </span>
      </div>
      <dl className="summary-stats">
        <div className="summary-currency">
          <dt>
            <img src={rosaryIcon} alt="" width={56} height={49} />
            <span className="sr-only">Rosaries</span>
          </dt>
          <dd>
            <Count value={numericStat(stats?.Rosaries.saveMeta?.value)} progress={progress} />
          </dd>
        </div>
        <div className="summary-currency">
          <dt>
            <img src={shardIcon} alt="" width={54} height={52} />
            <span className="sr-only">Shell Shards</span>
          </dt>
          <dd>
            <Count value={numericStat(stats?.["Shell Shards"].saveMeta?.value)} progress={progress} />
          </dd>
        </div>
        <div className="summary-playtime">
          <dt className="sr-only">Playtime</dt>
          <dd>
            <Count value={data ? numericStat(stats?.Playtime.saveMeta?.value) : 0} progress={progress} time />
          </dd>
        </div>
        {gameMode !== "-" && (
          <div className="summary-game-mode">
            <dt className="sr-only">Game mode</dt>
            <dd>
              <img src={gameMode === "Classic" ? classicIcon : steelIcon} alt="" width={96} height={80} />
              {gameMode}
            </dd>
          </div>
        )}
      </dl>
    </section>
  );
}
