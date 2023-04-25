import { Router } from 'express';
import { body } from "express-validator";
import { authorization } from '../auth';
import LoginController from '../controllers/LoginController';
import SignInController from '../controllers/SignInController';

export const useLoginRoutes = (routes: Router) => {
    routes.post("/api/login", [
        body("username", "username is required").notEmpty(),
        body("password", "password is required").notEmpty(),
    ], LoginController.post);

    routes.post("/api/signin", [
        body("username", "username is required").notEmpty(),
        body("password", "password is required").notEmpty(),
    ], SignInController.post);

    routes.get("/api", authorization, (req: any, res) => {
        return res.json({ user: req.user } );
    });
}