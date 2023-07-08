import { Request, Response } from "express";
import EnnemiesService from "../services/EnnemiesService";

class EnnemiesController {

  async challengeEnnemy(req: Request, res: Response) {
    try {
      //@ts-ignore
      const result = await EnnemiesService.challengeEnnemy(req.user.id, req.params.ennemyId)
      if (result > 0) {
        res.status(200).json()
      } else {
        res.status(450).json()
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({message: "Unexpected error"})
    }
  }
}

export default new EnnemiesController();
