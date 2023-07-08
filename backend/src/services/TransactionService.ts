import { Request, Response } from "express";
import { UserBulding } from "../entity/UserBuilding";
import { boisIndex, ferIndex, pierreIndex } from "../utils";
import ResourceService from "./ResourceService";

class TransactionService {
  async buy(costs, userId) {
    const resources = await ResourceService.getResourcesByUser(userId);
    if (this.canBuy(costs, resources)) {
        await ResourceService.removeResourcesByUser(userId, costs)
    } else {
        throw new Error("You don't have enough resources");
    }
  }

  canBuy(costs, resources) {
    return (
        costs[boisIndex - 1] <=
          resources.find((resource) => resource.id === boisIndex).count &&
        costs[pierreIndex - 1] <=
          resources.find((resource) => resource.id === pierreIndex).count &&
        costs[ferIndex - 1] <=
          resources.find((resource) => resource.id === ferIndex).count
      );
  }
}

export default new TransactionService();
