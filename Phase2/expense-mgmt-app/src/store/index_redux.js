import {createStore} from 'redux';

const DUMP_EXPENSES = [
    {id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14)},
    {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
    {id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
    {id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12)},
    ]


const expenseReducer = (state = {items: DUMP_EXPENSES}, action) => {
    
    const udpatedExpenses = [...state.items]

    if(action.type === 'ADD_EXPENSE') {
        const expenseData = {
            ...action.payload,
            id: Math.random().toString()
        };

        udpatedExpenses.push(expenseData);

        return {items: udpatedExpenses}
    } 

    if(action.type === 'REMOVE_EXPENSE') {

    }
    return state;
};

const expenseStore = createStore(expenseReducer);

export default expenseStore;