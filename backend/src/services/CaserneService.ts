import { UnitStock } from "../entity/UnitStock";
import { User } from "../entity/User";
import TransactionService from "./TransactionService";

class CaserneService {
  async getUnits(userId) {
    const unitsStock = await UnitStock.find({
      where: { user: { id: userId } },
    });
    return unitsStock;
  }

  async buyUnit(userId, unitId) {
    const user = await User.findOne({ where: { id: userId } });
    const unitStock = await UnitStock.findOne({
      where: { user: { id: userId }, type: { id: unitId } },
    });
    if (unitStock.type.levelRequired > user.level) {
      throw new Error("You don't have level for this unit");
    }
    if (unitStock.type.unitCost + user.units > user.maxUnits) {
      throw new Error("You don't have enough units to train a new one");
    }
    const costs = [
      unitStock.type.boisCost,
      unitStock.type.pierreCost,
      unitStock.type.ferCost,
    ];

    await TransactionService.buy(costs, userId);
    await User.createQueryBuilder()
      .update(User)
      .set({ units: () => "units + :cost" })
      .where({ id: userId })
      .setParameter("cost", unitStock.type.unitCost)
      .execute();

    return await UnitStock.createQueryBuilder()
      .update(UnitStock)
      .set({ stock: () => "stock + 1" })
      .where({ user: { id: userId }, type: { id: unitId } })
      .execute();
  }
}

export default new CaserneService();
