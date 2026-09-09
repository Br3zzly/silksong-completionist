import type { CategoryId } from "@/dictionary/types";

export type TabId = CategoryId;

export type TabGroup = "core" | "collectibles" | "exploration" | "bestiary";

interface TabConfig {
  tabId: TabId;
  hasPercentProgression: boolean;
}

const createTab = (tabId: TabId, options?: { hasPercentProgression?: boolean }): TabConfig => ({
  tabId,
  hasPercentProgression: options?.hasPercentProgression ?? false,
});

export const TAB_GROUPS: Record<TabGroup, TabConfig[]> = {
  core: [
    createTab("Mask Shards", { hasPercentProgression: true }),
    createTab("Spool Fragments", { hasPercentProgression: true }),
    createTab("Abilities", { hasPercentProgression: true }),
    createTab("Upgrades", { hasPercentProgression: true }),
    createTab("Tools", { hasPercentProgression: true }),
    createTab("Crests", { hasPercentProgression: true }),
  ],
  collectibles: [
    createTab("Lost Fleas"),
    createTab("Relics"),
    createTab("Keys"),
    createTab("Memory Lockets"),
    createTab("Craftmetals"),
    createTab("Mossberries"),
    createTab("Pale Oil"),
    createTab("Silkeaters"),
    createTab("Bellhome"),
    createTab("Materium"),
    createTab("Mementos"),
    createTab("Caches & Secrets"),
  ],
  exploration: [
    createTab("Mapping Supplies"),
    createTab("Bellways"),
    createTab("Ventrica Stations"),
    createTab("Tasks"),
  ],
  bestiary: [createTab("Unique Spawns"), createTab("Bosses"), createTab("Hunter's Journal")],
};

export const GROUP_LABELS: Record<TabGroup, string> = {
  core: "Core Progress",
  collectibles: "Collectibles & Resources",
  exploration: "Exploration & Navigation",
  bestiary: "Bestiary",
};
