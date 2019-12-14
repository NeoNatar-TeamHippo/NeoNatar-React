import { UPDATE_COMMERCIALS } from './actionTypes';

const initialState = {
    commercials: [],
};

export default (state = { ...initialState }, action) => {
    switch (action.type) {
        case UPDATE_COMMERCIALS: {
            return {
                ...state,
            };
        }

        default:
            return state;
    }
};
