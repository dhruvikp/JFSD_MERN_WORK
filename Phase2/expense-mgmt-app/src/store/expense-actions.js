import { expenseActions } from './index';

export const sendExpenseData = (expenseData) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const response = await fetch('https://expensemanagement-75c65-default-rtdb.firebaseio.com/expenses.json', {
                method: 'PUT',
                body: JSON.stringify(expenseData),
            });

            if(!response.ok) {
                throw new Error('Sending expense data failed!');
            }
        };

        try {
            await sendRequest();
        } catch (error) {
            console.log(error);
        }
    };
};


export const fetchExpenseData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://expensemanagement-75c65-default-rtdb.firebaseio.com/expenses.json');

            if(!response.ok) {
                throw new Error('Fetching expense data failed!');
            }

            const data = await response.json();
            return data;
        };

        try {
            const expenseData = await fetchData();
            console.log("Fetched expense data: ", expenseData);

            // Convert date string back to Date objects

            if(expenseData && expenseData.items) {
                expenseData.items = expenseData.items.map(expense => ({
                    ...expense,
                    date: new Date(expense.date)
                }));
            }
            dispatch(expenseActions.replaceExpense(expenseData));   
        } catch (error) {
            console.log(error);
        }
    };
};
