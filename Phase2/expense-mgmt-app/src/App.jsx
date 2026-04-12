import './App.css'
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseForm from './components/NewExpense/ExpenseForm';

import ExpenseContextProvider from './store/expense-context';

const App = () => {
  return (
  <ExpenseContextProvider>
      <div className="App">
        <h1>Expense management System!</h1>
        <NewExpense>
          <ExpenseForm />
        </NewExpense>
        <Expenses />
      </div>
    </ExpenseContextProvider>
  )
}
export default App