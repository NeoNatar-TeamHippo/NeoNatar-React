import {
    CREATE_COMMERCIALS,
    UPDATE_COMMERCIALS,
    THROW_ERROR
} from './actionTypes';

const initialState = {
    commercials: [],
    errorMessage: null,
    isCommercialsCreated: false,
};

export default (state = { ...initialState }, action) => {
    switch (action.type) {
        case UPDATE_COMMERCIALS: {
            const { payload: newCommercials } = action;
            return {
                ...state,
                commercials: [...newCommercials],
                isCommercialsCreated: false,
            };
        }

        case CREATE_COMMERCIALS: {
            const { commercials } = state;
            const { payload: item } = action;
            return {
                ...state,
                commercials: [...item, ...commercials],
                isCommercialsCreated: true,
            };
        }

        case THROW_ERROR: {
            const { payload: errorInfo } = action;
            return {
                ...state,
                errorMessage: errorInfo,
            };
        }

        default:
            return state;
    }
};
