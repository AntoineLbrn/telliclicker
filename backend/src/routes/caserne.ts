import { Router } from 'express';
import { authorization } from '../auth';
import CaserneController from '../controllers/CaserneController';

export const useCaserneRoutes = (routes: Router) => {
    routes.get("/api/caserne", authorization, CaserneController.get);
    routes.post("/api/caserne/buy/:unitId", authorization, CaserneController.buyUnit);
}