export interface SavedEntry {
  Name: string;
  Data?: Record<string, unknown> | null;
}

export interface JournalEntry {
  Name: string;
  Record: { Kills: number };
}

export interface SceneEntry {
  SceneName: string;
  ID: string;
  Value: number | boolean;
}

export const COLLECTION_NAMES = [
  "Tools",
  "ToolEquips",
  "Collectables",
  "Relics",
  "MateriumCollected",
  "QuestCompletionData",
  "MementosDeposited",
] as const;
export type CollectionName = (typeof COLLECTION_NAMES)[number];
export type SceneCollectionName = "persistentBools" | "persistentInts" | "geoRocks";

export interface SilksongSave {
  playerData: Record<string, unknown> &
    Partial<Record<CollectionName, { savedData?: SavedEntry[] | null } | null>> & {
      silk: number;
      scenesVisited?: string[] | null;
      EnemyJournalKillData?: { list?: JournalEntry[] | null } | null;
    };
  sceneData?: Partial<Record<SceneCollectionName, { serializedList?: SceneEntry[] | null } | null>> | null;
}

export type SaveValidation =
  | { kind: "invalid"; parsedJson: null; errorMessage: string }
  | { kind: "generic"; parsedJson: unknown; errorMessage: string }
  | { kind: "silksong"; parsedJson: SilksongSave; errorMessage: "" };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

// Missing optional collections occur in older/early-game saves. Present collections
// must have the shape consumed by the progress parsers, including their entries.
function optionalList(value: unknown, key: string, check: (entry: unknown) => boolean): boolean {
  if (value == null) return true;
  if (!isRecord(value)) return false;
  return value[key] == null || (Array.isArray(value[key]) && value[key].every(check));
}

function isSavedEntry(entry: unknown): boolean {
  if (!isRecord(entry) || typeof entry.Name !== "string") return false;
  if (entry.Data == null) return true;
  if (!isRecord(entry.Data)) return false;
  return Object.entries(entry.Data).every(([key, value]) => {
    if (key === "Amount") return typeof value === "number" && Number.isFinite(value);
    if (["IsUnlocked", "IsCollected", "HasSeenInRelicBoard", "IsCompleted", "IsDeposited"].includes(key)) {
      return typeof value === "boolean";
    }
    return true;
  });
}

function isSilksongSave(value: unknown): value is SilksongSave {
  if (!isRecord(value) || !isRecord(value.playerData)) return false;
  const player = value.playerData;
  if (typeof player.silk !== "number" || !Number.isFinite(player.silk)) return false;
  if (!COLLECTION_NAMES.every(name => optionalList(player[name], "savedData", isSavedEntry))) return false;
  if (
    !optionalList(
      player.EnemyJournalKillData,
      "list",
      entry =>
        isRecord(entry) &&
        typeof entry.Name === "string" &&
        isRecord(entry.Record) &&
        typeof entry.Record.Kills === "number" &&
        Number.isFinite(entry.Record.Kills)
    )
  )
    return false;
  if (
    player.scenesVisited != null &&
    (!Array.isArray(player.scenesVisited) || !player.scenesVisited.every(scene => typeof scene === "string"))
  )
    return false;
  if (value.sceneData == null) return true;
  if (!isRecord(value.sceneData)) return false;
  const scene = value.sceneData;
  return (["persistentBools", "persistentInts", "geoRocks"] as const).every(name =>
    optionalList(
      scene[name],
      "serializedList",
      entry =>
        isRecord(entry) &&
        typeof entry.SceneName === "string" &&
        typeof entry.ID === "string" &&
        (name === "persistentBools"
          ? typeof entry.Value === "boolean"
          : typeof entry.Value === "number" && Number.isFinite(entry.Value))
    )
  );
}

export function validateSaveText(text: string): SaveValidation {
  let parsedJson: unknown;
  try {
    parsedJson = JSON.parse(text);
  } catch {
    return { kind: "invalid", parsedJson: null, errorMessage: "Invalid JSON format. Please check your syntax." };
  }
  if (isSilksongSave(parsedJson)) return { kind: "silksong", parsedJson, errorMessage: "" };
  return { kind: "generic", parsedJson, errorMessage: "This does not appear to be a supported Silksong save file." };
}

// Generic JSON saves remain editable/exportable, but malformed Silksong-shaped
// data must never be exported as a replacement game save.
export function canExportSave(result: SaveValidation): boolean {
  return (
    result.kind === "silksong" ||
    (result.kind === "generic" &&
      !(
        isRecord(result.parsedJson) &&
        isRecord(result.parsedJson.playerData) &&
        "silk" in result.parsedJson.playerData
      ))
  );
}
