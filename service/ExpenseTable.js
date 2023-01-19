import sequelize from "../infra/db/db.js";
import ExpenseModel from "../models/ExpenseModel.js";

export class ExpenseTable {
  constructor() {
    const syncDatabaseResult = sequelize.sync();
  }

  // Returns List of Expenses
  getAllExpenses(req, res) {
    const expenses = ExpenseModel.findAll();
    return expenses
  };

  createExpense(req, res) {
    const body = req.body;    
    const createdExpense = ExpenseModel.create(body);
    return createdExpense;
  }

}
