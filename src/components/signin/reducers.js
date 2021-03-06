import * as TYPES from './actionType';

const initialState = {
    authenticated: false,
    loading: false,
};

export default (state = initialState, { type }) => {
    switch (type) {
        case TYPES.SET_AUTHENTICATED:
            return { ...state, authenticated: true, loading: false };
        case TYPES.SET_UNAUTHENTICATED:
            localStorage.removeItem('FBToken');
            return { ...state, authenticated: false, error: {}, loading: false };
        case TYPES.LOADING_UI:
            return { ...state, loading: true };
        case TYPES.CLEAR_ERRORS:
            return { ...state, loading: false };
        case TYPES.AUTH_TRUE:
            return { ...state, authenticated: true };
        default:
            return state;
    }
};
