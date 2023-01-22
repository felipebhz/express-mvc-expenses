import express from "express";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

import mainRoutes from "./routes/Main.js";
app.use("/", mainRoutes);

import expenseRoutes from "./routes/expense.js";
app.use("/expense", expenseRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
