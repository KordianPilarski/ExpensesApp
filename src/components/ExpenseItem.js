import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2021, 12, 3, 12, 13) ;
  const expenseTitle = "Life Insurance";
  const expenseAmount = 231.8;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <h2 className="expense-item__description">{expenseTitle} </h2>
      <div className="expense-item__price">${expenseAmount}</div>
    </div>
  );
}

export default ExpenseItem;
