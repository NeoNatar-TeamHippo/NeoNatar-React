import {
    SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_AUTHENTICATED, SET_UNAUTHENTICATED,
    USER_SIGNUP
} from './actionType';

export const loadingUI = () => ({
    type: LOADING_UI,
});
export const setUser = payload => ({
    payload,
    type: SET_USER,
});
export const setErrors = payload => ({
    payload,
    type: SET_ERRORS,
});
export const clearErrors = () => ({
    type: CLEAR_ERRORS,
});
export const setAuthenticated = payload => ({
    payload,
    type: SET_AUTHENTICATED,
});
export const setUnAuthenticated = payload => ({
    payload,
    type: SET_UNAUTHENTICATED,
});
export const userSignUp = (payload, history) => ({
    history,
    payload,
    type: USER_SIGNUP,
});

