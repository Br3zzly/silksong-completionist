import type { TrackableCategory, NormalizedSection, NormalizedItem } from "../types";
import { QuillsDescription } from "@/components/features/TabContainer/descriptions";

export const mappingSupplies: TrackableCategory = {
  name: "Mapping Supplies",
  description: "Area maps (and supplies) that reveal the layouts (and secrets) of different regions in Pharloom.",
  sections: [
    {
      name: "Quills",
      descriptionMarkup: (showSpoilers?: boolean, sectionData?: unknown) => (
        <QuillsDescription
          showSpoilers={showSpoilers}
          sectionData={sectionData as NormalizedSection & { items: NormalizedItem[] }}
        />
      ),
      items: [
        {
          name: "Quill",
          whichAct: 1,
          completionDetails: "Sold by Shakra for 50 Rosaries, initially.",
          parsingInfo: { type: "quill", internalId: "hasQuill" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477852",
        },
      ],
    },
    {
      name: "Map Pins",
      description: "Markers purchased from Shakra to mark key locations on the map.",
      items: [
        {
          name: "Bench Pin",
          whichAct: 1,
          completionDetails:
            "Sold by Shakra for 60 Rosaries. These pins will mark benches and other rest spots on your map.",
          parsingInfo: { type: "flag", internalId: "hasPinBench" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477850",
        },
        {
          name: "Bellway Pins",
          whichAct: 1,
          completionDetails: "Sold by Shakra for 60 Rosaries. These pins will mark stations on your map.",
          parsingInfo: { type: "flag", internalId: "hasPinStag" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477850",
        },
        {
          name: "Shell Marker",
          whichAct: 1,
          completionDetails:
            'Sold by Shakra for 40 Rosaries. In Shakra\'s words: "These markers I have modelled after the sheen of my own shell. Perhaps you will think of me when you use them."',
          parsingInfo: { type: "flag", internalId: "hasMarker_a" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477850",
        },
        {
          name: "Vendor Pins",
          whichAct: 1,
          completionDetails: "Sold by Shakra for 80 Rosaries. These pins will mark vendors on your map.",
          parsingInfo: { type: "flag", internalId: "hasPinShop" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477904",
        },
        {
          name: "Ring Marker",
          whichAct: 1,
          completionDetails:
            'Sold by Shakra for 40 Rosaries. In Shakra\'s words: "With these I often mark the locations of worthy foes."',
          parsingInfo: { type: "flag", internalId: "hasMarker_b" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477904",
        },
        {
          name: "Hunt Marker",
          whichAct: 1,
          completionDetails:
            'Sold by Shakra for 60 Rosaries. In Shakra\'s words: "The shell of the red-hunters makes for a vivid marker indeed."',
          parsingInfo: { type: "flag", internalId: "hasMarker_c" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479060",
        },
        {
          name: "Dark Marker",
          whichAct: 1,
          completionDetails:
            'Sold by Shakra for 90 Rosaries. In Shakra\'s words: "This dark-shell material is cold to the touch, and more resilient than it looks."',
          parsingInfo: { type: "flag", internalId: "hasMarker_d" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479054",
        },
        {
          name: "Bronze Marker",
          whichAct: 1,
          completionDetails:
            'Sold by Shakra for 120 Rosaries. In Shakra\'s words: "These I have fashioned from the husks of old bells. A hard task to make, so the cost reflects the extra effort."',
          parsingInfo: { type: "flag", internalId: "hasMarker_e" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479054",
        },
        {
          name: "Ventrica Pins",
          whichAct: 2,
          completionDetails: "Sold by Shakra for 80 Rosaries. Marks the mysterious transport tubes of The Citadel.",
          parsingInfo: { type: "flag", internalId: "hasPinTube" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479054",
        },
      ],
    },
    {
      name: "Maps",
      description: "Maps for various regions in Pharloom, sold by Shakra or found in the world.",
      items: [
        {
          name: "Mosslands",
          whichAct: 1,
          completionDetails: "Sold by Shakra for 40 Rosaries.",
          parsingInfo: { type: "flag", internalId: "HasMossGrottoMap" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479514",
        },
        {
          name: "The Marrow",
          whichAct: 1,
          completionDetails: "Sold by Shakra for 50 Rosaries.",
          parsingInfo: { type: "flag", internalId: "HasBoneforestMap" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479515",
        },
        {
          name: "Deep Docks",
          whichAct: 1,
          completionDetails: "Sold by Shakra for 50 Rosaries.",
          parsingInfo: { type: "flag", internalId: "HasDocksMap" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479516",
        },
        {
          name: "Hunter's March",
          whichAct: 1,
          completionDetails: "Sold by Shakra for 70 Rosaries.",
          parsingInfo: { type: "flag", internalId: "HasHuntersNestMap" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479518",
        },
        {
          name: "Far Fields",
          whichAct: 1,
          completionDetails: "Sold by Shakra for 50 Rosaries.",
          parsingInfo: { type: "flag", internalId: "HasWildsMap" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479517",
        },
        {
          name: "Greymoor",
          whichAct: 1,
          completionDetails: "Sold by Shakra for 70 Rosaries.",
          parsingInfo: { type: "flag", internalId: "HasGreymoorMap" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479527",
        },
        {
          name: "Bellhart",
          whichAct: 1,
          completionDetails: "Sold by Shakra for 40 Rosaries, when you find her in Shellwoods onwards.",
          parsingInfo: { type: "flag", internalId: "HasBellhartMap" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479529",
        },
        {
          name: "Shellwood",
          whichAct: 1,
          completionDetails: "Sold by Shakra for 70 Rosaries.",
          parsingInfo: { type: "flag", internalId: "HasShellwoodMap" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479530",
        },
        {
          name: "Wormways",
          whichAct: 1,
          completionDetails: "Sold by Shakra for 70 Rosaries.",
          parsingInfo: { type: "flag", internalId: "HasCrawlMap" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479523",
        },
        {
          name: "Weavenest Atla",
          whichAct: 1,
          completionDetails:
            "Open Needolin Door to this area, then hit two glowing cylinders at the end of the corridor.",
          parsingInfo: { type: "flag", internalId: "HasWeavehomeMap" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478227",
        },
        {
          name: "Blasted Steps",
          whichAct: 1,
          completionDetails: "Sold by Shakra for 70 Rosaries.",
          parsingInfo: { type: "flag", internalId: "HasJudgeStepsMap" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479673",
        },
        {
          name: "Sinner's Road",
          whichAct: 1,
          completionDetails: "Sold by Shakra for 90 Rosaries.",
          parsingInfo: { type: "flag", internalId: "HasDustpensMap" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479526",
        },
        {
          name: "Grand Gate",
          whichAct: 2,
          completionDetails: "Purchased for 40 Rosaries from a machine displaying a model of the Citadel.",
          parsingInfo: { type: "flag", internalId: "HasSongGateMap" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478548",
        },
        {
          name: "Underworks",
          whichAct: 2,
          completionDetails: "Acquired from an interactable wooden board in a dimly lit room.",
          parsingInfo: { type: "flag", internalId: "HasCitadelUnderstoreMap" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478551",
        },
        {
          name: "Choral Chambers",
          whichAct: 2,
          completionDetails: "Purchased for 70 Rosaries from a machine displaying a model of the Citadel.",
          parsingInfo: { type: "flag", internalId: "HasHallsMap" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479733",
        },
        {
          name: "Whispering Vaults",
          whichAct: 2,
          completionDetails: "Purchased for 70 Rosaries from a machine displaying a model of the Citadel.",
          parsingInfo: { type: "flag", internalId: "HasLibraryMap" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478628",
        },
        {
          name: "Whiteward",
          whichAct: 2,
          completionDetails: "Purchased for 70 Rosaries from a machine displaying a model of the Citadel.",
          parsingInfo: { type: "flag", internalId: "HasWardMap" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478920",
        },
        {
          name: "Cogwork Core",
          whichAct: 2,
          completionDetails: "Acquired from a room above the bench.",
          parsingInfo: { type: "flag", internalId: "HasCogMap" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478612",
        },
        {
          name: "Memorium",
          whichAct: 2,
          completionDetails: "Purchased for 70 Rosaries from a machine displaying a model of the Citadel.",
          parsingInfo: { type: "flag", internalId: "HasArboriumMap" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479107",
        },
        {
          name: "High Halls",
          whichAct: 2,
          completionDetails: "Purchased for 70 Rosaries from a machine displaying a model of the Citadel.",
          parsingInfo: { type: "flag", internalId: "HasHangMap" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478907",
        },
        {
          name: "The Slab",
          whichAct: 1,
          completionDetails: "Drawn on a corpse, found at the end of a secret passage next to the bench.",
          parsingInfo: { type: "flag", internalId: "HasSlabMap" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478468",
        },
        {
          name: "Mount Fay",
          whichAct: 2,
          completionDetails: "Sold by Shakra for 40 Rosaries.",
          parsingInfo: { type: "flag", internalId: "HasPeakMap" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479525",
        },
        {
          name: "Bilewater",
          whichAct: 2,
          completionDetails: "Sold by Shakra for 90 Rosaries.",
          parsingInfo: { type: "flag", internalId: "HasSwampMap" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479528",
        },
        {
          name: "Putrified Ducts",
          whichAct: 2,
          completionDetails: "Found at the top of a room, reached by letting yourself be grabbed by a Barnark.",
          parsingInfo: { type: "flag", internalId: "HasAqueductMap" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479128",
        },
        {
          name: "Sands of Karak",
          whichAct: 2,
          completionDetails: "Sold by Shakra for 90 Rosaries.",
          parsingInfo: { type: "flag", internalId: "HasCoralMap" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479524",
        },
        {
          name: "The Cradle",
          whichAct: 2,
          completionDetails: "Purchased for 70 Rosaries from a machine displaying a model of the Citadel.",
          parsingInfo: { type: "flag", internalId: "HasCradleMap" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479095",
        },
        {
          name: "Verdania",
          whichAct: 3,
          completionDetails: "Found in an old camp at the eastern end alongside a few deceased bugs, and a bench.",
          parsingInfo: { type: "flag", internalId: "HasCloverMap" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479382",
        },
        {
          name: "The Abyss",
          whichAct: 3,
          completionDetails: "Found right on top of the southern bench.",
          parsingInfo: { type: "flag", internalId: "HasAbyssMap" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479282",
        },
      ],
    },
  ],
};
