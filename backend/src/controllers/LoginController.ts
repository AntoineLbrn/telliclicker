import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { compare } from "bcrypt";
import { User } from "../entity/User";
import { validationResult } from "express-validator";
import { JWT_SECRET_KEY } from "../consts";

class LoginController {
  async post(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;
    try {
      let user = await User.findOne({ where: { username } });

      if (user) {
        compare(password, user.password, function (err, response) {
          if (err) {
            throw err;
          }
          if (response) {
            const token = sign(
              {
                id: user.id,
                username: user.username,
              },
              JWT_SECRET_KEY,
              {
                expiresIn: "1 day",
              }
            );

            return res
              .cookie("access_token", token, {
                httpOnly: false,
                maxAge: 24 * 60 * 60 * 1000,
                domain: 'localhost',
                secure: true,
                sameSite:'none',
              })
              .status(200)
              .json({ message: "Logged in successfully 😊 👌" });
          }

          return res.status(403).json("wrong_credentials");
        });
      } else {
        return res.status(404).json("user_not_found");
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
}

export default new LoginController();
