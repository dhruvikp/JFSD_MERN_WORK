import {createSlice, configureStore} from '@reduxjs/toolkit'


const DUMP_EXPENSES = [
    {id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14)},
    {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
    {id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
    {id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12)},
    ]

const initialState = {items: DUMP_EXPENSES} 

const expenseSlice = createSlice({
    name : 'expense',
    initialState : initialState,
    reducers: {
        addExpense(state, action) {
            const expenseData = {
                ...action.payload,
                id: Math.random().toString
            };
            state.items.push(expenseData);
        },
        removeExpense() {},
        replaceExpense(state, action) {
            state.items = action.payload.items || action.payload ;
        }
    }
});

const expenseStore = configureStore({
    reducer: expenseSlice.reducer
});

export const expenseActions = expenseSlice.actions;
export default expenseStore;