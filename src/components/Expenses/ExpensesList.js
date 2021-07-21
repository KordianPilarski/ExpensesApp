import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesContent = ({ items }) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses to show</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((item) => (
        <ExpenseItem
          key={item.id}
          initTitle={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesContent;
