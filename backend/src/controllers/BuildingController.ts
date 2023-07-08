import { Request, Response } from "express";
import { UserBulding } from "../entity/UserBuilding";
import UserBuildingService from "../services/UserBuildingService";

class BuildingController {
  async get(req: Request, res: Response) {
    try {
      //@ts-ignore
      const buildings = await UserBulding.find({where: {user: {id: req.user.id}}})
      res.status(200).json(buildings)
    } catch (error) {
      console.log(error)
      res.status(500).json({message: "Unexpected error"})
    }
  }

  async upgradeProduction(req: Request, res: Response) {
    try {
      //@ts-ignore
      const building = await UserBuildingService.upgradeUserBuildingProduction(req.user.id, req.params.id)
      res.status(200).json(building)
    } catch (error) {
      console.log(error)
      res.status(500).json({message: "Unexpected error"})
    }
  }

  async upgradeCapacity(req: Request, res: Response) {
    try {
      //@ts-ignore
      const building = await UserBuildingService.upgradeUserBuildingCapacity(req.user.id, req.params.id)
      res.status(200).json(building)
    } catch (error) {
      console.log(error)
      res.status(500).json({message: "Unexpected error"})
    }
  }
}

export default new BuildingController();
