import { ExpenseTable } from '../service/ExpenseTable.js'
const expenseTable = new ExpenseTable()
export class Expense {
  constructor() {
  }

  GetAllExpenses = async (req, res) =>  {
    const getAllResult = await expenseTable.getAllExpenses();
    res.json(getAllResult);
  }

  CreateExpense = async (req, res) => {
    const createExpenseResult = await expenseTable.createExpense(req);
    res.json(createExpenseResult);
  }

}
