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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onSelectedYear={selectYearHandler}
        />
        {items.map(item => {
          return (
            <ExpenseItem
              initTitle={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
