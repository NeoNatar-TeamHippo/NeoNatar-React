import * as TYPES from './actionType';

const initialState = {
    errors: {},
    isAuthenticated: false,
    loading: false,
    token: null,
};
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPES.SET_AUTHENTICATED:
            localStorage.setItem('FBToken', payload);
            return { ...state, isAuthenticated: true, loading: false, token: payload };
        case TYPES.SET_UNAUTHENTICATED:
            localStorage.removeItem('FBToken');
            localStorage.removeItem('persist:root');
            return { ...state, isAuthenticated: false, loading: false, token: null };
        case TYPES.LOADING_UI:
            return { ...state, loading: true };
        case TYPES.SET_ERRORS:
            return { ...state, errors: payload, loading: false };
        case TYPES.CLEAR_ERRORS:
            return { ...state, errors: {}, loading: false };
        default:
            return state;
    }
};
