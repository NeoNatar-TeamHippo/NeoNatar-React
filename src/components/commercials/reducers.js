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
            return { ...state, loadingCommercials: false, commercials: payload };
        case TYPES.DELETE_COMMERCIALS:
            return {
                ...state,
                loadingCommercials: false,
                commercials: state.commercials
                    .filter(commercial => commercial.commercialId !== payload),
            };
        default:
            return state;
    }
};
