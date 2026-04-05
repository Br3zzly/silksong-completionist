import type { TrackableCategory } from "../types";

export const bellhome: TrackableCategory = {
  name: "Bellhome",
  description:
    "Hornet's residence in Bellhart, unlocked after completing \"Bellhart's Glory\" wish, given as an award from the residents of Bellhart and can be unlocked with the Bellhome Key from Pavo. Track devices, fixtures, and furnishings for the Bellhome.",
  sections: [
    {
      name: "Furnishings & Decor",
      description: "Decorations and functional furniture sold by Frey to customize the Bellhome.",
      items: [
        {
          name: "Desk",
          whichAct: 2,
          completionDetails:
            "Bellhart: Sold by Frey for 380 Rosaries. Allows reviewing Relics and Psalm Cylinders without visiting Relic Seeker Scrounge or Vaultkeeper Cardinius. Combines with the Materium if both are owned.",
          parsingInfo: { type: "flag", internalId: "BelltownFurnishingDesk" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478203",
        },
        {
          name: "Gleamlights",
          whichAct: 2,
          completionDetails:
            "Bellhart: Sold by Frey for 320 Rosaries. Adds decorative lighting to brighten the Bellhome interior.",
          parsingInfo: { type: "flag", internalId: "BelltownFurnishingFairyLights" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478203",
        },
        {
          name: "Bell Lacquer",
          whichAct: 2,
          completionDetails:
            "Bellhart: Sold by Frey for 520 Rosaries. Allows Hornet to repaint her Bellhome in different colors: Red, White, Black, Bronze, Blue, or Chrome (replaces White in Steel Soul Mode). This purchase is irreversible once made.",
          parsingInfo: { type: "flag", internalId: "BelltownHousePaintComplete" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478203",
        },
        {
          name: "Personal Spa",
          whichAct: 2,
          completionDetails:
            "Bellhart: Sold by Frey for 1100 Rosaries. Installs a spa in the upper area of the Bellhome for regenerating Health and Silk. Adds a platform above the bed for easier access.",
          parsingInfo: { type: "flag", internalId: "BelltownFurnishingSpa" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478203",
        },
        {
          name: "Gramophone",
          whichAct: 2,
          completionDetails:
            "Bellhart: Sold by Frey for 490 Rosaries after giving all Psalm Cylinders to Cardinius. Allows playing Psalm Cylinders at the Bellhome. Music continues playing outside the menu and can be heard from nearby.",
          parsingInfo: { type: "flag", internalId: "BelltownFurnishingGramaphone" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478203",
        },
      ],
    },
    {
      name: "Devices & Fixtures",
      description:
        "Functional devices and fixtures for the Bellhome, that provide (passive) benefits, and information about the world of Pharloom.",
      items: [
        {
          name: "Materium",
          whichAct: 2,
          completionDetails:
            "Memorium: Found in the upper part of the Memorium. Assemble, and install this device in your Bellhome to track materials found in Pharloom. Combines with the Desk if both are owned.",
          parsingInfo: { type: "flag", internalId: "ConstructedMaterium" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479119",
        },
        {
          name: "Crawbell",
          whichAct: 3,
          completionDetails:
            'Greymoor: Found right after collecting the "Craw Memento". It passively generates rosaries and shell shards over time.',
          parsingInfo: { type: "flag", internalId: "CrawbellInstalled" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479580",
        },
        {
          name: "Farsight",
          whichAct: 3,
          completionDetails:
            "Abyss (Weavenest Absolom): Found in the upper east passage of the Weavenest. Construct, and install this device in your Bellhome to view empty spots in collection menus and completion percentage.",
          parsingInfo: { type: "flag", internalId: "ConstructedFarsight" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479289",
        },
      ],
    },
  ],
};
