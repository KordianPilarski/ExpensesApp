import React, { useState } from  'react'
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({initTitle, amount, date}) => {

  const [title, setTitle] = useState(initTitle)
  
  const handleClick = () => {
    setTitle("changed title")
    console.log(title)
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={date}/>
      <h2 className="expense-item__description">{title} </h2>
      <div className="expense-item__price">${amount}</div>
      <button onClick={handleClick}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
