import {
    SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_AUTHENTICATED, SET_UNAUTHENTICATED
} from './actionType';

const initialState = {
    authenticated: false,
    errors: {},
    loading: false,
    token: '',
    user: {},
};
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_USER:
            return { ...state, loading: false, user: payload };
        case SET_AUTHENTICATED:
            localStorage.setItem('FBToken', payload);
            return { ...state, authenticated: true, loading: false, token: payload };
        case SET_UNAUTHENTICATED:
            localStorage.removeItem('FBToken');
            return { ...state, authenticated: false, loading: false };
        case LOADING_UI:
            return { ...state, loading: true };
        case SET_ERRORS:
            return { ...state, errors: payload, loading: false };
        case CLEAR_ERRORS:
            return { ...state, errors: {}, loading: false };
        default:
            return state;
    }
};
