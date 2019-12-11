import * as TYPES from './actionType';

/**
 * Triggers request to load UI
 *
 * @function
 * @return {void} The {@link actionTypes.LOADING_UI } action.
 */
export const loadingUI = () => ({
    type: TYPES.LOADING_UI,
});
/**
 * Triggers request to set errors after a bad request
 *
 * @function
 * @return {void} The {@link actionTypes.SET_ERRORS } action.
 */
export const setErrors = payload => ({
    payload,
    type: TYPES.SET_ERRORS,
});
/**
 * Triggers request to clear errors after a success
 *
 * @function
 * @return {void} The {@link actionTypes.CLEAR_ERRORS } action.
 */
export const clearErrors = () => ({
    type: TYPES.CLEAR_ERRORS,
});
/**
 * Triggers request to set a user as authenticated
 *
 * @function
 * @return {void} The {@link actionTypes.SET_AUTHENTICATED } action.
 */
export const setAuthenticated = payload => ({
    payload,
    type: TYPES.SET_AUTHENTICATED,
});
/**
 * Triggers request to set a user as unauthenticated
 *
 * @function
 * @return {void} The {@link actionTypes.SET_UNAUTHENTICATED } action.
 */
export const setUnAuthenticated = payload => ({
    payload,
    type: TYPES.SET_UNAUTHENTICATED,
});
/**
 * Triggers request to set signin a user
 *
 * @function
 * @return {void} The {@link actionTypes.USER_SIGNIN } action.
 */
export const userSignIn = payload => ({
    payload,
    type: TYPES.USER_SIGNIN,
});

