import type { TrackableCategory } from "../types";

export const bosses: TrackableCategory = {
  name: "Bosses",
  description: "🎶Epic battle music...🎶",
  sections: [
    {
      items: [
        {
          name: "Moss Mother",
          whichAct: 1,
          completionDetails: "Appears beside the Ruined Chapel, at the end of Moss Grotto.",
          parsingInfo: { type: "flag", internalId: "defeatedMossMother" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=476904",
          additionalMeta: {
            imageAsset: "journal/Moss_Mother.png",
            hpAndDamageInfo: [
              {
                variantName: "Ruined Chapel",
                hp: "120",
                damageModifiers: [1, 1, 1, 1, 1],
              },
              {
                variantName: "Act 3 Moss Grotto",
                hp: "350 / 700",
                damageModifiers: [1.25, 1, 1, 1, 1],
              },
              {
                variantName: "Weavenest Atla",
                hp: "350 / 700",
                damageModifiers: [1.2, 1, 0.9, 0.85, 0.8],
              },
            ],
          },
        },
        {
          name: "Bell Beast",
          whichAct: 1,
          completionDetails: "The Bell Beast can be found at the very top of The Marrow.",
          parsingInfo: { type: "flag", internalId: "defeatedBellBeast" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477879",
          additionalMeta: {
            imageAsset: "journal/Bell_Beast.png",
            hpAndDamageInfo: [
              {
                hp: "150",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Lace",
          whichAct: 1,
          completionDetails: "Encounter her at the entrance of Deep Docks.",
          parsingInfo: { type: "flag", internalId: "defeatedLace1" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=476915",
          additionalMeta: {
            imageAsset: "journal/Lace.png",
            hpAndDamageInfo: [
              {
                hp: "250",
                damageModifiers: [1, 1, 1, 1, 1],
              },
              {
                variantName: "Lace 2",
                hp: "800",
                damageModifiers: [1.75, 1.2, 1, 0.85, 0.85],
              },
            ],
          },
        },
        {
          name: "Fourth Chorus",
          whichAct: 1,
          completionDetails: "Wakes up to fight you after receiving the Drifter's Cloak.",
          parsingInfo: { type: "flag", internalId: "defeatedSongGolem" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477978",
          additionalMeta: {
            imageAsset: "journal/Fourth_Chorus.png",
            hpAndDamageInfo: [
              {
                hp: "500",
                damageModifiers: [1, 0.65, 0.5, 0.45, 0.45],
              },
            ],
          },
        },
        {
          name: "Savage Beastfly",
          whichAct: 1,
          completionDetails: "Deep inside the Chapel of the Beast.",
          parsingInfo: { type: "flag", internalId: "defeatedBoneFlyerGiant" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478019",
          additionalMeta: {
            imageAsset: "journal/Savage_Beastfly.png",
            hpAndDamageInfo: [
              {
                variantName: "Chapel of the Beast",
                hp: "550 / 1100",
                damageModifiers: [1.7, 1.2, 1, 0.9, 0.8],
              },
              {
                variantName: "Far Fields",
                hp: "650 / 1300",
                damageModifiers: [1.7, 1.2, 1, 0.9, 0.8],
              },
            ],
          },
        },
        {
          name: "Sister Splinter",
          whichAct: 1,
          completionDetails: "At north end of Shellwood.",
          parsingInfo: { type: "flag", internalId: "defeatedSplinterQueen" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478137",
          additionalMeta: {
            imageAsset: "journal/Sister_Splinter.png",
            hpAndDamageInfo: [
              {
                hp: "310",
                damageModifiers: [1, 0.675, 0.575, 0.55, 0.5],
              },
            ],
          },
        },
        {
          name: "Skull Tyrant",
          whichAct: 1,
          completionDetails: "Skull Tyrant is first found in The Marrow (center dome).",
          parsingInfo: { type: "flag", internalId: "skullKingDefeated" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478136",
          additionalMeta: {
            imageAsset: "journal/Skull_Tyrant.png",
            hpAndDamageInfo: [
              {
                hp: "450 / 900",
                damageModifiers: [1.2, 1, 0.9, 0.85, 0.8],
              },
            ],
          },
        },
        {
          name: "Moorwing",
          whichAct: 1,
          completionDetails: "Past three rooms towards the west of the Greymoor Bellway.",
          parsingInfo: { type: "flag", internalId: "defeatedVampireGnatBoss" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478453",
          additionalMeta: {
            imageAsset: "journal/Moorwing.png",
            hpAndDamageInfo: [
              {
                hp: "600 / 1200",
                damageModifiers: [2, 1.3, 1, 0.9, 0.85],
              },
            ],
          },
        },
        {
          name: "Widow",
          whichAct: 1,
          completionDetails: "Encountered in the room just towards the north of Bellhart.",
          parsingInfo: { type: "flag", internalId: "spinnerDefeated" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478138",
          additionalMeta: {
            imageAsset: "journal/Widow.png",
            hpAndDamageInfo: [
              {
                hp: "360",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Great Conchflies",
          whichAct: 1,
          completionDetails:
            "In the north-west section of the Blasted Steps, Hornet encounters a room filled with pinkish conch shells.",
          parsingInfo: { type: "flag", internalId: "defeatedCoralDrillers" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478506",
          additionalMeta: {
            imageAsset: "journal/Great_Conchfly.png",
            hpAndDamageInfo: [
              {
                hp: "400",
                damageModifiers: [1.3, 1, 0.825, 0.7, 0.6],
              },
            ],
          },
        },
        {
          name: "Last Judge",
          whichAct: 1,
          completionDetails:
            "Activate all five bellshrines (The Marrow, Deep Docks, Far Fields, Greymoor, Shellwood) and play the Needolin outside the Grand Gate to begin the fight. If it's proving difficult, you can skip it by fighting Phantom instead.",
          parsingInfo: { type: "flag", internalId: "defeatedLastJudge" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478545",
          additionalMeta: {
            imageAsset: "journal/Last_Judge.png",
            hpAndDamageInfo: [
              {
                hp: "720[Note 1]",
                damageModifiers: [1.2, 1, 0.85, 0.75, 0.7],
              },
            ],
          },
        },
        {
          name: "Phantom",
          whichAct: 1,
          completionDetails:
            "In a room at the top of the Exhaust Organ, which acts as an alternative entrance to the Citadel, skipping the Last Judge boss.",
          parsingInfo: { type: "flag", internalId: "defeatedPhantom" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478370",
          additionalMeta: {
            imageAsset: "journal/Phantom.png",
            hpAndDamageInfo: [
              {
                hp: "650",
                damageModifiers: [1.2, 1, 0.85, 0.75, 0.7],
              },
            ],
          },
        },
        {
          name: "Cogwork Dancers",
          whichAct: 2,
          completionDetails: "Cogwork Dancers are fought in the central area of Cogwork Core.",
          parsingInfo: { type: "flag", internalId: "defeatedCogworkDancers" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478606",
          additionalMeta: {
            imageAsset: "journal/Cogwork_Dancers.png",
            hpAndDamageInfo: [
              {
                hp: "810",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Trobbio",
          whichAct: 2,
          completionDetails: "Encountered at The Stage after traversing through the Whispering Vaults.",
          parsingInfo: { type: "flag", internalId: "defeatedTrobbio" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480343",
          additionalMeta: {
            imageAsset: "journal/Trobbio.png",
            hpAndDamageInfo: [
              {
                hp: "700",
                damageModifiers: [1.4, 1, 0.9, 0.8, 0.8],
              },
            ],
          },
        },
        {
          name: "Garmond & Zaza",
          whichAct: 2,
          completionDetails:
            "This is a missable entry that can only be attained in ACT 2. South-east part of Songclave.",
          parsingInfo: { type: "journal", internalId: "Garmond_Zaza" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479361",
          additionalMeta: {
            imageAsset: "journal/Garmond_&_Zaza.png",
            hpAndDamageInfo: [
              {
                hp: "460",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Forebrothers Signis & Gron",
          whichAct: 2,
          completionDetails: "In an earlier room in the Deep Docks.",
          parsingInfo: { type: "flag", internalId: "defeatedDockForemen" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478831",
          additionalMeta: {
            imageAsset: "journal/Forebrothers_Signis_&_Gron.png",
            hpAndDamageInfo: [
              {
                hp: "720 + 520",
                damageModifiers: [1.6, 1.25, 1, 0.95, 0.9],
              },
            ],
          },
        },
        {
          name: "The Unravelled",
          whichAct: 2,
          completionDetails:
            "The Unravelled is a hidden boss found in Whiteward at the bottom of a disposal pit unlocked by the Surgeon's Key.",
          parsingInfo: { type: "flag", internalId: "wardBossDefeated" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478926",
          additionalMeta: {
            imageAsset: "journal/The_Unravelled.png",
            hpAndDamageInfo: [
              {
                hp: "1000",
                damageModifiers: [1, 1, 1, 0.9, 0.85],
              },
            ],
          },
        },
        {
          name: "Disgraced Chef Lugoli",
          whichAct: 2,
          prereqs: ["Faydown Cloak"],
          completionDetails: "In the kitchen on the north-east of Sinner's Road.",
          parsingInfo: { type: "flag", internalId: "defeatedRoachkeeperChef" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478992",
          additionalMeta: {
            imageAsset: "journal/Disgraced_Chef_Lugoli.png",
            hpAndDamageInfo: [
              {
                hp: "600 / 1200",
                damageModifiers: [1.7, 1.2, 1, 0.9, 0.85],
              },
            ],
          },
        },
        {
          name: "Father of the Flame",
          whichAct: 2,
          prereqs: ["Faydown Cloak"],
          completionDetails: "Can be found in the west corner of Wisp Thicket.",
          parsingInfo: { type: "flag", internalId: "defeatedWispPyreEffigy" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479155",
          additionalMeta: {
            imageAsset: "journal/Father_of_the_Flame.png",
            hpAndDamageInfo: [
              {
                hp: "100 * 4 + 240",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Groal the Great",
          whichAct: 2,
          completionDetails: "Can be found in Bilehaven, at the top of Bilewater. ",
          parsingInfo: { type: "flag", internalId: "DefeatedSwampShaman" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478861",
          additionalMeta: {
            imageAsset: "journal/Groal_the_Great.png",
            hpAndDamageInfo: [
              {
                hp: "650",
                damageModifiers: [1.8, 1.2, 1, 0.9, 0.9],
              },
            ],
          },
        },
        {
          name: "Craggler",
          whichAct: 2,
          completionDetails:
            "Can be found across the pit from the Mosshome exit above Bone Bottom, right outside Wormways.",
          parsingInfo: { type: "flag", internalId: "roofCrabDefeated" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478088",
          additionalMeta: {
            imageAsset: "journal/Craggler.png",
            hpAndDamageInfo: [
              {
                hp: "200 / 400",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Voltvyrm",
          whichAct: 2,
          completionDetails: "Can be found in Voltnest within Sands of Karak.",
          parsingInfo: { type: "flag", internalId: "defeatedZapCoreEnemy" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479223",
          additionalMeta: {
            imageAsset: "journal/Voltvyrm.png",
            hpAndDamageInfo: [
              {
                hp: "550",
                damageModifiers: [1.8, 1.2, 1, 0.9, 0.8],
              },
            ],
          },
        },
        {
          name: "Raging Conchfly",
          whichAct: 2,
          completionDetails: "Can be found in the north-west area of Sands of Karak.",
          parsingInfo: { type: "flag", internalId: "defeatedCoralDrillerSolo" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479227",
          additionalMeta: {
            imageAsset: "journal/Great_Conchfly.png",
            hpAndDamageInfo: [
              {
                variantName: "Raging Conchfly",
                hp: "820",
                damageModifiers: [1.5, 1.2, 1.05, 0.85, 0.75],
              },
            ],
          },
        },
        {
          name: "First Sinner",
          whichAct: 2,
          completionDetails:
            "Can be found in the lower area of The Slab, accessible after obtaining the Key of Apostate.",
          parsingInfo: { type: "flag", internalId: "defeatedFirstWeaver" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479023",
          additionalMeta: {
            imageAsset: "journal/First_Sinner.png",
            hpAndDamageInfo: [
              {
                hp: "1300",
                damageModifiers: [1.75, 1.25, 1.1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Broodmother",
          whichAct: 2,
          completionDetails: 'Can be found in a cave in The Slab after accepting the "Grand Hunt" wish in Songclave.',
          parsingInfo: { type: "flag", internalId: "defeatedBroodMother" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479255",
          additionalMeta: {
            imageAsset: "journal/Broodmother.png",
            hpAndDamageInfo: [
              {
                hp: "700",
                damageModifiers: [1.35, 1.1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Second Sentinel",
          whichAct: 2,
          completionDetails:
            'Can only be fought after beginning the "Final Audience" wish, found in the south-east area of High Halls.',
          parsingInfo: { type: "flag", internalId: "defeatedSongChevalierBoss" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479253",
          additionalMeta: {
            imageAsset: "journal/Second_Sentinel.png",
            hpAndDamageInfo: [
              {
                hp: "800",
                damageModifiers: [1.4, 1.1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Shakra",
          whichAct: 2,
          completionDetails:
            'This is a missable entry that can only be attained in ACT 2. Towards the east of Bellhart after completing "Trail\'s End" wish; hit the ring that you find as you enter the Greymoor area, to summon Shakra for a friendly fight.',
          parsingInfo: { type: "journal", internalId: "Shakra" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479822",
          additionalMeta: {
            imageAsset: "journal/Shakra.png",
            hpAndDamageInfo: [
              {
                hp: "600",
                damageModifiers: [1.5, 1.15, 1, 0.9, 0.9],
              },
            ],
          },
        },
        {
          name: "Grand Mother Silk",
          whichAct: 2,
          completionDetails: "Can be found above Cogwork Core in The Cradle.",
          parsingInfo: { type: "journal", internalId: "Silk Boss" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479099",
          additionalMeta: {
            imageAsset: "journal/Grand_Mother_Silk.png",
            hpAndDamageInfo: [
              {
                hp: "1204",
                damageModifiers: [1.1, 1, 1, 0.88, 0.88],
              },
            ],
          },
        },
        {
          name: "Bell Eater",
          whichAct: 3,
          completionDetails: "Can be found in any Bellway Station after the beginning of ACT 3.",
          parsingInfo: { type: "flag", internalId: "bellCentipedeAppeared" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479264",
          additionalMeta: {
            imageAsset: "journal/Bell_Eater.png",
            hpAndDamageInfo: [
              {
                hp: "800",
                damageModifiers: [1.75, 1.35, 1.2, 1, 1],
              },
            ],
          },
        },
        {
          name: "Lost Garmond",
          whichAct: 3,
          completionDetails:
            'Can be found in Blasted Steps, in a room to the west of the Bellway. He can only be fought during the "Hero\'s Call" wish.',
          parsingInfo: { type: "flag", internalId: "garmondBlackThreadDefeated" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479452",
          additionalMeta: {
            imageAsset: "journal/Lost_Garmond.png",
            hpAndDamageInfo: [
              {
                hp: "900",
                damageModifiers: [2, 1.5, 1.2, 1.1, 1],
              },
            ],
          },
        },
        {
          name: "Crawfather",
          whichAct: 3,
          completionDetails: "Can be found in Greymoor, in the basement of the large building in Craw Lake.",
          parsingInfo: { type: "flag", internalId: "defeatedCrowCourt" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480319",
          additionalMeta: {
            imageAsset: "journal/Crawfather.png",
            hpAndDamageInfo: [
              {
                hp: "1300",
                damageModifiers: [1.6, 1.25, 1.1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Plasmified Zango",
          whichAct: 3,
          completionDetails: "Can be found in a secret room within western Wormways during ACT 3.",
          parsingInfo: { type: "journal", internalId: "Blue Assistant" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479273",
          additionalMeta: {
            imageAsset: "journal/Plasmified_Zango.png",
            hpAndDamageInfo: [
              {
                hp: "1000",
                damageModifiers: [2, 1.25, 1.1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Watcher at the Edge",
          whichAct: 3,
          prereqs: ["Silk Soar", "Needolin"],
          completionDetails: "Can be found at the west-center of Sands of Karak.",
          parsingInfo: { type: "flag", internalId: "defeatedGreyWarrior" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479494",
          additionalMeta: {
            imageAsset: "journal/Watcher_at_the_Edge.png",
            hpAndDamageInfo: [
              {
                hp: "900",
                damageModifiers: [1.5, 1.2, 1, 0.9, 0.85],
              },
            ],
          },
        },
        {
          name: "Palestag",
          whichAct: 3,
          completionDetails: "Can be found in Lost Verdania.",
          parsingInfo: { type: "flag", internalId: "defeatedWhiteCloverstag" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479408",
          additionalMeta: {
            imageAsset: "journal/Palestag.png",
            hpAndDamageInfo: [
              {
                hp: "480",
                damageModifiers: [1.5, 1.2, 1.15, 1, 1],
              },
            ],
          },
        },
        {
          name: "Clover Dancers",
          whichAct: 3,
          completionDetails: "Encountered at the very top of Lost Verdania, after collecting enough memory orbs.",
          parsingInfo: { type: "flag", internalId: "defeatedCloverDancers" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479427",
          additionalMeta: {
            imageAsset: "journal/Clover_Dancers.png",
            hpAndDamageInfo: [
              {
                hp: "1160",
                damageModifiers: [1.75, 1.25, 1.15, 1, 1],
              },
            ],
          },
        },
        {
          name: "Gurr the Outcast",
          whichAct: 3,
          completionDetails: 'Can be found in Far Fields after accepting the "The Hidden Hunter" wish.',
          parsingInfo: { type: "flag", internalId: "defeatedAntTrapper" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479467",
          additionalMeta: {
            imageAsset: "journal/Gurr_the_Outcast.png",
            hpAndDamageInfo: [
              {
                hp: "1000",
                damageModifiers: [1.7, 1.25, 1.1, 1, 0.95],
              },
            ],
          },
        },
        {
          name: "Tormented Trobbio",
          whichAct: 3,
          completionDetails: "Encountered at The Stage, above the Grand Bellway station.",
          parsingInfo: { type: "flag", internalId: "defeatedTormentedTrobbio" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479377",
          additionalMeta: {
            imageAsset: "journal/Tormented_Trobbio.png",
            hpAndDamageInfo: [
              {
                hp: "950",
                damageModifiers: [1.4, 1, 0.9, 0.8, 0.75],
              },
            ],
          },
        },
        {
          name: "Pinstress",
          whichAct: 3,
          completionDetails:
            "Can be found in Mount Fay, in the same area as the bench that is at halfway up the mountain.",
          parsingInfo: { type: "flag", internalId: "PinstressPeakBattleAccepted" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479464",
          additionalMeta: {
            imageAsset: "journal/Pinstress.png",
            hpAndDamageInfo: [
              {
                hp: "910",
                damageModifiers: [1.5, 1.1, 1, 1, 0.9],
              },
            ],
          },
        },
        {
          name: "Shrine Guardian Seth",
          whichAct: 3,
          prereqs: ["Silk Soar"],
          completionDetails:
            "Can be fought in a hidden area in Shellwood, accessed through a breakable wall in the Grand Gate's lift shaft.",
          parsingInfo: { type: "flag", internalId: "defeatedSeth" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480352",
          additionalMeta: {
            imageAsset: "journal/Shrine_Guardian_Seth.png",
            hpAndDamageInfo: [
              {
                hp: "1185",
                damageModifiers: [1.7, 1.25, 1.1, 1, 0.95],
              },
            ],
          },
        },
        {
          name: "Nyleth",
          whichAct: 3,
          completionDetails: "Section behind a breakable wall on the left of the elevator shaft of the Grand Gate.",
          parsingInfo: { type: "flag", internalId: "defeatedFlowerQueen" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479404",
          additionalMeta: {
            imageAsset: "journal/Nyleth.png",
            hpAndDamageInfo: [
              {
                hp: "1250",
                damageModifiers: [1.5, 1.25, 1.1, 1, 0.91],
              },
            ],
          },
        },
        {
          name: "Skarrsinger Karmelita",
          whichAct: 3,
          prereqs: ["Elegy Of The Deep", "Silk Soar"],
          completionDetails: " Can be found in the north-east area of Far Fields.",
          parsingInfo: { type: "flag", internalId: "defeatedAntQueen" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479198",
          additionalMeta: {
            imageAsset: "journal/Skarrsinger_Karmelita.png",
            hpAndDamageInfo: [
              {
                hp: "1500",
                damageModifiers: [1.5, 1.25, 1.1, 1, 0.95],
              },
            ],
          },
        },
        {
          name: "Crust King Khann",
          whichAct: 3,
          prereqs: ["Elegy Of The Deep"],
          completionDetails: "Can be found in the Coral Tower, north-east in Sands of Karak.",
          parsingInfo: { type: "flag", internalId: "defeatedCoralKing" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479392",
          additionalMeta: {
            imageAsset: "journal/Crust_King_Khann.png",
            hpAndDamageInfo: [
              {
                hp: "1650",
                damageModifiers: [2, 1.35, 1.15, 1, 0.95],
              },
            ],
          },
        },
        {
          name: "Summoned Saviour",
          whichAct: 3,
          completionDetails:
            "Can only be found in Steel Soul Mode, at the extreme bottom-left of Bonegrave behind a breakable wall, a sub area of Moss Grotto.",
          parsingInfo: { type: "journal", internalId: "Abyss Mass" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479740",
          onlyFoundInSteelSoulMode: true,
          additionalMeta: {
            imageAsset: "journal/Summoned_Saviour.png",
            hpAndDamageInfo: [
              {
                hp: "500",
                damageModifiers: [2, 1.3, 1.05, 0.9, 0.85],
              },
            ],
          },
        },
        {
          name: "Lost Lace",
          whichAct: 3,
          completionDetails: "Located in The Abyss, under the vast void ocean that lies within.",
          parsingInfo: { type: "journal", internalId: "Lost Lace" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479471",
          additionalMeta: {
            imageAsset: "journal/Lost_Lace.png",
            hpAndDamageInfo: [
              {
                hp: "1800",
                damageModifiers: [1.7, 1.25, 1.1, 1.05, 0.95],
              },
            ],
          },
        },
      ],
    },
  ],
};
