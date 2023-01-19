import { Router } from "express";
const router = Router();

import { Expense } from "../controllers/Expense.js";

const expense = new Expense()
router.get("/all", expense.GetAllExpenses);
router.post("/create", expense.CreateExpense);

export default router;
