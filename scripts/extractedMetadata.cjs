const completionVariantsMetadata = {
  "Skarrsinger Karmelita": ["Skarr Scout", "Skarr Stalker", "Spear Skarr", "Last Claw"],
  "Father of the Flame": ["Wisp", "Burning Bug"],
  Crawfather: ["Craw Juror", "Tallcraw Juror", "Squatcraw Juror"],
  "Disgraced Chef Lugoli": ["Roachserver"],
  Phantom: ["Wraith"],
  "Crust King Khann": [
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
  "The Unravelled": ["Dreg Husk", "Dregwheel"],
  "Tormented Trobbio": ["Trobbio"],
  Broodmother: ["Freshfly"],
  "Clover Dancers": [
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
};

const extractedEnemyMetadata = {
  Aknid: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/3/36/HJ_Aknid.png",
    name: "Aknid",
    values: [
      {
        hp: "15 / 60",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  Alita: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/4/4b/HJ_Alita.png",
    name: "Alita",
    values: [
      {
        hp: "80",
        damageModifiers: [1.5, 1.2, 1.1, 1, 1],
      },
    ],
  },
  Barnak: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/5/50/HJ_Barnak.png",
    name: "Barnak",
    values: [
      {
        hp: "35",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  Beastfly: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/b/b7/HJ_Beastfly.png",
    name: "Beastfly",
    values: [
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
  Bloatroach: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/6/66/HJ_Bloatroach.png",
    name: "Bloatroach",
    values: [
      {
        hp: "80 / 160",
        damageModifiers: [1.75, 1.2, 1, 0.9, 0.9],
      },
    ],
  },
  Brushflit: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/7/70/HJ_Brushflit.png",
    name: "Brushflit",
    values: [
      {
        hp: "1",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  "Burning Bug": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/6/6b/HJ_Burning_Bug.png",
    name: "Burning Bug",
    values: [
      {
        hp: "90",
        damageModifiers: [1.5, 1.15, 1, 1, 1],
      },
    ],
  },
  Caranid: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/e/e9/HJ_Caranid.png",
    name: "Caranid",
    values: [
      {
        hp: "14 / 56",
        damageModifiers: [1, 0.75, 0.75, 0.75, 0.75],
      },
    ],
  },
  "Choir Bellbearer": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/1/16/HJ_Choir_Bellbearer.png",
    name: "Choir Bellbearer",
    values: [
      {
        hp: "35 / 70",
        damageModifiers: [1.4, 1, 1, 0.8, 0.8],
      },
    ],
  },
  "Choir Elder": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/b/b8/HJ_Choir_Elder.png",
    name: "Choir Elder",
    values: [
      {
        hp: "45 / 90",
        damageModifiers: [1.5, 1, 1, 0.8, 0.8],
      },
    ],
  },
  "Choir Flyer": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/c/c1/HJ_Choir_Flyer.png",
    name: "Choir Flyer",
    values: [
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
  "Choir Hornhead": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/0/02/HJ_Choir_Hornhead.png",
    name: "Choir Hornhead",
    values: [
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
  "Choir Pouncer": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/1/18/HJ_Choir_Pouncer.png",
    name: "Choir Pouncer",
    values: [
      {
        hp: "30 / 60",
        damageModifiers: [1.5, 1, 1, 0.8, 0.8],
      },
    ],
  },
  Choristor: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/3/3a/HJ_Choristor.png",
    name: "Choristor",
    values: [
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
  Clawmaiden: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/2/20/HJ_Clawmaiden.png",
    name: "Clawmaiden",
    values: [
      {
        hp: "48",
        damageModifiers: [1.25, 1, 0.9, 0.9, 0.9],
      },
    ],
  },
  Cloverstag: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/b/b0/HJ_Cloverstag.png",
    name: "Cloverstag",
    values: [
      {
        hp: "62",
        damageModifiers: [1.5, 1.5, 1, 1, 1],
      },
    ],
  },
  "Cogwork Choirbug": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/9/91/HJ_Cogwork_Choirbug.png",
    name: "Cogwork Choirbug",
    values: [
      {
        hp: "35 / 70",
        damageModifiers: [1.25, 1, 1, 1, 1],
      },
    ],
  },
  "Cogwork Cleanser": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/4/4a/HJ_Cogwork_Cleanser.png",
    name: "Cogwork Cleanser",
    values: [
      {
        hp: "40 / 80",
        damageModifiers: [1.25, 1, 1, 1, 1],
      },
    ],
  },
  "Cogwork Crawler": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/f/f2/HJ_Cogwork_Crawler.png",
    name: "Cogwork Crawler",
    values: [
      {
        hp: "35 / 70",
        damageModifiers: [1.25, 1, 1, 1, 1],
      },
    ],
  },
  "Cogwork Defender": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/7/77/HJ_Cogwork_Defender.png",
    name: "Cogwork Defender",
    values: [
      {
        hp: "55 / 110",
        damageModifiers: [1.25, 1, 1, 1, 1],
      },
    ],
  },
  "Cogwork Hauler": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/6/6f/HJ_Cogwork_Hauler.png",
    name: "Cogwork Hauler",
    values: [
      {
        hp: "20",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  "Cogwork Spine": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/7/76/HJ_Cogwork_Spine.png",
    name: "Cogwork Spine",
    values: [
      {
        hp: "21 / 42",
        damageModifiers: [1.25, 1, 1, 1, 1],
      },
    ],
  },
  "Cogwork Underfly": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/0/09/HJ_Cogwork_Underfly.png",
    name: "Cogwork Underfly",
    values: [
      {
        hp: "4",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  Cogworker: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/7/75/HJ_Cogworker.png",
    name: "Cogworker",
    values: [
      {
        hp: "28",
        damageModifiers: [1.25, 1, 1, 1, 1],
      },
    ],
  },
  Conchfly: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/1/1e/HJ_Conchfly.png",
    name: "Conchfly",
    values: [
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
  "Coral Furm": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/1/14/HJ_Coral_Furm.png",
    name: "Coral Furm",
    values: [
      {
        hp: "45",
        damageModifiers: [1.25, 1, 1, 1, 1],
      },
    ],
  },
  Cragglite: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/a/ae/HJ_Cragglite.png",
    name: "Cragglite",
    values: [
      {
        hp: "20 / 40",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  Craw: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/b/bd/HJ_Craw.png",
    name: "Craw",
    values: [
      {
        hp: "20 / 40",
        damageModifiers: [1, 0.74, 0.74, 0.74, 0.74],
      },
    ],
  },
  "Craw Juror": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/e/ed/HJ_Craw_Juror.png",
    name: "Craw Juror",
    values: [
      {
        hp: "50",
        damageModifiers: [1.5, 1, 0.95, 0.95, 0.95],
      },
    ],
  },
  Crustcrag: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/1/1b/HJ_Crustcrag.png",
    name: "Crustcrag",
    values: [
      {
        hp: "80",
        damageModifiers: [1.25, 1, 1, 1, 1],
      },
    ],
  },
  Crustcrawler: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/a/a2/HJ_Crustcrawler.png",
    name: "Crustcrawler",
    values: [
      {
        hp: "25",
        damageModifiers: [2, 1.2, 1.1, 1, 1],
      },
    ],
  },
  "Deep Diver": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/c/ce/HJ_Deep_Diver.png",
    name: "Deep Diver",
    values: [
      {
        hp: "90 / 180",
        damageModifiers: [1.25, 0.95, 0.85, 0.75, 0.7],
      },
    ],
  },
  Drapefly: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/f/f5/HJ_Drapefly.png",
    name: "Drapefly",
    values: [
      {
        hp: "25 / 50",
        damageModifiers: [1, 0.9, 0.9, 0.7, 0.7],
      },
    ],
  },
  Drapelord: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/1/11/HJ_Drapelord.png",
    name: "Drapelord",
    values: [
      {
        hp: "50 / 100",
        damageModifiers: [1, 0.9, 0.9, 0.7, 0.7],
      },
    ],
  },
  Drapemite: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/d/df/HJ_Drapemite.png",
    name: "Drapemite",
    values: [
      {
        hp: "25 / 50",
        damageModifiers: [1, 0.8, 0.8, 0.7, 0.7],
      },
    ],
  },
  "Dreg Catcher": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/f/ff/HJ_Dreg_Catcher.png",
    name: "Dreg Catcher",
    values: [
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
  "Dreg Husk": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/1/10/HJ_Dreg_Husk.png",
    name: "Dreg Husk",
    values: [
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
  },
  Dregwheel: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/b/bd/HJ_Dregwheel.png",
    name: "Dregwheel",
    values: [
      {
        hp: "50",
        damageModifiers: [1.2, 1, 0.85, 0.85, 0.85],
      },
    ],
  },
  Driftlin: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/6/64/HJ_Driftlin.png",
    name: "Driftlin",
    values: [
      {
        hp: "4 / 8",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  Driznarga: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/9/94/HJ_Driznarga.png",
    name: "Driznarga",
    values: [
      {
        hp: "55 / 110",
        damageModifiers: [1.5, 1.2, 1.1, 1, 1],
      },
    ],
  },
  Driznit: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/5/57/HJ_Driznit.png",
    name: "Driznit",
    values: [
      {
        hp: "29",
        damageModifiers: [1, 0.85, 0.7, 0.7, 0.7],
      },
    ],
  },
  Ductsucker: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/4/4f/HJ_Ductsucker.png",
    name: "Ductsucker",
    values: [
      {
        hp: "100",
        damageModifiers: [1.25, 1.1, 1, 0.9, 0.9],
      },
    ],
  },
  "Elder Pilgrim": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/6/6c/HJ_Elder_Pilgrim.png",
    name: "Elder Pilgrim",
    values: [
      {
        hp: "30 / 120",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  Envoy: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/7/7f/HJ_Envoy.png",
    name: "Envoy",
    values: [
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
  Escalion: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/2/21/HJ_Escalion.png",
    name: "Escalion",
    values: [
      {
        hp: "100",
        damageModifiers: [1.35, 1.15, 1, 1, 1],
      },
    ],
  },
  Fertid: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/d/d2/HJ_Fertid.png",
    name: "Fertid",
    values: [
      {
        hp: "15 / 30",
        damageModifiers: [1, 0.75, 0.75, 0.75, 0.75],
      },
    ],
  },
  "Flapping Fertid": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/d/d3/HJ_Flapping_Fertid.png",
    name: "Flapping Fertid",
    values: [
      {
        hp: "15 / 30",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  "Flintflame Flyer": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/0/03/HJ_Flintflame_Flyer.png",
    name: "Flintflame Flyer",
    values: [
      {
        hp: "60 / 120",
        damageModifiers: [1.5, 1, 0.9, 0.85, 0.85],
      },
    ],
  },
  "Flintstone Flyer": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/f/fb/HJ_Flintstone_Flyer.png",
    name: "Flintstone Flyer",
    values: [
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
  Fluttermite: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/d/d7/HJ_Fluttermite.png",
    name: "Fluttermite",
    values: [
      {
        hp: "15 / 30",
        damageModifiers: [1, 0.8, 0.8, 0.8, 0.8],
      },
    ],
  },
  Freshfly: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/a/a7/HJ_Freshfly.png",
    name: "Freshfly",
    values: [
      {
        hp: "5",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  Furm: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/f/fe/HJ_Furm.png",
    name: "Furm",
    values: [
      {
        hp: "20 / 40",
        damageModifiers: [1, 1, 0.75, 0.75, 0.75],
      },
    ],
  },
  Gahlia: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/c/c1/HJ_Gahlia.png",
    name: "Gahlia",
    values: [
      {
        hp: "20 / 40",
        damageModifiers: [1, 1, 0.75, 0.75, 0.75],
      },
    ],
  },
  Garpid: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/b/b3/HJ_Garpid.png",
    name: "Garpid",
    values: [
      {
        hp: "999999 (1)",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  "Gargant Gloom": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/d/d5/HJ_Gargant_Gloom.png",
    name: "Gargant Gloom",
    values: [
      {
        hp: "200",
        damageModifiers: [2, 1.5, 1.1, 1, 1],
      },
    ],
  },
  "Giant Drapemite": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/0/08/HJ_Giant_Drapemite.png",
    name: "Giant Drapemite",
    values: [
      {
        hp: "100 / 200",
        damageModifiers: [1.25, 1.15, 1, 1, 1],
      },
    ],
  },
  "Grand Reed": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/c/cc/HJ_Grand_Reed.png",
    name: "Grand Reed",
    values: [
      {
        hp: "130 / 260",
        damageModifiers: [1.5, 1.2, 1, 1, 1],
      },
    ],
  },
  Grom: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/b/b0/HJ_Grom.png",
    name: "Grom",
    values: [
      {
        hp: "30",
        damageModifiers: [1, 0.8, 0.8, 0.8, 0.8],
      },
    ],
  },
  Gromling: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/a/a6/HJ_Gromling.png",
    name: "Gromling",
    values: [
      {
        hp: "30",
        damageModifiers: [1.25, 1, 1, 1, 1],
      },
    ],
  },
  Guardfly: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/1/1f/HJ_Guardfly.png",
    name: "Guardfly",
    values: [
      {
        hp: "45 / 90",
        damageModifiers: [1.5, 1, 0.85, 0.85, 0.85],
      },
    ],
  },
  "Hardbone Elder": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/6/66/HJ_Hardbone_Elder.png",
    name: "Hardbone Elder",
    values: [
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
  "Hardbone Hopper": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/7/78/HJ_Hardbone_Hopper.png",
    name: "Hardbone Hopper",
    values: [
      {
        hp: "20 / 80",
        damageModifiers: [1, 1, 0.75, 0.75, 0.75],
      },
    ],
  },
  Hoker: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/5/55/HJ_Hoker.png",
    name: "Hoker",
    values: [
      {
        hp: "15",
        damageModifiers: [1, 0.8, 0.55, 0.55, 0.8],
      },
    ],
  },
  Imoba: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/9/9d/HJ_Imoba.png",
    name: "Imoba",
    values: [
      {
        hp: "50",
        damageModifiers: [1.25, 1.1, 1, 1, 1],
      },
    ],
  },
  Judge: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/c/cd/HJ_Judge.png",
    name: "Judge",
    values: [
      {
        hp: "75 / 150",
        damageModifiers: [1.25, 1, 1, 1, 1],
      },
    ],
  },
  Kai: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/a/a7/HJ_Kai.png",
    name: "Kai",
    values: [
      {
        hp: "5",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  Kakri: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/e/ea/HJ_Kakri.png",
    name: "Kakri",
    values: [
      {
        hp: "60",
        damageModifiers: [1.4, 1.2, 1, 1, 1],
      },
    ],
  },
  Karaka: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/2/20/HJ_Karaka.png",
    name: "Karaka",
    values: [
      {
        hp: "90",
        damageModifiers: [1.5, 1.2, 1.1, 1, 1],
      },
    ],
  },
  Kilik: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/d/d7/HJ_Kilik.png",
    name: "Kilik",
    values: [
      {
        hp: "20 / 80",
        damageModifiers: [1, 0.9, 0.76, 0.9, 1],
      },
    ],
  },
  Kindanir: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/7/7c/HJ_Kindanir.png",
    name: "Kindanir",
    values: [
      {
        hp: "55",
        damageModifiers: [1.35, 1.15, 1, 1, 1],
      },
    ],
  },
  Lampbearer: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/d/d5/HJ_Lampbearer.png",
    name: "Lampbearer",
    values: [
      {
        hp: "50 / 100",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  Lavalarga: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/a/a4/HJ_Lavalarga.png",
    name: "Lavalarga",
    values: [
      {
        hp: "85 / 170",
        damageModifiers: [1.75, 1.2, 1.1, 0.9, 0.9],
      },
    ],
  },
  Lavalug: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/f/f5/HJ_Lavalug.png",
    name: "Lavalug",
    values: [
      {
        hp: "15 / 30",
        damageModifiers: [1, 0.8, 0.8, 0.8, 0.8],
      },
    ],
  },
  "Leaf Glider": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/3/34/HJ_Leaf_Glider.png",
    name: "Leaf Glider",
    values: [
      {
        hp: "1",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  "Leaf Roller": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/d/d3/HJ_Leaf_Roller.png",
    name: "Leaf Roller",
    values: [
      {
        hp: "42",
        damageModifiers: [2, 1.25, 1, 1, 1],
      },
    ],
  },
  Maestro: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/7/73/HJ_Maestro.png",
    name: "Maestro",
    values: [
      {
        hp: "65 / 130",
        damageModifiers: [1, 1, 0.8, 0.75, 0.75],
      },
    ],
  },
  Marrowmaw: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/5/53/HJ_Marrowmaw.png",
    name: "Marrowmaw",
    values: [
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
  "Massive Mossgrub": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/6/60/HJ_Massive_Mossgrub.png",
    name: "Massive Mossgrub",
    values: [
      {
        hp: "80",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  Mawling: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/1/16/HJ_Mawling.png",
    name: "Mawling",
    values: [
      {
        hp: "15 / 30",
        damageModifiers: [1, 0.8, 0.8, 0.8, 0.8],
      },
    ],
  },
  Memoria: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/9/92/HJ_Memoria.png",
    name: "Memoria",
    values: [
      {
        hp: "70 / 140",
        damageModifiers: [1.5, 1, 1, 1, 1],
      },
    ],
  },
  Minister: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/8/87/HJ_Minister.png",
    name: "Minister",
    values: [
      {
        hp: "60 / 120",
        damageModifiers: [1.25, 1, 1, 1, 1],
      },
    ],
  },
  Miremite: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/1/15/HJ_Miremite.png",
    name: "Miremite",
    values: [
      {
        hp: "30",
        damageModifiers: [1.5, 1.1, 1, 1, 1],
      },
    ],
  },
  Mite: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/a/a2/HJ_Mite.png",
    name: "Mite",
    values: [
      {
        hp: "15 / 30",
        damageModifiers: [1, 0.8, 0.8, 0.8, 0.8],
      },
    ],
  },
  Mitemother: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/f/f3/HJ_Mitemother.png",
    name: "Mitemother",
    values: [
      {
        hp: "60 / 120",
        damageModifiers: [1.2, 0.95, 0.95, 0.95, 0.95],
      },
    ],
  },
  Mnemonid: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/9/9c/HJ_Mnemonid.png",
    name: "Mnemonid",
    values: [
      {
        hp: "50",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  Mnemonord: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/3/31/HJ_Mnemonord.png",
    name: "Mnemonord",
    values: [
      {
        hp: "50",
        damageModifiers: [1, 1, 1, 0.9, 0.9],
      },
    ],
  },
  Mortician: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/0/0a/HJ_Mortician.png",
    name: "Mortician",
    values: [
      {
        hp: "95 / 190",
        damageModifiers: [1.25, 1, 1, 1, 1],
      },
    ],
  },
  Mossgrub: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/9/92/HJ_Mossgrub.png",
    name: "Mossgrub",
    values: [
      {
        hp: "10 / 20",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  Mossmir: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/a/a6/HJ_Mossmir.png",
    name: "Mossmir",
    values: [
      {
        hp: "12 / 24",
        damageModifiers: [1, 1, 0.9, 0.9, 0.9],
      },
    ],
  },
  "Mothleaf Lagnia": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/5/51/HJ_Mothleaf_Lagnia.png",
    name: "Mothleaf Lagnia",
    values: [
      {
        hp: "1",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  Muckroach: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/8/8d/HJ_Muckroach.png",
    name: "Muckroach",
    values: [
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
  Nuphar: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/5/5f/HJ_Nuphar.png",
    name: "Nuphar",
    values: [
      {
        hp: "70",
        damageModifiers: [1.35, 1.15, 1, 1, 1],
      },
    ],
  },
  "Overgrown Pilgrim": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/2/26/HJ_Overgrown_Pilgrim.png",
    name: "Overgrown Pilgrim",
    values: [
      {
        hp: "23 / 92",
        damageModifiers: [1.2, 0.85, 0.85, 0.85, 0.85],
      },
    ],
  },
  Pendra: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/e/ef/HJ_Pendra.png",
    name: "Pendra",
    values: [
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
  },
  Pendragor: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/1/10/HJ_Pendragor.png",
    name: "Pendragor",
    values: [
      {
        hp: "70",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  Penitent: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/5/5d/HJ_Penitent.png",
    name: "Penitent",
    values: [
      {
        hp: "50",
        damageModifiers: [1.5, 1.25, 1, 1, 1],
      },
    ],
  },
  Phacia: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/5/57/HJ_Phacia.png",
    name: "Phacia",
    values: [
      {
        hp: "15 / 30",
        damageModifiers: [1, 0.75, 0.75, 0.75, 0.75],
      },
    ],
  },
  Pharlid: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/2/2b/HJ_Pharlid.png",
    name: "Pharlid",
    values: [
      {
        hp: "25 / 50",
        damageModifiers: [1.25, 1, 0.9, 0.7, 0.7],
      },
    ],
  },
  "Pharlid Diver": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/a/a0/HJ_Pharlid_Diver.png",
    name: "Pharlid Diver",
    values: [
      {
        hp: "25",
        damageModifiers: [1.25, 1, 0.9, 0.7, 0.7],
      },
    ],
  },
  "Pilgrim Bellbearer": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/8/8f/HJ_Pilgrim_Bellbearer.png",
    name: "Pilgrim Bellbearer",
    values: [
      {
        hp: "20 / 80",
        damageModifiers: [1, 0.9, 0.75, 0.75, 0.75],
      },
    ],
  },
  "Pilgrim Groveller": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/c/c0/HJ_Pilgrim_Groveller.png",
    name: "Pilgrim Groveller",
    values: [
      {
        hp: "20 / 80",
        damageModifiers: [1.4, 1, 1, 1, 1],
      },
    ],
  },
  "Pilgrim Guide": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/b/b6/HJ_Pilgrim_Guide.png",
    name: "Pilgrim Guide",
    values: [
      {
        hp: "24 / 96",
        damageModifiers: [1, 0.8, 0.8, 1, 1],
      },
    ],
  },
  "Pilgrim Hiker": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/7/7f/HJ_Pilgrim_Hiker.png",
    name: "Pilgrim Hiker",
    values: [
      {
        hp: "30 / 90",
        damageModifiers: [1.3, 1, 0.9, 0.9, 0.9],
      },
    ],
  },
  "Pilgrim Hornfly": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/b/b6/HJ_Pilgrim_Hornfly.png",
    name: "Pilgrim Hornfly",
    values: [
      {
        hp: "20 / 80",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  "Pilgrim Hulk": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/8/8e/HJ_Pilgrim_Hulk.png",
    name: "Pilgrim Hulk",
    values: [
      {
        hp: "30 / 120",
        damageModifiers: [1.2, 1, 1, 1, 1],
      },
    ],
  },
  "Pilgrim Pouncer": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/4/4f/HJ_Pilgrim_Pouncer.png",
    name: "Pilgrim Pouncer",
    values: [
      {
        hp: "20 / 80",
        damageModifiers: [1.4, 1, 1, 1, 1],
      },
    ],
  },
  Plasmid: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/8/85/HJ_Plasmid.png",
    name: "Plasmid",
    values: [
      {
        hp: "60",
        damageModifiers: [1.25, 1, 1, 1, 0.9],
      },
    ],
  },
  Plasmidas: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/b/bd/HJ_Plasmidas.png",
    name: "Plasmidas",
    values: [
      {
        hp: "80",
        damageModifiers: [1.25, 1, 1, 0.9, 0.9],
      },
    ],
  },
  Pokenabbin: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/3/37/HJ_Pokenabbin.png",
    name: "Pokenabbin",
    values: [
      {
        hp: "45 / 90",
        damageModifiers: [1.5, 1, 1, 1, 1],
      },
    ],
  },
  Pollenica: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/d/dc/HJ_Pollenica.png",
    name: "Pollenica",
    values: [
      {
        hp: "20 / 40",
        damageModifiers: [1, 1, 0.75, 0.75, 1],
      },
    ],
  },
  "Pond Skipper": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/0/06/HJ_Pond_Skipper.png",
    name: "Pond Skipper",
    values: [
      {
        hp: "15 / 30",
        damageModifiers: [1, 0.8, 0.8, 0.8, 0.8],
      },
    ],
  },
  Pondcatcher: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/a/a2/HJ_Pondcatcher.png",
    name: "Pondcatcher",
    values: [
      {
        hp: "25 / 100",
        damageModifiers: [1, 0.9, 0.7, 0.7, 0.7],
      },
    ],
  },
  "Puny Penitent": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/b/bb/HJ_Puny_Penitent.png",
    name: "Puny Penitent",
    values: [
      {
        hp: "40",
        damageModifiers: [1.5, 1.25, 1, 1, 1],
      },
    ],
  },
  Reed: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/b/b8/HJ_Reed.png",
    name: "Reed",
    values: [
      {
        hp: "55 / 110",
        damageModifiers: [1, 1, 0.8, 0.8, 0.8],
      },
    ],
  },
  Roachcatcher: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/9/94/HJ_Roachcatcher.png",
    name: "Roachcatcher",
    values: [
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
  Roachfeeder: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/8/88/HJ_Roachfeeder.png",
    name: "Roachfeeder",
    values: [
      {
        hp: "45 / 90",
        damageModifiers: [1.25, 1, 0.9, 0.9, 0.9],
      },
    ],
  },
  Roachkeeper: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/2/2e/HJ_Roachkeeper.png",
    name: "Roachkeeper",
    values: [
      {
        hp: "100 / 200",
        damageModifiers: [1.3, 1.1, 0.9, 0.9, 0.9],
      },
    ],
  },
  Roachserver: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/e/e0/HJ_Roachserver.png",
    name: "Roachserver",
    values: [
      {
        hp: "60",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  Scabfly: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/7/78/HJ_Scabfly.png",
    name: "Scabfly",
    values: [
      {
        hp: "20 / 40",
        damageModifiers: [1.25, 1, 0.75, 0.85, 1],
      },
    ],
  },
  Scrollreader: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/6/6c/HJ_Scrollreader.png",
    name: "Scrollreader",
    values: [
      {
        hp: "100 / 200",
        damageModifiers: [1.3, 1.1, 0.9, 0.8, 0.8],
      },
    ],
  },
  "Servitor Boran": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/5/5e/HJ_Servitor_Boran.png",
    name: "Servitor Boran",
    values: [
      {
        hp: "70",
        damageModifiers: [1.25, 1, 1, 1, 1],
      },
    ],
  },
  "Servitor Ignim": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/f/fd/HJ_Servitor_Ignim.png",
    name: "Servitor Ignim",
    values: [
      {
        hp: "1",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  "Shadow Charger": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/2/22/HJ_Shadow_Charger.png",
    name: "Shadow Charger",
    values: [
      {
        hp: "80",
        damageModifiers: [2.5, 1.5, 1.3, 1, 1],
      },
    ],
  },
  "Shadow Creeper": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/7/73/HJ_Shadow_Creeper.png",
    name: "Shadow Creeper",
    values: [
      {
        hp: "40",
        damageModifiers: [2, 1.2, 1, 1, 1],
      },
    ],
  },
  Shardillard: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/f/f4/HJ_Shardillard.png",
    name: "Shardillard",
    values: [
      {
        hp: "50",
        damageModifiers: [1.3, 1.1, 0.9, 0.8, 0.8],
      },
    ],
  },
  "Shellwood Gnat": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/e/e8/HJ_Shellwood_Gnat.png",
    name: "Shellwood Gnat",
    values: [
      {
        hp: "15 / 30",
        damageModifiers: [1, 0.8, 0.8, 0.8, 0.8],
      },
    ],
  },
  "Silk Snipper": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/d/dc/HJ_Silk_Snipper.png",
    name: "Silk Snipper",
    values: [
      {
        hp: "29 / 58",
        damageModifiers: [1, 0.8, 0.7, 0.55, 0.55],
      },
    ],
  },
  "Skarr Scout": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/e/ec/HJ_Skarr_Scout.png",
    name: "Skarr Scout",
    values: [
      {
        hp: "30 / 90",
        damageModifiers: [1, 0.8, 0.75, 0.75, 0.7],
      },
    ],
  },
  "Skarr Stalker": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/1/1a/HJ_Skarr_Stalker.png",
    name: "Skarr Stalker",
    values: [
      {
        hp: "75 / 150",
        damageModifiers: [1.2, 1, 1, 1, 1],
      },
    ],
  },
  Skarrlid: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/f/fe/HJ_Skarrlid.png",
    name: "Skarrlid",
    values: [
      {
        hp: "20",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  Skarrwing: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/e/e3/HJ_Skarrwing.png",
    name: "Skarrwing",
    values: [
      {
        hp: "20",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  Skrill: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/d/d8/HJ_Skrill.png",
    name: "Skrill",
    values: [
      {
        hp: "17",
        damageModifiers: [2, 1.25, 1, 1, 1],
      },
    ],
  },
  "Skull Brute": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/a/ab/HJ_Skull_Brute.png",
    name: "Skull Brute",
    values: [
      {
        hp: "30 / 60",
        damageModifiers: [1, 0.8, 0.75, 0.6, 0.6],
      },
    ],
  },
  "Skull Scuttler": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/3/32/HJ_Skull_Scuttler.png",
    name: "Skull Scuttler",
    values: [
      {
        hp: "15 / 60",
        damageModifiers: [1, 0.8, 0.8, 0.8, 0.8],
      },
    ],
  },
  Skullwing: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/b/b3/HJ_Skullwing.png",
    name: "Skullwing",
    values: [
      {
        hp: "15",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  Slubberlug: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/2/2b/HJ_Slubberlug.png",
    name: "Slubberlug",
    values: [
      {
        hp: "22",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  "Smelt Shoveller": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/a/aa/HJ_Smelt_Shoveller.png",
    name: "Smelt Shoveller",
    values: [
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
  "Smokerock Sifter": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/b/b6/HJ_Smokerock_Sifter.png",
    name: "Smokerock Sifter",
    values: [
      {
        hp: "40 / 160",
        damageModifiers: [1.75, 1, 1, 0.85, 0.85],
      },
    ],
  },
  Snitchfly: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/c/c5/HJ_Snitchfly.png",
    name: "Snitchfly",
    values: [
      {
        hp: "35",
        damageModifiers: [1.2, 0.9, 0.8, 0.65, 0.65],
      },
    ],
  },
  "Spear Skarr": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/1/1f/HJ_Spear_Skarr.png",
    name: "Spear Skarr",
    values: [
      {
        hp: "75 / 150",
        damageModifiers: [1.2, 1, 1, 1, 1],
      },
    ],
  },
  "Spinebeak Kai": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/b/b0/HJ_Spinebeak_Kai.png",
    name: "Spinebeak Kai",
    values: [
      {
        hp: "5",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  "Spit Squit": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/8/81/HJ_Spit_Squit.png",
    name: "Spit Squit",
    values: [
      {
        hp: "55 / 110",
        damageModifiers: [1.5, 1.1, 1, 0.9, 0.9],
      },
    ],
  },
  Splinter: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/6/61/HJ_Splinter.png",
    name: "Splinter",
    values: [
      {
        hp: "25 / 100",
        damageModifiers: [1, 0.9, 0.9, 0.9, 0.9],
      },
    ],
  },
  Splinterbark: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/0/00/HJ_Splinterbark.png",
    name: "Splinterbark",
    values: [
      {
        hp: "15 / 30",
        damageModifiers: [1, 0.8, 0.8, 0.8, 0.8],
      },
    ],
  },
  Splinterhorn: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/9/91/HJ_Splinterhorn.png",
    name: "Splinterhorn",
    values: [
      {
        hp: "25 / 100",
        damageModifiers: [1, 0.9, 0.9, 0.9, 0.9],
      },
    ],
  },
  Squatcraw: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/d/da/HJ_Squatcraw.png",
    name: "Squatcraw",
    values: [
      {
        hp: "50 / 100",
        damageModifiers: [1.2, 1, 0.9, 0.9, 0.9],
      },
    ],
  },
  "Squatcraw Juror": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/e/ef/HJ_Squatcraw_Juror.png",
    name: "Squatcraw Juror",
    values: [
      {
        hp: "60",
        damageModifiers: [1.4, 1, 0.9, 0.9, 0.9],
      },
    ],
  },
  Squirrm: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/8/8e/HJ_Squirrm.png",
    name: "Squirrm",
    values: [
      {
        hp: "12",
        damageModifiers: [1, 0.9, 0.8, 0.6, 0.6],
      },
    ],
  },
  "Steelspine Kai": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/9/9b/HJ_Steelspine_Kai.png",
    name: "Steelspine Kai",
    values: [
      {
        hp: "5",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  "Stilkin Trapper": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/4/44/HJ_Stilkin_Trapper.png",
    name: "Stilkin Trapper",
    values: [
      {
        hp: "45",
        damageModifiers: [1.25, 1, 1, 1, 1],
      },
    ],
  },
  Stilkin: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/a/a5/HJ_Stilkin.png",
    name: "Stilkin",
    values: [
      {
        hp: "45",
        damageModifiers: [1.25, 1, 1, 1, 1],
      },
    ],
  },
  Surgeon: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/4/44/HJ_Surgeon.png",
    name: "Surgeon",
    values: [
      {
        hp: "75",
        damageModifiers: [1.2, 1, 1, 1, 1],
      },
    ],
  },
  "Swamp Squit": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/f/f5/HJ_Swamp_Squit.png",
    name: "Swamp Squit",
    values: [
      {
        hp: "35",
        damageModifiers: [1.5, 1, 1, 1, 1],
      },
    ],
  },
  Tallcraw: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/2/26/HJ_Tallcraw.png",
    name: "Tallcraw",
    values: [
      {
        hp: "50 / 100",
        damageModifiers: [1.2, 1, 0.9, 0.9, 0.9],
      },
    ],
  },
  "Tallcraw Juror": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/0/0e/HJ_Tallcraw_Juror.png",
    name: "Tallcraw Juror",
    values: [
      {
        hp: "60",
        damageModifiers: [1.1, 1, 0.9, 0.9, 0.9],
      },
    ],
  },
  Tarmite: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/a/a1/HJ_Tarmite.png",
    name: "Tarmite",
    values: [
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
  "Thread Raker": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/f/f5/HJ_Thread_Raker.png",
    name: "Thread Raker",
    values: [
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
  Undercrank: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/6/6a/HJ_Undercrank.png",
    name: "Undercrank",
    values: [
      {
        hp: "70 / 140",
        damageModifiers: [1.25, 1, 1, 1, 1],
      },
    ],
  },
  Underloft: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/d/d0/HJ_Underloft.png",
    name: "Underloft",
    values: [
      {
        hp: "40 / 80",
        damageModifiers: [1.25, 1, 1, 1, 0.9],
      },
    ],
  },
  Underpoke: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/8/84/HJ_Underpoke.png",
    name: "Underpoke",
    values: [
      {
        hp: "40 / 80",
        damageModifiers: [1.25, 1, 1, 1, 0.9],
      },
    ],
  },
  Underscrub: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/b/b7/HJ_Underscrub.png",
    name: "Underscrub",
    values: [
      {
        hp: "27 / 54",
        damageModifiers: [1, 0.9, 0.8, 0.75, 0.75],
      },
    ],
  },
  Undersweep: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/7/71/HJ_Undersweep.png",
    name: "Undersweep",
    values: [
      {
        hp: "35 / 70",
        damageModifiers: [1.25, 1, 0.8, 0.75, 0.75],
      },
    ],
  },
  Underworker: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/a/a4/HJ_Underworker.png",
    name: "Underworker",
    values: [
      {
        hp: "30 / 60",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  Vaultborn: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/1/10/HJ_Vaultborn.png",
    name: "Vaultborn",
    values: [
      {
        hp: "40 / 80",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  Vaultkeeper: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/7/76/HJ_Vaultkeeper.png",
    name: "Vaultkeeper",
    values: [
      {
        hp: "70 / 140",
        damageModifiers: [1.1, 1, 0.8, 0.8, 0.8],
      },
    ],
  },
  Verdanir: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/0/00/HJ_Verdanir.png",
    name: "Verdanir",
    values: [
      {
        hp: "100",
        damageModifiers: [1.35, 1.15, 1, 1, 1],
      },
    ],
  },
  "Vicious Caranid": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/0/0e/HJ_Vicious_Caranid.png",
    name: "Vicious Caranid",
    values: [
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
  "Void Mass": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/6/6b/HJ_Void_Mass.png",
    name: "Void Mass",
    values: [
      {
        hp: "190",
        damageModifiers: [1.75, 1.25, 1.1, 1, 1],
      },
    ],
  },
  Wardenfly: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/4/4c/HJ_Wardenfly.png",
    name: "Wardenfly",
    values: [
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
  "Winged Furm": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/1/18/HJ_Winged_Furm.png",
    name: "Winged Furm",
    values: [
      {
        hp: "30 / 60",
        damageModifiers: [1.2, 1, 0.75, 0.7, 0.7],
      },
    ],
  },
  "Winged Pilgrim": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/5/50/HJ_Winged_Pilgrim.png",
    name: "Winged Pilgrim",
    values: [
      {
        hp: "20 / 80",
        damageModifiers: [1.4, 1, 1, 1, 1],
      },
    ],
  },
  "Winged Pilgrim Bellbearer": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/3/32/HJ_Winged_Pilgrim_Bellbearer.png",
    name: "Winged Pilgrim Bellbearer",
    values: [
      {
        hp: "25 / 50",
        damageModifiers: [1, 0.9, 0.75, 0.75, 0.75],
      },
    ],
  },
  Wingmould: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/c/c4/HJ_Wingmould.png",
    name: "Wingmould",
    values: [
      {
        hp: "1",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  "Wood Wasp": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/5/5a/HJ_Wood_Wasp.png",
    name: "Wood Wasp",
    values: [
      {
        hp: "15 / 30",
        damageModifiers: [1, 0.8, 0.8, 0.8, 0.8],
      },
    ],
  },
  Wraith: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/e/eb/HJ_Wraith.png",
    name: "Wraith",
    values: [
      {
        hp: "45",
        damageModifiers: [1.5, 1, 1, 1, 1],
      },
    ],
  },
  Yago: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/e/ea/HJ_Yago.png",
    name: "Yago",
    values: [
      {
        hp: "60",
        damageModifiers: [1.4, 1.2, 1, 1, 1],
      },
    ],
  },
  Yuma: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/e/ec/HJ_Yuma.png",
    name: "Yuma",
    values: [
      {
        hp: "5",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  Yumama: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/6/66/HJ_Yumama.png",
    name: "Yumama",
    values: [
      {
        hp: "75",
        damageModifiers: [2, 1.25, 1, 1, 1],
      },
    ],
  },
  "Bell Beast": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/e/ef/HJ_Bell_Beast.png",
    name: "Bell Beast",
    values: [
      {
        hp: "150",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  "Bell Eater": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/7/77/HJ_Bell_Eater.png",
    name: "Bell Eater",
    values: [
      {
        hp: "800",
        damageModifiers: [1.75, 1.35, 1.2, 1, 1],
      },
    ],
  },
  Broodmother: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/d/d4/HJ_Broodmother.png",
    name: "Broodmother",
    values: [
      {
        hp: "700",
        damageModifiers: [1.35, 1.1, 1, 1, 1],
      },
    ],
  },
  "Choir Clapper": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/b/bf/HJ_Choir_Clapper.png",
    name: "Choir Clapper",
    values: [
      {
        hp: "230 / 460",
        damageModifiers: [1.5, 1.15, 1, 0.9, 0.9],
      },
    ],
  },
  "Clover Dancers": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/c/c7/HJ_Clover_Dancers.png",
    name: "Clover Dancers",
    values: [
      {
        hp: "1160",
        damageModifiers: [1.75, 1.25, 1.15, 1, 1],
      },
    ],
  },
  "Cogwork Clapper": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/9/91/HJ_Cogwork_Clapper.png",
    name: "Cogwork Clapper",
    values: [
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
  "Corrcrust Karaka": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/e/e7/HJ_Corrcrust_Karaka.png",
    name: "Corrcrust Karaka",
    values: [
      {
        hp: "105",
        damageModifiers: [1.5, 1.2, 1.1, 1, 0.9],
      },
    ],
  },
  "Covetous Pilgrim": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/e/ee/HJ_Covetous_Pilgrim.png",
    name: "Covetous Pilgrim",
    values: [
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
  Craggler: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/c/c0/HJ_Craggler.png",
    name: "Craggler",
    values: [
      {
        hp: "200 / 400",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  Crawfather: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/0/03/HJ_Crawfather.png",
    name: "Crawfather",
    values: [
      {
        hp: "1300",
        damageModifiers: [1.6, 1.25, 1.1, 1, 1],
      },
    ],
  },
  "Crust King Khann": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/4/42/HJ_Crust_King_Khann.png",
    name: "Crust King Khann",
    values: [
      {
        hp: "1650",
        damageModifiers: [2, 1.35, 1.15, 1, 0.95],
      },
    ],
  },
  "Cogwork Dancers": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/6/66/HJ_Cogwork_Dancers.png",
    name: "Cogwork Dancers",
    values: [
      {
        hp: "810",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  "Disgraced Chef Lugoli": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/9/94/HJ_Disgraced_Chef_Lugoli.png",
    name: "Disgraced Chef Lugoli",
    values: [
      {
        hp: "600 / 1200",
        damageModifiers: [1.7, 1.2, 1, 0.9, 0.85],
      },
    ],
  },
  "Forebrothers Signis & Gron": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/f/f3/HJ_Forebrothers_Signis_%26_Gron.png",
    name: "Forebrothers Signis & Gron",
    values: [
      {
        hp: "720 + 520",
        damageModifiers: [1.6, 1.25, 1, 0.95, 0.9],
      },
    ],
  },
  "First Sinner": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/0/0b/HJ_First_Sinner.png",
    name: "First Sinner",
    values: [
      {
        hp: "1300",
        damageModifiers: [1.75, 1.25, 1.1, 1, 1],
      },
    ],
  },
  Flintbeetle: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/d/d0/HJ_Flintbeetle.png",
    name: "Flintbeetle",
    values: [
      {
        hp: "95",
        damageModifiers: [1, 0.8, 0.8, 0.7, 0.7],
      },
    ],
  },
  "Fourth Chorus": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/b/bc/HJ_Fourth_Chorus.png",
    name: "Fourth Chorus",
    values: [
      {
        hp: "500",
        damageModifiers: [1, 0.65, 0.5, 0.45, 0.45],
      },
    ],
  },
  "Garmond & Zaza": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/5/5f/HJ_Garmond_%26_Zaza.png",
    name: "Garmond & Zaza",
    values: [
      {
        hp: "460",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  "Grand Mother Silk": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/f/f8/HJ_Grand_Mother_Silk.png",
    name: "Grand Mother Silk",
    values: [
      {
        hp: "1204",
        damageModifiers: [1.1, 1, 1, 0.88, 0.88],
      },
    ],
  },
  "Great Conchfly": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/b/bc/HJ_Great_Conchfly.png",
    name: "Great Conchfly",
    values: [
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
  "Groal the Great": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/3/3d/HJ_Groal_the_Great.png",
    name: "Groal the Great",
    values: [
      {
        hp: "650",
        damageModifiers: [1.8, 1.2, 1, 0.9, 0.9],
      },
    ],
  },
  "Gurr the Outcast": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/0/02/HJ_Gurr_the_Outcast.png",
    name: "Gurr the Outcast",
    values: [
      {
        hp: "1000",
        damageModifiers: [1.7, 1.25, 1.1, 1, 0.95],
      },
    ],
  },
  "Huge Flea": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/0/01/HJ_Huge_Flea.png",
    name: "Huge Flea",
    values: [
      {
        hp: "200",
        damageModifiers: [1.5, 1.2, 1.1, 1, 1],
      },
    ],
  },
  "Karak Gor": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/b/bd/HJ_Karak_Gor.png",
    name: "Karak Gor",
    values: [
      {
        hp: "140",
        damageModifiers: [1.5, 1.2, 1.1, 1, 0.9],
      },
    ],
  },
  Lace: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/9/9a/HJ_Lace.png",
    name: "Lace",
    values: [
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
  "Last Claw": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/2/2b/HJ_Last_Claw.png",
    name: "Last Claw",
    values: [
      {
        hp: "130",
        damageModifiers: [1.5, 1.2, 1.1, 1, 1],
      },
    ],
  },
  "Last Judge": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/c/c0/HJ_Last_Judge.png",
    name: "Last Judge",
    values: [
      {
        hp: "720[Note 1]",
        damageModifiers: [1.2, 1, 0.85, 0.75, 0.7],
      },
    ],
  },
  "Lost Garmond": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/f/fa/HJ_Lost_Garmond.png",
    name: "Lost Garmond",
    values: [
      {
        hp: "900",
        damageModifiers: [2, 1.5, 1.2, 1.1, 1],
      },
    ],
  },
  "Lost Lace": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/f/f1/HJ_Lost_Lace.png",
    name: "Lost Lace",
    values: [
      {
        hp: "1800",
        damageModifiers: [1.7, 1.25, 1.1, 1.05, 0.95],
      },
    ],
  },
  Moorwing: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/5/55/HJ_Moorwing.png",
    name: "Moorwing",
    values: [
      {
        hp: "600 / 1200",
        damageModifiers: [2, 1.3, 1, 0.9, 0.85],
      },
    ],
  },
  "Moss Mother": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/f/fe/HJ_Moss_Mother.png",
    name: "Moss Mother",
    values: [
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
  Nyleth: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/9/90/HJ_Nyleth.png",
    name: "Nyleth",
    values: [
      {
        hp: "1250",
        damageModifiers: [1.5, 1.25, 1.1, 1, 0.91],
      },
    ],
  },
  Palestag: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/0/09/HJ_Palestag.png",
    name: "Palestag",
    values: [
      {
        hp: "480",
        damageModifiers: [1.5, 1.2, 1.15, 1, 1],
      },
    ],
  },
  Phantom: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/a/a4/HJ_Phantom.png",
    name: "Phantom",
    values: [
      {
        hp: "650",
        damageModifiers: [1.2, 1, 0.85, 0.75, 0.7],
      },
    ],
  },
  Pinstress: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/1/12/HJ_Pinstress.png",
    name: "Pinstress",
    values: [
      {
        hp: "910",
        damageModifiers: [1.5, 1.1, 1, 1, 0.9],
      },
    ],
  },
  "Plasmified Zango": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/4/48/HJ_Plasmified_Zango.png",
    name: "Plasmified Zango",
    values: [
      {
        hp: "1000",
        damageModifiers: [2, 1.25, 1.1, 1, 1],
      },
    ],
  },
  Rhinogrund: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/1/1a/HJ_Rhinogrund.png",
    name: "Rhinogrund",
    values: [
      {
        hp: "150 / 300",
        damageModifiers: [1.3, 1, 1, 1, 1],
      },
    ],
  },
  "Savage Beastfly": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/4/4a/HJ_Savage_Beastfly.png",
    name: "Savage Beastfly",
    values: [
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
  "Second Sentinel": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/5/56/HJ_Second_Sentinel.png",
    name: "Second Sentinel",
    values: [
      {
        hp: "800",
        damageModifiers: [1.4, 1.1, 1, 1, 1],
      },
    ],
  },
  Shakra: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/7/7f/HJ_Shakra.png",
    name: "Shakra",
    values: [
      {
        hp: "600",
        damageModifiers: [1.5, 1.15, 1, 0.9, 0.9],
      },
    ],
  },
  "Shrine Guardian Seth": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/e/e0/HJ_Shrine_Guardian_Seth.png",
    name: "Shrine Guardian Seth",
    values: [
      {
        hp: "1185",
        damageModifiers: [1.7, 1.25, 1.1, 1, 0.95],
      },
    ],
  },
  "Sister Splinter": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/5/5b/HJ_Sister_Splinter.png",
    name: "Sister Splinter",
    values: [
      {
        hp: "310",
        damageModifiers: [1, 0.675, 0.575, 0.55, 0.5],
      },
    ],
  },
  Skarrgard: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/1/1b/HJ_Skarrgard.png",
    name: "Skarrgard",
    values: [
      {
        hp: "150 / 300",
        damageModifiers: [1, 0.75, 0.65, 0.65, 0.65],
      },
    ],
  },
  "Skarrsinger Karmelita": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/2/2d/HJ_Skarrsinger_Karmelita.png",
    name: "Skarrsinger Karmelita",
    values: [
      {
        hp: "1500",
        damageModifiers: [1.5, 1.25, 1.1, 1, 0.95],
      },
    ],
  },
  "Skull Tyrant": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/3/3d/HJ_Skull_Tyrant.png",
    name: "Skull Tyrant",
    values: [
      {
        hp: "450 / 900",
        damageModifiers: [1.2, 1, 0.9, 0.85, 0.8],
      },
    ],
  },
  "Summoned Saviour": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/9/9c/HJ_Summoned_Saviour.png",
    name: "Summoned Saviour",
    values: [
      {
        hp: "500",
        damageModifiers: [2, 1.3, 1.05, 0.9, 0.85],
      },
    ],
  },
  "The Unravelled": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/e/e9/HJ_The_Unravelled.png",
    name: "The Unravelled",
    values: [
      {
        hp: "1000",
        damageModifiers: [1, 1, 1, 0.9, 0.85],
      },
    ],
  },
  "Tormented Trobbio": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/3/3e/HJ_Tormented_Trobbio.png",
    name: "Tormented Trobbio",
    values: [
      {
        hp: "950",
        damageModifiers: [1.4, 1, 0.9, 0.8, 0.75],
      },
    ],
  },
  Trobbio: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/c/c1/HJ_Trobbio.png",
    name: "Trobbio",
    values: [
      {
        hp: "700",
        damageModifiers: [1.4, 1, 0.9, 0.8, 0.8],
      },
    ],
  },
  Voltvyrm: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/d/db/HJ_Voltvyrm.png",
    name: "Voltvyrm",
    values: [
      {
        hp: "550",
        damageModifiers: [1.8, 1.2, 1, 0.9, 0.8],
      },
    ],
  },
  "Watcher at the Edge": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/b/bf/HJ_Watcher_at_the_Edge.png",
    name: "Watcher at the Edge",
    values: [
      {
        hp: "900",
        damageModifiers: [1.5, 1.2, 1, 0.9, 0.85],
      },
    ],
  },
  Widow: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/b/ba/HJ_Widow.png",
    name: "Widow",
    values: [
      {
        hp: "360",
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
};

const manuallyExtractedEnemyMetadata = {
  "Father of the Flame": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/c/c1/HJ_Father_of_the_Flame.png",
    name: "Father of the Flame",
    values: [
      {
        hp: "100 * 4 + 240",
        /* 
        ** The Father of the Flame has four flame orbs that each have 100 HP,
        ** plus his main flame cage of a body which has 240 HP, totaling 640 HP.

        ** No of hits required to defeat at different weapon levels:
        ** Info from: https://raiderking.com/hollow-knight-silksong-all-enemy-health-values-skill-and-needle-upgrade-damage-values/
        ** - Weapon Level 0: 128 hits | Damage HP/Hit: 640/128 ≈ 5     | Damage HP/Hit at Weapon Level 0 (without any modifiers):  5 HP
        ** - Weapon Level 1:  72 hits | Damage HP/Hit: 640/72  ≈ 8.89  | Damage HP/Hit at Weapon Level 1 (without any modifiers):  9 HP
        ** - Weapon Level 2:  50 hits | Damage HP/Hit: 640/50  ≈ 12.8  | Damage HP/Hit at Weapon Level 2 (without any modifiers): 13 HP
        ** - Weapon Level 3:  38 hits | Damage HP/Hit: 640/38  ≈ 16.84 | Damage HP/Hit at Weapon Level 3 (without any modifiers): 17 HP
        ** - Weapon Level 4:  31 hits | Damage HP/Hit: 640/31  ≈ 20.65 | Damage HP/Hit at Weapon Level 4 (without any modifiers): 21 HP
        **
        ** total_damage = weapon_damage[weapon_level] * enemy_modifiers[weapon_level] * player_modifier
        ** Info from: https://hollowknight.wiki/w/Damage_Values_and_Enemy_Health_(Silksong)
        ** - player_modifier is assumed to be 1 (no tool/weapon buffs)
        ** - Rearranging (and rewriting this in a slightly different way) gives:
        **   enemy_modifiers at Weapon Level X = (Damage HP/Hit of the enemy at Weapon Level X) / (Damage HP/Hit at Weapon Level X, without any modifiers)
        **
        ** Calculated enemy modifiers at different weapon levels:
        ** - Weapon Level 0: enemy_modifier = 5 / 5      = 1
        ** - Weapon Level 1: enemy_modifier = 8.89 / 9   ≈ 0.98
        ** - Weapon Level 2: enemy_modifier = 12.8 / 13  ≈ 0.98
        ** - Weapon Level 3: enemy_modifier = 16.84 / 17 ≈ 0.99
        ** - Weapon Level 4: enemy_modifier = 20.65 / 21 ≈ 0.98
        */
        damageModifiers: [1, 1, 1, 1, 1],
      },
    ],
  },
  Gloomsac: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/a/a3/HJ_Gloomsac.png",
    name: "Gloomsac",
    values: [
      {
        hp: "50",
        damageModifiers: [1, 1, 1, 1, 1], // Assumed...
      },
    ],
  },
  Muckmaggot: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/e/e5/HJ_Muckmaggot.png",
    name: "Muckmaggot",
    values: [
      {
        hp: "None",
        damageModifiers: [], // N.A.
      },
    ],
  },
  Sandcarver: {
    imageUrl: "https:////cdn.wikimg.net/en/hkwiki/images/7/7f/HJ_Sandcarver.png",
    name: "Sandcarver",
    values: [
      {
        hp: "None",
        damageModifiers: [], // N.A.
      },
    ],
  },
  "Void Tendrils": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/b/b3/HJ_SS_Void_Tendrils.png",
    name: "Void Tendrils",
    values: [
      {
        hp: "-",
        damageModifiers: [], // N.A.
      },
    ],
  },
  "Winged Lifeseed": {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/3/3c/HJ_Winged_Lifeseed.png",
    name: "Winged Lifeseed",
    values: [
      {
        hp: "1",
        damageModifiers: [1, 1, 1, 1, 1], // Assumed...
      },
    ],
  },
  Wisp: {
    imageUrl: "https://cdn.wikimg.net/en/hkwiki/images/e/eb/HJ_Wisp.png",
    name: "Wisp",
    values: [
      {
        hp: "Cannot be damaged",
        damageModifiers: [], // N.A.
      },
    ],
  },
};

const enemyMetadata = { ...extractedEnemyMetadata, ...manuallyExtractedEnemyMetadata };

const metadata = { enemyMetadata, completionVariantsMetadata };

module.exports = metadata;
