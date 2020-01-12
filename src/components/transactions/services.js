import { TRANSACTIONS_URL } from './constants';

export const allTransactions = () => {
    const token = localStorage.getItem('FBToken');
    const parameters = {
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
        method: 'GET',
        mode: 'cors',
    };
    return fetch(TRANSACTIONS_URL, parameters)
        .then(response => response.json())
        .then(json => json);
};
