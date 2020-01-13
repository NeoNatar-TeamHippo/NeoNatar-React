import { LOADING_COMMERCIAL, SET_COMMERCIALS, DELETE_COMMERCIALS } from './actionTypes';

const initialState = {
    commercials: [],
    isCommercialDeleted: false,
    isCommercialsLoading: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case LOADING_COMMERCIAL:
            return {
                ...state,
                isCommercialDeleted: false,
                isCommercialsLoading: true,
            };
        case SET_COMMERCIALS:
            return {
                ...state,
                commercials: payload,
                isCommercialDeleted: false,
                isCommercialsLoading: false,
            };
        case DELETE_COMMERCIALS: {
            const { commercials } = state;

            return {
                ...state,
                commercials: commercials.filter(
                    commercial => commercial.commercialId !== payload
                ),
                isCommercialDeleted: true,
                isCommercialsLoading: true,
            };
        }
        default:
            return state;
    }
};
