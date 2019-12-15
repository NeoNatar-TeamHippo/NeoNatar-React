import * as TYPES from './actionType';

const initialState = {
    navLoading: false,
    user: {},
};
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPES.SET_USER:
            return { ...state, navLoading: false, user: payload };
        case TYPES.LOGOUT_USER:
            return { ...state, navLoading: false, user: {} };
        case TYPES.LOADING_NAVBAR:
            return { ...state, navLoading: true };
        default:
            return state;
    }
};
