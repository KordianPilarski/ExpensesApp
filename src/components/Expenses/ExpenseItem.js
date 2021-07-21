import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ initTitle, amount, date }) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <h2 className="expense-item__description">{initTitle} </h2>
        <div className="expense-item__price">${amount}</div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
