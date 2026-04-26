import './App.css'
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseForm from './components/NewExpense/ExpenseForm';

import ExpenseContextProvider from './store/expense-context';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendExpenseData, fetchExpenseData } from './store/expense-actions';

let isInitial = true;

const App = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);

  useEffect(
    () => {
     dispatch(fetchExpenseData());
    }, [dispatch]);

  useEffect(
    () => {
      if(isInitial) {
        isInitial = false;
        return;
      }
      dispatch(sendExpenseData({items: items}));
    }, [items, dispatch]
  );

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