
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


const NewExpense = ({children}) => {
    return (
        <div className='new-expense'>
            {children}
        </div>
    )
}

export default NewExpense;