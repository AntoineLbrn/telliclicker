import { JWT_SECRET_KEY } from "../consts";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { hash } from "bcrypt";
import { User } from "../entity/User";
import { validationResult } from "express-validator";

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
      });
      await User.insert(user);

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