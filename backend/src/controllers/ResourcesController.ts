import { Request, Response } from "express";
import { UserBulding } from "../entity/UserBuilding";

class ResourcesController {
  async get(req: Request, res: Response) {
    try {
      //@ts-ignore
      const buildings = await UserBulding.find({select: ["count", "building.id"], where: {user: {id: req.user.id}}})
      res.status(200).json(buildings.map((building) => ({count: building.count, id: building.building.id })))
    } catch (error) {
      console.log(error)
      res.status(500).json({message: "Unexpected error"})
    }
  }
}

export default new ResourcesController();
