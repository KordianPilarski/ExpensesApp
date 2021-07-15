import './App.css';
import AddExpense from './components/AddExpense'
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { id: 'i1', title: 'Life Insurance', amount: 45.4, date: new Date(2021, 2, 3)},
    { id: 'i2',title: 'Car Insurance', amount: 249.9, date: new Date(2021, 11, 12)},
    { id: 'i3',title: 'Credit Card Payoff', amount: 89.3, date: new Date(2021, 7, 22)},
  ]
  return (
    <div className="App">
      <h1>
        <AddExpense />
        <ExpenseItem 
          title={expenses[0].title} 
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem 
          title={expenses[1].title} 
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem 
          title={expenses[2].title} 
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
      </h1>
    </div>
  );
}

export default App;
