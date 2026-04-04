
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


const NewExpense = () => {
    return (
        <div className='new-expense'>
            <h2>New Expense</h2>
            <ExpenseForm />
        </div>
    )
}

export default NewExpense;