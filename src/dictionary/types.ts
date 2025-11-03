import type { ReactNode } from "react";

export type FlagParsingInfo = { type: "flag"; internalId: string };
export type FlagAnyOfParsingInfo = { type: "flagAnyOf"; internalId: string[] };
export type FlagMinParsingInfo = { type: "flagMin"; internalId: [string, number] }; // [flag name, required min. value]
export type FlagReturnParsingInfo = { type: "flagReturn"; internalId: string };
export type ToolParsingInfo = { type: "tool"; internalId: string[] };
export type JournalParsingInfo = { type: "journal"; internalId: string };
export type CrestParsingInfo = { type: "crest"; internalId: string };
export type CollectableParsingInfo = { type: "collectable"; internalId: string };
export type RelicParsingInfo = { type: "relic"; internalId: string };
export type MateriumParsingInfo = { type: "materium"; internalId: string };
export type QuillParsingInfo = { type: "quill"; internalId: string };
export type QuestParsingInfo = { type: "quest"; internalId: string };
export type SceneDataBoolParsingInfo = { type: "sceneDataBool"; internalId: [string, string] }; // [scene name, flag name]
export type SceneDataIntParsingInfo = { type: "sceneDataInt"; internalId: [string, string] }; // [scene name, int name]
export type SceneVistedParsingInfo = { type: "sceneVisited"; internalId: string };
export type MementoDepositParsingInfo = { type: "mementoDeposit"; internalId: string };
export type ParsingInfo =
  | FlagParsingInfo
  | FlagAnyOfParsingInfo
  | FlagMinParsingInfo
  | FlagReturnParsingInfo
  | ToolParsingInfo
  | JournalParsingInfo
  | CrestParsingInfo
  | CollectableParsingInfo
  | RelicParsingInfo
  | MateriumParsingInfo
  | QuillParsingInfo
  | QuestParsingInfo
  | SceneDataBoolParsingInfo
  | SceneDataIntParsingInfo
  | SceneVistedParsingInfo
  | MementoDepositParsingInfo;
export type ParsingInfoAnyOf = ParsingInfo[];

export type CategoryItem = {
  name: string;
  section?: string;
  whichAct: 0 | 1 | 2 | 3;
  completionPercent?: number;
  prereqs?: string[];
  completionDetails: string;
  parsingInfo: ParsingInfo | ParsingInfoAnyOf;
  mapLink: string;
  additionalMeta?: {
    killsRequired?: number;
    imageAsset?: string;
    hpAndDamageInfo?: Array<{
      hp: string; // Of the form "50 / 100", where 50 is normal HP and 100 is black-threaded HP
      damageModifiers: number[];
      variantName?: string;
    }>;
    completesEntries?: string[];
    completedByEntry?: string;
  };
  onlyFoundInClassicMode?: boolean;
  onlyFoundInSteelSoulMode?: boolean;
};

export type CategorySection = {
  name?: string;
  description?: string;
  descriptionMarkup?: ReactNode | ((showSpoilers?: boolean, sectionData?: unknown) => ReactNode);
  items: CategoryItem[];
};

export type TrackableCategory = {
  name: string;
  description: string;
  sections: CategorySection[];
};

export type NormalizedItem = CategoryItem & {
  isClassicModeItem: boolean;
  isSteelSoulModeItem: boolean;
  // Dynamic properties added during the "computeDictMapWithSaveData" run
  saveMeta?: {
    unlocked?: boolean;
    value?: unknown;
    journalMeta?: {
      killsAchieved?: number;
      hasBeenEncountered?: boolean;
      hasBeenCompleted?: boolean;
    };
  };
};

export type NormalizedSection = {
  name: string;
  description?: string;
  descriptionMarkup?: ReactNode | ((showSpoilers?: boolean, sectionData?: unknown) => ReactNode);
  totalPercent: number;
  totalCount: number;
  act_0: Record<NormalizedItem["name"], NormalizedItem>;
  act_1: Record<NormalizedItem["name"], NormalizedItem>;
  act_2: Record<NormalizedItem["name"], NormalizedItem>;
  act_3: Record<NormalizedItem["name"], NormalizedItem>;
};

export type NormalizedCategory = {
  name: string;
  description: string;
  totalPercent: number;
  totalCount: number;
  sections: Record<NormalizedSection["name"], NormalizedSection>;
  // Dynamic properties added during the "computeDictMapWithSaveData" run
  saveMeta?: {
    completedPercent?: number;
    completedCount?: number;
    journalMeta?: {
      encountered: number;
      completed: number;
    };
  };
};

export type NormalisedDictMap = Record<NormalizedCategory["name"], NormalizedCategory>;

export type ItemPath = string; // Format: "categoryName.sectionName.act_X.itemName"

export type DictMapWithSaveData = {
  totalCompletedPercent: number;
  allItems: NormalisedDictMap;
  missingItemPaths: ItemPath[];
  completedItemPaths: ItemPath[];
};
