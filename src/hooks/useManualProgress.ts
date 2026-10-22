import { useEffect, useMemo, useState } from "react";
import type { ItemPath } from "@/dictionary/types";
import type { ManualGameMode } from "@/utils/data";

export type ManualProgressObj = ReturnType<typeof useManualProgress>;

interface ManualProgress {
  active: boolean;
  gameMode: ManualGameMode;
  collected: ReadonlySet<ItemPath>;
}

const storageKey = "silksong-completionist-manual-progress";

function load(): ManualProgress {
  const fallback: ManualProgress = { active: false, gameMode: "classic", collected: new Set() };
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey) ?? "null");
    if (!stored || typeof stored !== "object") return fallback;
    return {
      active: stored.active === true,
      gameMode: stored.gameMode === "steelSoul" ? "steelSoul" : "classic",
      collected: new Set(
        Array.isArray(stored.collected) ? stored.collected.filter((path: unknown) => typeof path === "string") : []
      ),
    };
  } catch {
    return fallback;
  }
}

export function useManualProgress() {
  const [progress, setProgress] = useState(load);
  useEffect(() => {
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ active: progress.active, gameMode: progress.gameMode, collected: [...progress.collected] })
      );
    } catch {
      // Storage can be unavailable (e.g. private browsing); tracking still works for this visit.
    }
  }, [progress]);
  const handlers = useMemo(
    () => ({
      setActive: (active: boolean) => setProgress(previous => ({ ...previous, active })),
      setGameMode: (gameMode: ManualGameMode) => setProgress(previous => ({ ...previous, gameMode })),
      toggle: (path: ItemPath) =>
        setProgress(previous => {
          const collected = new Set(previous.collected);
          if (!collected.delete(path)) collected.add(path);
          return { ...previous, collected };
        }),
      reset: () => setProgress(previous => ({ ...previous, collected: new Set() })),
    }),
    []
  );
  return { state: progress, handlers };
}
