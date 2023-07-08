import { Router } from 'express';
import { authorization } from '../auth';
import EnnemiesController from '../controllers/EnnemiesController';
import UserController from '../controllers/UserController';

export const useUserRoutes = (routes: Router) => {
    routes.get("/", authorization, UserController.get);
    routes.get("/api", authorization, (req, res) => res.send("hello"));
    routes.post("/api/user/upgrade", authorization, UserController.upgrade);
    routes.post("/api/user/challenge/:ennemyId", authorization, EnnemiesController.challengeEnnemy);
}