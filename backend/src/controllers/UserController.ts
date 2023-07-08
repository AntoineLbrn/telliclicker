import { Request, Response } from "express";
import { User } from "../entity/User";
import UserService from "../services/UserService";

class UserController {
  async get(req: Request, res: Response) {
    try {
      //@ts-ignore
      const user = await User.findOne({where: {id: req.user.id}})
      res.status(200).json(user)
    } catch (error) {
      console.log(error)
      res.status(500).json({message: "Unexpected error"})
    }
  }

  async upgrade(req: Request, res: Response) {
    try {
        //@ts-ignore
        const user = await UserService.upgrade(req.user.id)
        res.status(200).json(user)
    } catch (error) {
      console.log(error)
      res.status(500).json({message: "Unexpected error"})
    }
  } 
}

export default new UserController();
