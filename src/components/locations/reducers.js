import * as TYPES from './actionType';

const initialState = {
    locationLoading: false,
    locations: [],
};
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPES.LOADING_LOCATION:
            return { ...state, locationLoading: true };
        case TYPES.SET_LOCATION:
            return { ...state, locationLoading: false, locations: payload };
        default:
            return state;
    }
};
