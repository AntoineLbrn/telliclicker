import mairie0 from "./mairie/mairie0.jpeg";
import mairie1 from "./mairie/mairie1.jpeg";
import mairie2 from "./mairie/mairie2.jpeg";
import mairie3 from "./mairie/mairie3.jpeg";
import scierie from "./scierie/scierie.jpeg";
import carriere from "./carriere/carriere.png";
import mine from "./mine/mine.png";
import bois from "../game/images/bois.png";
import pierre from "../game/images/pierre.png";
import fer from "../game/images/fer.png";
import fantassin from "./caserne/fantassin.png";
import archer from "./caserne/archer.png";
import guerrier from "./caserne/guerrier.png";
import cavalier from "./caserne/cavalier.png";
import mage from "./caserne/mage.png";
import { boisIndex, ferIndex, maxCount, maxCountLevelUpCosts, pierreIndex, productions, productionsLevelUpCosts } from "../../utils";

export const map = {
  name: "village map",
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
          description: "Vous donne accès aux bâtiments de base.",
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
          description: "Débloquez la caserne et augmentez votre population de 20.",
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
          description: "Débloquez le laboratoire et augmentez votre population de 30.",
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
          description: "Augmentez votre population de 100.",
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
      id: "CASERNE",
      description:
        "La caserne est le lieu de recrutement de votre force armée. Vous pourrez ensuite la mobiliser pour combattre des ennemis.",
      unitsBuyable: [
        {
          id: 1,
          level: 1,
          image: fantassin,
          title: "Fantassin",
          description: "Unité de base. Un combattant armé d'une simple lance qui combattra au péril de sa vie.",
          cost: {
            bois: 30,
            fer: 10,
            pierre: 0,
            unit: 1,
          },
        },
        {
          id: 2,
          level: 2,
          image: archer,
          title: "Archer",
          description: "Unité à distance armée d'un arc qui sera efficace contre les unités lentes ou volantes.",
          cost: {
            bois: 50,
            fer: 10,
            pierre: 10,
            unit: 1,
          },
        },
        {
          id: 3,
          level: 2,
          image: guerrier,
          title: "Guerrier",
          description: "Un combattant armé d'une hallebarde pouvant tenir à lui seul une horde de sanglier.",
          cost: {
            bois: 100,
            fer: 50,
            pierre: 20,
            unit: 1,
          },
        },
        {
          id: 4,
          level: 3,
          image: cavalier,
          title: "Cavalier",
          description: "Un combattant à cheval armé d'une lance. Efficace pour les assauts rapides et puissants.",
          cost: {
            bois: 200,
            fer: 50,
            pierre: 20,
            unit: 2,
          },
        },
        {
          id: 5,
          level: 4,
          image: mage,
          title: "Mage",
          description: "Un magicien des quatres éléments avec de très grands pouvoirs.",
          cost: {
            bois: 1000,
            fer: 1000,
            pierre: 1000,
            unit: 1,
          },
        },
      ],
      title: "Caserne",
      shape: "poly",
      name: "Caserne",
      fillColor: "rgba(236, 230, 171,0.2)",
      strokeColor: "transparent",
      coords: [584,822,624,800,628,751,617,729,563,697,559,668,532,639,523,595,508,603,494,646,438,682,434,720,436,767,436,791,461,807,485,807,485,795,512,807,536,805,574,818],
    },
    {
      id: "MARCHÉ",
      description:
        "Le marché est le lieu où vous pourrez accomplir toutes sortes de missions du tableau d'affichage.",
      ameliorations: [
        {
          level: 0,
          image: mairie0,
          title: "Village",
          description: "Vous donne accès aux bâtiments de base.",
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
          description: "Débloquez la caserne et augmentez votre population de 20.",
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
          description: "Débloquez le laboratoire et augmentez votre population de 30.",
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
          description: "Augmentez votre population de 100.",
          cost: {
            bois: 50000,
            fer: 20000,
            pierre: 10000,
          },
        },
      ],
      title: "Marché",
      shape: "poly",
      name: "Marché",
      fillColor: "rgba(236, 230, 171,0.2)",
      strokeColor: "transparent",
      coords: [1149,550,1100,527,1066,512,1000,518,943,538,915,532,879,566,834,597,854,604,859,624,834,644,834,661,1037,746,1067,719,1124,709,1129,695,1142,697,1154,697,1149,659,1174,621],
    },
    {
      id: "MINE",
      buildingId: ferIndex,
      description:
        "Dans la carrière, vous pourrez augmenter votre production de fer et son stockage maximal",
      backgroundImage: mine,
      resourceBuildingAmeliorations: {
        production: {
          title: "Production",
          description: "Augmente votre production en fer",
          levels: productions[pierreIndex].map((production, index) => ({
            level: index,
            cost: {
              bois: productionsLevelUpCosts[ferIndex][index][boisIndex],
              pierre: productionsLevelUpCosts[ferIndex][index][pierreIndex],
              fer: productionsLevelUpCosts[ferIndex][index][ferIndex],
              unit: 0,
            },
            description: <><b>{production * 6}</b> <img style={{ height: "1.25rem", verticalAlign: 'middle' }} src={fer} /> par minute</>,
          })),
        },
        capacity: {
          title: "Entrepôt",
          description: "Augmente votre stockage maximal en fer",
          levels: maxCount[ferIndex].map((max, index) => ({
            level: index,
            cost: {
              bois: maxCountLevelUpCosts[ferIndex][index][boisIndex],
              pierre: maxCountLevelUpCosts[ferIndex][index][pierreIndex],
              fer: maxCountLevelUpCosts[ferIndex][index][ferIndex],
              unit: 0,
            },
            description: <><b>{max}</b> <img style={{ height: "1.25rem", verticalAlign: 'middle' }} src={fer} /> maximum</>,
          })),
        },
      },
      title: "Mine",
      shape: "poly",
      name: "Mine",
      fillColor: "rgba(236, 230, 171,0.2)",
      strokeColor: "transparent",
      coords: [264,1091,212,1052,226,1041,177,1008,159,1004,147,974,119,950,105,947,98,932,92,918,51,898,2,856,4,1242,163,1242,299,1175,286,1126,313,1117,311,1091,291,1090],
    }, 
    {
      id: "CARRIERE",
      buildingId: pierreIndex,
      description:
        "Dans la carrière, vous pourrez augmenter votre production de pierre et son stockage maximal",
      backgroundImage: carriere,
      resourceBuildingAmeliorations: {
        production: {
          title: "Production",
          description: "Augmente votre production en pierre",
          levels: productions[pierreIndex].map((production, index) => ({
            level: index,
            cost: {
              bois: productionsLevelUpCosts[pierreIndex][index][boisIndex],
              pierre: productionsLevelUpCosts[pierreIndex][index][pierreIndex],
              fer: productionsLevelUpCosts[pierreIndex][index][ferIndex],
              unit: 0,
            },
            description: <><b>{production * 6}</b> <img style={{ height: "1.25rem", verticalAlign: 'middle' }} src={pierre} /> par minute</>,
          })),
        },
        capacity: {
          title: "Entrepôt",
          description: "Augmente votre stockage maximal en pierre",
          levels: maxCount[pierreIndex].map((max, index) => ({
            level: index,
            cost: {
              bois: maxCountLevelUpCosts[pierreIndex][index][boisIndex],
              pierre: maxCountLevelUpCosts[pierreIndex][index][pierreIndex],
              fer: maxCountLevelUpCosts[pierreIndex][index][ferIndex],
              unit: 0,
            },
            description: <><b>{max}</b> <img style={{ height: "1.25rem", verticalAlign: 'middle' }} src={pierre} /> maximum</>,
          })),
        },
      },
      title: "Carrière",
      shape: "poly",
      name: "Carrière",
      fillColor: "rgba(236, 230, 171,0.2)",
      strokeColor: "transparent",
      coords: [1232,792,1214,801,1207,821,1199,841,1203,868,1190,886,1189,915,1257,923,1290,888,1341,906,1389,939,1400,930,1489,979,1531,961,1534,930,1549,946,1576,948,1578,923,1599,921,1601,890,1565,841,1525,810,1507,796,1484,785,1482,771,1435,743,1395,758,1366,743,1266,785,1248,807,1257,809],
    },

    {
      id: "SCIERIE",
      buildingId: boisIndex,
      description:
        "Dans la scierie, vous pourrez augmenter votre production de bois et son stockage maximal",
      backgroundImage: scierie,
      resourceBuildingAmeliorations: {
        production: {
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
            description: <><b>{production * 6}</b> <img style={{ height: "1.25rem", verticalAlign: 'middle' }} src={bois} /> par minute</>,
          })),
        },
        capacity: {
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
      },
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
