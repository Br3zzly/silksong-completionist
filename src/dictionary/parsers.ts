import type { ParsingInfo, ParsingInfoAnyOf } from "./types";

function isParsingInfoAnyOf(parsingInfo: ParsingInfo | ParsingInfoAnyOf): parsingInfo is ParsingInfoAnyOf {
  return Array.isArray(parsingInfo);
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export function isItemUnlockedInPlayerSave(
  itemParsingInfo: ParsingInfo | ParsingInfoAnyOf,
  saveData: any
): { unlocked: boolean; returnValue?: number } {
  if (isParsingInfoAnyOf(itemParsingInfo)) {
    let unlocked = false;
    let returnValue: number | undefined;

    for (const parsingInfo of itemParsingInfo) {
      const result = isItemUnlockedInPlayerSave(parsingInfo, saveData);
      if (result.unlocked) {
        unlocked = true;
        returnValue = result.returnValue;
        break;
      }
    }

    return { unlocked, returnValue };
  }

  const playerData = (saveData as any).playerData ?? {};

  const parsers = {
    flag: (flagName: string) => {
      const unlocked = !!playerData[flagName];
      return { unlocked };
    },

    flagAnyOf: (flagNames: string[]) => {
      let unlocked = false;
      for (const flagName of flagNames) {
        if ((playerData as any)[flagName]) {
          unlocked = true;
          break;
        }
      }
      return { unlocked };
    },

    flagMin: ([flagName, requiredValue]: [string, number]) => {
      const actualValue = (playerData[flagName] as number) ?? 0;
      return { unlocked: actualValue >= requiredValue };
    },

    flagReturn: (flagName: string) => {
      const returnValue = playerData[flagName];
      const unlocked = !!returnValue;
      return { unlocked, returnValue };
    },

    tool: (toolNames: string[]) => {
      const tools = (playerData as any)?.Tools?.savedData || [];
      let unlocked = false;
      for (const name of toolNames) {
        const foundTool = tools.find((t: any) => t?.Name === name);
        if (foundTool && !!foundTool?.Data?.IsUnlocked) {
          unlocked = true;
          break;
        }
      }
      return { unlocked };
    },

    journal: (entryName: string) => {
      const journal = (playerData as any)?.EnemyJournalKillData?.list || [];
      let unlocked = false;
      let killsAchieved = 0;

      const foundEntry = journal.find((t: any) => t?.Name === entryName);
      if (foundEntry) {
        killsAchieved = foundEntry.Record.Kills;
        if (foundEntry.Record.Kills >= 0) {
          unlocked = true;
        }
      }
      return { unlocked, returnValue: killsAchieved };
    },

    crest: (crestName: string) => {
      const crest = (playerData as any)?.ToolEquips?.savedData || [];
      const foundCrest = crest.find((t: any) => t?.Name === crestName);
      return { unlocked: !!foundCrest?.Data?.IsUnlocked };
    },

    collectable: (itemName: string) => {
      const collectableEntry = (playerData as any).Collectables?.savedData?.find((x: any) => x.Name === itemName);
      const foundAmount = collectableEntry?.Data?.Amount ?? 0;
      return { unlocked: foundAmount > 0 };
    },

    relic: (relicName: string) => {
      const relics = (playerData as any)?.Relics?.savedData || [];
      const foundRelic = relics.find((r: any) => r?.Name === relicName);
      return { unlocked: !!foundRelic?.Data?.IsCollected };
    },

    materium: (materiumName: string) => {
      const materium = (playerData as any)?.MateriumCollected?.savedData || [];
      const foundMaterium = materium.find((m: any) => m?.Name === materiumName);
      return { unlocked: !!foundMaterium?.Data?.IsCollected || !!foundMaterium?.Data?.HasSeenInRelicBoard };
    },

    quill: (quillFlag: string) => {
      const unlocked = !!playerData[quillFlag];
      return { unlocked, returnValue: unlocked ? playerData["QuillState"] : 0 };
    },

    quest: (questName: string) => {
      const questEntry = (playerData as any).QuestCompletionData?.savedData?.find((x: any) => x.Name === questName);
      return { unlocked: questEntry?.Data?.IsCompleted ?? false };
    },

    sceneDataBool: ([sceneName, id]: [string, string]) => {
      const sceneData = (saveData as any).sceneData || {};
      const allEntries = sceneData.persistentBools?.serializedList || [];
      const foundEntry = allEntries.find((x: any) => x.SceneName === sceneName && x.ID === id);
      return { unlocked: Boolean(foundEntry?.Value) };
    },

    sceneDataInt: ([sceneName, id]: [string, string]) => {
      const sceneData = (saveData as any).sceneData || {};
      const allEntries = sceneData.persistentInts?.serializedList || [];
      const foundEntry = allEntries.find((x: any) => x.SceneName === sceneName && x.ID === id);
      return { unlocked: Boolean(foundEntry?.Value) };
    },

    sceneVisited: (sceneName: string) => {
      return { unlocked: !!(playerData as any)?.scenesVisited?.includes(sceneName) };
    },

    mementoDeposit: (mementoName: string) => {
      const mementos = (playerData as any)?.MementosDeposited?.savedData ?? [];
      const unlocked = mementos.some((entry: any) => entry.Name === mementoName && entry.Data?.IsDeposited);
      return { unlocked };
    },
  };
  // @ts-expect-error - Dynamic function call based on parsing type
  return parsers[itemParsingInfo.type](itemParsingInfo.internalId);
}

export function isItemInCurrentGameMode(
  item: { onlyFoundInClassicMode?: boolean; onlyFoundInSteelSoulMode?: boolean },
  saveData: any
): boolean {
  const playerData = (saveData as any).playerData ?? {};
  const isCurrentModeClassic = playerData.permadeathMode === 0;

  const itemIsNotInCurrentGameMode =
    (item.onlyFoundInSteelSoulMode && isCurrentModeClassic) || (item.onlyFoundInClassicMode && !isCurrentModeClassic);

  return !itemIsNotInCurrentGameMode;
}
/* eslint-enable @typescript-eslint/no-explicit-any */
