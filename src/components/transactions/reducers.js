import { UPDATE_TRANSACTIONS } from './actionTypes';

const initialState = {
    transactions: [],
};

export default (state = { ...initialState }, action) => {
    switch (action.type) {
        case UPDATE_TRANSACTIONS: {
            const { payload: transactions } = action;
            return {
                ...state,
                transactions: [...transactions],
            };
        }

        default:
            return state;
    }
};
