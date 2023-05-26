export const removeCookie = () => {
  document.cookie =
    "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  window.location.reload();
};

export const boisIndex = 0;
export const pierreIndex = 1;
export const ferIndex = 2;

export const productions = [
  [10, 50, 200, 500, 1000],
  [7, 30, 150, 350, 600],
  [3, 10, 30, 80, 120],
];

export const productionsLevelUpCosts = productions.map((resourceProduction) =>
  resourceProduction.map(
    (production, levelIndex) => [
        productions[boisIndex][levelIndex] * 20 * (levelIndex / 2 + 1),
        productions[pierreIndex][levelIndex] * 20 * (levelIndex / 2 + 1),
        productions[ferIndex][levelIndex] * 20 * (levelIndex / 2 + 1),
    ]
  )
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
