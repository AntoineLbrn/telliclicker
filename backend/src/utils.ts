import { Building } from "./entity/Building";
import { ResourceType } from "./entity/ResourceType";

export const productions = [
  [10, 50, 200, 500, 1000],
  [7, 30, 150, 350, 600],
  [3, 10, 30, 80, 120],
];

const boisIndex = 1;
const pierreIndex = 2;
const ferIndex = 3;

export const productionsLevelUpCosts = productions.map((resourceProduction) =>
  resourceProduction.map(
    (production, levelIndex) => [
        productions[boisIndex-1][levelIndex] * 20 * (levelIndex / 2 + 1),
        productions[pierreIndex-1][levelIndex] * 20 * (levelIndex / 2 + 1),
        productions[ferIndex-1][levelIndex] * 20 * (levelIndex / 2 + 1),
    ]
  )
);

export const maxCount = productions.map((resourceProduction) =>
  resourceProduction.map((production) => production * 250)
);
export const maxCountLevelUpCosts = maxCount.map(
  (resourceMaxCount) =>
    resourceMaxCount.map((max, levelIndex) => [
      maxCount[boisIndex - 1][levelIndex] / 10,
      maxCount[pierreIndex - 1][levelIndex] / 10,
      maxCount[ferIndex - 1][levelIndex] / 10,
    ])
);

export let scierieType = undefined;
export let carriereType = undefined;
export let mineType = undefined;

export const createBaseBuildings = async () => {
  try {
    const bois = await ResourceType.upsert(
      {
        id: boisIndex,
        label: "bois",
      },
      ["id"]
    );

    scierieType = await Building.upsert(
      {
        id: 1,
        label: "scierie",
        productionByLevel: productions[boisIndex - 1],
        productionLevelUpCostByLevel: productionsLevelUpCosts[boisIndex - 1],
        max: maxCount[boisIndex - 1],
        maxLevelUpCostByLevel: maxCountLevelUpCosts[boisIndex - 1],
        resourceType: bois.identifiers[0].id,
      },
      ["id"]
    );

    const pierre = await ResourceType.upsert(
      {
        id: pierreIndex,
        label: "pierre",
      },
      ["id"]
    );

    carriereType = await Building.upsert(
      {
        id: 2,
        label: "carrière",
        productionByLevel: productions[pierreIndex - 1],
        productionLevelUpCostByLevel: productionsLevelUpCosts[pierreIndex - 1],
        max: maxCount[pierreIndex - 1],
        maxLevelUpCostByLevel: maxCountLevelUpCosts[pierreIndex - 1],
        resourceType: pierre.identifiers[0].id,
      },
      ["id"]
    );

    const fer = await ResourceType.upsert(
      {
        id: ferIndex,
        label: "fer",
      },
      ["id"]
    );

    mineType = await Building.upsert(
      {
        id: 3,
        label: "mine",
        productionByLevel: productions[ferIndex - 1],
        productionLevelUpCostByLevel: productionsLevelUpCosts[ferIndex - 1],
        max: maxCount[ferIndex - 1],
        maxLevelUpCostByLevel: maxCountLevelUpCosts[ferIndex - 1],
        resourceType: fer.identifiers[0].id,
      },
      ["id"]
    );
  } catch (error) {
    console.log(error);
  }
};
