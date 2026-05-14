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
        // Moss Grotto
        {
          name: "Void Mass · Moss Grotto",
          whichAct: 3,
          completionDetails: "Moss Grotto (Mosshome)",
          parsingInfo: { type: "sceneDataBool", internalId: ["Mosstown_02", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479821",
        },
        // Weavenest Atla
        {
          name: "Void Mass · Weavenest Atla",
          whichAct: 3,
          completionDetails: "Weavenest Atla",
          parsingInfo: { type: "sceneDataBool", internalId: ["Weave_03", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480255",
        },
        // The Marrow
        {
          name: "Void Mass · The Marrow #1",
          whichAct: 3,
          completionDetails: "The Marrow",
          parsingInfo: { type: "sceneDataBool", internalId: ["Bone_02", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480158",
        },
        {
          name: "Void Mass · The Marrow #2",
          whichAct: 3,
          completionDetails: "The Marrow",
          parsingInfo: { type: "sceneDataBool", internalId: ["Bone_04", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479997",
        },
        {
          name: "Void Mass · The Marrow #3",
          whichAct: 3,
          completionDetails: "The Marrow",
          parsingInfo: { type: "sceneDataBool", internalId: ["Bone_07", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479620",
        },
        {
          name: "Void Mass · The Marrow #4",
          whichAct: 3,
          completionDetails: "The Marrow",
          parsingInfo: { type: "sceneDataBool", internalId: ["Bone_09", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479534",
        },
        // Deep Docks
        {
          name: "Void Mass · Deep Docks #1",
          whichAct: 3,
          completionDetails: "Deep Docks",
          parsingInfo: { type: "sceneDataBool", internalId: ["Bone_East_03", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480157",
        },
        {
          name: "Void Mass · Deep Docks #2",
          whichAct: 3,
          completionDetails: "Deep Docks",
          parsingInfo: { type: "sceneDataBool", internalId: ["Dock_04", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479458",
        },

        /*
         ** The following Void Mass (which was not present in Steel Soul Mode) only appeared in Classic Mode.
         ** It was removed in one of the game updates leading up to 1.0.3.0000.
         ** Hat-tip: @RS2-CN3 (for the find), and @cionx (for the sleuthing and details)
         */
        // {
        //   name: "Void Mass · Deep Docks #3", // Classic Mode only
        //   whichAct: 3,
        //   completionDetails: "Deep Docks",
        //   parsingInfo: { type: "sceneDataBool", internalId: ["Dock_03c", "Black_Thread_Core"] },
        //   mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480823",
        //   onlyFoundInClassicMode: true,
        // },

        // Was incorrectly categorised as a Far Fields (#2) Void Mass, thanks to @cionx (for the find)
        {
          name: "Void Mass · Deep Docks #3",
          whichAct: 3,
          completionDetails: "Deep Docks",
          parsingInfo: { type: "sceneDataBool", internalId: ["Bone_East_05", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479536",
        },

        // Hunter's March
        {
          name: "Void Mass · Hunter's March #1",
          whichAct: 3,
          completionDetails: "Hunter's March",
          parsingInfo: { type: "sceneDataBool", internalId: ["Ant_04_left", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479533",
        },
        {
          name: "Void Mass · Hunter's March #2",
          whichAct: 3,
          completionDetails: "Hunter's March",
          parsingInfo: { type: "sceneDataBool", internalId: ["Ant_05b", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479535",
        },
        // Far Fields
        {
          name: "Void Mass · Far Fields #1",
          whichAct: 3,
          completionDetails: "Far Fields",
          parsingInfo: { type: "sceneDataBool", internalId: ["Bone_East_02b", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479537",
        },
        {
          name: "Void Mass · Far Fields #2",
          whichAct: 3,
          completionDetails: "Far Fields",
          parsingInfo: { type: "sceneDataBool", internalId: ["Bone_East_17", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480172",
        },
        {
          name: "Void Mass · Far Fields #3",
          whichAct: 3,
          completionDetails: "Far Fields",
          parsingInfo: { type: "sceneDataBool", internalId: ["Bone_East_26", "Black_Thread_Core_Citadel"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479583",
        },
        // Greymoor
        {
          name: "Void Mass · Greymoor #1",
          whichAct: 3,
          completionDetails: "Greymoor",
          parsingInfo: { type: "sceneDataBool", internalId: ["Greymoor_02", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479532",
        },
        {
          name: "Void Mass · Greymoor #2",
          whichAct: 3,
          completionDetails: "Greymoor",
          parsingInfo: { type: "sceneDataBool", internalId: ["Greymoor_07", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479541",
        },
        {
          name: "Void Mass · Greymoor #3",
          whichAct: 3,
          completionDetails: "Greymoor",
          parsingInfo: { type: "sceneDataBool", internalId: ["Greymoor_11", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479540",
        },
        {
          name: "Void Mass · Greymoor #4",
          whichAct: 3,
          completionDetails: "Greymoor",
          parsingInfo: { type: "sceneDataBool", internalId: ["Greymoor_12", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480267",
        },
        {
          name: "Void Mass · Greymoor #5",
          whichAct: 3,
          completionDetails: "Greymoor",
          parsingInfo: { type: "sceneDataBool", internalId: ["Greymoor_16", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480266",
        },
        // Shellwood
        {
          name: "Void Mass · Shellwood #1",
          whichAct: 3,
          completionDetails: "Shellwood",
          parsingInfo: { type: "sceneDataBool", internalId: ["Shellwood_01b", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480137",
        },
        {
          name: "Void Mass · Shellwood #2",
          whichAct: 3,
          completionDetails: "Shellwood",
          parsingInfo: { type: "sceneDataBool", internalId: ["Shellwood_02", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479910",
        },
        {
          name: "Void Mass · Shellwood #3",
          whichAct: 3,
          completionDetails: "Shellwood",
          parsingInfo: { type: "sceneDataBool", internalId: ["Shellwood_04b", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479656",
        },
        {
          name: "Void Mass · Shellwood #4",
          whichAct: 3,
          completionDetails: "Shellwood",
          parsingInfo: { type: "sceneDataBool", internalId: ["Shellwood_26", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480197",
        },
        {
          name: "Void Mass · Shellwood #5",
          whichAct: 3,
          completionDetails: "Shellwood",
          parsingInfo: { type: "sceneDataBool", internalId: ["Shellwood_15", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480161",
        },
        {
          name: "Void Mass · Shellwood #6", // Shellwood (Near Nyleth's Shrine)
          whichAct: 3,
          completionDetails: "Shellwood: Right before entering Seth's arena (accessible through Grand Gate).",
          parsingInfo: { type: "sceneDataBool", internalId: ["Under_27", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479734",
        },
        // Blasted Steps
        {
          name: "Void Mass · Blasted Steps #1",
          whichAct: 3,
          completionDetails: "Blasted Steps",
          parsingInfo: { type: "sceneDataBool", internalId: ["Coral_11", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479455",
        },
        {
          name: "Void Mass · Blasted Steps #2",
          whichAct: 3,
          completionDetails: "Blasted Steps",
          parsingInfo: { type: "sceneDataBool", internalId: ["Coral_12", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479732",
        },
        {
          name: "Void Mass · Blasted Steps #3",
          whichAct: 3,
          completionDetails: "Blasted Steps",
          parsingInfo: { type: "sceneDataBool", internalId: ["Coral_32", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479818",
        },
        // Sinner's Road
        {
          name: "Void Mass · Sinner's Road",
          whichAct: 3,
          completionDetails: "Sinner's Road",
          parsingInfo: { type: "sceneDataBool", internalId: ["Dust_03", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480623",
        },
        {
          name: "Void Mass · Styx's Nest #1 & #2", // Classic Mode only
          whichAct: 3,
          completionDetails: "Sinner's Road (Styx's Nest)",
          parsingInfo: { type: "flag", internalId: "silkFarmAbyssCoresCleared" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480469",
          onlyFoundInClassicMode: true,
        },
        // Bilewater
        {
          name: "Void Mass · Bilewater",
          whichAct: 3,
          completionDetails: "Bilewater",
          parsingInfo: { type: "sceneDataBool", internalId: ["Shadow_05", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480825",
        },
        // Underworks
        {
          name: "Void Mass · Underworks #1",
          whichAct: 3,
          completionDetails: "Underworks",
          parsingInfo: { type: "sceneDataBool", internalId: ["Under_02", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479745",
        },
        {
          name: "Void Mass · Underworks #2",
          whichAct: 3,
          completionDetails: "Underworks",
          parsingInfo: { type: "sceneDataBool", internalId: ["Under_05", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479838",
        },
        {
          name: "Void Mass · Underworks #3",
          whichAct: 3,
          completionDetails: "Underworks",
          parsingInfo: { type: "sceneDataBool", internalId: ["Under_18", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479956",
        },
        // Choral Chambers
        {
          name: "Void Mass · Choral Chambers #1",
          whichAct: 3,
          completionDetails: "Choral Chambers",
          parsingInfo: { type: "sceneDataBool", internalId: ["Song_01", "Black_Thread_Core_Citadel"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479851",
        },
        {
          name: "Void Mass · Choral Chambers #2",
          whichAct: 3,
          completionDetails: "Choral Chambers",
          parsingInfo: { type: "sceneDataBool", internalId: ["Song_04", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479581",
        },
        {
          name: "Void Mass · Choral Chambers #3",
          whichAct: 3,
          completionDetails: "Choral Chambers",
          parsingInfo: { type: "sceneDataBool", internalId: ["Song_05", "Black_Thread_Core_Citadel"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479457",
        },
        {
          name: "Void Mass · Choral Chambers #4",
          whichAct: 3,
          completionDetails: "Choral Chambers",
          parsingInfo: { type: "sceneDataBool", internalId: ["Song_15", "Black_Thread_Core_Citadel"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479519",
        },
        {
          name: "Void Mass · Choral Chambers #5",
          whichAct: 3,
          completionDetails: "Choral Chambers",
          parsingInfo: { type: "sceneDataBool", internalId: ["Song_17", "Black_Thread_Core_Citadel"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479538",
        },
        {
          name: "Void Mass · Choral Chambers #6",
          whichAct: 3,
          completionDetails: "Choral Chambers",
          parsingInfo: { type: "sceneDataBool", internalId: ["Song_27", "Black_Thread_Core_Citadel"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479459",
        },
        // Whispering Vaults
        {
          name: "Void Mass · Whispering Vaults #1",
          whichAct: 3,
          completionDetails: "Whispering Vaults",
          parsingInfo: { type: "sceneDataBool", internalId: ["Library_04", "Black_Thread_Core_Citadel"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479584",
        },
        {
          name: "Void Mass · Whispering Vaults #2",
          whichAct: 3,
          completionDetails: "Whispering Vaults",
          parsingInfo: { type: "sceneDataBool", internalId: ["Library_04", "Black_Thread_Core_Citadel (1)"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479531",
        },
        {
          name: "Void Mass · Whispering Vaults #3",
          whichAct: 3,
          completionDetails: "Whispering Vaults",
          parsingInfo: { type: "sceneDataBool", internalId: ["Library_06", "Black_Thread_Core_Citadel"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479658",
        },
        // Cogwork Core
        {
          name: "Void Mass · Cogwork Core",
          whichAct: 3,
          completionDetails: "Cogwork Core",
          parsingInfo: { type: "sceneDataBool", internalId: ["Cog_04", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479520",
        },
        // High Halls
        {
          name: "Void Mass · High Halls #1",
          whichAct: 3,
          completionDetails: "High Halls",
          parsingInfo: { type: "sceneDataBool", internalId: ["Hang_03", "Black_Thread_Core_Citadel"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479539",
        },
        {
          name: "Void Mass · High Halls #2",
          whichAct: 3,
          completionDetails: "High Halls",
          parsingInfo: { type: "sceneDataBool", internalId: ["Hang_13", "Black_Thread_Core"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479674",
        },
      ],
    },
  ],
};
