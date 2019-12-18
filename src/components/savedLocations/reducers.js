import * as TYPES from './actionType';

const initialState = {
    errors: {},
    formLoading: false,
    savedLocationById: {},
    savedLocationLoading: false,
    savedLocations: [],
};
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPES.LOADING_SAVED_LOCATION:
            return { ...state, savedLocationLoading: true };
        case TYPES.SET_SAVED_LOCATION:
            return { ...state, savedLocationLoading: false, savedLocations: payload };
        case TYPES.SET_SAVED_LOCATION_BY_ID:
            return { ...state, savedLocationById: payload, savedLocationLoading: false };
        case TYPES.SET_ERRORS:
            return { ...state, errors: payload, savedLocationLoading: false };
        case TYPES.CLEAR_ERRORS:
            return { ...state, errors: {}, savedLocationLoading: false };
        case TYPES.SUBMITTING_FORM:
            return { ...state, formLoading: true };
        case TYPES.SUBMITED_FORM:
            return { ...state, formLoading: false };
        default:
            return state;
    }
};
