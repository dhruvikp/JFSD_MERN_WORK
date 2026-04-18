import { createContext, useReducer } from "react";
import { useState } from "react";

export const ExpenseContext = createContext({
    items: [],
    onSaveExpenseData: () => {}
});

function expenseReducer(state, action) {
    const updatedExpenses = [...state];

    if(action.type === 'ADD_EXPENSE') {
        const expenseData = {
            ...action.payload,
            id: Math.random().toString()
        };
        updatedExpenses.push(expenseData);
    }

    if(action.type === 'REMOVE_EXPENSE') {

    }
    return updatedExpenses;
}

export default function  ExpenseContextProvider({children}) {
    const DUMP_EXPENSES = [
    {id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14)},
    {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
    {id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
    {id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12)},
    ]

    // const [expenses, setExpenses] = useState(DUMP_EXPENSES);
    const [expenses, dispatch] = useReducer(expenseReducer, DUMP_EXPENSES);
    const addExpenseHandler = (expense) => {
        dispatch(
            {
                type: 'ADD_EXPENSE',
                payload: expense
            }
        );
    };

    return (
        <ExpenseContext.Provider value={{items: expenses, onSaveExpenseData: addExpenseHandler}}>
            {children}
        </ExpenseContext.Provider>
    )
}