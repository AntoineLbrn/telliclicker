import { AppDataSource } from "./data-source"
import { routes } from './routes';
import * as cookieParser from 'cookie-parser'
import * as express from 'express'

AppDataSource.initialize().then(async () => {

    const app = express();
    const port = process.env.PORT ? process.env.PORT : 3332;
    app.use(cookieParser());
    app.use(routes)
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });

}).catch(error => console.log(error))
