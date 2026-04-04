import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from '../../UI/Card';
import React, { useState } from 'react';

const ExpenseItem = (props) => {

    const expenseDate = props.date;
    const expenseTitle = props.title;
    const expenseAmount = props.amount;


    const [title, setTitle] = useState(expenseTitle);

    const clickHandler = () => {
        setTitle('Updated!');
    }

  return (
      <Card className='expense-item'>
        <ExpenseDate date={expenseDate} />

            <div className='expense-item_description'>
            <h2>{title}</h2>
            </div>

            <div className='expense-item_price'>${expenseAmount.toFixed(2)}</div>
            <button onClick={clickHandler}>Show Details</button>
        </Card>
  )
}

export default ExpenseItem;