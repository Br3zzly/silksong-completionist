import { expect, it } from "vitest";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { ALL_TRACKED_CATEGORIES, NORMALISED_DICT_MAP } from "@/dictionary";
import type { ParsingInfo } from "@/dictionary/types";
import { computeDictMapWithSaveData } from "@/utils/data";
import { validateSaveText } from "@/utils/saveValidation";

// Exercise every dictionary parser against missing, false, partial, and complete
// synthetic saves, including duplicate records and every supported game mode.
function fixture(level: number, permadeathMode: number | string) {
  const player: Record<string, unknown> = {
    silk: 0,
    permadeathMode,
    ConstructedMaterium: level > 0,
    QuillState: level,
  };
  const collections: Record<string, { Name: string; Data?: object; Record?: object }[]> = {};
  const scenes: Record<string, { SceneName: string; ID: string; Value: number | boolean }[]> = {};
  const visited: string[] = [];
  const add = (name: string, id: string, field: string, value: unknown) => {
    (collections[name] ??= []).push({ Name: id, Data: { [field]: value } });
  };
  function fill(info: ParsingInfo) {
    const id = info.internalId;
    switch (info.type) {
      case "flag":
      case "flagReturn":
      case "quill":
        player[info.internalId] = level;
        break;
      case "flagAnyOf":
        for (const name of info.internalId) player[name] = level;
        break;
      case "flagMin":
        player[info.internalId[0]] = level === 3 ? info.internalId[1] : level;
        break;
      case "tool":
        for (const name of info.internalId) add("Tools", name, "IsUnlocked", level > 0);
        break;
      case "crest":
        add("ToolEquips", info.internalId, "IsUnlocked", level > 0);
        break;
      case "collectable":
        add("Collectables", info.internalId, "Amount", level);
        break;
      case "relic":
        add("Relics", info.internalId, "IsCollected", level > 0);
        break;
      case "materium":
        add("MateriumCollected", info.internalId, level === 2 ? "HasSeenInRelicBoard" : "IsCollected", level > 0);
        break;
      case "quest":
        add("QuestCompletionData", info.internalId, "IsCompleted", level > 0);
        break;
      case "mementoDeposit":
        add("MementosDeposited", info.internalId, "IsDeposited", level > 0);
        break;
      case "journal":
        (collections.EnemyJournalKillData ??= []).push({
          Name: info.internalId,
          Record: { Kills: [-1, 0, 1, 1000][level] },
        });
        break;
      case "sceneVisited":
        if (level) visited.push(info.internalId);
        break;
      default: {
        if (!Array.isArray(id)) throw new Error("Expected scene coordinates");
        const collection =
          info.type === "sceneDataBool"
            ? "persistentBools"
            : info.type === "sceneDataGeo"
              ? "geoRocks"
              : "persistentInts";
        const value =
          info.type === "sceneDataBool"
            ? level > 0
            : level === 3 && info.type === "sceneDataInt"
              ? info.internalId[2]
              : [-1, 0, 1, 2][level];
        (scenes[collection] ??= []).push({ SceneName: String(id[0]), ID: String(id[1]), Value: value });
      }
    }
  }
  if (level >= 0)
    for (const category of ALL_TRACKED_CATEGORIES)
      for (const section of category.sections)
        for (const item of section.items) {
          for (const info of Array.isArray(item.parsingInfo) ? item.parsingInfo : [item.parsingInfo]) fill(info);
        }
  for (const [name, entries] of Object.entries(collections))
    player[name] = { [name === "EnemyJournalKillData" ? "list" : "savedData"]: entries };
  player.scenesVisited = visited;
  // The dictionary may itself refer to these fields; set the fixture mode last.
  player.permadeathMode = permadeathMode;
  return {
    playerData: player,
    sceneData: Object.fromEntries(Object.entries(scenes).map(([name, entries]) => [name, { serializedList: entries }])),
  };
}

it("matches the pre-cleanup completion results for every dictionary and parser", () => {
  const fingerprints: Record<string, string> = {};
  for (const mode of [0, 1, 2, "On", "Dead"])
    for (const level of [-1, 0, 1, 2, 3]) {
      const validation = validateSaveText(JSON.stringify(fixture(level, mode)));
      if (validation.kind !== "silksong") throw new Error(validation.errorMessage);
      const result = computeDictMapWithSaveData(NORMALISED_DICT_MAP, validation.parsedJson, false);
      const json = JSON.stringify(result, (key, value) => (key === "descriptionMarkup" ? undefined : value));
      fingerprints[`${mode}:${level}`] = createHash("sha256").update(json).digest("hex");
    }
  const path = "tests/fixtures/completion-baseline.json";
  expect(fingerprints).toEqual(JSON.parse(readFileSync(path, "utf8")));
});
