import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

const initialExpenses = [
  {
    id: "i1",
    title: "Life Insurance",
    amount: 45.4,
    date: new Date(2021, 2, 3),
  },
  {
    id: "i2",
    title: "Car Insurance",
    amount: 249.9,
    date: new Date(2021, 11, 12),
  },
  {
    id: "i3",
    title: "Credit Card Payoff",
    amount: 89.3,
    date: new Date(2021, 7, 22),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
    // console.log("ina appjs");
    // console.log(expense);
  };

  return (
    <div className="App">
      <h1>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </h1>
    </div>
  );
};

export default App;
