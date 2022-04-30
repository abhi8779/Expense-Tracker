import RenderExpenses from "./components/Expenses/RenderExpenses";
import NewExpense from "./components/NewExpense/NewExpense";

import Chart from "./components/Charts/Chart";

import { useState } from "react";

import React from "react";

const App = () => {
  const DUMMY_DATA = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_DATA);

  // const expenses =

  /////Treditional Way of writing JSX/////
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Lets get started"),
  //   createElement(RenderExpenses, { data: expenses })
  // );

  const onSaveNewExpensesHandler = (enteredExpenseData) => {
    // expenses.push(enteredExpenseData);
    setExpenses((prevExpenses) => {
      return [enteredExpenseData, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onSaveNewExpenses={onSaveNewExpensesHandler} />

      <RenderExpenses data={expenses} />
    </div>
  );
};
export default App;
