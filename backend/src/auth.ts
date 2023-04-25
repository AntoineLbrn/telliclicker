import { verify } from 'jsonwebtoken'
import { JWT_SECRET_KEY } from './consts';

export const authorization = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
      return res.sendStatus(403);
    }
    try {
      const data = verify(token, JWT_SECRET_KEY);
      req.user = data
      return next();
    } catch {
      return res.sendStatus(403);
    }
  };