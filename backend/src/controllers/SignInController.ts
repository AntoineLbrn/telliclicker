import { JWT_SECRET_KEY } from "../consts";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { hash } from "bcrypt";
import { User } from "../entity/User";
import { validationResult } from "express-validator";
import { UserBulding } from "../entity/UserBuilding";
import { archerType, carriereType, cavalierType, fantassinType, guerrierType, mageType, maxCount, mineType, productions, scierieType } from "../utils";
import { UnitStock } from "../entity/UnitStock";

class SignInController {
  async post(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;
    try {
      let user = await User.findOne({ where: { username } });
      if (user) {
        return res.status(403).json("choose_another_username");
      }
      const passwordHashed = await hash(password, 10);

      user = await User.create({
        username: username,
        password: passwordHashed,
        buildings: [
          UserBulding.create({
            level: 0,
            building: scierieType.identifiers[0].id,
            count: 300,
            maxResourceLevel: 0,
            generation: productions[scierieType.identifiers[0].id - 1][0],
            capacity: maxCount[scierieType.identifiers[0].id -1][0]
          }),
          UserBulding.create({
            level: 0,
            building: carriereType.identifiers[0].id,
            count: 200,
            maxResourceLevel: 0,
            generation: productions[carriereType.identifiers[0].id - 1][0],
            capacity: maxCount[carriereType.identifiers[0].id -1][0]
          }),
          UserBulding.create({
            level: 0,
            building: mineType.identifiers[0].id,
            count: 100,
            maxResourceLevel: 0,
            generation: productions[mineType.identifiers[0].id - 1][0],
            capacity: maxCount[mineType.identifiers[0].id -1][0]
          }),
        ],
        unitStocks: [
          UnitStock.create({
            type: fantassinType.identifiers[0].id
          }),
          UnitStock.create({
            type: archerType.identifiers[0].id
          }),
          UnitStock.create({
            type: guerrierType.identifiers[0].id
          }),
          UnitStock.create({
            type: cavalierType.identifiers[0].id
          }),
          UnitStock.create({
            type: mageType.identifiers[0].id
          }),
        ]
      });

      await User.save(user);

      const expireIn = 24 * 60 * 60;
      const token = sign(
        {
          id: user.id,
          username: user.username,
        },
        JWT_SECRET_KEY,
        {
          expiresIn: expireIn,
        }
      );

      res
        .cookie("access_token", token, {
          httpOnly: false,
          secure: process.env.NODE_ENV === "production",
        })
        .status(200)
        .json({ message: "Logged in successfully 😊 👌" });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default new SignInController();
