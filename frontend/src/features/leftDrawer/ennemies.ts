import bandit from "./bandit_des_montagnes.png"
import troll from "./troll.png"
import wyvern from "./wyvern.png"
import mercenaire from "./mercenaire.png"
import general from "./general.png"
import empereur from "./empereur.jpg"

export const ennemies = [
    {
        id: 1,
        img: bandit,
        title: "Bandit des montagnes",
        description: "Le chef d'une troupe de bandits, musclés mais pas très malins.",
        points: 100
    },
    {
        id: 2,
        img: troll,
        title: "Troll enragé",
        description: "Un troll de plus de 5 mètres à qui on a volé son goûter.",
        points: 200
    },
    {
        id: 3,
        img: wyvern,
        title: "Vol de Wyvernes",
        description: "Une troupe de Wyvernes, très agressives mais vulnérables.",
        points: 500
    },
    {
        id: 4,
        img: mercenaire,
        title: "Mercenaires de l'Empire",
        description: "Des mercenaires armés jusqu'aux dents envoyés sur ordre de l'Empire.",
        points: 1000
    },
    {
        id: 5,
        img: general,
        title: "Général de l'Empire",
        description: "Un général puissant et son armée aux armures impénétrables.",
        points: 2000
    },
    {
        id: 6,
        img: empereur,
        title: "Empereur démoniaque",
        description: "L'empereur démoniaque et son armée impériale surpuissante et dévastatrice.",
        points: 10000
    }
]