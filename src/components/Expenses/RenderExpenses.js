import React from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

import "./RenderExpenses.css";
import ExpenseChart from "./ExpenseChart";

console.log("RenderExpenses");

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
    <div>
      <Card className="expenses">
        <ExpensesFilter activeYear={year} onYearChange={onYearChangeHandler} />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default RenderExpenses;
