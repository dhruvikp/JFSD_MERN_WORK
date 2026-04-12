import { createContext } from "react";
import { useState } from "react";

export const ExpenseContext = createContext({
    items: [],
    onSaveExpenseData: () => {}
});

export default function  ExpenseContextProvider({children}) {
    const DUMP_EXPENSES = [
    {id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14)},
    {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
    {id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
    {id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12)},
    ]

    const [expenses, setExpenses] = useState(DUMP_EXPENSES);

    const addExpenseHandler = (expense) => {

        const expenseData = {
        ...expense,
        id: Math.random().toString()
        };
        
        setExpenses((prevExpenses) => {
        return [...prevExpenses, expenseData];
        });
    };

    return (
        <ExpenseContext.Provider value={{items: expenses, onSaveExpenseData: addExpenseHandler}}>
            {children}
        </ExpenseContext.Provider>
    )
}