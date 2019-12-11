import * as TYPES from './actionType';

const initialState = {
    errors: {},
    loading: false,
    user: {},
};
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPES.SET_USER:
            console.log(payload, 'user reducer');
            return { ...state, loading: false, user: payload };
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
