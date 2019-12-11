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
 * Triggers request to load UI
 *
 * @function
 * @return {void} The {@link actionTypes.LOADING_USER } action.
 */
export const loadingUser = () => ({
    type: TYPES.LOADING_USER,
});
/**
 * Triggers request to set user
 *
 * @function
 * @return {void} The {@link actionTypes.SET_USER } action.
 */
export const setUser = payload => ({
    payload,
    type: TYPES.SET_USER,
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

