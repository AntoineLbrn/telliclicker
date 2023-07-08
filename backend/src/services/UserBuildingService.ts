import { AppDataSource } from "../data-source";
import { UserBulding } from "../entity/UserBuilding";
import { maxCountLevelUpCosts, productionsLevelUpCosts } from "../utils";
import TransactionService from "./TransactionService";

class UserBuldingService {
  async upgradeUserBuildingCapacity(userId, buildingId) {
    const building = await UserBulding.findOne({
        where: { user: { id: userId }, building: { id: buildingId } },
      });
  
      return TransactionService.buy(
        maxCountLevelUpCosts[buildingId - 1][building.maxResourceLevel],
        userId
      ).then(() => {
        /**
         * Refetch it since column COUNT has been updated in TransactionService
         */
        UserBulding.findOne({
          where: { user: { id: userId }, building: { id: buildingId } },
        }).then((building) => {
          building.maxResourceLevel++;
          return building.save();
        });
      });
    }

  async upgradeUserBuildingProduction(userId, buildingId) {
    const building = await UserBulding.findOne({
      where: { user: { id: userId }, building: { id: buildingId } },
    });

    return TransactionService.buy(
      productionsLevelUpCosts[buildingId - 1][building.level],
      userId
    ).then(() => {
      /**
       * Refetch it since column COUNT has been updated in TransactionService
       */
      UserBulding.findOne({
        where: { user: { id: userId }, building: { id: buildingId } },
      }).then((building) => {
        building.level++;
        return building.save();
      });
    });
  }
}

export default new UserBuldingService();
