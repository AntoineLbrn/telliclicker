export const removeCookie = () => {
  document.cookie =
    "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  window.location.reload();
};

export const boisIndex = 0;
export const pierreIndex = 1;
export const ferIndex = 2;

export const productions = [
  [10, 25, 50, 90, 140],
  [7, 20, 45, 70, 100],
  [3, 9, 21, 35, 50],
];

export const productionsLevelUpCosts = productions.map((resourceProduction) =>
  resourceProduction.map((production, levelIndex) => [
    productions[boisIndex][levelIndex] * 20 * (levelIndex / 2 + 1),
    productions[pierreIndex][levelIndex] * 10 * (levelIndex / 2 + 1),
    productions[ferIndex][levelIndex] * 5 * (levelIndex / 2 + 1),
  ])
);

export const maxCount = productions.map((resourceProduction) =>
  resourceProduction.map((production) => production * 250)
);
export const maxCountLevelUpCosts = maxCount.map((resourceMaxCount) =>
  resourceMaxCount.map((max, levelIndex) => [
    maxCount[boisIndex][levelIndex] / 10,
    maxCount[pierreIndex][levelIndex] / 10,
    maxCount[ferIndex][levelIndex] / 10,
  ])
);

export const isBuyable = (cost: any, buildings: any) => {
  return cost.bois < buildings.find((userBuilding: any) => userBuilding.building.id === boisIndex +1).count
  && cost.pierre < buildings.find((userBuilding: any) => userBuilding.building.id === pierreIndex +1).count
  && cost.fer < buildings.find((userBuilding: any) => userBuilding.building.id === ferIndex +1).count;
}
