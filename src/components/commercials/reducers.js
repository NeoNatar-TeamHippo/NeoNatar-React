import { CREATE_COMMERCIALS, UPDATE_COMMERCIALS, RESET_COMMERCIALS_STATE } from './actionTypes';

const initialState = {
    commercials: [],
    isCommercialsCreated: false,
};

const addCommercials = (items, newItem) => {
    items.push(newItem);
    return items;
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
            const { users } = state;
            const { payload: item } = action;
            return {
                ...state,
                isCommercialsCreated: true,
                users: addCommercials(users, item),
            };
        }

        case RESET_COMMERCIALS_STATE: {
            return {
                ...state,
                isCommercialsCreated: false,
            };
        }
        default:
            return state;
    }
};
