import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import React, { useState, useContext } from 'react';
import ExpenseList from './ExpenseList';

import { ExpenseContext } from '../../store/expense-context';
import { useSelector } from 'react-redux';

const Expenses = (props) => {

    //const expenseCtx = useContext(ExpenseContext);

    // When you use useSelector RR (React redux) will automatically sets subscription.
    const items = useSelector(state => state.items);

    const[filteredYear, setFilteredYear] = useState('2024');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    // let expensesContent = <p>No expenses found.</p>;

    // if (filteredExpenses.length > 0) {
    //     expensesContent = filteredExpenses.map((expense) => (
    //         <ExpenseItem
    //             key={expense.id}
    //             title={expense.title}
    //             amount={expense.amount}
    //             date={expense.date}
    //         />
    //     ));
    // }

    
    return (
    <Card className='expenses'>

        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

        <ExpenseList items={filteredExpenses} />

    </Card>
        
    )
}

export default Expenses;