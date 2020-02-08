import * as TYPES from './actionType';

const initialState = {
    navLoading: false,
    notifications: [],
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
        case TYPES.ALL_NOTIFICATIONS:
            return { ...state, notifications: payload };
        case TYPES.CLEAR_NOTIFICATION:
            return { ...state, notifications: [] };
        default:
            return state;
    }
};
