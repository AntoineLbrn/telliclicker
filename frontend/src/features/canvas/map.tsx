import mairie0 from "./mairie/mairie0.jpeg";
import mairie1 from "./mairie/mairie1.jpeg";
import mairie2 from "./mairie/mairie2.jpeg";
import mairie3 from "./mairie/mairie3.jpeg";
import scierie from "./scierie/scierie.jpeg";
import bois from "../game/images/bois.png"
import { boisIndex, ferIndex, maxCount, maxCountLevelUpCosts, pierreIndex, productions, productionsLevelUpCosts } from "../../utils";

export const map = {
  name: "village map",
  // GET JSON FROM BELOW URL AS AN EXAMPLE
  areas: [
    {
      id: "MAIRIE",
      description:
        "La mairie est le bâtiment central de votre ville. C'est ici que vous pourrez améliorer le niveau de votre ville et débloquer de nouveaux bâtiments.",
      ameliorations: [
        {
          level: 0,
          image: mairie0,
          title: "Village",
          description: "Vous donne accès aux bâtiments et unités de base.",
          cost: {
            bois: 0,
            fer: 0,
            pierre: 0,
            unit: 0,
          },
        },
        {
          level: 1,
          image: mairie1,
          title: "Ville",
          description: "Vous donne accès aux bâtiments et unités de base.",
          cost: {
            bois: 500,
            fer: 200,
            pierre: 50,
            unit: 0,
          },
        },
        {
          level: 2,
          image: mairie2,
          title: "Cité",
          description: "Vous donne accès aux bâtiments et unités de base.",
          cost: {
            bois: 5000,
            fer: 2000,
            pierre: 1000,
            unit: 0,
          },
        },
        {
          level: 3,
          image: mairie3,
          title: "Mégalopole",
          description: "Vous donne accès aux bâtiments et unités de base.",
          cost: {
            bois: 50000,
            fer: 20000,
            pierre: 10000,
          },
        },
      ],
      title: "Mairie",
      shape: "poly",
      name: "Mairie",
      fillColor: "rgba(236, 230, 171,0.2)",
      strokeColor: "transparent",
      coords: [
        702, 233, 705, 199, 692, 192, 719, 150, 698, 134, 694, 72, 685, 65, 705,
        52, 711, 21, 729, 1, 861, 1, 901, 61, 890, 74, 892, 112, 908, 121, 901,
        137, 940, 155, 939, 182, 939, 211, 906, 248, 830, 224, 832, 244, 817,
        258, 808, 248, 769, 269, 758, 273,
      ],
    },
    {
      id: "SCIERIE",
      description:
        "Dans la scierie, vous pourrez augmenter votre production de bois et son stockage maximal",
      backgroundImage: scierie,
      ameliorationsStacked: [
        {
          title: "Production",
          description: "Augmente votre production en bois",
          levels: productions[boisIndex].map((production, index) => ({
              level: index,
              cost: {
                bois: productionsLevelUpCosts[boisIndex][index][boisIndex],
                pierre: productionsLevelUpCosts[boisIndex][index][pierreIndex],
                fer: productionsLevelUpCosts[boisIndex][index][ferIndex],
                unit: 0,
              },
              description: <><b>{production*6}</b> <img style={{ height: "1.25rem", verticalAlign: 'middle' }} src={bois} /> par minute</>,
            })),
        },
        {
            title: "Entrepôt",
            description: "Augmente votre stockage maximal en bois",
            levels: maxCount[boisIndex].map((max, index) => ({
              level: index,
              cost: {
                bois: maxCountLevelUpCosts[boisIndex][index][boisIndex],
                pierre: maxCountLevelUpCosts[boisIndex][index][pierreIndex],
                fer: maxCountLevelUpCosts[boisIndex][index][ferIndex],
                unit: 0,
              },
              description: <><b>{max}</b> <img style={{ height: "1.25rem", verticalAlign: 'middle' }} src={bois} /> maximum</>,
            })),
          },
      ],
      title: "Scierie",
      shape: "poly",
      name: "Scierie",
      fillColor: "rgba(236, 230, 171,0.2)",
      strokeColor: "transparent",
      coords: [
        1212, 399, 1179, 381, 1179, 362, 1184, 344, 1177, 329, 1193, 311, 1204,
        280, 1221, 282, 1217, 293, 1335, 238, 1353, 265, 1467, 260, 1509, 329,
        1544, 313, 1544, 285, 1549, 269, 1555, 293, 1603, 278, 1636, 326, 1628,
        337, 1641, 353, 1641, 388, 1630, 395, 1582, 419, 1564, 432, 1478, 386,
        1483, 359, 1450, 364, 1421, 366, 1408, 357, 1322, 362, 1272, 384, 1261,
        401, 1254, 410, 1239, 412, 1230, 401,
      ],
    },
  ],
};
