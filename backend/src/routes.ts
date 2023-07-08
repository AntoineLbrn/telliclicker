import { Router } from 'express';
import { useLoginRoutes } from './routes/login';
import * as express from 'express'
import { useResourcesRoutes } from './routes/resources';
import { useUserBuildingRoutes } from './routes/userBuildings';
import { useUserRoutes } from './routes/user';
import { useCaserneRoutes } from './routes/caserne';

export const routes = Router();

routes.use(express.json());
routes.use(express.urlencoded({ extended: false }));
useUserRoutes(routes);
useLoginRoutes(routes);
useResourcesRoutes(routes);
useUserBuildingRoutes(routes);
useCaserneRoutes(routes);