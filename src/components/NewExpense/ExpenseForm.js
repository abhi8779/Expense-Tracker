import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  // const titleChangeHandler = (event) => {
  //   console.log("titleChanged");
  //   setEnteredTitle(event.target.value);
  //   console.log(enteredTitle);
  // };
  // const amountChangeHandler = (event) => {
  //   console.log("titleChanged");
  //   setEnteredAmount(event.target.value);
  //   console.log(enteredAmount);
  // };
  // const dateChangeHandler = (event) => {
  //   console.log("titleChanged");
  //   setEnteredDate(event.target.value);
  //   console.log(enteredDate);
  // };

  //AlterNative Of Having 3 state Slices///////////////////////////////////////////////////////

  const [enteredData, setEnteredData] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    // setEnteredData({
    //   ...enteredData,
    //   enteredTitle: event.target.value,
    // });
    setEnteredData((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
    console.log(enteredData.enteredTitle);
  };
  const amountChangeHandler = (event) => {
    // setEnteredData({
    //   ...enteredData,
    //   enteredAmount: event.target.value,
    // });
    setEnteredData((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
    console.log(enteredData.enteredAmount);
  };
  const dateChangeHandler = (event) => {
    setEnteredData((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
    console.log(enteredData.enteredDate);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredData.enteredTitle,
      amount: +enteredData.enteredAmount,
      date: new Date(enteredData.enteredDate),
    };

    setEnteredData({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredData.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
            value={enteredData.enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
            value={enteredData.enteredDate}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button onClick={props.showForm} type="button">
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
