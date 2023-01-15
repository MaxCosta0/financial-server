import axios from "axios";

test("should save new debt", async () => {
  const newDebt = await axios.post("http://localhost:3000/debts", {
    amount: 12,
    startDate: new Date("2022-01-14"),
    replicate: 0,
  });

  expect(newDebt.status).toStrictEqual(201);
});
