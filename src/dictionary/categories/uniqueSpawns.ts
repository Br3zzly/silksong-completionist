import type { TrackableCategory } from "../types";

export const uniqueSpawns: TrackableCategory = {
  name: "Unique Spawns",
  description: "Special enemies and anomalies that do not respawn once defeated.",
  sections: [
    {
      name: "Rhinogrunds",
      description:
        "Long-horned beast of Pharloom's lowlands. It is only possible to encounter three Rhinogrunds per save.",
      items: [
        {
          name: "Rhinogrund #1",
          whichAct: 1,
          completionDetails:
            "Far Fields (Pilgrim's Rest): Missable. Found towards east, trapped on the opposite side of a gate, repeatedly ramming it to try and escape. To access it, a platforming challenge via a hidden path in the lower-right corner of the region's Bellway station must be completed.",
          parsingInfo: { type: "flag", internalId: "churchRhinoKilled" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480179",
        },
        {
          name: "Rhinogrund #2",
          whichAct: 2,
          completionDetails: "Memorium: Found in the second layer.",
          parsingInfo: { type: "sceneDataBool", internalId: ["Arborium_02", "Rhino"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480193",
        },
        {
          name: "Rhinogrund #3",
          whichAct: 3,
          completionDetails: "Far Fields: Found in the tunnel area that connects Deep Docks and Far Fields",
          parsingInfo: { type: "sceneDataBool", internalId: ["Bone_East_02b", "Rhino"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479820",
        },
      ],
    },
    {
      name: "Covetous Pilgrims",
      description:
        "Strong bugs replete with rosaries. It is only possible to encounter three Covetous Pilgrims per save.",
      items: [
        {
          name: "Covetous Pilgrim #1",
          whichAct: 1,
          completionDetails: "Shellwood: In the room with the grave.",
          parsingInfo: { type: "sceneDataBool", internalId: ["Shellgrave", "Rosary Pilgrim"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478300",
        },
        {
          name: "Covetous Pilgrim #2",
          whichAct: 2,
          completionDetails: "Bilewater: Found in the room where Shakra was, after defeating Groal the Great.",
          parsingInfo: { type: "sceneDataBool", internalId: ["Shadow_23", "Rosary Pilgrim"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480194",
        },
        {
          name: "Covetous Pilgrim #3",
          whichAct: 3,
          completionDetails:
            "Moss Grotto (Bonegrave): Found outside the Chapel of the Wanderer during the first visit in ACT 3",
          parsingInfo: { type: "sceneDataBool", internalId: ["Bonegrave", "Rosary Pilgrim"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480387",
        },
      ],
    },
    {
      name: "Shardillards",
      description: "Devious ambushers that pose as fossils.",
      items: [
        {
          name: "Shardillard #1",
          whichAct: 1,
          completionDetails:
            'Deep Docks: Found hanging under a floating platform in the long hall beneath the "Swift Step" room.',
          parsingInfo: { type: "sceneDataInt", internalId: ["Bone_East_03", "Shell Fossil Mimic", -1] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480168",
        },
        {
          name: "Shardillard #2",
          whichAct: 1,
          completionDetails: "Greymoor: Found in the secret tunnel beneath the entrance to Styx's room.",
          parsingInfo: { type: "sceneDataInt", internalId: ["Greymoor_17", "Shell Fossil Mimic", -1] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479496",
        },
        {
          name: "Shardillard #3",
          whichAct: 1,
          completionDetails:
            "The Marrow: Found in the long room to the right of the Bellway bench, to the left of a magnetite platform.",
          parsingInfo: { type: "sceneDataInt", internalId: ["Bone_14", "Shell Fossil Mimic", -1] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480160",
        },
        {
          name: "Shardillard #4",
          whichAct: 1,
          completionDetails: "Far Fields: Found on the upper side of a spinal bone platform.",
          parsingInfo: { type: "sceneDataInt", internalId: ["Bone_East_14", "Shell Fossil Mimic", -1] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479731",
        },
        {
          name: "Shardillard #5",
          whichAct: 2,
          completionDetails:
            "Sands of Karak: Found near the eastmost bench, go left, drop down and look for a suspicious-looking Shell Shard cache.",
          parsingInfo: { type: "sceneDataInt", internalId: ["Coral_38", "Shell Fossil Mimic", -1] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479213",
        },
        {
          name: "Shardillard #6",
          whichAct: 2,
          completionDetails:
            "The Marrow: Found at the highest point, attached to the top left wall. Only appears after beating Lace in The Cradle.",
          parsingInfo: { type: "sceneDataInt", internalId: ["Bone_06", "Shell Fossil Mimic AppearVariant", -1] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480162",
        },
      ],
    },
    {
      name: "Void Masses",
      description: "Clumps of creatures bound together by void, found all over Pharloom after entering ACT 3.",
      items: [
        // Mosshome
        {
          name: "Void Mass #1",
          whichAct: 3,
          completionDetails: "Moss Grotto (Mosshome)",
          parsingInfo: { type: "sceneDataBool", internalId: ["Mosstown_02", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479821",
        },
        // Weavenest Atla
        {
          name: "Void Mass #2",
          whichAct: 3,
          completionDetails: "Weavenest Atla",
          parsingInfo: { type: "sceneDataBool", internalId: ["Weave_03", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480255",
        },
        // The Marrow
        {
          name: "Void Mass #3",
          whichAct: 3,
          completionDetails: "The Marrow",
          parsingInfo: { type: "sceneDataBool", internalId: ["Bone_02", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480158",
        },
        {
          name: "Void Mass #4",
          whichAct: 3,
          completionDetails: "The Marrow",
          parsingInfo: { type: "sceneDataBool", internalId: ["Bone_04", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479997",
        },
        {
          name: "Void Mass #5",
          whichAct: 3,
          completionDetails: "The Marrow",
          parsingInfo: { type: "sceneDataBool", internalId: ["Bone_07", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479620",
        },
        {
          name: "Void Mass #6",
          whichAct: 3,
          completionDetails: "The Marrow",
          parsingInfo: { type: "sceneDataBool", internalId: ["Bone_09", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479534",
        },
        // Deep Docks
        {
          name: "Void Mass #7",
          whichAct: 3,
          completionDetails: "Deep Docks",
          parsingInfo: { type: "sceneDataBool", internalId: ["Bone_East_03", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480157",
        },
        {
          name: "Void Mass #8",
          whichAct: 3,
          completionDetails: "Deep Docks",
          parsingInfo: { type: "sceneDataBool", internalId: ["Dock_03c", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480823",
        },
        {
          name: "Void Mass #9",
          whichAct: 3,
          completionDetails: "Deep Docks",
          parsingInfo: { type: "sceneDataBool", internalId: ["Dock_04", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479458",
        },
        // Hunter's March
        {
          name: "Void Mass #10",
          whichAct: 3,
          completionDetails: "Hunter's March",
          parsingInfo: { type: "sceneDataBool", internalId: ["Ant_04_left", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479533",
        },
        {
          name: "Void Mass #11",
          whichAct: 3,
          completionDetails: "Hunter's March",
          parsingInfo: { type: "sceneDataBool", internalId: ["Ant_05b", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479535",
        },
        // Far Fields
        {
          name: "Void Mass #12",
          whichAct: 3,
          completionDetails: "Far Fields",
          parsingInfo: { type: "sceneDataBool", internalId: ["Bone_East_02b", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479537",
        },
        {
          name: "Void Mass #13",
          whichAct: 3,
          completionDetails: "Far Fields",
          parsingInfo: { type: "sceneDataBool", internalId: ["Bone_East_05", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479536",
        },
        {
          name: "Void Mass #14",
          whichAct: 3,
          completionDetails: "Far Fields",
          parsingInfo: { type: "sceneDataBool", internalId: ["Bone_East_17", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480172",
        },
        {
          name: "Void Mass #15",
          whichAct: 3,
          completionDetails: "Far Fields",
          parsingInfo: { type: "sceneDataBool", internalId: ["Bone_East_26", "Black_Thread_Core_Citadel"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479583",
        },
        // Greymoor
        {
          name: "Void Mass #16",
          whichAct: 3,
          completionDetails: "Greymoor",
          parsingInfo: { type: "sceneDataBool", internalId: ["Greymoor_02", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479532",
        },
        {
          name: "Void Mass #17",
          whichAct: 3,
          completionDetails: "Greymoor",
          parsingInfo: { type: "sceneDataBool", internalId: ["Greymoor_07", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479541",
        },
        {
          name: "Void Mass #18",
          whichAct: 3,
          completionDetails: "Greymoor",
          parsingInfo: { type: "sceneDataBool", internalId: ["Greymoor_11", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479540",
        },
        {
          name: "Void Mass #19",
          whichAct: 3,
          completionDetails: "Greymoor",
          parsingInfo: { type: "sceneDataBool", internalId: ["Greymoor_12", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480267",
        },
        {
          name: "Void Mass #20",
          whichAct: 3,
          completionDetails: "Greymoor",
          parsingInfo: { type: "sceneDataBool", internalId: ["Greymoor_16", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480266",
        },
        // Shellwood
        {
          name: "Void Mass #21",
          whichAct: 3,
          completionDetails: "Shellwood",
          parsingInfo: { type: "sceneDataBool", internalId: ["Shellwood_01b", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480137",
        },
        {
          name: "Void Mass #22",
          whichAct: 3,
          completionDetails: "Shellwood",
          parsingInfo: { type: "sceneDataBool", internalId: ["Shellwood_02", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479910",
        },
        {
          name: "Void Mass #23",
          whichAct: 3,
          completionDetails: "Shellwood",
          parsingInfo: { type: "sceneDataBool", internalId: ["Shellwood_04b", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479656",
        },
        {
          name: "Void Mass #24",
          whichAct: 3,
          completionDetails: "Shellwood",
          parsingInfo: { type: "sceneDataBool", internalId: ["Shellwood_26", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480197",
        },
        {
          name: "Void Mass #25",
          whichAct: 3,
          completionDetails: "Shellwood",
          parsingInfo: { type: "sceneDataBool", internalId: ["Shellwood_15", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480161",
        },
        // Blasted Steps
        {
          name: "Void Mass #26",
          whichAct: 3,
          completionDetails: "Blasted Steps",
          parsingInfo: { type: "sceneDataBool", internalId: ["Coral_11", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479455",
        },
        {
          name: "Void Mass #27",
          whichAct: 3,
          completionDetails: "Blasted Steps",
          parsingInfo: { type: "sceneDataBool", internalId: ["Coral_12", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479732",
        },
        {
          name: "Void Mass #28",
          whichAct: 3,
          completionDetails: "Blasted Steps",
          parsingInfo: { type: "sceneDataBool", internalId: ["Coral_32", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479818",
        },
        // Sinner's Road
        {
          name: "Void Mass #29",
          whichAct: 3,
          completionDetails: "Sinner's Road",
          parsingInfo: { type: "sceneDataBool", internalId: ["Dust_03", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480623",
        },
        {
          name: "Void Mass #30 & #31",
          whichAct: 3,
          completionDetails: "Sinner's Road",
          parsingInfo: { type: "flag", internalId: "silkFarmAbyssCoresCleared" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480469",
        },
        // Bilewater
        {
          name: "Void Mass #32",
          whichAct: 3,
          completionDetails: "Bilewater",
          parsingInfo: { type: "sceneDataBool", internalId: ["Shadow_05", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480825",
        },
        // Underworks
        {
          name: "Void Mass #33",
          whichAct: 3,
          completionDetails: "Underworks",
          parsingInfo: { type: "sceneDataBool", internalId: ["Under_02", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479745",
        },
        {
          name: "Void Mass #34",
          whichAct: 3,
          completionDetails: "Underworks",
          parsingInfo: { type: "sceneDataBool", internalId: ["Under_05", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479838",
        },
        {
          name: "Void Mass #35",
          whichAct: 3,
          completionDetails: "Underworks",
          parsingInfo: { type: "sceneDataBool", internalId: ["Under_18", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479956",
        },
        {
          name: "Void Mass #36",
          whichAct: 3,
          completionDetails: "Underworks",
          parsingInfo: { type: "sceneDataBool", internalId: ["Under_27", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479734",
        },
        // Choral Chambers
        {
          name: "Void Mass #37",
          whichAct: 3,
          completionDetails: "Choral Chambers",
          parsingInfo: { type: "sceneDataBool", internalId: ["Song_01", "Black_Thread_Core_Citadel"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479851",
        },
        {
          name: "Void Mass #38",
          whichAct: 3,
          completionDetails: "Choral Chambers",
          parsingInfo: { type: "sceneDataBool", internalId: ["Song_04", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479581",
        },
        {
          name: "Void Mass #39",
          whichAct: 3,
          completionDetails: "Choral Chambers",
          parsingInfo: { type: "sceneDataBool", internalId: ["Song_05", "Black_Thread_Core_Citadel"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479457",
        },
        {
          name: "Void Mass #40",
          whichAct: 3,
          completionDetails: "Choral Chambers",
          parsingInfo: { type: "sceneDataBool", internalId: ["Song_15", "Black_Thread_Core_Citadel"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479519",
        },
        {
          name: "Void Mass #41",
          whichAct: 3,
          completionDetails: "Choral Chambers",
          parsingInfo: { type: "sceneDataBool", internalId: ["Song_17", "Black_Thread_Core_Citadel"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479538",
        },
        {
          name: "Void Mass #42",
          whichAct: 3,
          completionDetails: "Choral Chambers",
          parsingInfo: { type: "sceneDataBool", internalId: ["Song_27", "Black_Thread_Core_Citadel"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479459",
        },
        // Whispering Vaults
        {
          name: "Void Mass #43",
          whichAct: 3,
          completionDetails: "Whispering Vaults",
          parsingInfo: { type: "sceneDataBool", internalId: ["Library_04", "Black_Thread_Core_Citadel"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479584",
        },
        {
          name: "Void Mass #44",
          whichAct: 3,
          completionDetails: "Whispering Vaults",
          parsingInfo: { type: "sceneDataBool", internalId: ["Library_04", "Black_Thread_Core_Citadel (1)"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479531",
        },
        {
          name: "Void Mass #45",
          whichAct: 3,
          completionDetails: "Whispering Vaults",
          parsingInfo: { type: "sceneDataBool", internalId: ["Library_06", "Black_Thread_Core_Citadel"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479658",
        },
        // Cogwork Core
        {
          name: "Void Mass #46",
          whichAct: 3,
          completionDetails: "Cogwork Core",
          parsingInfo: { type: "sceneDataBool", internalId: ["Cog_04", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479520",
        },
        // High Halls
        {
          name: "Void Mass #47",
          whichAct: 3,
          completionDetails: "High Halls",
          parsingInfo: { type: "sceneDataBool", internalId: ["Hang_03", "Black_Thread_Core_Citadel"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479539",
        },
        {
          name: "Void Mass #48",
          whichAct: 3,
          completionDetails: "High Halls",
          parsingInfo: { type: "sceneDataBool", internalId: ["Hang_13", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479674",
        },
      ],
    },
  ],
};
