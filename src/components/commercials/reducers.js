import * as TYPES from './actionTypes';

const initialState = {
    commercials: [],
    isCommercialsLoading: false,
    visible: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPES.LOADING_COMMERCIAL:
            return {
                ...state,
                isCommercialsLoading: true,
            };
        case TYPES.SET_COMMERCIALS:
            return {
                ...state,
                commercials: payload,
                isCommercialsLoading: false,
            };
        case TYPES.DELETE_COMMERCIALS: {
            const { commercials } = state;

            return {
                ...state,
                commercials: commercials.filter(
                    commercial => commercial.id !== payload
                ),
                isCommercialsLoading: true,
            };
        }
        case TYPES.SET_VISIBLE: {
            return {
                ...state, visible: payload,
            };
        }
        default:
            return state;
    }
};
