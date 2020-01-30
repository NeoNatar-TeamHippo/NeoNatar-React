import * as TYPES from './actionType';

const initialState = {
    formLoading: false,
    savedLocationLoading: false,
    savedLocations: [],
};
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPES.LOADING_SAVED_LOCATION:
            return { ...state, savedLocationLoading: true };
        case TYPES.SET_SAVED_LOCATION:
            return { ...state, savedLocationLoading: false, savedLocations: payload };
        case TYPES.SAVED_LOCATION_RESULT:
            return {
                ...state,
                savedLocations: [...state.savedLocations, ...[payload]],
            };
        case TYPES.DELETE_LOCATION_RESULT:
            return {
                ...state,
                savedLocations: state.savedLocations
                    .filter(savedLocation => savedLocation.savedLocationId !== payload),
            };
        case TYPES.SUBMITTING_FORM:
            return { ...state, formLoading: true };
        case TYPES.SUBMITED_FORM:
            return { ...state, formLoading: false };
        default:
            return state;
    }
};
