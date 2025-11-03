import type { TrackableCategory } from "./types";
import { normalizeDictionary } from "./normalizer";

import { stats } from "./categories/stats";
import { maskShards } from "./categories/maskShards";
import { spoolFragments } from "./categories/spoolFragments";
import { abilities } from "./categories/abilities";
import { upgrades } from "./categories/upgrades";
import { tools } from "./categories/tools";
import { crests } from "./categories/crests";
import { fleas } from "./categories/fleas";
import { relics } from "./categories/relics";
import { keys } from "./categories/keys";
import { memoryLockets } from "./categories/memoryLockets";
import { craftmetals } from "./categories/craftmetals";
import { mossberries } from "./categories/mossberries";
import { paleOil } from "./categories/paleOil";
import { silkeaters } from "./categories/silkeaters";
import { bellhome } from "./categories/bellhome";
import { materium } from "./categories/materium";
import { mementos } from "./categories/mementos";
import { cachesAndSecrets } from "./categories/cachesAndSecrets";
import { mappingSupplies } from "./categories/mappingSupplies";
import { bellways } from "./categories/bellways";
import { ventricaStations } from "./categories/ventricaStations";
import { quests } from "./categories/quests";
import { uniqueSpawns } from "./categories/uniqueSpawns";
import { bosses } from "./categories/bosses";
import { huntersJournal } from "./categories/huntersJournal";

export const ALL_TRACKED_CATEGORIES = [
  stats,
  maskShards,
  spoolFragments,
  abilities,
  upgrades,
  tools,
  crests,
  fleas,
  relics,
  keys,
  memoryLockets,
  craftmetals,
  mossberries,
  paleOil,
  silkeaters,
  bellhome,
  materium,
  mementos,
  cachesAndSecrets,
  mappingSupplies,
  bellways,
  ventricaStations,
  quests,
  uniqueSpawns,
  bosses,
  huntersJournal,
] as TrackableCategory[];

export const NORMALISED_DICT_MAP = normalizeDictionary(ALL_TRACKED_CATEGORIES);

export type { DictMapWithSaveData, NormalizedItem, NormalizedCategory, NormalizedSection, ItemPath } from "./types";
