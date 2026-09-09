import type { TrackableCategory } from "@/dictionary/types";
import { SimpleLocksDescription } from "@/components/descriptions";

export const keys: TrackableCategory = {
  name: "Keys",
  description: "Keys found throughout Pharloom.",
  sections: [
    {
      name: "Simple Keys",
      // NOTE: We can probably use the save file to track (specific scenes/bools) if these locks are unlocked. Not today!
      descriptionMarkup: (showSpoilers?: boolean) => <SimpleLocksDescription showSpoilers={showSpoilers} />,
      items: [
        {
          name: "Simple Key #1",
          whichAct: 1,
          completionDetails:
            "Bone Bottom / Blasted Steps: Sold by Pebb for 500 Rosaries. If you don't purchase this from Pebb, it is sold by Grindle in ACT 3 for 600 Rosaries.",
          parsingInfo: { type: "flag", internalId: "PurchasedBonebottomFaithToken" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477839",
        },
        {
          name: "Simple Key #2",
          whichAct: 1,
          completionDetails: "Sinner's Road (Top-right): Dropped by a (defeated) Roachkeeper.",
          parsingInfo: { type: "flag", internalId: "CollectedDustCageKey" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478280",
        },
        {
          name: "Simple Key #3",
          whichAct: 2,
          completionDetails:
            'Songclave: Sold by Jubilana for 650 Rosaries, after completing "The Wandering Merchant" wish.',
          parsingInfo: { type: "flag", internalId: "MerchantEnclaveSimpleKey" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478880",
        },
        {
          name: "Simple Key #4",
          whichAct: 2,
          completionDetails: "Sands of Karak (Far-right): Held by a corpse sitting on the right-most bench.",
          parsingInfo: { type: "sceneDataBool", internalId: ["Bellshrine_Coral", "Collectable Item Pickup"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479215",
        },
      ],
    },
    {
      name: "Keys of The Slab",
      description: "They are used to open the gates in The Slab.",
      items: [
        {
          name: "Key of Indolent",
          whichAct: 1,
          completionDetails: "The Slab: At the edge of a room entered from above.",
          parsingInfo: { type: "flag", internalId: "HasSlabKeyA" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478467",
        },
        {
          name: "Key of Heretic",
          whichAct: 1,
          completionDetails: "The Slab: Dropped by the final enemy in a room entered from above.",
          parsingInfo: { type: "flag", internalId: "HasSlabKeyB" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478474",
        },
        {
          name: "Key of Apostate",
          whichAct: 2,
          completionDetails: "Putrified Ducts (Bottom-left): Inside a cage, hit it a few times to get the key out.",
          parsingInfo: { type: "flag", internalId: "HasSlabKeyC" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478963",
        },
      ],
    },
    {
      name: "Other Keys",
      description: "Other keys found throughout Pharloom.",
      items: [
        {
          name: "Architect's Key",
          whichAct: 2,
          prereqs: ["Aquire 25 Tools"],
          completionDetails:
            "Underworks: Sold by Twelfth Architect for 110 Rosaries, after acquiring 25 Tools. Unlocks the Chapel of the Architect.",
          parsingInfo: { type: "flag", internalId: "PurchasedArchitectKey" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478729",
        },
        {
          name: "White Key",
          whichAct: 2,
          completionDetails:
            'Songclave: On a corpse at the edge of the area. Sold by Jubilana for 220 Rosaries, if you don\'t pick it up before completing "The Wandering Merchant" wish. Unlocks the elevator in Whiteward.',
          parsingInfo: { type: "flagAnyOf", internalId: ["collectedWardKey", "MerchantEnclaveWardKey"] },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478599",
        },
        {
          name: "Surgeon's Key",
          whichAct: 2,
          prereqs: ["Clawline"],
          completionDetails:
            "Whiteward (Top-right): Dangle from a metal ring for a few seconds, and a corpse will eventually fall holding this key. Unlocks the trapdoor in Whiteward.",
          parsingInfo: { type: "flag", internalId: "collectedWardBossKey" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478923",
        },
        {
          name: "Diving Bell Key",
          whichAct: 3,
          completionDetails: "Deep Docks",
          parsingInfo: { type: "flag", internalId: "BallowGivenKey" },
          mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479279",
        },
      ],
    },
  ],
};
