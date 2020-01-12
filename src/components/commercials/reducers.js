import * as TYPES from './actionTypes';

const initialState = {
    commercials: [],
    loadingCommercials: false,
};
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPES.LOADING_COMMERCIAL:
            return { ...state, loadingCommercials: true };
        case TYPES.SET_COMMERCIALS:
            return { ...state, commercials: payload, loadingCommercials: false };
        case TYPES.DELETE_COMMERCIALS:
            return {
                ...state,
                commercials: state.commercials
                    .filter(commercial => commercial.commercialId !== payload),
                loadingCommercials: false,
            };
        default:
            return state;
    }
};
