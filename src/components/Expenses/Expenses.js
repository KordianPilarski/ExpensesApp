import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = ({ items }) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const selectYearHandler = (selectYear) => {
    setSelectedYear(selectYear);
   
    console.log("z exp js");
    console.log(selectYear);
  };

  const filteredExpenses =  items.filter(item => {
    return item.date.getFullYear().toString() === selectedYear
  })

  let expensesContent = <p>No Expenses to be shown</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((item) => {
      return (
        <ExpenseItem
          key={item.id}
          initTitle={item.title}
          amount={item.amount}
          date={item.date}
        />
      );
    })
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onSelectedYear={selectYearHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
