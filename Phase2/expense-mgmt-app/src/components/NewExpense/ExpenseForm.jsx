import './ExpenseForm.css'
import React, { useState } from 'react';

import { useContext } from 'react';
import { ExpenseContext } from '../../store/expense-context';
import { useDispatch } from 'react-redux';
import { expenseActions   } from '../../store';
import { useForm } from 'react-hook-form';


// const ExpenseForm = (props) => {

//     //const { onSaveExpenseData } = useContext(ExpenseContext);

//     const dispatch = useDispatch();



//     const [enteredTitle, setEnteredTitle] = useState('');
//     const [enteredAmount, setEnteredAmount] = useState('');
//     const [enteredDate, setEnteredDate] = useState('');

//     const titleChangeHandler = (event) => {
//         setEnteredTitle(event.target.value);
//     }

//     const amountChangeHandler = (event) => {
//         setEnteredAmount(event.target.value);
//     }

//     const dateChangeHandler = (event) => {
//         setEnteredDate(event.target.value);
//     }

//     const submitHandler = (event) => {
//         event.preventDefault();

//         const expenseData = {
//             title: enteredTitle,
//             amount: enteredAmount,
//             date: new Date(enteredDate)
//         }

//        // onSaveExpenseData(expenseData);
//     //    dispatch({
//     //     type: 'ADD_EXPENSE',
//     //     payload: expenseData
//     //    });

//         dispatch(expenseActions.addExpense(expenseData));

//         //dispatch(expenseActions.removeExpense());


//         setEnteredTitle('');
//         setEnteredAmount('');
//         setEnteredDate('');
//     }


//     return (
//         <form onSubmit={submitHandler}> 
//             <div className='new-expense__controls'>
//                 <div className='new-expense__control'>
//                     <label>Title</label>
//                     <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
//                 </div>
//                 <div className='new-expense__control'>
//                     <label>Amount</label>
//                     <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
//                 </div>
//                 <div className='new-expense__control'>
//                     <label>Date</label>
//                     <input type='date' min='2019-01-01' max='2028-12-31' value={enteredDate} onChange={dateChangeHandler} />
//                 </div>
//             </div>
//             <div className='new-expense__actions'>
//                 <button type='submit'>Add Expense</button>
//             </div>
//         </form>
//     )
// }


const ExpenseForm = (props) => {
    const dispatch = useDispatch();

    // Initialize React Hook Form
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        defaultValues: {
            title: '',
            amount: '',
            date: ''
        }
    });


    // Handle form submission
    const onSubmit = (data) => {
        const expenseData = {
            title: data.title,
            amount: parseFloat(data.amount),
            date: new Date(data.date)
        };

        dispatch(expenseActions.addExpense(expenseData));

        // Reset the form after submission
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        {...register('title', { required: 'Title is required' , 
                            minLength: {value: 3, message: 'Title must be at least 3 characters long'}
                        })}
                    />
                    {errors.title && <p className='error-message'>{errors.title.message}</p>}
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        {...register('amount', { required: 'Amount is required' , 
                            min: {value: 0.01, message: 'Amount must be at least 0.01'}
                        })}
                    />
                    {errors.amount && <p className='error-message'>{errors.amount.message}</p>}
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max='2028-12-31'
                        {...register('date', { required: 'Date is required' })}
                    />
                    {errors.date && <p className='error-message'>{errors.date.message}</p>}
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}


export default ExpenseForm;