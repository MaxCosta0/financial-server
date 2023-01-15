import { AppDataSource } from "../data-source";
import { Debt } from "../entity/Debt.entity";

export default class DebtRepository {
  constructor() {}

  save(debt: Debt) {
    AppDataSource.initialize()
      .then(() => {
        const repository = AppDataSource.getRepository(Debt)

        console.log("Trying to save new debt: ", debt)

        repository.save(debt)
        console.log("Debt has been saved")
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
}
