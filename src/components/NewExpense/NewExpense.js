import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const onSaveExpenseDataHAndler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onSaveNewExpenses(expenseData);
    setForm(false);
  };

  const [form, setForm] = useState(false);

  const showBtnHandler = () => {
    setForm(true);
  };

  const showFormHandler = () => {
    setForm(false);
  };

  return (
    <div className="new-expense">
      {!form && <button onClick={showBtnHandler}>Add New Expense</button>}
      {form && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHAndler}
          showForm={showFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
