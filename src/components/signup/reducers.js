import * as TYPES from './actionType';

const initialState = {
    authenticated: false,
    errors: {},
    loading: false,
    token: '',
};
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPES.SET_AUTHENTICATED:
            localStorage.setItem('FBToken', payload);
            return { ...state, authenticated: true, loading: false, token: payload };
        case TYPES.SET_UNAUTHENTICATED:
            localStorage.removeItem('FBToken');
            return { ...state, authenticated: false, loading: false };
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
