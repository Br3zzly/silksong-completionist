import type { TrackableCategory } from "../types";

export const huntersJournal: TrackableCategory = {
  name: "Hunter's Journal",
  description: "Creatures and entities encountered across various areas of Pharloom.",
  sections: [
    {
      items: [
        {
          name: "Mossgrub",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "MossBone Crawler" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479075",
          additionalMeta: {
            killsRequired: 25,
            imageAsset: "journal/Mossgrub.png",
            hpAndDamageInfo: [
              {
                hp: "10 / 20",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Massive Mossgrub",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "MossBone Crawler Fat" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480252",
          additionalMeta: {
            killsRequired: 3,
            imageAsset: "journal/Massive_Mossgrub.png",
            hpAndDamageInfo: [
              {
                hp: "80",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Mossmir",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "MossBone Fly" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479076",
          additionalMeta: {
            killsRequired: 20,
            imageAsset: "journal/Mossmir.png",
            hpAndDamageInfo: [
              {
                hp: "12 / 24",
                damageModifiers: [1, 1, 0.9, 0.9, 0.9],
              },
            ],
          },
        },
        {
          name: "Moss Mother",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Mossbone Mother" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480309",
          additionalMeta: {
            killsRequired: 3,
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
          name: "Aknid",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Aspid Collector" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479579",
          additionalMeta: {
            killsRequired: 15,
            imageAsset: "journal/Aknid.png",
            hpAndDamageInfo: [
              {
                hp: "15 / 60",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Skull Scuttler",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Bone Goomba" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479543",
          additionalMeta: {
            killsRequired: 35,
            imageAsset: "journal/Skull_Scuttler.png",
            hpAndDamageInfo: [
              {
                hp: "15 / 60",
                damageModifiers: [1, 0.8, 0.8, 0.8, 0.8],
              },
            ],
          },
        },
        {
          name: "Skullwing",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Bone Goomba Bounce Fly" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479074",
          additionalMeta: {
            killsRequired: 15,
            imageAsset: "journal/Skullwing.png",
            hpAndDamageInfo: [
              {
                hp: "15",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Skull Brute",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Bone Goomba Large" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479546",
          additionalMeta: {
            killsRequired: 15,
            imageAsset: "journal/Skull_Brute.png",
            hpAndDamageInfo: [
              {
                hp: "30 / 60",
                damageModifiers: [1, 0.8, 0.75, 0.6, 0.6],
              },
            ],
          },
        },
        {
          name: "Skull Tyrant",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Skull King" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480313",
          additionalMeta: {
            killsRequired: 1,
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
          name: "Kilik",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Bone Crawler" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479550",
          additionalMeta: {
            killsRequired: 25,
            imageAsset: "journal/Kilik.png",
            hpAndDamageInfo: [
              {
                hp: "20 / 80",
                damageModifiers: [1, 0.9, 0.76, 0.9, 1],
              },
            ],
          },
        },
        {
          name: "Beastfly",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Bone Flyer" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479544",
          additionalMeta: {
            killsRequired: 30,
            imageAsset: "journal/Beastfly.png",
            hpAndDamageInfo: [
              {
                hp: "15 / 60",
                damageModifiers: [1, 0.8, 0.8, 0.8, 0.8],
              },
              {
                variantName: "Fighting Savage Beastfly",
                hp: "15",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Savage Beastfly",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Bone Flyer Giant" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480317",
          additionalMeta: {
            killsRequired: 2,
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
          name: "Caranid",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Bone Circler" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479547",
          additionalMeta: {
            killsRequired: 25,
            imageAsset: "journal/Caranid.png",
            hpAndDamageInfo: [
              {
                hp: "14 / 56",
                damageModifiers: [1, 0.75, 0.75, 0.75, 0.75],
              },
            ],
          },
        },
        {
          name: "Vicious Caranid",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Bone Circler Vicious" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479564",
          additionalMeta: {
            killsRequired: 15,
            imageAsset: "journal/Vicious_Caranid.png",
            hpAndDamageInfo: [
              {
                hp: "27 / 108",
                damageModifiers: [1, 0.9, 0.6, 0.6, 0.5],
              },
              {
                variantName: "Fighting Savage Beastfly",
                hp: "25",
                damageModifiers: [1, 0.9, 0.6, 0.6, 0.5],
              },
            ],
          },
        },
        {
          name: "Hardbone Hopper",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Bone Hopper" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479555",
          additionalMeta: {
            killsRequired: 20,
            imageAsset: "journal/Hardbone_Hopper.png",
            hpAndDamageInfo: [
              {
                hp: "20 / 80",
                damageModifiers: [1, 1, 0.75, 0.75, 0.75],
              },
            ],
          },
        },
        {
          name: "Hardbone Elder",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Bone Hopper Giant" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480213",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Hardbone_Elder.png",
            hpAndDamageInfo: [
              {
                hp: "110 / 220",
                damageModifiers: [1.75, 1.4, 1.1, 1, 1],
              },
              {
                variantName: "First Room",
                hp: "90",
                damageModifiers: [1.75, 1.4, 1.1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Tarmite",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Bone Spitter" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479058",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Tarmite.png",
            hpAndDamageInfo: [
              {
                hp: "25 / 50",
                damageModifiers: [1, 0.9, 0.9, 0.73, 0.73],
              },
              {
                variantName: "Fighting Savage Beastfly",
                hp: "30",
                damageModifiers: [1, 0.9, 0.9, 0.73, 0.73],
              },
            ],
          },
        },
        {
          name: "Mawling",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Bone Roller" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479077",
          additionalMeta: {
            killsRequired: 30,
            imageAsset: "journal/Mawling.png",
            hpAndDamageInfo: [
              {
                hp: "15 / 30",
                damageModifiers: [1, 0.8, 0.8, 0.8, 0.8],
              },
            ],
          },
        },
        {
          name: "Marrowmaw",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Bone Thumper" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478224",
          additionalMeta: {
            killsRequired: 8,
            imageAsset: "journal/Marrowmaw.png",
            hpAndDamageInfo: [
              {
                hp: "50 / 100",
                damageModifiers: [1, 0.9, 0.75, 0.65, 0.6],
              },
              {
                variantName: "Moss Grotto",
                hp: "45 / 90",
                damageModifiers: [1, 0.9, 0.75, 0.65, 0.6],
              },
            ],
          },
        },
        {
          name: "Hoker",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Spine Floater" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479570",
          additionalMeta: {
            killsRequired: 15,
            imageAsset: "journal/Hoker.png",
            hpAndDamageInfo: [
              {
                hp: "15",
                damageModifiers: [1, 0.8, 0.55, 0.55, 0.8],
              },
            ],
          },
        },
        {
          name: "Flintbeetle",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Rock Roller" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478248",
          additionalMeta: {
            killsRequired: 3,
            imageAsset: "journal/Flintbeetle.png",
            hpAndDamageInfo: [
              {
                hp: "95",
                damageModifiers: [1, 0.8, 0.8, 0.7, 0.7],
              },
            ],
          },
        },
        {
          name: "Rhinogrund",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Rhino" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480179",
          additionalMeta: {
            killsRequired: 2,
            imageAsset: "journal/Rhinogrund.png",
            hpAndDamageInfo: [
              {
                hp: "150 / 300",
                damageModifiers: [1.3, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Gromling",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Crypt Worm" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479078",
          additionalMeta: {
            killsRequired: 25,
            imageAsset: "journal/Gromling.png",
            hpAndDamageInfo: [
              {
                hp: "30",
                damageModifiers: [1.25, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Grom",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Bone Worm" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479080",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Grom.png",
            hpAndDamageInfo: [
              {
                hp: "30",
                damageModifiers: [1, 0.8, 0.8, 0.8, 0.8],
              },
            ],
          },
        },
        {
          name: "Bell Beast",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Bone Beast" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480312",
          additionalMeta: {
            killsRequired: 1,
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
          name: "Pilgrim Groveller",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Pilgrim 03" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479571",
          additionalMeta: {
            killsRequired: 35,
            imageAsset: "journal/Pilgrim_Groveller.png",
            hpAndDamageInfo: [
              {
                hp: "20 / 80",
                damageModifiers: [1.4, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Pilgrim Pouncer",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Pilgrim 01" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479551",
          additionalMeta: {
            killsRequired: 35,
            imageAsset: "journal/Pilgrim_Pouncer.png",
            hpAndDamageInfo: [
              {
                hp: "20 / 80",
                damageModifiers: [1.4, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Pilgrim Hornfly",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Pilgrim 04" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479573",
          additionalMeta: {
            killsRequired: 15,
            imageAsset: "journal/Pilgrim_Hornfly.png",
            hpAndDamageInfo: [
              {
                hp: "20 / 80",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Pilgrim Hulk",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Pilgrim 02" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479574",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Pilgrim_Hulk.png",
            hpAndDamageInfo: [
              {
                hp: "30 / 120",
                damageModifiers: [1.2, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Pilgrim Bellbearer",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Pilgrim Bell Thrower" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478044",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Pilgrim_Bellbearer.png",
            hpAndDamageInfo: [
              {
                hp: "20 / 80",
                damageModifiers: [1, 0.9, 0.75, 0.75, 0.75],
              },
            ],
          },
        },
        {
          name: "Winged Pilgrim",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Pilgrim Fly" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479552",
          additionalMeta: {
            killsRequired: 25,
            imageAsset: "journal/Winged_Pilgrim.png",
            hpAndDamageInfo: [
              {
                hp: "20 / 80",
                damageModifiers: [1.4, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Elder Pilgrim",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Pilgrim 05" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479755",
          additionalMeta: {
            killsRequired: 5,
            imageAsset: "journal/Elder_Pilgrim.png",
            hpAndDamageInfo: [
              {
                hp: "30 / 120",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Winged Pilgrim Bellbearer",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Pilgrim Bellthrower Fly" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478301",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Winged_Pilgrim_Bellbearer.png",
            hpAndDamageInfo: [
              {
                hp: "25 / 50",
                damageModifiers: [1, 0.9, 0.75, 0.75, 0.75],
              },
            ],
          },
        },
        {
          name: "Pilgrim Hiker",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Pilgrim Hiker" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479738",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Pilgrim_Hiker.png",
            hpAndDamageInfo: [
              {
                hp: "30 / 90",
                damageModifiers: [1.3, 1, 0.9, 0.9, 0.9],
              },
            ],
          },
        },
        {
          name: "Pilgrim Guide",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Pilgrim StaffWielder" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479683",
          additionalMeta: {
            killsRequired: 15,
            imageAsset: "journal/Pilgrim_Guide.png",
            hpAndDamageInfo: [
              {
                hp: "24 / 96",
                damageModifiers: [1, 0.8, 0.8, 1, 1],
              },
            ],
          },
        },
        {
          name: "Overgrown Pilgrim",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Pilgrim Moss Spitter" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479577",
          additionalMeta: {
            killsRequired: 20,
            imageAsset: "journal/Overgrown_Pilgrim.png",
            hpAndDamageInfo: [
              {
                hp: "23 / 92",
                damageModifiers: [1.2, 0.85, 0.85, 0.85, 0.85],
              },
            ],
          },
        },
        {
          name: "Covetous Pilgrim",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Rosary Pilgrim" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478300",
          additionalMeta: {
            killsRequired: 2,
            imageAsset: "journal/Covetous_Pilgrim.png",
            hpAndDamageInfo: [
              {
                hp: "85",
                damageModifiers: [1, 0.8, 0.7, 0.6, 0.6],
              },
              {
                variantName: "Bilewater",
                hp: "130",
                damageModifiers: [1, 0.8, 0.7, 0.6, 0.6],
              },
            ],
          },
        },
        {
          name: "Snitchfly",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Rosary Thief" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479000",
          additionalMeta: {
            killsRequired: 4,
            imageAsset: "journal/Snitchfly.png",
            hpAndDamageInfo: [
              {
                hp: "35",
                damageModifiers: [1.2, 0.9, 0.8, 0.65, 0.65],
              },
            ],
          },
        },
        {
          name: "Lavalug",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Tar Slug" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479565",
          additionalMeta: {
            killsRequired: 12,
            imageAsset: "journal/Lavalug.png",
            hpAndDamageInfo: [
              {
                hp: "15 / 30",
                damageModifiers: [1, 0.8, 0.8, 0.8, 0.8],
              },
            ],
          },
        },
        {
          name: "Lavalarga",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Tar Slug Huge" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480236",
          additionalMeta: {
            killsRequired: 8,
            imageAsset: "journal/Lavalarga.png",
            hpAndDamageInfo: [
              {
                hp: "85 / 170",
                damageModifiers: [1.75, 1.2, 1.1, 0.9, 0.9],
              },
            ],
          },
        },
        {
          name: "Smelt Shoveller",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Dock Worker" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479553",
          additionalMeta: {
            killsRequired: 25,
            imageAsset: "journal/Smelt_Shoveller.png",
            hpAndDamageInfo: [
              {
                hp: "30 / 120",
                damageModifiers: [1.5, 1, 1, 0.85, 0.85],
              },
              {
                variantName: "Cutscene",
                hp: "20",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Flintstone Flyer",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Dock Flyer" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479554",
          additionalMeta: {
            killsRequired: 25,
            imageAsset: "journal/Flintstone_Flyer.png",
            hpAndDamageInfo: [
              {
                hp: "30 / 120",
                damageModifiers: [1.5, 1, 1, 0.85, 0.85],
              },
              {
                variantName: "Cutscene",
                hp: "20",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Flintflame Flyer",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Dock Bomber" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479566",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Flintflame_Flyer.png",
            hpAndDamageInfo: [
              {
                hp: "60 / 120",
                damageModifiers: [1.5, 1, 0.9, 0.85, 0.85],
              },
            ],
          },
        },
        {
          name: "Smokerock Sifter",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Shield Dock Worker" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479567",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Smokerock_Sifter.png",
            hpAndDamageInfo: [
              {
                hp: "40 / 160",
                damageModifiers: [1.75, 1, 1, 0.85, 0.85],
              },
            ],
          },
        },
        {
          name: "Deep Diver",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Dock Charger" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480237",
          additionalMeta: {
            killsRequired: 5,
            imageAsset: "journal/Deep_Diver.png",
            hpAndDamageInfo: [
              {
                hp: "90 / 180",
                damageModifiers: [1.25, 0.95, 0.85, 0.75, 0.7],
              },
            ],
          },
        },
        {
          name: "Forebrothers Signis & Gron",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Dock Guard Thrower" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480314",
          additionalMeta: {
            killsRequired: 1,
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
          name: "Cragglite",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Small Crab" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480145",
          additionalMeta: {
            killsRequired: 3,
            imageAsset: "journal/Cragglite.png",
            hpAndDamageInfo: [
              {
                hp: "20 / 40",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Craggler",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Roof Crab" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478088",
          additionalMeta: {
            killsRequired: 1,
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
          name: "Brushflit",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Fields Flock Flyers" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479560",
          additionalMeta: {
            killsRequired: 15,
            imageAsset: "journal/Brushflit.png",
            hpAndDamageInfo: [
              {
                hp: "1",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Fertid",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Fields Goomba" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479561",
          additionalMeta: {
            killsRequired: 25,
            imageAsset: "journal/Fertid.png",
            hpAndDamageInfo: [
              {
                hp: "15 / 30",
                damageModifiers: [1, 0.75, 0.75, 0.75, 0.75],
              },
            ],
          },
        },
        {
          name: "Flapping Fertid",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Fields Flyer" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479562",
          additionalMeta: {
            killsRequired: 20,
            imageAsset: "journal/Flapping_Fertid.png",
            hpAndDamageInfo: [
              {
                hp: "15 / 30",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Fourth Chorus",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Song Golem" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480315",
          additionalMeta: {
            killsRequired: 1,
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
          name: "Skarrlid",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Bone Hunter Tiny" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479558",
          additionalMeta: {
            killsRequired: 25,
            imageAsset: "journal/Skarrlid.png",
            hpAndDamageInfo: [
              {
                hp: "20",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Skarrwing",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Bone Hunter Buzzer" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479557",
          additionalMeta: {
            killsRequired: 30,
            imageAsset: "journal/Skarrwing.png",
            hpAndDamageInfo: [
              {
                hp: "20",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Skarr Scout",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Bone Hunter Child" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479559",
          additionalMeta: {
            killsRequired: 20,
            imageAsset: "journal/Skarr_Scout.png",
            hpAndDamageInfo: [
              {
                hp: "30 / 90",
                damageModifiers: [1, 0.8, 0.75, 0.75, 0.7],
              },
            ],
            completedByEntry: "Skarrsinger Karmelita",
          },
        },
        {
          name: "Skarr Stalker",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Bone Hunter" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479563",
          additionalMeta: {
            killsRequired: 15,
            imageAsset: "journal/Skarr_Stalker.png",
            hpAndDamageInfo: [
              {
                hp: "75 / 150",
                damageModifiers: [1.2, 1, 1, 1, 1],
              },
            ],
            completedByEntry: "Skarrsinger Karmelita",
          },
        },
        {
          name: "Spear Skarr",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Bone Hunter Fly" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479591",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Spear_Skarr.png",
            hpAndDamageInfo: [
              {
                hp: "75 / 150",
                damageModifiers: [1.2, 1, 1, 1, 1],
              },
            ],
            completedByEntry: "Skarrsinger Karmelita",
          },
        },
        {
          name: "Skarrgard",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Bone Hunter Throw" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477962",
          additionalMeta: {
            killsRequired: 2,
            imageAsset: "journal/Skarrgard.png",
            hpAndDamageInfo: [
              {
                hp: "150 / 300",
                damageModifiers: [1, 0.75, 0.65, 0.65, 0.65],
              },
            ],
          },
        },
        {
          name: "Gurr the Outcast",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Bone Hunter Trapper" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480316",
          additionalMeta: {
            killsRequired: 1,
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
          name: "Last Claw",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Bone Hunter Chief" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480483",
          additionalMeta: {
            killsRequired: 6,
            imageAsset: "journal/Last_Claw.png",
            hpAndDamageInfo: [
              {
                hp: "130",
                damageModifiers: [1.5, 1.2, 1.1, 1, 1],
              },
            ],
            completedByEntry: "Skarrsinger Karmelita",
          },
        },
        {
          name: "Skarrsinger Karmelita",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Hunter Queen" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479198",
          additionalMeta: {
            killsRequired: 1,
            imageAsset: "journal/Skarrsinger_Karmelita.png",
            hpAndDamageInfo: [
              {
                hp: "1500",
                damageModifiers: [1.5, 1.25, 1.1, 1, 0.95],
              },
            ],
            completesEntries: ["Skarr Scout", "Skarr Stalker", "Spear Skarr", "Last Claw"],
          },
        },
        {
          name: "Mite",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Mite" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479681",
          additionalMeta: {
            killsRequired: 30,
            imageAsset: "journal/Mite.png",
            hpAndDamageInfo: [
              {
                hp: "15 / 30",
                damageModifiers: [1, 0.8, 0.8, 0.8, 0.8],
              },
            ],
          },
        },
        {
          name: "Fluttermite",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Mitefly" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478974",
          additionalMeta: {
            killsRequired: 25,
            imageAsset: "journal/Fluttermite.png",
            hpAndDamageInfo: [
              {
                hp: "15 / 30",
                damageModifiers: [1, 0.8, 0.8, 0.8, 0.8],
              },
            ],
          },
        },
        {
          name: "Mitemother",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Gnat Giant" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478975",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Mitemother.png",
            hpAndDamageInfo: [
              {
                hp: "60 / 120",
                damageModifiers: [1.2, 0.95, 0.95, 0.95, 0.95],
              },
            ],
          },
        },
        {
          name: "Dreg Catcher",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Farmer Catcher" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479685",
          additionalMeta: {
            killsRequired: 20,
            imageAsset: "journal/Dreg_Catcher.png",
            hpAndDamageInfo: [
              {
                hp: "21 / 42",
                damageModifiers: [1, 1, 0.75, 0.75, 0.75],
              },
              {
                variantName: "Greymoor Arena",
                hp: "21 / 74",
                damageModifiers: [1, 1, 0.75, 0.75, 0.75],
              },
            ],
          },
        },
        {
          name: "Silk Snipper",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Farmer Scissors" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478150",
          additionalMeta: {
            killsRequired: 25,
            imageAsset: "journal/Silk_Snipper.png",
            hpAndDamageInfo: [
              {
                hp: "29 / 58",
                damageModifiers: [1, 0.8, 0.7, 0.55, 0.55],
              },
            ],
          },
        },
        {
          name: "Thread Raker",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Farmer Centipede" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478979",
          additionalMeta: {
            killsRequired: 15,
            imageAsset: "journal/Thread_Raker.png",
            hpAndDamageInfo: [
              {
                hp: "50 / 100",
                damageModifiers: [1, 0.75, 0.6, 0.55, 0.55],
              },
              {
                variantName: "Greymoor Arena",
                hp: "50 / 150",
                damageModifiers: [1, 0.75, 0.6, 0.55, 0.55],
              },
            ],
          },
        },
        {
          name: "Moorwing",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Vampire Gnat" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480340",
          additionalMeta: {
            killsRequired: 1,
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
          name: "Wisp",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Wisp" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480438",
          additionalMeta: {
            killsRequired: 15,
            imageAsset: "journal/Wisp.png",
            hpAndDamageInfo: [
              {
                hp: "Cannot be damaged",
                damageModifiers: [],
              },
            ],
            completedByEntry: "Father of the Flame",
          },
        },
        {
          name: "Burning Bug",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Farmer Wisp" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480440",
          additionalMeta: {
            killsRequired: 8,
            imageAsset: "journal/Burning_Bug.png",
            hpAndDamageInfo: [
              {
                hp: "90",
                damageModifiers: [1.5, 1.15, 1, 1, 1],
              },
            ],
            completedByEntry: "Father of the Flame",
          },
        },
        {
          name: "Father of the Flame",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Wisp Pyre Effigy" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480349",
          additionalMeta: {
            killsRequired: 1,
            imageAsset: "journal/Father_of_the_Flame.png",
            hpAndDamageInfo: [
              {
                hp: "100 * 4 + 240",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
            completesEntries: ["Wisp", "Burning Bug"],
          },
        },
        {
          name: "Craw",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Crow" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479679",
          additionalMeta: {
            killsRequired: 25,
            imageAsset: "journal/Craw.png",
            hpAndDamageInfo: [
              {
                hp: "20 / 40",
                damageModifiers: [1, 0.74, 0.74, 0.74, 0.74],
              },
            ],
          },
        },
        {
          name: "Tallcraw",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Crowman" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479680",
          additionalMeta: {
            killsRequired: 20,
            imageAsset: "journal/Tallcraw.png",
            hpAndDamageInfo: [
              {
                hp: "50 / 100",
                damageModifiers: [1.2, 1, 0.9, 0.9, 0.9],
              },
            ],
          },
        },
        {
          name: "Squatcraw",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Crowman Dagger" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479682",
          additionalMeta: {
            killsRequired: 15,
            imageAsset: "journal/Squatcraw.png",
            hpAndDamageInfo: [
              {
                hp: "50 / 100",
                damageModifiers: [1.2, 1, 0.9, 0.9, 0.9],
              },
            ],
          },
        },
        {
          name: "Craw Juror",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Crowman Juror Tiny" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480485",
          additionalMeta: {
            killsRequired: 15,
            imageAsset: "journal/Craw_Juror.png",
            hpAndDamageInfo: [
              {
                hp: "50",
                damageModifiers: [1.5, 1, 0.95, 0.95, 0.95],
              },
            ],
            completedByEntry: "Crawfather",
          },
        },
        {
          name: "Tallcraw Juror",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Crowman Juror" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480486",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Tallcraw_Juror.png",
            hpAndDamageInfo: [
              {
                hp: "60",
                damageModifiers: [1.1, 1, 0.9, 0.9, 0.9],
              },
            ],
            completedByEntry: "Crawfather",
          },
        },
        {
          name: "Squatcraw Juror",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Crowman Dagger Juror" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480487",
          additionalMeta: {
            killsRequired: 8,
            imageAsset: "journal/Squatcraw_Juror.png",
            hpAndDamageInfo: [
              {
                hp: "60",
                damageModifiers: [1.4, 1, 0.9, 0.9, 0.9],
              },
            ],
            completedByEntry: "Crawfather",
          },
        },
        {
          name: "Crawfather",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Crawfather" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480319",
          additionalMeta: {
            killsRequired: 1,
            imageAsset: "journal/Crawfather.png",
            hpAndDamageInfo: [
              {
                hp: "1300",
                damageModifiers: [1.6, 1.25, 1.1, 1, 1],
              },
            ],
            completesEntries: ["Craw Juror", "Tallcraw Juror", "Squatcraw Juror"],
          },
        },
        {
          name: "Muckmaggot",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Maggots" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480190",
          additionalMeta: {
            killsRequired: 80,
            imageAsset: "journal/Muckmaggot.png",
            hpAndDamageInfo: [
              {
                hp: "None",
                damageModifiers: [],
              },
            ],
          },
        },
        {
          name: "Slubberlug",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Dustroach Pollywog" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478965",
          additionalMeta: {
            killsRequired: 12,
            imageAsset: "journal/Slubberlug.png",
            hpAndDamageInfo: [
              {
                hp: "22",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Muckroach",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Dustroach" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478264",
          additionalMeta: {
            killsRequired: 20,
            imageAsset: "journal/Muckroach.png",
            hpAndDamageInfo: [
              {
                hp: "50 / 100",
                damageModifiers: [1.25, 1, 0.9, 0.9, 0.9],
              },
              {
                variantName: "In Cage",
                hp: "50",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Bloatroach",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Bloat Roach" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478737",
          additionalMeta: {
            killsRequired: 12,
            imageAsset: "journal/Bloatroach.png",
            hpAndDamageInfo: [
              {
                hp: "80 / 160",
                damageModifiers: [1.75, 1.2, 1, 0.9, 0.9],
              },
            ],
          },
        },
        {
          name: "Roachcatcher",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Roachfeeder Short" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478261",
          additionalMeta: {
            killsRequired: 20,
            imageAsset: "journal/Roachcatcher.png",
            hpAndDamageInfo: [
              {
                hp: "40 / 80",
                damageModifiers: [1.25, 1, 0.9, 0.9, 0.9],
              },
              {
                variantName: "Greymoor Arena",
                hp: "40 / 140",
                damageModifiers: [1.25, 1, 0.9, 0.9, 0.9],
              },
            ],
          },
        },
        {
          name: "Roachfeeder",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Roachfeeder Tall" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478338",
          additionalMeta: {
            killsRequired: 20,
            imageAsset: "journal/Roachfeeder.png",
            hpAndDamageInfo: [
              {
                hp: "45 / 90",
                damageModifiers: [1.25, 1, 0.9, 0.9, 0.9],
              },
            ],
          },
        },
        {
          name: "Roachkeeper",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Roachkeeper" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478697",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Roachkeeper.png",
            hpAndDamageInfo: [
              {
                hp: "100 / 200",
                damageModifiers: [1.3, 1.1, 0.9, 0.9, 0.9],
              },
            ],
          },
        },
        {
          name: "Roachserver",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Roachkeeper Chef Tiny" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478991",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Roachserver.png",
            hpAndDamageInfo: [
              {
                hp: "60",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
            completedByEntry: "Disgraced Chef Lugoli",
          },
        },
        {
          name: "Disgraced Chef Lugoli",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Roachkeeper Chef" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480346",
          additionalMeta: {
            killsRequired: 1,
            imageAsset: "journal/Disgraced_Chef_Lugoli.png",
            hpAndDamageInfo: [
              {
                hp: "600 / 1200",
                damageModifiers: [1.7, 1.2, 1, 0.9, 0.85],
              },
            ],
            completesEntries: ["Roachserver"],
          },
        },
        {
          name: "Wraith",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Wraith" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478367",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Wraith.png",
            hpAndDamageInfo: [
              {
                hp: "45",
                damageModifiers: [1.5, 1, 1, 1, 1],
              },
            ],
            completedByEntry: "Phantom",
          },
        },
        {
          name: "Mothleaf Lagnia",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Swamp Drifter" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478738",
          additionalMeta: {
            killsRequired: 25,
            imageAsset: "journal/Mothleaf_Lagnia.png",
            hpAndDamageInfo: [
              {
                hp: "1",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Miremite",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Swamp Goomba" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478966",
          additionalMeta: {
            killsRequired: 20,
            imageAsset: "journal/Miremite.png",
            hpAndDamageInfo: [
              {
                hp: "30",
                damageModifiers: [1.5, 1.1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Swamp Squit",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Swamp Mosquito" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478721",
          additionalMeta: {
            killsRequired: 30,
            imageAsset: "journal/Swamp_Squit.png",
            hpAndDamageInfo: [
              {
                hp: "35",
                damageModifiers: [1.5, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Spit Squit",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Swamp Mosquito Skinny" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480261",
          additionalMeta: {
            killsRequired: 20,
            imageAsset: "journal/Spit_Squit.png",
            hpAndDamageInfo: [
              {
                hp: "55 / 110",
                damageModifiers: [1.5, 1.1, 1, 0.9, 0.9],
              },
            ],
          },
        },
        {
          name: "Stilkin",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Swamp Muckman" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480206",
          additionalMeta: {
            killsRequired: 15,
            imageAsset: "journal/Stilkin.png",
            hpAndDamageInfo: [
              {
                hp: "45",
                damageModifiers: [1.25, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Stilkin Trapper",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Swamp Muckman Tall" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480238",
          additionalMeta: {
            killsRequired: 12,
            imageAsset: "journal/Stilkin_Trapper.png",
            hpAndDamageInfo: [
              {
                hp: "45",
                damageModifiers: [1.25, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Groal the Great",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Swamp Shaman" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480345",
          additionalMeta: {
            killsRequired: 1,
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
          name: "Barnak",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Swamp Barnacle" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478962",
          additionalMeta: {
            killsRequired: 8,
            imageAsset: "journal/Barnak.png",
            hpAndDamageInfo: [
              {
                hp: "35",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Ductsucker",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Swamp Ductsucker" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480211",
          additionalMeta: {
            killsRequired: 6,
            imageAsset: "journal/Ductsucker.png",
            hpAndDamageInfo: [
              {
                hp: "100",
                damageModifiers: [1.25, 1.1, 1, 0.9, 0.9],
              },
            ],
          },
        },
        {
          name: "Pond Skipper",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Pond Skater" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478159",
          additionalMeta: {
            killsRequired: 15,
            imageAsset: "journal/Pond_Skipper.png",
            hpAndDamageInfo: [
              {
                hp: "15 / 30",
                damageModifiers: [1, 0.8, 0.8, 0.8, 0.8],
              },
            ],
          },
        },
        {
          name: "Pondcatcher",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Pilgrim Fisher" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478161",
          additionalMeta: {
            killsRequired: 20,
            imageAsset: "journal/Pondcatcher.png",
            hpAndDamageInfo: [
              {
                hp: "25 / 100",
                damageModifiers: [1, 0.9, 0.7, 0.7, 0.7],
              },
            ],
          },
        },
        {
          name: "Shellwood Gnat",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Shellwood Gnat" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478983",
          additionalMeta: {
            killsRequired: 15,
            imageAsset: "journal/Shellwood_Gnat.png",
            hpAndDamageInfo: [
              {
                hp: "15 / 30",
                damageModifiers: [1, 0.8, 0.8, 0.8, 0.8],
              },
            ],
          },
        },
        {
          name: "Wood Wasp",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Shellwood Wasp" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478160",
          additionalMeta: {
            killsRequired: 12,
            imageAsset: "journal/Wood_Wasp.png",
            hpAndDamageInfo: [
              {
                hp: "15 / 30",
                damageModifiers: [1, 0.8, 0.8, 0.8, 0.8],
              },
            ],
          },
        },
        {
          name: "Splinter",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Stick Insect" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478980",
          additionalMeta: {
            killsRequired: 12,
            imageAsset: "journal/Splinter.png",
            hpAndDamageInfo: [
              {
                hp: "25 / 100",
                damageModifiers: [1, 0.9, 0.9, 0.9, 0.9],
              },
            ],
          },
        },
        {
          name: "Splinterhorn",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Stick Insect Charger" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478169",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Splinterhorn.png",
            hpAndDamageInfo: [
              {
                hp: "25 / 100",
                damageModifiers: [1, 0.9, 0.9, 0.9, 0.9],
              },
            ],
          },
        },
        {
          name: "Splinterbark",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Stick Insect Flyer" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478186",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Splinterbark.png",
            hpAndDamageInfo: [
              {
                hp: "15 / 30",
                damageModifiers: [1, 0.8, 0.8, 0.8, 0.8],
              },
            ],
          },
        },
        {
          name: "Sister Splinter",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Splinter Queen" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480324",
          additionalMeta: {
            killsRequired: 1,
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
          name: "Phacia",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Flower Drifter" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478168",
          additionalMeta: {
            killsRequired: 25,
            imageAsset: "journal/Phacia.png",
            hpAndDamageInfo: [
              {
                hp: "15 / 30",
                damageModifiers: [1, 0.75, 0.75, 0.75, 0.75],
              },
            ],
          },
        },
        {
          name: "Pollenica",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Bloom Shooter" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478175",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Pollenica.png",
            hpAndDamageInfo: [
              {
                hp: "20 / 40",
                damageModifiers: [1, 1, 0.75, 0.75, 1],
              },
            ],
          },
        },
        {
          name: "Gahlia",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Bloom Puncher" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478181",
          additionalMeta: {
            killsRequired: 20,
            imageAsset: "journal/Gahlia.png",
            hpAndDamageInfo: [
              {
                hp: "20 / 40",
                damageModifiers: [1, 1, 0.75, 0.75, 0.75],
              },
            ],
          },
        },
        {
          name: "Shrine Guardian Seth",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Seth" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480352",
          additionalMeta: {
            killsRequired: 1,
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
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Flower Queen" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480353",
          additionalMeta: {
            killsRequired: 1,
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
          name: "Furm",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Bell Goomba" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478194",
          additionalMeta: {
            killsRequired: 25,
            imageAsset: "journal/Furm.png",
            hpAndDamageInfo: [
              {
                hp: "20 / 40",
                damageModifiers: [1, 1, 0.75, 0.75, 0.75],
              },
            ],
          },
        },
        {
          name: "Winged Furm",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Bell Fly" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478195",
          additionalMeta: {
            killsRequired: 12,
            imageAsset: "journal/Winged_Furm.png",
            hpAndDamageInfo: [
              {
                hp: "30 / 60",
                damageModifiers: [1.2, 1, 0.75, 0.7, 0.7],
              },
            ],
          },
        },
        {
          name: "Pharlid",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Blade Spider" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479737",
          additionalMeta: {
            killsRequired: 20,
            imageAsset: "journal/Pharlid.png",
            hpAndDamageInfo: [
              {
                hp: "25 / 50",
                damageModifiers: [1.25, 1, 0.9, 0.7, 0.7],
              },
            ],
          },
        },
        {
          name: "Pharlid Diver",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Blade Spider Hang" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478232",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Pharlid_Diver.png",
            hpAndDamageInfo: [
              {
                hp: "25",
                damageModifiers: [1.25, 1, 0.9, 0.7, 0.7],
              },
            ],
          },
        },
        {
          name: "Shardillard",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Shell Fossil Mimic" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480162",
          additionalMeta: {
            killsRequired: 3,
            imageAsset: "journal/Shardillard.png",
            hpAndDamageInfo: [
              {
                hp: "50",
                damageModifiers: [1.3, 1.1, 0.9, 0.8, 0.8],
              },
            ],
          },
        },
        {
          name: "Sandcarver",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Sand Centipede" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480191",
          additionalMeta: {
            killsRequired: 40,
            imageAsset: "journal/Sandcarver.png",
            hpAndDamageInfo: [
              {
                hp: "None",
                damageModifiers: [],
              },
            ],
          },
        },
        {
          name: "Squirrm",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Coral Judge Child" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479862",
          additionalMeta: {
            killsRequired: 4,
            imageAsset: "journal/Squirrm.png",
            hpAndDamageInfo: [
              {
                hp: "12",
                damageModifiers: [1, 0.9, 0.8, 0.6, 0.6],
              },
            ],
          },
        },
        {
          name: "Judge",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Coral Judge" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479736",
          additionalMeta: {
            killsRequired: 15,
            imageAsset: "journal/Judge.png",
            hpAndDamageInfo: [
              {
                hp: "75 / 150",
                damageModifiers: [1.25, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Last Judge",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Last Judge" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480351",
          additionalMeta: {
            killsRequired: 1,
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
          name: "Coral Furm",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Coral Spike Goomba" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480363",
          additionalMeta: {
            killsRequired: 15,
            imageAsset: "journal/Coral_Furm.png",
            hpAndDamageInfo: [
              {
                hp: "45",
                damageModifiers: [1.25, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Driznit",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Coral Conch Shooter" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478306",
          additionalMeta: {
            killsRequired: 25,
            imageAsset: "journal/Driznit.png",
            hpAndDamageInfo: [
              {
                hp: "29",
                damageModifiers: [1, 0.85, 0.7, 0.7, 0.7],
              },
            ],
          },
        },
        {
          name: "Driznarga",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Coral Conch Shooter Heavy" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480245",
          additionalMeta: {
            killsRequired: 14,
            imageAsset: "journal/Driznarga.png",
            hpAndDamageInfo: [
              {
                hp: "55 / 110",
                damageModifiers: [1.5, 1.2, 1.1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Pokenabbin",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Coral Conch Stabber" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480366",
          additionalMeta: {
            killsRequired: 16,
            imageAsset: "journal/Pokenabbin.png",
            hpAndDamageInfo: [
              {
                hp: "45 / 90",
                damageModifiers: [1.5, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Conchfly",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Coral Conch Driller" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480369",
          additionalMeta: {
            killsRequired: 8,
            imageAsset: "journal/Conchfly.png",
            hpAndDamageInfo: [
              {
                hp: "45",
                damageModifiers: [1.5, 1.2, 1.1, 1, 1],
              },
              {
                variantName: "Coral Tower",
                hp: "55",
                damageModifiers: [1.5, 1.2, 1.1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Great Conchfly",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Coral Conch Driller Giant" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480335",
          additionalMeta: {
            killsRequired: 2,
            imageAsset: "journal/Great_Conchfly.png",
            hpAndDamageInfo: [
              {
                hp: "400",
                damageModifiers: [1.3, 1, 0.825, 0.7, 0.6],
              },
              {
                variantName: "Raging Conchfly",
                hp: "820",
                damageModifiers: [1.5, 1.2, 1.05, 0.85, 0.75],
              },
            ],
          },
        },
        {
          name: "Crustcrawler",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Coral Goombas" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480227",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Crustcrawler.png",
            hpAndDamageInfo: [
              {
                hp: "25",
                damageModifiers: [2, 1.2, 1.1, 1, 1],
              },
            ],
            completedByEntry: "Crust King Khann",
          },
        },
        {
          name: "Crustcrag",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Coral Goomba Large" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480243",
          additionalMeta: {
            killsRequired: 6,
            imageAsset: "journal/Crustcrag.png",
            hpAndDamageInfo: [
              {
                hp: "80",
                damageModifiers: [1.25, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Kai",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Coral Swimmer Fat" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480231",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Kai.png",
            hpAndDamageInfo: [
              {
                hp: "5",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
            completedByEntry: "Crust King Khann",
          },
        },
        {
          name: "Spinebeak Kai",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Poke Swimmer" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480235",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Spinebeak_Kai.png",
            hpAndDamageInfo: [
              {
                hp: "5",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
            completedByEntry: "Crust King Khann",
          },
        },
        {
          name: "Steelspine Kai",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Spike Swimmer" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480234",
          additionalMeta: {
            killsRequired: 15,
            imageAsset: "journal/Steelspine_Kai.png",
            hpAndDamageInfo: [
              {
                hp: "5",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
            completedByEntry: "Crust King Khann",
          },
        },
        {
          name: "Yuma",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Coral Swimmer Small" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480233",
          additionalMeta: {
            killsRequired: 16,
            imageAsset: "journal/Yuma.png",
            hpAndDamageInfo: [
              {
                hp: "5",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
            completedByEntry: "Crust King Khann",
          },
        },
        {
          name: "Yumama",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Coral Big Jellyfish" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480232",
          additionalMeta: {
            killsRequired: 3,
            imageAsset: "journal/Yumama.png",
            hpAndDamageInfo: [
              {
                hp: "75",
                damageModifiers: [2, 1.25, 1, 1, 1],
              },
            ],
            completedByEntry: "Crust King Khann",
          },
        },
        {
          name: "Karaka",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Coral Warrior" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480229",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Karaka.png",
            hpAndDamageInfo: [
              {
                hp: "90",
                damageModifiers: [1.5, 1.2, 1.1, 1, 1],
              },
            ],
            completedByEntry: "Crust King Khann",
          },
        },
        {
          name: "Kakri",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Coral Flyer" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480230",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Kakri.png",
            hpAndDamageInfo: [
              {
                hp: "60",
                damageModifiers: [1.4, 1.2, 1, 1, 1],
              },
            ],
            completedByEntry: "Crust King Khann",
          },
        },
        {
          name: "Yago",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Coral Flyer Throw" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480228",
          additionalMeta: {
            killsRequired: 12,
            imageAsset: "journal/Yago.png",
            hpAndDamageInfo: [
              {
                hp: "60",
                damageModifiers: [1.4, 1.2, 1, 1, 1],
              },
            ],
            completedByEntry: "Crust King Khann",
          },
        },
        {
          name: "Karak Gor",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Coral Brawler" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480225",
          additionalMeta: {
            killsRequired: 8,
            imageAsset: "journal/Karak_Gor.png",
            hpAndDamageInfo: [
              {
                hp: "140",
                damageModifiers: [1.5, 1.2, 1.1, 1, 0.9],
              },
            ],
            completedByEntry: "Crust King Khann",
          },
        },
        {
          name: "Alita",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Coral Hunter" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480226",
          additionalMeta: {
            killsRequired: 6,
            imageAsset: "journal/Alita.png",
            hpAndDamageInfo: [
              {
                hp: "80",
                damageModifiers: [1.5, 1.2, 1.1, 1, 1],
              },
            ],
            completedByEntry: "Crust King Khann",
          },
        },
        {
          name: "Corrcrust Karaka",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Coral Bubble Brute" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480224",
          additionalMeta: {
            killsRequired: 6,
            imageAsset: "journal/Corrcrust_Karaka.png",
            hpAndDamageInfo: [
              {
                hp: "105",
                damageModifiers: [1.5, 1.2, 1.1, 1, 0.9],
              },
            ],
            completedByEntry: "Crust King Khann",
          },
        },
        {
          name: "Crust King Khann",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Coral King" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480327",
          additionalMeta: {
            killsRequired: 1,
            imageAsset: "journal/Crust_King_Khann.png",
            hpAndDamageInfo: [
              {
                hp: "1650",
                damageModifiers: [2, 1.35, 1.15, 1, 0.95],
              },
            ],
            completesEntries: [
              "Crustcrawler",
              "Kai",
              "Spinebeak Kai",
              "Steelspine Kai",
              "Yuma",
              "Yumama",
              "Karaka",
              "Kakri",
              "Yago",
              "Karak Gor",
              "Alita",
              "Corrcrust Karaka",
            ],
          },
        },
        {
          name: "Watcher at the Edge",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Coral Warrior Grey" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480326",
          additionalMeta: {
            killsRequired: 1,
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
          name: "Voltvyrm",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Zap Core Enemy" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480336",
          additionalMeta: {
            killsRequired: 1,
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
          name: "Drapefly",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Citadel Bat" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479013",
          additionalMeta: {
            killsRequired: 30,
            imageAsset: "journal/Drapefly.png",
            hpAndDamageInfo: [
              {
                hp: "25 / 50",
                damageModifiers: [1, 0.9, 0.9, 0.7, 0.7],
              },
            ],
          },
        },
        {
          name: "Drapelord",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Citadel Bat Large" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480263",
          additionalMeta: {
            killsRequired: 4,
            imageAsset: "journal/Drapelord.png",
            hpAndDamageInfo: [
              {
                hp: "50 / 100",
                damageModifiers: [1, 0.9, 0.9, 0.7, 0.7],
              },
            ],
          },
        },
        {
          name: "Drapemite",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Mite Heavy" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479004",
          additionalMeta: {
            killsRequired: 20,
            imageAsset: "journal/Drapemite.png",
            hpAndDamageInfo: [
              {
                hp: "25 / 50",
                damageModifiers: [1, 0.8, 0.8, 0.7, 0.7],
              },
            ],
          },
        },
        {
          name: "Giant Drapemite",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Understore Mite Giant" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480005",
          additionalMeta: {
            killsRequired: 6,
            imageAsset: "journal/Giant_Drapemite.png",
            hpAndDamageInfo: [
              {
                hp: "100 / 200",
                damageModifiers: [1.25, 1.15, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Underworker",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Understore Small" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479512",
          additionalMeta: {
            killsRequired: 15,
            imageAsset: "journal/Underworker.png",
            hpAndDamageInfo: [
              {
                hp: "30 / 60",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Underscrub",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Pilgrim 03 Understore" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479746",
          additionalMeta: {
            killsRequired: 20,
            imageAsset: "journal/Underscrub.png",
            hpAndDamageInfo: [
              {
                hp: "27 / 54",
                damageModifiers: [1, 0.9, 0.8, 0.75, 0.75],
              },
            ],
          },
        },
        {
          name: "Undersweep",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Pilgrim Staff Understore" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479837",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Undersweep.png",
            hpAndDamageInfo: [
              {
                hp: "35 / 70",
                damageModifiers: [1.25, 1, 0.8, 0.75, 0.75],
              },
            ],
          },
        },
        {
          name: "Underpoke",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Understore Poker" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479510",
          additionalMeta: {
            killsRequired: 25,
            imageAsset: "journal/Underpoke.png",
            hpAndDamageInfo: [
              {
                hp: "40 / 80",
                damageModifiers: [1.25, 1, 1, 1, 0.9],
              },
            ],
          },
        },
        {
          name: "Underloft",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Understore Thrower" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479511",
          additionalMeta: {
            killsRequired: 25,
            imageAsset: "journal/Underloft.png",
            hpAndDamageInfo: [
              {
                hp: "40 / 80",
                damageModifiers: [1.25, 1, 1, 1, 0.9],
              },
            ],
          },
        },
        {
          name: "Undercrank",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Understore Heavy" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479836",
          additionalMeta: {
            killsRequired: 4,
            imageAsset: "journal/Undercrank.png",
            hpAndDamageInfo: [
              {
                hp: "70 / 140",
                damageModifiers: [1.25, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Envoy",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Song Pilgrim 01" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479897",
          additionalMeta: {
            killsRequired: 20,
            imageAsset: "journal/Envoy.png",
            hpAndDamageInfo: [
              {
                hp: "38 / 76",
                damageModifiers: [1, 1, 0.9, 0.9, 0.9],
              },
              {
                variantName: "Fighting with Second Sentinel",
                hp: "48 / 96",
                damageModifiers: [1, 1, 0.9, 0.9, 0.9],
              },
            ],
          },
        },
        {
          name: "Choir Pouncer",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Pilgrim 01 Song" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479885",
          additionalMeta: {
            killsRequired: 30,
            imageAsset: "journal/Choir_Pouncer.png",
            hpAndDamageInfo: [
              {
                hp: "30 / 60",
                damageModifiers: [1.5, 1, 1, 0.8, 0.8],
              },
            ],
          },
        },
        {
          name: "Choir Hornhead",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Pilgrim 02 Song" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479887",
          additionalMeta: {
            killsRequired: 15,
            imageAsset: "journal/Choir_Hornhead.png",
            hpAndDamageInfo: [
              {
                hp: "45 / 90",
                damageModifiers: [1.5, 1, 1, 0.8, 0.8],
              },
              {
                variantName: "Fighting with Second Sentinel",
                hp: "55 / 110",
                damageModifiers: [1.5, 1, 1, 0.8, 0.8],
              },
            ],
          },
        },
        {
          name: "Choir Bellbearer",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Pilgrim 03 Song" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479882",
          additionalMeta: {
            killsRequired: 25,
            imageAsset: "journal/Choir_Bellbearer.png",
            hpAndDamageInfo: [
              {
                hp: "35 / 70",
                damageModifiers: [1.4, 1, 1, 0.8, 0.8],
              },
            ],
          },
        },
        {
          name: "Choir Flyer",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Pilgrim 04 Song" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479886",
          additionalMeta: {
            killsRequired: 20,
            imageAsset: "journal/Choir_Flyer.png",
            hpAndDamageInfo: [
              {
                hp: "30 / 60",
                damageModifiers: [1.5, 1, 1, 0.8, 0.8],
              },
              {
                variantName: "Fighting with Second Sentinel",
                hp: "40 / 80",
                damageModifiers: [1.5, 1, 1, 0.8, 0.8],
              },
            ],
          },
        },
        {
          name: "Choir Elder",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Pilgrim Stomper Song" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479906",
          additionalMeta: {
            killsRequired: 6,
            imageAsset: "journal/Choir_Elder.png",
            hpAndDamageInfo: [
              {
                hp: "45 / 90",
                damageModifiers: [1.5, 1, 1, 0.8, 0.8],
              },
            ],
          },
        },
        {
          name: "Choristor",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Song Pilgrim 03" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479883",
          additionalMeta: {
            killsRequired: 25,
            imageAsset: "journal/Choristor.png",
            hpAndDamageInfo: [
              {
                hp: "55 / 110",
                damageModifiers: [1, 1, 0.8, 0.8, 0.8],
              },
              {
                variantName: "Fighting with Garmond",
                hp: "5",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Reed",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Song Reed" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479880",
          additionalMeta: {
            killsRequired: 30,
            imageAsset: "journal/Reed.png",
            hpAndDamageInfo: [
              {
                hp: "55 / 110",
                damageModifiers: [1, 1, 0.8, 0.8, 0.8],
              },
            ],
          },
        },
        {
          name: "Grand Reed",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Song Reed Grand" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479918",
          additionalMeta: {
            killsRequired: 12,
            imageAsset: "journal/Grand_Reed.png",
            hpAndDamageInfo: [
              {
                hp: "130 / 260",
                damageModifiers: [1.5, 1.2, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Choir Clapper",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Song Heavy Sentry" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480052",
          additionalMeta: {
            killsRequired: 3,
            imageAsset: "journal/Choir_Clapper.png",
            hpAndDamageInfo: [
              {
                hp: "230 / 460",
                damageModifiers: [1.5, 1.15, 1, 0.9, 0.9],
              },
            ],
          },
        },
        {
          name: "Clawmaiden",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Song Handmaiden" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479899",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Clawmaiden.png",
            hpAndDamageInfo: [
              {
                hp: "48",
                damageModifiers: [1.25, 1, 0.9, 0.9, 0.9],
              },
            ],
          },
        },
        {
          name: "Memoria",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Arborium Keeper" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480239",
          additionalMeta: {
            killsRequired: 2,
            imageAsset: "journal/Memoria.png",
            hpAndDamageInfo: [
              {
                hp: "70 / 140",
                damageModifiers: [1.5, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Minister",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Song Administrator" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480050",
          additionalMeta: {
            killsRequired: 15,
            imageAsset: "journal/Minister.png",
            hpAndDamageInfo: [
              {
                hp: "60 / 120",
                damageModifiers: [1.25, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Maestro",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Song Pilgrim Maestro" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480049",
          additionalMeta: {
            killsRequired: 6,
            imageAsset: "journal/Maestro.png",
            hpAndDamageInfo: [
              {
                hp: "65 / 130",
                damageModifiers: [1, 1, 0.8, 0.75, 0.75],
              },
            ],
          },
        },
        {
          name: "Second Sentinel",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Song Knight" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480348",
          additionalMeta: {
            killsRequired: 1,
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
          name: "Dreg Husk",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Song Threaded Husk" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480036",
          additionalMeta: {
            killsRequired: 8,
            imageAsset: "journal/Dreg_Husk.png",
            hpAndDamageInfo: [
              {
                hp: "50",
                damageModifiers: [1.2, 1, 0.85, 0.85, 0.85],
              },
              {
                variantName: "The Unravelled",
                hp: "65",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
            completedByEntry: "The Unravelled",
          },
        },
        {
          name: "Dregwheel",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Song Threaded Husk Spin" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480043",
          additionalMeta: {
            killsRequired: 8,
            imageAsset: "journal/Dregwheel.png",
            hpAndDamageInfo: [
              {
                hp: "50",
                damageModifiers: [1.2, 1, 0.85, 0.85, 0.85],
              },
            ],
            completedByEntry: "The Unravelled",
          },
        },
        {
          name: "Surgeon",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Song Pilgrim 02" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480409",
          additionalMeta: {
            killsRequired: 3,
            imageAsset: "journal/Surgeon.png",
            hpAndDamageInfo: [
              {
                hp: "75",
                damageModifiers: [1.2, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Mortician",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Song Creeper" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480040",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Mortician.png",
            hpAndDamageInfo: [
              {
                hp: "95 / 190",
                damageModifiers: [1.25, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "The Unravelled",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Conductor Boss" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480354",
          additionalMeta: {
            killsRequired: 1,
            imageAsset: "journal/The_Unravelled.png",
            hpAndDamageInfo: [
              {
                hp: "1000",
                damageModifiers: [1, 1, 1, 0.9, 0.85],
              },
            ],
            completesEntries: ["Dreg Husk", "Dregwheel"],
          },
        },
        {
          name: "Cogwork Underfly",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Understore Automaton" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480021",
          additionalMeta: {
            killsRequired: 25,
            imageAsset: "journal/Cogwork_Underfly.png",
            hpAndDamageInfo: [
              {
                hp: "4",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Cogwork Hauler",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Understore Automaton EX" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480022",
          additionalMeta: {
            killsRequired: 12,
            imageAsset: "journal/Cogwork_Hauler.png",
            hpAndDamageInfo: [
              {
                hp: "20",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Cogwork Crawler",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Song Automaton Goomba" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479962",
          additionalMeta: {
            killsRequired: 15,
            imageAsset: "journal/Cogwork_Crawler.png",
            hpAndDamageInfo: [
              {
                hp: "35 / 70",
                damageModifiers: [1.25, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Cogworker",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Song Automaton Fly" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479938",
          additionalMeta: {
            killsRequired: 15,
            imageAsset: "journal/Cogworker.png",
            hpAndDamageInfo: [
              {
                hp: "28",
                damageModifiers: [1.25, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Cogwork Spine",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Song Automaton Fly Spike" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479963",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Cogwork_Spine.png",
            hpAndDamageInfo: [
              {
                hp: "21 / 42",
                damageModifiers: [1.25, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Cogwork Choirbug",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Song Automaton 01" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479961",
          additionalMeta: {
            killsRequired: 20,
            imageAsset: "journal/Cogwork_Choirbug.png",
            hpAndDamageInfo: [
              {
                hp: "35 / 70",
                damageModifiers: [1.25, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Cogwork Cleanser",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Song Automaton 02" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479968",
          additionalMeta: {
            killsRequired: 12,
            imageAsset: "journal/Cogwork_Cleanser.png",
            hpAndDamageInfo: [
              {
                hp: "40 / 80",
                damageModifiers: [1.25, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Cogwork Defender",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Song Automaton Shield" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479982",
          additionalMeta: {
            killsRequired: 8,
            imageAsset: "journal/Cogwork_Defender.png",
            hpAndDamageInfo: [
              {
                hp: "55 / 110",
                damageModifiers: [1.25, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Cogwork Clapper",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Song Automaton Ball" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479971",
          additionalMeta: {
            killsRequired: 1,
            imageAsset: "journal/Cogwork_Clapper.png",
            hpAndDamageInfo: [
              {
                hp: "145",
                damageModifiers: [1.5, 1, 0.9, 0.8, 0.8],
              },
              {
                variantName: "Pair",
                hp: "190",
                damageModifiers: [1.5, 1, 0.9, 0.8, 0.8],
              },
            ],
          },
        },
        {
          name: "Cogwork Dancers",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Clockwork Dancer" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480347",
          additionalMeta: {
            killsRequired: 1,
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
          name: "Vaultborn",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Song Scholar Acolyte" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480008",
          additionalMeta: {
            killsRequired: 20,
            imageAsset: "journal/Vaultborn.png",
            hpAndDamageInfo: [
              {
                hp: "40 / 80",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Lampbearer",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Lightbearer" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479994",
          additionalMeta: {
            killsRequired: 20,
            imageAsset: "journal/Lampbearer.png",
            hpAndDamageInfo: [
              {
                hp: "50 / 100",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Scrollreader",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Scrollkeeper" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479991",
          additionalMeta: {
            killsRequired: 15,
            imageAsset: "journal/Scrollreader.png",
            hpAndDamageInfo: [
              {
                hp: "100 / 200",
                damageModifiers: [1.3, 1.1, 0.9, 0.8, 0.8],
              },
            ],
          },
        },
        {
          name: "Vaultkeeper",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Scholar" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479999",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Vaultkeeper.png",
            hpAndDamageInfo: [
              {
                hp: "70 / 140",
                damageModifiers: [1.1, 1, 0.8, 0.8, 0.8],
              },
            ],
          },
        },
        {
          name: "Trobbio",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Trobbio" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480343",
          additionalMeta: {
            killsRequired: 1,
            imageAsset: "journal/Trobbio.png",
            hpAndDamageInfo: [
              {
                hp: "700",
                damageModifiers: [1.4, 1, 0.9, 0.8, 0.8],
              },
            ],
            completedByEntry: "Tormented Trobbio",
          },
        },
        {
          name: "Tormented Trobbio",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Tormented Trobbio" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480344",
          additionalMeta: {
            killsRequired: 1,
            imageAsset: "journal/Tormented_Trobbio.png",
            hpAndDamageInfo: [
              {
                hp: "950",
                damageModifiers: [1.4, 1, 0.9, 0.8, 0.75],
              },
            ],
            completesEntries: ["Trobbio"],
          },
        },
        {
          name: "Penitent",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Slab Prisoner Leaper New" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479005",
          additionalMeta: {
            killsRequired: 8,
            imageAsset: "journal/Penitent.png",
            hpAndDamageInfo: [
              {
                hp: "50",
                damageModifiers: [1.5, 1.25, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Puny Penitent",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Slab Prisoner Fly New" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479006",
          additionalMeta: {
            killsRequired: 6,
            imageAsset: "journal/Puny_Penitent.png",
            hpAndDamageInfo: [
              {
                hp: "40",
                damageModifiers: [1.5, 1.25, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Freshfly",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Slab Fly Small Fresh" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480479",
          additionalMeta: {
            killsRequired: 20,
            imageAsset: "journal/Freshfly.png",
            hpAndDamageInfo: [
              {
                hp: "5",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
            completedByEntry: "Broodmother",
          },
        },
        {
          name: "Scabfly",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Slab Fly Small" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479008",
          additionalMeta: {
            killsRequired: 15,
            imageAsset: "journal/Scabfly.png",
            hpAndDamageInfo: [
              {
                hp: "20 / 40",
                damageModifiers: [1.25, 1, 0.75, 0.85, 1],
              },
            ],
          },
        },
        {
          name: "Guardfly",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Slab Fly Mid" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479007",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Guardfly.png",
            hpAndDamageInfo: [
              {
                hp: "45 / 90",
                damageModifiers: [1.5, 1, 0.85, 0.85, 0.85],
              },
            ],
          },
        },
        {
          name: "Wardenfly",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Slab Fly Large" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479011",
          additionalMeta: {
            killsRequired: 8,
            imageAsset: "journal/Wardenfly.png",
            hpAndDamageInfo: [
              {
                hp: "70 / 140",
                damageModifiers: [1.6, 1.1, 0.8, 0.8, 0.8],
              },
              {
                variantName: "With Cage",
                hp: "64",
                damageModifiers: [1.3, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Broodmother",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Slab Fly Broodmother" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480338",
          additionalMeta: {
            killsRequired: 1,
            imageAsset: "journal/Broodmother.png",
            hpAndDamageInfo: [
              {
                hp: "700",
                damageModifiers: [1.35, 1.1, 1, 1, 1],
              },
            ],
            completesEntries: ["Freshfly"],
          },
        },
        {
          name: "Driftlin",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Peaks Drifter" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479036",
          additionalMeta: {
            killsRequired: 20,
            imageAsset: "journal/Driftlin.png",
            hpAndDamageInfo: [
              {
                hp: "4 / 8",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Mnemonid",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Crystal Drifter" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479043",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Mnemonid.png",
            hpAndDamageInfo: [
              {
                hp: "50",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Mnemonord",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Crystal Drifter Giant" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480198",
          additionalMeta: {
            killsRequired: 3,
            imageAsset: "journal/Mnemonord.png",
            hpAndDamageInfo: [
              {
                hp: "50",
                damageModifiers: [1, 1, 1, 0.9, 0.9],
              },
            ],
          },
        },
        {
          name: "Servitor Ignim",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Weaver Servitor" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478215",
          additionalMeta: {
            killsRequired: 8,
            imageAsset: "journal/Servitor_Ignim.png",
            hpAndDamageInfo: [
              {
                hp: "1",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Servitor Boran",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Weaver Servitor Large" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479041",
          additionalMeta: {
            killsRequired: 5,
            imageAsset: "journal/Servitor_Boran.png",
            hpAndDamageInfo: [
              {
                hp: "70",
                damageModifiers: [1.25, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Winged Lifeseed",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Lifeblood Fly" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479858",
          additionalMeta: {
            killsRequired: 8,
            imageAsset: "journal/Winged_Lifeseed.png",
            hpAndDamageInfo: [
              {
                hp: "1",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Plasmid",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Bone Worm BlueBlood" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480146",
          additionalMeta: {
            killsRequired: 15,
            imageAsset: "journal/Plasmid.png",
            hpAndDamageInfo: [
              {
                hp: "60",
                damageModifiers: [1.25, 1, 1, 1, 0.9],
              },
            ],
          },
        },
        {
          name: "Plasmidas",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Bone Worm BlueTurret" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480331",
          additionalMeta: {
            killsRequired: 6,
            imageAsset: "journal/Plasmidas.png",
            hpAndDamageInfo: [
              {
                hp: "80",
                damageModifiers: [1.25, 1, 1, 0.9, 0.9],
              },
            ],
          },
        },
        {
          name: "Plasmified Zango",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Blue Assistant" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479273",
          additionalMeta: {
            killsRequired: 1,
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
          name: "Leaf Glider",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Lilypad Fly" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480218",
          additionalMeta: {
            killsRequired: 12,
            imageAsset: "journal/Leaf_Glider.png",
            hpAndDamageInfo: [
              {
                hp: "1",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
            completedByEntry: "Clover Dancers",
          },
        },
        {
          name: "Leaf Roller",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Grass Goomba" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480217",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Leaf_Roller.png",
            hpAndDamageInfo: [
              {
                hp: "42",
                damageModifiers: [2, 1.25, 1, 1, 1],
              },
            ],
            completedByEntry: "Clover Dancers",
          },
        },
        {
          name: "Pendra",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Hornet Dragonfly" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480223",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Pendra.png",
            hpAndDamageInfo: [
              {
                hp: "22",
                damageModifiers: [1, 1, 1, 1, 1],
              },
              {
                variantName: "First Room",
                hp: "35",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
            completedByEntry: "Clover Dancers",
          },
        },
        {
          name: "Pendragor",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Dragonfly Large" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480481",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Pendragor.png",
            hpAndDamageInfo: [
              {
                hp: "70",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
            completedByEntry: "Clover Dancers",
          },
        },
        {
          name: "Nuphar",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Lilypad Trap" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480222",
          additionalMeta: {
            killsRequired: 6,
            imageAsset: "journal/Nuphar.png",
            hpAndDamageInfo: [
              {
                hp: "70",
                damageModifiers: [1.35, 1.15, 1, 1, 1],
              },
            ],
            completedByEntry: "Clover Dancers",
          },
        },
        {
          name: "Cloverstag",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Cloverstag" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480221",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Cloverstag.png",
            hpAndDamageInfo: [
              {
                hp: "62",
                damageModifiers: [1.5, 1.5, 1, 1, 1],
              },
            ],
            completedByEntry: "Clover Dancers",
          },
        },
        {
          name: "Palestag",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Cloverstag White" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480321",
          additionalMeta: {
            killsRequired: 1,
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
          name: "Kindanir",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Grasshopper Child" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480215",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Kindanir.png",
            hpAndDamageInfo: [
              {
                hp: "55",
                damageModifiers: [1.35, 1.15, 1, 1, 1],
              },
            ],
            completedByEntry: "Clover Dancers",
          },
        },
        {
          name: "Verdanir",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Grasshopper Slasher" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480219",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Verdanir.png",
            hpAndDamageInfo: [
              {
                hp: "100",
                damageModifiers: [1.35, 1.15, 1, 1, 1],
              },
            ],
            completedByEntry: "Clover Dancers",
          },
        },
        {
          name: "Escalion",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Grasshopper Fly" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480220",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Escalion.png",
            hpAndDamageInfo: [
              {
                hp: "100",
                damageModifiers: [1.35, 1.15, 1, 1, 1],
              },
            ],
            completedByEntry: "Clover Dancers",
          },
        },
        {
          name: "Clover Dancers",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Clover Dancer" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480322",
          additionalMeta: {
            killsRequired: 1,
            imageAsset: "journal/Clover_Dancers.png",
            hpAndDamageInfo: [
              {
                hp: "1160",
                damageModifiers: [1.75, 1.25, 1.15, 1, 1],
              },
            ],
            completesEntries: [
              "Leaf Glider",
              "Leaf Roller",
              "Pendra",
              "Pendragor",
              "Nuphar",
              "Cloverstag",
              "Kindanir",
              "Verdanir",
              "Escalion",
            ],
          },
        },
        {
          name: "Shadow Creeper",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Abyss Crawler" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480134",
          additionalMeta: {
            killsRequired: 16,
            imageAsset: "journal/Shadow_Creeper.png",
            hpAndDamageInfo: [
              {
                hp: "40",
                damageModifiers: [2, 1.2, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Shadow Charger",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Abyss Crawler Large" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480135",
          additionalMeta: {
            killsRequired: 6,
            imageAsset: "journal/Shadow_Charger.png",
            hpAndDamageInfo: [
              {
                hp: "80",
                damageModifiers: [2.5, 1.5, 1.3, 1, 1],
              },
            ],
          },
        },
        {
          name: "Gloomsac",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Gloomfly" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480133",
          additionalMeta: {
            killsRequired: 15,
            imageAsset: "journal/Gloomsac.png",
            hpAndDamageInfo: [
              {
                hp: "50",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Gargant Gloom",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Gloom Beast" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480132",
          additionalMeta: {
            killsRequired: 4,
            imageAsset: "journal/Gargant_Gloom.png",
            hpAndDamageInfo: [
              {
                hp: "200",
                damageModifiers: [2, 1.5, 1.1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Void Tendrils",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Void Tendrils" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479744",
          additionalMeta: {
            killsRequired: 1,
            imageAsset: "journal/Void_Tendrils.png",
            hpAndDamageInfo: [
              {
                hp: "-",
                damageModifiers: [],
              },
            ],
          },
        },
        {
          name: "Void Mass",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Black Thread Core" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480418",
          additionalMeta: {
            killsRequired: 8,
            imageAsset: "journal/Void_Mass.png",
            hpAndDamageInfo: [
              {
                hp: "190",
                damageModifiers: [1.75, 1.25, 1.1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Summoned Saviour",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Abyss Mass" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480310",
          additionalMeta: {
            killsRequired: 1,
            imageAsset: "journal/Summoned_Saviour.png",
            hpAndDamageInfo: [
              {
                hp: "500",
                damageModifiers: [2, 1.3, 1.05, 0.9, 0.85],
              },
            ],
          },
          onlyFoundInSteelSoulMode: true,
        },
        {
          name: "Wingmould",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "White Palace Fly" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480415",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Wingmould.png",
            hpAndDamageInfo: [
              {
                hp: "1",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Garpid",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Centipede Trap" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479626",
          additionalMeta: {
            killsRequired: 30,
            imageAsset: "journal/Garpid.png",
            hpAndDamageInfo: [
              {
                hp: "999999 (1)",
                damageModifiers: [1, 1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Imoba",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Spike Lazy Flyer" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479627",
          additionalMeta: {
            killsRequired: 4,
            imageAsset: "journal/Imoba.png",
            hpAndDamageInfo: [
              {
                hp: "50",
                damageModifiers: [1.25, 1.1, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Skrill",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Surface Scuttler" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479628",
          additionalMeta: {
            killsRequired: 10,
            imageAsset: "journal/Skrill.png",
            hpAndDamageInfo: [
              {
                hp: "17",
                damageModifiers: [2, 1.25, 1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Bell Eater",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Giant Centipede" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480350",
          additionalMeta: {
            killsRequired: 1,
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
          name: "Huge Flea",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Giant Flea" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479122",
          additionalMeta: {
            killsRequired: 1,
            imageAsset: "journal/Huge_Flea.png",
            hpAndDamageInfo: [
              {
                hp: "200",
                damageModifiers: [1.5, 1.2, 1.1, 1, 1],
              },
            ],
          },
        },
        {
          name: "Shakra",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Shakra" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479822",
          additionalMeta: {
            killsRequired: 1,
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
          name: "Garmond & Zaza",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Garmond_Zaza" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479361",
          additionalMeta: {
            killsRequired: 1,
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
          name: "Lost Garmond",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Garmond" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480325",
          additionalMeta: {
            killsRequired: 1,
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
          name: "Pinstress",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Pinstress Boss" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480337",
          additionalMeta: {
            killsRequired: 1,
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
          name: "Widow",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Spinner Boss" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480323",
          additionalMeta: {
            killsRequired: 1,
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
          name: "First Sinner",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "First Weaver" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480339",
          additionalMeta: {
            killsRequired: 1,
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
          name: "Phantom",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Phantom" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480356",
          additionalMeta: {
            killsRequired: 1,
            imageAsset: "journal/Phantom.png",
            hpAndDamageInfo: [
              {
                hp: "650",
                damageModifiers: [1.2, 1, 0.85, 0.75, 0.7],
              },
            ],
            completesEntries: ["Wraith"],
          },
        },
        {
          name: "Lace",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Lace" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480355",
          additionalMeta: {
            killsRequired: 2,
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
          name: "Grand Mother Silk",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Silk Boss" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480342",
          additionalMeta: {
            killsRequired: 1,
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
          name: "Lost Lace",
          whichAct: 0,
          completionDetails: "",
          parsingInfo: { type: "journal", internalId: "Lost Lace" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480341",
          additionalMeta: {
            killsRequired: 1,
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
