import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
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

  let expenseContent = <p>No Expense Found ⚠️</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter activeYear={year} onYearChange={onYearChangeHandler} />
      {expenseContent}
    </Card>
  );
}

export default RenderExpenses;
