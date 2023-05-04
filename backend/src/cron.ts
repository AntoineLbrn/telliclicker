import * as schedule from "node-schedule";
import { UserBulding } from "./entity/UserBuilding";
export const generateResources = () => {
  schedule.scheduleJob("*/10 * * * * *", async function () {
    try {
        UserBulding.createQueryBuilder()
        .update(UserBulding)
        .set({ count: () => "count + generation" })
        .execute()
    } catch (error) {
        console.log(error)
    }
  });
};
