import * as TYPES from './actionType';

const initialState = {
    errors: {},
    locationById: {},
    locationLoading: false,
    locations: [],
};
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPES.LOADING_LOCATION:
            return { ...state, locationLoading: true };
        case TYPES.SET_LOCATION:
            return { ...state, location: payload, locationLoading: false };
        case TYPES.SET_LOCATION_BY_ID:
            return { ...state, locationById: payload, locationLoading: false };
        case TYPES.SET_ERRORS:
            return { ...state, errors: payload, locationLoading: true };
        case TYPES.CLEAR_ERRORS:
            return { ...state, errors: {}, locationLoading: true };
        default:
            return state;
    }
};
