import type { ALL_TRACKED_CATEGORIES } from "@/dictionary";

export type TabId = (typeof ALL_TRACKED_CATEGORIES)[number]["name"];

export type TabGroup = "core" | "collectibles" | "exploration" | "bestiary";

interface TabConfig {
  tabId: TabId;
  hasProgress: boolean;
  hasPercentProgression: boolean;
}

const createTab = (tabId: TabId, options?: { hasPercentProgression?: boolean }): TabConfig => ({
  tabId,
  hasProgress: true,
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
    /*
     ** The intent here is to eventually track the following sections:
     ** Rosary Stashes
     ** Shell Shard Fossils
     ** Breakable Walls
     */
    // createTab("Caches & Secrets"), // 🚧
  ],
  exploration: [
    createTab("Mapping Supplies"),
    createTab("Bellways"),
    createTab("Ventrica Stations"),
    createTab("Quests"),
  ],
  bestiary: [createTab("Unique Spawns"), createTab("Bosses"), createTab("Hunter's Journal")],
};

export const GROUP_LABELS: Record<TabGroup, string> = {
  core: "Core Progress",
  collectibles: "Collectibles & Resources",
  exploration: "Exploration & Navigation",
  bestiary: "Bestiary",
};
