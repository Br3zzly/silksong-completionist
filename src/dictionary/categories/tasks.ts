import type { TrackableCategory } from "../types";

export const tasks: TrackableCategory = {
  name: "Tasks",
  description: "Objectives and Wishes undertaken by Hornet throughout her journey across Pharloom.",
  sections: [
    {
      name: "Main Objectives",
      description: "Main story objectives that Hornet must complete to progress through the game.",
      items: [
        {
          name: "The Great Citadel",
          whichAct: 1,
          completionDetails:
            "Bone Bottom: Ascend through the lands of Pharloom to reach the Citadel at the kingdom's peak.",
          parsingInfo: { type: "quest", internalId: "Citadel Seeker" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477834",
        },
        {
          name: "The Threadspun Town",
          whichAct: 1,
          completionDetails: "Bellhart: Defeat Widow.",
          parsingInfo: { type: "quest", internalId: "The Threadspun Town" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478028",
        },
        {
          name: "Grand Gate",
          whichAct: 1,
          completionDetails: "Blasted Steps (Outside Grand Gate): Awaken the old bells throughout the lands.",
          parsingInfo: { type: "quest", internalId: "Grand Gate Bellshrines" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478544",
        },
        {
          name: "Silent Halls",
          whichAct: 2,
          completionDetails: "Grand Gate",
          parsingInfo: { type: "quest", internalId: "Citadel Investigate" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478547",
        },
        {
          name: "Conductor's Melody",
          whichAct: 2,
          completionDetails: "High Halls",
          parsingInfo: { type: "flag", internalId: "HasMelodyConductor" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478609",
        },
        {
          name: "Architect's Melody",
          whichAct: 2,
          completionDetails: "Cogwork Core",
          parsingInfo: { type: "flag", internalId: "HasMelodyArchitect" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478610",
        },
        {
          name: "Vaultkeeper's Melody",
          whichAct: 2,
          completionDetails: "Whispering Vaults",
          parsingInfo: { type: "flag", internalId: "HasMelodyLibrarian" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478611",
        },
        {
          name: "Pharloom's Crown",
          whichAct: 2,
          completionDetails: "Cogwork Core (Centre)",
          parsingInfo: { type: "quest", internalId: "Citadel Ascent" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479087",
        },
        {
          name: "Pale Monarch",
          whichAct: 2,
          completionDetails: "The Cradle: One of the endings.",
          parsingInfo: { type: "quest", internalId: "Silk Defeat Snare" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479100",
        },
        {
          name: "Soul Snare",
          whichAct: 2,
          completionDetails:
            'The Cradle: Scale the Citadel and ensnare its monarch in a deadly trap (requires the completion of "Silk and Soul" wish).',
          parsingInfo: { type: "quest", internalId: "Soul Snare" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479260",
        },
        {
          name: "After the Fall",
          whichAct: 3,
          completionDetails: "The Cradle: Discover the fate of Pharloom.",
          parsingInfo: { type: "quest", internalId: "Black Thread Pt0" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479261",
        },
        {
          name: "Beast in the Bells",
          whichAct: 3,
          completionDetails: "Grand Bellway: This is also accessible from any other Bellway.",
          parsingInfo: { type: "quest", internalId: "Bellbeast Rescue" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479263",
        },
        {
          name: "Awaiting the End",
          whichAct: 3,
          completionDetails:
            "Songclave: Confront the Caretaker and his family in the Ruined Chapel beside Bone Bottom.",
          parsingInfo: { type: "quest", internalId: "Black Thread Pt1 Shamans" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479262",
        },
        {
          name: "The Dark Below",
          whichAct: 3,
          completionDetails:
            "Bone Bottom (Ruined Chapel): Find aid in Deep Docks to access its diving bell and descend beneath Pharloom.",
          parsingInfo: { type: "quest", internalId: "Diving Bell Pt3 Descend" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479267",
        },
        {
          name: "Return to Pharloom",
          whichAct: 3,
          completionDetails: "The Abyss: Escape!",
          parsingInfo: { type: "quest", internalId: "Black Thread Pt3 Escape" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479283",
        },
        {
          name: "Spell Seeker",
          whichAct: 3,
          completionDetails: "Bone Bottom (Ruined Chapel): Return to the Snail Shamans.",
          parsingInfo: { type: "quest", internalId: "Black Thread Pt4 Return" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479385",
        },
        {
          name: "The Old Hearts",
          whichAct: 3,
          completionDetails:
            'Bone Bottom (Ruined Chapel): Complete the "Heart of Might", "Heart of the Woods", "Heart of the Wild" objectives.',
          parsingInfo: { type: "quest", internalId: "Black Thread Pt5 Heart" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479387",
        },
        {
          name: "Heart of Might",
          whichAct: 3,
          completionDetails: "Sands of Karak (Coral Tower)",
          parsingInfo: { type: "flag", internalId: "CollectedHeartCoral" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479388",
        },
        {
          name: "Heart of the Woods",
          whichAct: 3,
          completionDetails: "Shellwood: Find a breakable wall in Grand Gate's elevator shaft, to reach here.",
          parsingInfo: { type: "flag", internalId: "CollectedHeartFlower" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479389",
        },
        {
          name: "Heart of the Wild",
          whichAct: 3,
          completionDetails: "Far Fields: Silk Soar near Karmelita's statue.",
          parsingInfo: { type: "flag", internalId: "CollectedHeartHunter" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479390",
        },
        {
          name: "Last Dive",
          whichAct: 3,
          completionDetails: "The Abyss: The final ending(?).",
          parsingInfo: { type: "journal", internalId: "Lost Lace" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479431",
        },
      ],
    },
    {
      name: "Wishes · Wayfarer",
      description: "Wishes involving travel and exploration, finding something or someone in the world.",
      items: [
        {
          name: "The Lost Fleas",
          whichAct: 1,
          completionDetails: "The Marrow: Wish from Fleamaster Mooshka.",
          parsingInfo: [
            { type: "quest", internalId: "Save the Fleas" },
            { type: "quest", internalId: "Save the Fleas Pre" },
          ],
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477857",
        },
        {
          name: "My Missing Courier",
          whichAct: 1,
          completionDetails: "Bellhart: On the Wishwall (appears after defeating Widow).",
          parsingInfo: { type: "quest", internalId: "Save Courier Short" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478207",
        },
        {
          name: "Pinmaster's Oil",
          whichAct: 2,
          completionDetails:
            "Bellhart: Wish from Pinmaster Plinney (accessible after sharpening your needle for the first time, and speaking to Pinmaster Plinney).",
          parsingInfo: { type: "quest", internalId: "A Pinsmiths Tools" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478211",
        },
        {
          name: "The Wandering Merchant",
          whichAct: 2,
          completionDetails: "Songclave: On the Wishwall.",
          parsingInfo: { type: "quest", internalId: "Save City Merchant" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478634",
        },
        {
          name: "Rite of Rebirth",
          whichAct: 2,
          completionDetails:
            'Shellwood: Wish from Greyroot (accessible after completing the "Rite of the Pollip" wish and giving Twisted Bud to them).',
          parsingInfo: { type: "quest", internalId: "Wood Witch Curse" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478792",
        },
        {
          name: "My Missing Brother",
          whichAct: 2,
          completionDetails:
            'Bellhart: On the Wishwall (appears in ACT 2, provided that "My Missing Courier" wish is completed).',
          parsingInfo: { type: "quest", internalId: "Save Courier Tall" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478798",
        },
        {
          name: "Infestation Operation",
          whichAct: 2,
          completionDetails: 'Greymoor: Wish from Yarnaby (accessible after completing "Rite of Rebirth" wish).',
          parsingInfo: { type: "quest", internalId: "Doctor Curse Cure" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478814",
        },
        {
          name: "Balm for the Wounded",
          whichAct: 2,
          completionDetails:
            "Songclave: Wish from Sherma (appears after you discover Whiteward, is also accessible by directly speaking to Sherma in Whiteward).",
          parsingInfo: { type: "quest", internalId: "Save Sherma" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478933",
        },
        {
          name: "Trail's End",
          whichAct: 2,
          completionDetails: "Any Wishwall (appears after purchasing all maps from Shakra)",
          parsingInfo: { type: "quest", internalId: "Shakra Final Quest" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479237",
        },
        {
          name: "The Lost Merchant",
          whichAct: 2,
          completionDetails:
            'Songclave: On the Wishwall (appears after getting the Faydown Cloak and completing "The Wandering Merchant" and "Strengthening Songclave" wishes).',
          parsingInfo: { type: "quest", internalId: "Save City Merchant Bridge" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479244",
        },
        {
          name: "Final Audience",
          whichAct: 2,
          completionDetails:
            "Songclave: On the Wishwall (appears after learning The Conductor's Melody, activating Second Sentinel (3 Cogheart Pieces), encountering a couple of Second Sentinel fight scenes in Choral Chambers).",
          parsingInfo: { type: "quest", internalId: "Song Knight" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479245",
        },
        {
          name: "Fatal Resolve",
          whichAct: 3,
          completionDetails:
            "Songclave: On the Wishwall (appears after returning from The Abyss, is also accessible by visiting Pinstress' Home).",
          parsingInfo: { type: "quest", internalId: "Pinstress Battle" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479443",
        },
        {
          name: "Hero's Call",
          whichAct: 3,
          completionDetails:
            "Bellhart: On the Wishwall (appears after encountering a couple of Garmond and Zaza fight scenes).",
          parsingInfo: { type: "quest", internalId: "Garmond Black Threaded" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479445",
        },
        {
          name: "Ecstasy of the End",
          whichAct: 3,
          completionDetails: "Bellhart: On the Wishwall (appears after finding all 30 Lost Fleas).",
          parsingInfo: { type: "quest", internalId: "Flea Games" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479641",
        },
        {
          name: "Pain, Anguish, and Misery",
          whichAct: 3,
          completionDetails: "Songclave: On the Wishwall.",
          parsingInfo: { type: "quest", internalId: "Tormented Trobbio" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479370",
        },
      ],
    },
    {
      name: "Wishes · Gather",
      description: "Wishes requiring collection of a specific amount or variety of items.",
      items: [
        {
          name: "Berry Picking",
          whichAct: 1,
          completionDetails: "Moss Grotto (Mosshome): Wish from Moss Druid.",
          parsingInfo: { type: "quest", internalId: "Mossberry Collection 1" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477876",
        },
        {
          name: "Rite of the Pollip",
          whichAct: 1,
          completionDetails: "Shellwood: Wish from Greyroot.",
          parsingInfo: { type: "quest", internalId: "Shell Flowers" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478173",
        },
        {
          name: "Silver Bells",
          whichAct: 1,
          completionDetails: "Bellhart: On the Wishwall (appears after defeating Widow).",
          parsingInfo: { type: "quest", internalId: "Shiny Bell Goomba" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478206",
        },
        {
          name: "Alchemist's Assistant",
          whichAct: 1,
          completionDetails: "Wormways: Wish from Alchemist Zylotol (accessed after talking to him twice).",
          parsingInfo: { type: "quest", internalId: "Extractor Blue" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478482",
        },
        {
          name: "Great Taste of Pharloom",
          whichAct: 2,
          completionDetails: "Choral Chambers: Wish from Loyal Mergwin.",
          parsingInfo: { type: "quest", internalId: "Great Gourmand" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478889",
        },
        {
          name: "Advanced Alchemy",
          whichAct: 3,
          completionDetails:
            'Wormways: Wish from Alchemist Zylotol (accessed in ACT 3, provided that "Alchemist\'s Assistant" wish is completed).',
          parsingInfo: { type: "quest", internalId: "Extractor Blue Worms" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479278",
        },
      ],
    },
    {
      name: "Wishes · Donate",
      description: "Wishes requiring donation of shell shards or rosaries for construction and improvements.",
      items: [
        {
          name: "Bone Bottom Repairs",
          whichAct: 1,
          completionDetails: "Bone Bottom: On the Wishwall.",
          parsingInfo: { type: "quest", internalId: "Building Materials" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477884",
        },
        {
          name: "A Lifesaving Bridge",
          whichAct: 1,
          completionDetails: "Bone Bottom: On the Wishwall (appears after you reach Greymoor).",
          parsingInfo: { type: "quest", internalId: "Building Materials (Bridge)" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478220",
        },
        {
          name: "Restoration of Bellhart",
          whichAct: 1,
          completionDetails:
            "Bellhart: On the Wishwall (appears after defeating Widow, speaking to Pinmaster Plinney for the first needle upgrade, and selling a(ny) relic to Relic Seeker Scrounge).",
          parsingInfo: { type: "quest", internalId: "Belltown House Start" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478291",
        },
        {
          name: "Bellhart's Glory",
          whichAct: 2,
          completionDetails:
            'Bellhart: On the Wishwall (appears after completing "Restoration of Bellhart" wish, and completing one of these in ACT 2 — defeating Cogwork Dancers, obtaining Clawline, or activating Songclave).',
          parsingInfo: { type: "quest", internalId: "Belltown House Mid" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478797",
        },
        {
          name: "An Icon of Hope",
          whichAct: 2,
          completionDetails: "Bone Bottom: On the Wishwall (appears in ACT 2).",
          parsingInfo: { type: "quest", internalId: "Building Materials (Statue)" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478839",
        },
        {
          name: "Building up Songclave",
          whichAct: 2,
          completionDetails: "Songclave: On the Wishwall.",
          parsingInfo: { type: "quest", internalId: "Songclave Donation 1" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478631",
        },
        {
          name: "Strengthening Songclave",
          whichAct: 2,
          completionDetails: "Songclave: On the Wishwall.",
          parsingInfo: { type: "quest", internalId: "Songclave Donation 2" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479239",
        },
      ],
    },
    {
      name: "Wishes · Hunt",
      description: "Wishes involving hunting a certain number or type of normal enemies for specific objectives.",
      items: [
        {
          name: "Garb of the Pilgrims",
          whichAct: 1,
          completionDetails: "Bone Bottom: On the Wishwall.",
          parsingInfo: { type: "quest", internalId: "Pilgrim Rags" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477885",
        },
        {
          name: "Flexile Spines",
          whichAct: 1,
          completionDetails: "Far Fields: Wish from Seamstress.",
          parsingInfo: { type: "quest", internalId: "Brolly Get" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477964",
        },
        {
          name: "Crawbug Clearing",
          whichAct: 1,
          completionDetails: "Bellhart: On the Wishwall (appears after defeating Widow).",
          parsingInfo: { type: "quest", internalId: "Crow Feathers" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478208",
        },
        {
          name: "Volatile Flintbeetles",
          whichAct: 1,
          completionDetails: "Bone Bottom: On the Wishwall (appears after you reach Greymoor).",
          parsingInfo: { type: "quest", internalId: "Rock Rollers" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478221",
        },
        {
          name: "Roach Guts",
          whichAct: 1,
          completionDetails: "Sinner's Roard: Wish from Crull and Benjin.",
          parsingInfo: { type: "quest", internalId: "Roach Killing" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478356",
        },
        {
          name: "Fine Pins",
          whichAct: 2,
          completionDetails: "Songclave: On the Wishwall.",
          parsingInfo: { type: "quest", internalId: "Fine Pins" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478633",
        },
        {
          name: "Cloaks of the Choir",
          whichAct: 2,
          completionDetails:
            'Songclave: On the Wishwall. (appears after completing "Buildung Up Songclave" and "Fine Pins" wishes).',
          parsingInfo: { type: "quest", internalId: "Song Pilgrim Cloaks" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478934",
        },
        {
          name: "Broodfeast / Runtfeast (ACT 3)",
          whichAct: 2,
          completionDetails: "Putrified Ducts: Wish from Huntress / Runt (ACT 3).",
          parsingInfo: [
            { type: "quest", internalId: "Huntress Quest" },
            { type: "quest", internalId: "Huntress Quest Runt" },
          ],
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478865",
        },
      ],
    },
    {
      name: "Wishes · Grand Hunt",
      description: "Wishes involving hunting and defeating boss-level enemies to achieve objectives.",
      items: [
        {
          name: "The Terrible Tyrant",
          whichAct: 1,
          prereqs: ["Cling Grip"],
          completionDetails: "Bone Bottom: On the Wishwall (appears after acquiring Cling Grip).",
          parsingInfo: { type: "quest", internalId: "Skull King" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478223",
        },
        {
          name: "Savage Beastfly",
          whichAct: 2,
          completionDetails:
            "Bellhart: On the Wishwall (appears sometime in ACT 2, provided that Savage Beastfly in Hunter's March (Chapel of the Beast) is defeated).",
          parsingInfo: { type: "quest", internalId: "Beastfly Hunt" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478799",
        },
        {
          name: "The Wailing Mother",
          whichAct: 2,
          completionDetails:
            'Songclave: On the Wishwall (appears after completing "The Wandering Merchant" and "Strengthening Songclave" wishes).',
          parsingInfo: { type: "quest", internalId: "Broodmother Hunt" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479246",
        },
        {
          name: "Dark Hearts",
          whichAct: 3,
          completionDetails: "Bellhart: On the Wishwall.",
          parsingInfo: { type: "quest", internalId: "Destroy Thread Cores" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479448",
        },
        {
          name: "The Hidden Hunter",
          whichAct: 3,
          completionDetails: "Bellhart: On the Wishwall.",
          parsingInfo: { type: "quest", internalId: "Ant Trapper" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479446",
        },
      ],
    },
    {
      name: "Wishes · Delivery",
      description:
        "Wishes requiring delivery of fragile packages from one location to another without using fast travel.",
      items: [
        {
          name: "Bone Bottom Supplies",
          whichAct: 2,
          completionDetails:
            'Bellhart: Wish from Couriers Tipp & Pill (accessible after completing "My Missing Courier" and "My Missing Brother" wishes).',
          parsingInfo: { type: "quest", internalId: "Courier Delivery Bonebottom" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478313",
        },
        {
          name: "Pilgrim's Rest Supplies",
          whichAct: 2,
          completionDetails:
            'Bellhart: Wish from Couriers Tipp & Pill (accessible after completing "My Missing Courier" and "My Missing Brother" wishes).',
          parsingInfo: { type: "quest", internalId: "Courier Delivery Pilgrims Rest" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478313",
        },
        {
          name: "Fleatopia Supplies",
          whichAct: 2,
          completionDetails:
            'Bellhart: Wish from Couriers Tipp & Pill (accessible after completing "My Missing Courier" and "My Missing Brother" wishes).',
          parsingInfo: { type: "quest", internalId: "Courier Delivery Fleatopia" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478313",
        },
        {
          name: "Songclave Supplies",
          whichAct: 2,
          completionDetails:
            'Bellhart: Wish from Couriers Tipp & Pill (accessible after completing "My Missing Courier" and "My Missing Brother" wishes).',
          parsingInfo: { type: "quest", internalId: "Courier Delivery Songclave" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478313",
        },
        {
          name: "Queen's Egg",
          whichAct: 2,
          completionDetails:
            'Bellhart: Wish from Couriers Tipp & Pill (accessible after completing "My Missing Courier" and "My Missing Brother" wishes).',
          parsingInfo: { type: "quest", internalId: "Courier Delivery Dustpens Slave" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479177",
          onlyFoundInClassicMode: true,
        },
        {
          name: "Liquid Lacquer",
          whichAct: 2,
          completionDetails:
            'Bellhart: Wish from Couriers Tipp & Pill (accessible after completing "My Missing Courier" and "My Missing Brother" wishes).',
          parsingInfo: { type: "quest", internalId: "Courier Delivery Mask Maker" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479199",
        },
        {
          name: "Survivor's Camp Supplies",
          whichAct: 3,
          completionDetails: "Bellhart: Wish from Couriers Tipp & Pill (accessible in ACT 3).",
          parsingInfo: { type: "quest", internalId: "Courier Delivery Fixer" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478313",
        },
      ],
    },
    {
      name: "Wishes · Learn",
      description: "Unique wish to learn about the creatures of Pharloom.",
      items: [
        {
          name: "Bugs of Pharloom",
          whichAct: 1,
          completionDetails: "Greymoor (Halfway Home): Wish from Nuu.",
          parsingInfo: { type: "quest", internalId: "Journal" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478042",
        },
      ],
    },
    {
      name: "Wishes · Collect",
      description: "Unique wish to collect souls (and a trap) for a special objective.",
      items: [
        {
          name: "Silk and Soul",
          whichAct: 2,
          completionDetails:
            "Songclave: On the Wishwall (appears after defeating Lace, saving 25 Fleas and moving the caravan to Fleatopia, unlocking the Bellhome, completing all the available wishes, and talking to the Caretaker).",
          parsingInfo: { type: "quest", internalId: "Soul Snare Pre" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479243",
        },
      ],
    },
    {
      name: "Wishes · Sprint",
      description: "Unique wish to prove speed and agility.",
      items: [
        {
          name: "Fastest in Pharloom",
          whichAct: 3,
          prereqs: ["Silk Soar"],
          completionDetails: "Far Fields: Wish from Sprintmaster Swift.",
          parsingInfo: { type: "quest", internalId: "Sprintmaster Race" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479193",
        },
      ],
    },
    {
      name: "Wishes · Witness",
      description: "Unique wish triggered by interacting with a mysterious riddle tablet.",
      items: [
        {
          name: "Passing of the Age",
          whichAct: 3,
          prereqs: ["Silk Soar"],
          completionDetails: "Putrified Ducts (Pale Lake): Interact with the riddle tablet.",
          parsingInfo: { type: "quest", internalId: "Mr Mushroom" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479142",
        },
      ],
    },
    {
      name: "Wishes · Steel",
      description: "Unique wish given by a seer.",
      items: [
        {
          name: "A Vassal Lost",
          whichAct: 2,
          completionDetails: "Shellwood: Wish from Steel Seer Zi.",
          parsingInfo: { type: "quest", internalId: "Steel Sentinel Pt2" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479727",
          onlyFoundInSteelSoulMode: true,
        },
      ],
    },
  ],
};
