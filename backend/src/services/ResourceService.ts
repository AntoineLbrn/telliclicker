import { Request, Response } from "express";
import { UserBulding } from "../entity/UserBuilding";
import { boisIndex, ferIndex, pierreIndex } from "../utils";

class ResourceService {
  async getResourcesByUser(userId) {
    const buildings = await UserBulding.find({
      // @ts-ignore
      select: ["count", "building.id"],
      where: { user: { id: userId } },
    });
    return buildings.map((building) => ({
      count: building.count,
      id: building.building.id,
    }));
  }

  async removeResourcesByUser(userId, costs) {
    await Promise.all([
      UserBulding.createQueryBuilder()
        .update(UserBulding)
        .set({ count: () => "count - :cost" })
        .where({ user: { id: userId }, building: { id: boisIndex } })
        .setParameter("cost", costs[boisIndex - 1])
        .execute(),
      UserBulding.createQueryBuilder()
        .update(UserBulding)
        .set({ count: () => "count - :cost" })
        .where({ user: { id: userId }, building: { id: pierreIndex } })
        .setParameter("cost", costs[pierreIndex - 1])
        .execute(),
      UserBulding.createQueryBuilder()
        .update(UserBulding)
        .set({ count: () => "count - :cost" })
        .where({ user: { id: userId }, building: { id: ferIndex } })
        .setParameter("cost", costs[ferIndex - 1])
        .execute(),
    ]);
  }
}

export default new ResourceService();
