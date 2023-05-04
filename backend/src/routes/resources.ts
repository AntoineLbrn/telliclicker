import { Router } from 'express';
import { authorization } from '../auth';
import ResourcesController from '../controllers/ResourcesController';

export const useResourcesRoutes = (routes: Router) => {
    routes.get("/api/resources", authorization, ResourcesController.get);
}