import { Request, Response } from "express";
import { UserBulding } from "../entity/UserBuilding";
import ResourceService from "../services/ResourceService";

class ResourcesController {
  async get(req: Request, res: Response) {
    try {
      //@ts-ignore
      res.status(200).json(await ResourceService.getResourcesByUser(req.user.id))
    } catch (error) {
      console.log(error)
      res.status(500).json({message: "Unexpected error"})
    }
  }
}

export default new ResourcesController();
