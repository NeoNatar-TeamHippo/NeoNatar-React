import { UPDATE_TRANSACTIONS, REQUEST_TRANSACTIONS, LOAD_TRANSACTIONS } from './actionTypes';

/**
 * Triggers request to update transactions items
 *
 * @function
 * @param {Object} payload An array of Transactions
 * @return {void} The {@link actionTypes.UPDATE_TRANSACTIONS UPDATE_TRANSACTIONS} action.
 */
export const updateTransactions = payload => ({
    payload,
    type: UPDATE_TRANSACTIONS,
});

/**
 * Triggers request to retrieve all transactions from the database
 *
 * @function
 * @param {Array} payload An array of transactions
 * @return {void} The {@link actionTypes.REQUEST_TRANSACTIONS REQUEST_TRANSACTIONS} action.
 */
export const requestTransactions = () => ({
    type: REQUEST_TRANSACTIONS,
});

/**
 * Triggers request to load Commercial
 *
 * @function
 * @return {void} The {@link actionTypes.LOAD_TRANSACTIONS } action.
 */
export const loadTransactions = () => ({
    type: LOAD_TRANSACTIONS,
});
