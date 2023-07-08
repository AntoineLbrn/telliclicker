import { Router } from 'express';
import { authorization } from '../auth';
import BuildingController from '../controllers/BuildingController';

export const useUserBuildingRoutes = (routes: Router) => {
    routes.get("/api/buildings", authorization, BuildingController.get);
    routes.post("/api/building/:id/production/upgrade", authorization, BuildingController.upgradeProduction);
    routes.post("/api/building/:id/capacity/upgrade", authorization, BuildingController.upgradeCapacity);
}