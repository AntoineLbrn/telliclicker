import { Request, Response } from "express";
import { UserBulding } from "../entity/UserBuilding";
import CaserneService from "../services/CaserneService";

class CaserneController {
  async get(req: Request, res: Response) {
    try {
      //@ts-ignore
      res.status(200).json(await CaserneService.getUnits(req.user.id))
    } catch (error) {
      console.log(error)
      res.status(500).json({message: "Unexpected error"})
    }
  }

  async buyUnit(req: Request, res: Response) {
    try {
      //@ts-ignore
      res.status(200).json(await CaserneService.buyUnit(req.user.id, req.params.unitId))
    } catch (error) {
      console.log(error)
      res.status(500).json({message: "Unexpected error"})
    }
  }
}

export default new CaserneController();
