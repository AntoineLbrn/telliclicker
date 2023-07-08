import { User } from "../entity/User";
import { mairieLevelUpCosts } from "../utils";
import TransactionService from "./TransactionService";

class UserService {
  async upgrade(userId) {
    const user = await User.findOne({
      where: { id: userId },
    });

    return TransactionService.buy(mairieLevelUpCosts[user.level], userId).then(
      () => {
        /**
         * Refetch it since column COUNT has been updated in TransactionService
         */
        User.findOne({
          where: { id: userId },
        }).then((user) => {
          user.level++;
          return user.save();
        });
      }
    );
  }
}

export default new UserService();
