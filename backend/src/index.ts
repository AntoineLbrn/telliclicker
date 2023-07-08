import { AppDataSource } from "./data-source";
import { routes } from "./routes";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as cors from "cors";
import { createBaseBuildings, createBaseUnits} from "./utils";
import { generateResources } from "./cron";

AppDataSource.initialize()
  .then(async () => {
    await createBaseBuildings();
    await createBaseUnits();
    generateResources();
    const app = express();
    const port = process.env.PORT ? process.env.PORT : 3332;
    app.use(cors({ credentials: true, origin: true }));
    app.use(cookieParser());
    app.use(routes);
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => console.log(error));
