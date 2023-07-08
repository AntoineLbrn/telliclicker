import { Router } from 'express';
import { authorization } from '../auth';
import EnnemiesController from '../controllers/EnnemiesController';
import UserController from '../controllers/UserController';

export const useUserRoutes = (routes: Router) => {
    routes.get("/api", authorization, UserController.get);
    routes.post("/api/user/upgrade", authorization, UserController.upgrade);
    routes.post("/api/user/challenge/:ennemyId", authorization, EnnemiesController.challengeEnnemy);
}