import './App.css';
import AddExpense from './components/AddExpense'
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div className="App">
      <h1>
        <AddExpense />
        <ExpenseItem />
      </h1>
    </div>
  );
}

export default App;
