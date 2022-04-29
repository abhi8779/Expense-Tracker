import React from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

import "./RenderExpenses.css";

function RenderExpenses(props) {
  const [year, setYear] = useState("2021");

  const onYearChangeHandler = (enteredExpenseData) => {
    console.log(enteredExpenseData);
    setYear(enteredExpenseData);
  };
  const filteredExpenses = props.data.filter(
    (expense) => expense.date.getFullYear().toString() === year
  );

  return (
    <Card className="expenses">
      <ExpensesFilter activeYear={year} onYearChange={onYearChangeHandler} />
      {/* {expenseContent} */}
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default RenderExpenses;
