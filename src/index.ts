import express, { Request, Response } from "express";
import { Debt } from "./entity/Debt.entity";
import DebtRepository from "./repository/DebtRepository";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.post("/debts", (req: Request, res: Response) => {

    console.log(req.body)

    const debtRepository = new DebtRepository()
    const debt = new Debt()

    debt.amount = req.body.amount
    debt.replicate = req.body.replicate
    debt.startDate = req.body.startDate

    debtRepository.save(debt)

    res.sendStatus(201)
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`[SERVER]: Application running at http://localhost:3000/ 🚀`);
});
