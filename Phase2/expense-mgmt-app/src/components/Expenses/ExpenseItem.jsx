import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from '../../UI/Card';

const ExpenseItem = (props) => {

    const expenseDate = props.date;
    const expenseAmount = props.amount;

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={expenseDate} />

            <div className='expense-item_description'>
            <h2>{props.title}</h2>
            </div>

            <div className='expense-item_price'>${expenseAmount}</div>
        </Card>
    </li>
  )
}

export default ExpenseItem;