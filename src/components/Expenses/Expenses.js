import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = ({ items }) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const selectYearHandler = (selectYear) => {
    setSelectedYear(selectYear);
    // console.log("z exp js");
    // console.log(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} onSelectedYear={selectYearHandler} />
        <ExpenseItem
          initTitle={items[0].title}
          amount={items[0].amount}
          date={items[0].date}
        />
        <ExpenseItem
          initTitle={items[1].title}
          amount={items[1].amount}
          date={items[1].date}
        />
        <ExpenseItem
          initTitle={items[2].title}
          amount={items[2].amount}
          date={items[2].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
