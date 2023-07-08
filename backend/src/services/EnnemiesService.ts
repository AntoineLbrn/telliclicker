import { UnitStock } from "../entity/UnitStock";
import { User } from "../entity/User";
import TransactionService from "./TransactionService";

export const ennemies = [
  {
    id: "1",
    title: "Bandit des montagnes",
    description:
      "Le chef d'une troupe de bandits, musclés mais pas très malins.",
    points: 100,
    hp: 10,
    damagesByUnit: [1, 2, 4, 10, 100],
  },
  {
    id: "2",
    title: "Troll enragé",
    description: "Un troll de plus de 5 mètres à qui on a volé son goûter.",
    points: 200,
    hp: 100,
    damagesByUnit: [3, 4, 5, 10, 100],
  },
  {
    id: "3",
    title: "Vol de Wyvernes",
    description: "Une troupe de Wyvernes, très agressives mais vulnérables.",
    points: 500,
    hp: 500,
    damagesByUnit: [3, 40, 5, 20, 100],
  },
  {
    id: "4",
    title: "Mercenaires de l'Empire",
    description:
      "Des mercenaires armés jusqu'aux dents envoyés sur ordre de l'Empire.",
    points: 1000,
    hp: 1000,
    damagesByUnit: [3, 4, 30, 50, 200],
  },
  {
    id: "5",
    title: "Général de l'Empire",
    description: "Un général puissant et son armée aux armures impénétrables.",
    points: 2000,
    hp: 2000,
    damagesByUnit: [3, 4, 30, 50, 200],
  },
  {
    id: "6",
    title: "Empereur démoniaque",
    description:
      "L'empereur démoniaque et son armée impériale surpuissante et dévastatrice.",
    points: 10000,
    hp: 10000,
    damagesByUnit: [5, 10, 60, 100, 400],
  },
];

class EnnemiesService {
  async challengeEnnemy(userId, ennemyId) {
    const user = await User.findOne({
      where: { id: userId },
      relations: ["unitStocks"],
    });

    if (user.ennemiesBeaten.includes(Number(ennemyId))) {
      throw new Error("You've already beaten this ennemy.");
    }

    if (this.hasUserBeatenEnnemy(user.unitStocks, ennemyId)) {
      user.ennemiesBeaten.push(ennemyId);
      await user.save();
      return 1;
    } else {
      user.units = 0;
      await user.save();
      await UnitStock.createQueryBuilder()
        .update(UnitStock)
        .set({ stock: () => "0" })
        .where({ user: { id: userId } })
        .execute();
      return -1;
    }
  }

  hasUserBeatenEnnemy(stocks, ennemyId) {
    let damage = 0;
    const ennemy = ennemies.find((ennemy) => ennemy.id === ennemyId);
    for (const stock of stocks) {
      damage += ennemy.damagesByUnit[stock.type.id - 1] * stock.stock;
    }
    return damage >= ennemy.hp;
  }
}

export default new EnnemiesService();
