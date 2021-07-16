import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'

const Expenses = ({items}) => {
    return (    
    <Card className="expenses">
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
    </Card>)
}

export default Expenses;