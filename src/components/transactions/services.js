import { TRANSACTIONS_URL } from './constants';

export const allTransactions = async () => {
    const token = localStorage.getItem('FBToken');
    const parameters = {
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
        method: 'GET',
        mode: 'cors',
    };
    const response = await fetch(TRANSACTIONS_URL, parameters);
    const data = await response.json();

    return data;
};
