import type { ParsingInfo, ParsingInfoAnyOf } from "./types";
import {
  COLLECTION_NAMES,
  type SilksongSave,
  type SavedEntry,
  type CollectionName,
  type SceneEntry,
} from "@/utils/saveValidation";

export interface ParseResult {
  unlocked: boolean;
  returnValue?: unknown;
}

// Preserve Array.find's first-match behavior if a save contains repeated records.
function indexFirst<T>(entries: T[], key: (entry: T) => string): Map<string, T> {
  const result = new Map<string, T>();
  for (const entry of entries) if (!result.has(key(entry))) result.set(key(entry), entry);
  return result;
}
const sceneKey = (scene: string, id: string) => JSON.stringify([scene, id]);

export function createSaveParser(saveData: SilksongSave) {
  const player = saveData.playerData;
  const collections = new Map<CollectionName, Map<string, SavedEntry>>();
  for (const name of COLLECTION_NAMES) {
    collections.set(
      name,
      indexFirst(player[name]?.savedData ?? [], entry => entry.Name)
    );
  }
  const journal = indexFirst(player.EnemyJournalKillData?.list ?? [], entry => entry.Name);
  const visited = new Set(player.scenesVisited ?? []);
  // Deposits historically use some(), so any deposited duplicate counts.
  const deposits = new Set(
    (player.MementosDeposited?.savedData ?? []).filter(entry => entry.Data?.IsDeposited).map(entry => entry.Name)
  );
  const scenes = new Map<string, Map<string, SceneEntry>>();
  for (const name of ["persistentBools", "persistentInts", "geoRocks"] as const) {
    scenes.set(
      name,
      indexFirst(saveData.sceneData?.[name]?.serializedList ?? [], entry => sceneKey(entry.SceneName, entry.ID))
    );
  }
  const data = (collection: CollectionName, name: string) => collections.get(collection)?.get(name)?.Data;
  const sceneValue = (collection: string, pair: [string, string] | [string, string, number]) =>
    scenes.get(collection)?.get(sceneKey(pair[0], pair[1]))?.Value;

  function parse(info: ParsingInfo | ParsingInfoAnyOf): ParseResult {
    if (Array.isArray(info)) {
      for (const alternative of info) {
        const result = parse(alternative);
        if (result.unlocked) return result;
      }
      return { unlocked: false };
    }
    switch (info.type) {
      case "flag":
        return { unlocked: !!player[info.internalId] };
      case "flagAnyOf":
        return { unlocked: info.internalId.some(name => !!player[name]) };
      case "flagMin": {
        const value = player[info.internalId[0]] ?? 0;
        return { unlocked: typeof value === "number" && value >= info.internalId[1] };
      }
      case "flagReturn":
        return { unlocked: !!player[info.internalId], returnValue: player[info.internalId] };
      case "tool":
        return { unlocked: info.internalId.some(name => !!data("Tools", name)?.IsUnlocked) };
      case "journal": {
        const entry = journal.get(info.internalId);
        return { unlocked: !!entry && entry.Record.Kills >= 0, returnValue: entry?.Record.Kills ?? 0 };
      }
      case "crest":
        return { unlocked: !!data("ToolEquips", info.internalId)?.IsUnlocked };
      case "collectable": {
        const amount = data("Collectables", info.internalId)?.Amount;
        return { unlocked: typeof amount === "number" && amount > 0 };
      }
      case "relic":
        return { unlocked: !!data("Relics", info.internalId)?.IsCollected };
      case "materium": {
        const entry = data("MateriumCollected", info.internalId);
        return { unlocked: !!player.ConstructedMaterium && !!(entry?.IsCollected || entry?.HasSeenInRelicBoard) };
      }
      case "quill":
        return { unlocked: !!player[info.internalId], returnValue: player[info.internalId] ? player.QuillState : 0 };
      case "quest":
        return { unlocked: !!data("QuestCompletionData", info.internalId)?.IsCompleted };
      case "sceneDataBool":
        return { unlocked: !!sceneValue("persistentBools", info.internalId) };
      case "sceneDataInt":
        return { unlocked: sceneValue("persistentInts", info.internalId) === info.internalId[2] };
      case "sceneDataIntRosaries":
        return { unlocked: sceneValue("persistentInts", info.internalId) === -1 };
      // Preserve the existing WIP cache semantics until verified against game saves.
      case "sceneDataIntShards":
        return { unlocked: !sceneValue("persistentInts", info.internalId) };
      case "sceneDataGeo":
        return { unlocked: !sceneValue("geoRocks", info.internalId) };
      case "sceneVisited":
        return { unlocked: visited.has(info.internalId) };
      case "mementoDeposit":
        return { unlocked: deposits.has(info.internalId) };
    }
  }
  return parse;
}

export function isItemUnlockedInPlayerSave(info: ParsingInfo | ParsingInfoAnyOf, save: SilksongSave): ParseResult {
  return createSaveParser(save)(info);
}

export function isItemInCurrentGameMode(
  item: { onlyFoundInClassicMode?: boolean; onlyFoundInSteelSoulMode?: boolean },
  save: SilksongSave
): boolean {
  const isClassic = save.playerData.permadeathMode === 0;
  return !((item.onlyFoundInSteelSoulMode && isClassic) || (item.onlyFoundInClassicMode && !isClassic));
}
