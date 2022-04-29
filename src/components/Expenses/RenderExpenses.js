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
  console.log(props);

  return (
    <Card className="expenses">
      <ExpensesFilter activeYear={year} onYearChange={onYearChangeHandler} />

      {props.data
        .filter((expense) => expense.date.getFullYear().toString() === year)
        .map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </Card>
  );
}

export default RenderExpenses;
