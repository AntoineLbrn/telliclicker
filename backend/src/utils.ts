import { Building } from "./entity/Building";
import { ResourceType } from "./entity/ResourceType";
import { UnitType } from "./entity/UnitType";

export const productions = [
  [10, 25, 50, 90, 140],
  [7, 20, 45, 70, 100],
  [3, 9, 21, 35, 50],
];

export const boisIndex = 1;
export const pierreIndex = 2;
export const ferIndex = 3;
export const fantassinIndex = 1;
export const archerIndex = 2;
export const guerrierIndex = 3;
export const cavalierIndex = 4;
export const mageIndex = 5

export const productionsLevelUpCosts = productions.map((resourceProduction) =>
  resourceProduction.map((production, levelIndex) => [
    Math.trunc(
      productions[boisIndex - 1][levelIndex] * 20 * (levelIndex / 2 + 1)
    ),
    Math.trunc(
      productions[pierreIndex - 1][levelIndex] * 10 * (levelIndex / 2 + 1)
    ),
    Math.trunc(
      productions[ferIndex - 1][levelIndex] * 5 * (levelIndex / 2 + 1)
    ),
  ])
);

export const maxCount = productions.map((resourceProduction) =>
  resourceProduction.map((production) => production * 250)
);

export const maxCountLevelUpCosts = maxCount.map((resourceMaxCount) =>
  resourceMaxCount.map((max, levelIndex) => [
    Math.trunc(maxCount[boisIndex - 1][levelIndex] / 10),
    Math.trunc(maxCount[pierreIndex - 1][levelIndex] / 10),
    Math.trunc(maxCount[ferIndex - 1][levelIndex] / 10),
  ])
);

export const mairieLevelUpCosts = [
  [500, 50, 200],
  [5000, 1000, 2000],
  [50000, 10000, 20000],
];

export const mairieMaxUnitsByLevel = [
  0, 20, 50, 150
]

export let scierieType = undefined;
export let carriereType = undefined;
export let mineType = undefined;
export let fantassinType = undefined;
export let archerType = undefined;
export let guerrierType = undefined;
export let cavalierType = undefined;
export let mageType = undefined

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

export const createBaseUnits = async () => {
  try {
    fantassinType = await UnitType.upsert(
      {
        id: fantassinIndex,
        label: "fantassin",
        boisCost: 30,
        pierreCost: 10,
        ferCost: 0,
        unitCost: 1,
        levelRequired: 1
      },
      ["id"]
    );
    archerType = await UnitType.upsert(
      {
        id: archerIndex,
        label: "archer",
        boisCost: 50,
        pierreCost: 10,
        ferCost: 10,
        unitCost: 1,
        levelRequired: 2
      },
      ["id"]
    );
    guerrierType = await UnitType.upsert(
      {
        id: guerrierIndex,
        label: "guerrier",
        boisCost: 100,
        pierreCost: 50,
        ferCost: 20,
        unitCost: 1,
        levelRequired: 2
      },
      ["id"]
    );
    cavalierType = await UnitType.upsert(
      {
        id: cavalierIndex,
        label: "cavalier",
        boisCost: 200,
        pierreCost: 50,
        ferCost: 20,
        unitCost: 2,
        levelRequired: 3
      },
      ["id"]
    );
    mageType = await UnitType.upsert(
      {
        id: mageIndex,
        label: "mage",
        boisCost: 1000,
        pierreCost: 1000,
        ferCost: 1000,
        unitCost: 1,
        levelRequired: 4
      },
      ["id"]
    );
    
  } catch (error) {
    console.log(error);
  }
}
export const canBuy = (costs, resources) => {};
