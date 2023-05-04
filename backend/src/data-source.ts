import "reflect-metadata"
import { DataSource } from "typeorm"
import { Building } from "./entity/Building"
import { ResourceType } from "./entity/ResourceType"
import { User } from "./entity/User"
import { UserBulding } from "./entity/UserBuilding"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "postgres",
    database: "telliclicker",
    synchronize: true,
    logging: false,
    entities: [User, Building, ResourceType, UserBulding],
    migrations: [],
    subscribers: [],
})
