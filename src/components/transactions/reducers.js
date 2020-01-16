import { UPDATE_TRANSACTIONS, LOAD_TRANSACTIONS } from './actionTypes';

const initialState = {
    isTransactionsLoading: false,
    transactions: [],
};
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_TRANSACTIONS:
            return { ...state, isTransactionsLoading: true };
        case UPDATE_TRANSACTIONS:
            return { ...state, transactions: payload, isTransactionsLoading: false };
        default:
            return state;
    }
};
