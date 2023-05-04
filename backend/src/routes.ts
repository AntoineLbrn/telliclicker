import { Router } from 'express';
import { useLoginRoutes } from './routes/login';
import * as express from 'express'
import { useResourcesRoutes } from './routes/resources';

export const routes = Router();

routes.use(express.json());
routes.use(express.urlencoded({ extended: false }));
useLoginRoutes(routes);
useResourcesRoutes(routes);