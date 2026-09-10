import { describe, expect, it } from "vitest";
import { createCipheriv } from "node:crypto";
import { validateSaveText, canExportSave, COLLECTION_NAMES } from "@/utils/saveValidation";
import { encodeData, decodeData } from "@/utils/codec";
import { createSaveParser } from "@/dictionary/parsers";

const validate = (playerData: unknown, sceneData?: unknown) =>
  validateSaveText(JSON.stringify({ playerData, sceneData }));

describe("save validation", () => {
  it.each(["", " ", "{", "[1,]"])("blocks invalid JSON %j", text => {
    const result = validateSaveText(text);
    expect(result.kind).toBe("invalid");
    expect(canExportSave(result)).toBe(false);
  });
  it.each([null, 0, true, [], {}, { playerData: null }, { playerData: 1 }, { playerData: { health: 5 } }])(
    "keeps generic JSON editable: %j",
    value => {
      const result = validateSaveText(JSON.stringify(value));
      expect(result.kind).toBe("generic");
      expect(result.errorMessage).not.toBe("");
      expect(canExportSave(result)).toBe(true);
    }
  );
  it("accepts optional missing and null collections and preserves unknown game fields", () => {
    const result = validate({ silk: 0, Tools: null, Relics: { savedData: null }, future: { custom: true } });
    expect(result.kind).toBe("silksong");
    expect(result.errorMessage).toBe("");
  });
  it.each(COLLECTION_NAMES)("rejects malformed %s lists and entries", name => {
    for (const savedData of [
      {},
      "oops",
      [null],
      [{ Name: 1 }],
      [{ Name: "x", Data: [] }],
      [{ Name: "x", Data: { Amount: "1" } }],
    ]) {
      const result = validate({ silk: 0, [name]: { savedData } });
      expect(result.kind).toBe("generic");
      expect(canExportSave(result)).toBe(false);
    }
  });
  it("rejects malformed journal, visited-scene, and persistent-scene data", () => {
    expect(validate({ silk: 0, EnemyJournalKillData: { list: [{ Name: "x" }] } }).kind).toBe("generic");
    expect(validate({ silk: 0, scenesVisited: {} }).kind).toBe("generic");
    expect(validate({ silk: 0 }, { persistentBools: { serializedList: {} } }).kind).toBe("generic");
    expect(validate({ silk: 0 }, { persistentInts: { serializedList: [null] } }).kind).toBe("generic");
  });
});

describe("save codec compatibility", () => {
  it.each([
    JSON.stringify({ playerData: { silk: 0 } }),
    JSON.stringify({ text: "Hornet \u2014 caf\u00e9 \ud83e\uddf5", large: "x".repeat(70000) }),
  ])("round trips and matches independent AES output", text => {
    const bytes = encodeData(text);
    expect(decodeData(bytes)).toBe(text);
    const cipher = createCipheriv("aes-256-ecb", Buffer.from("UKu52ePUBwetZ9wNX88o54dnfKRu0T1l"), null);
    const expected = Buffer.concat([cipher.update(text, "utf8"), cipher.final()]).toString("base64");
    let start = 22;
    while (bytes[start++] & 0x80) {
      /* skip .NET variable length prefix */
    }
    expect(Buffer.from(bytes.subarray(start, -1)).toString()).toBe(expected);
    expect(bytes[bytes.length - 1]).toBe(11);
  });
});

it("indexes collections once, preserves first matches, alternatives, and all parser types", () => {
  const parse = createSaveParser({
    playerData: {
      silk: 0,
      flag: true,
      number: 4,
      ConstructedMaterium: true,
      QuillState: 2,
      Tools: {
        savedData: [
          { Name: "a", Data: { IsUnlocked: false } },
          { Name: "a", Data: { IsUnlocked: true } },
          { Name: "b", Data: { IsUnlocked: true } },
        ],
      },
      ToolEquips: { savedData: [{ Name: "x", Data: { IsUnlocked: true } }] },
      Collectables: { savedData: [{ Name: "x", Data: { Amount: 1 } }] },
      Relics: { savedData: [{ Name: "x", Data: { IsCollected: true } }] },
      MateriumCollected: { savedData: [{ Name: "x", Data: { HasSeenInRelicBoard: true } }] },
      QuestCompletionData: { savedData: [{ Name: "x", Data: { IsCompleted: true } }] },
      EnemyJournalKillData: { list: [{ Name: "x", Record: { Kills: 3 } }] },
      MementosDeposited: {
        savedData: [
          { Name: "x", Data: { IsDeposited: false } },
          { Name: "x", Data: { IsDeposited: true } },
        ],
      },
      scenesVisited: ["room"],
    },
    sceneData: {
      persistentBools: { serializedList: [{ SceneName: "room", ID: "x", Value: true }] },
      persistentInts: { serializedList: [{ SceneName: "room", ID: "x", Value: -1 }] },
      geoRocks: { serializedList: [{ SceneName: "room", ID: "x", Value: 0 }] },
    },
  });
  for (const type of ["crest", "collectable", "relic", "materium", "quest", "mementoDeposit"] as const)
    expect(parse({ type, internalId: "x" }).unlocked).toBe(true);
  expect(parse({ type: "tool", internalId: ["a"] }).unlocked).toBe(false);
  expect(parse({ type: "tool", internalId: ["a", "b"] }).unlocked).toBe(true);
  expect(parse({ type: "journal", internalId: "x" })).toEqual({ unlocked: true, returnValue: 3 });
  expect(parse({ type: "journal", internalId: "missing" })).toEqual({ unlocked: false, returnValue: 0 });
  expect(parse({ type: "flagAnyOf", internalId: ["missing", "flag"] }).unlocked).toBe(true);
  expect(parse({ type: "flagMin", internalId: ["number", 4] }).unlocked).toBe(true);
  expect(
    parse([
      { type: "flag", internalId: "missing" },
      { type: "flagReturn", internalId: "number" },
    ])
  ).toEqual({ unlocked: true, returnValue: 4 });
  expect(parse({ type: "quill", internalId: "flag" })).toEqual({ unlocked: true, returnValue: 2 });
  expect(parse({ type: "sceneVisited", internalId: "room" }).unlocked).toBe(true);
  expect(parse({ type: "sceneDataBool", internalId: ["room", "x"] }).unlocked).toBe(true);
  expect(parse({ type: "sceneDataInt", internalId: ["room", "x", -1] }).unlocked).toBe(true);
  expect(parse({ type: "sceneDataIntRosaries", internalId: ["room", "x"] }).unlocked).toBe(true);
  expect(parse({ type: "sceneDataGeo", internalId: ["room", "x"] }).unlocked).toBe(true);
  // WIP behavior explicitly retained at the user's request.
  expect(parse({ type: "sceneDataGeo", internalId: ["missing", "x"] }).unlocked).toBe(true);
  expect(parse({ type: "sceneDataIntShards", internalId: ["missing", "x"] }).unlocked).toBe(true);
});
