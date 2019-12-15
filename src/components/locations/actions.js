import * as TYPES from './actionType';

/**
 * Triggers request to load LOCATION
 *
 * @function
 * @return {void} The {@link actionTypes.LOADING_LOCATION } action.
 */
export const loadingLocation = () => ({
    type: TYPES.LOADING_LOCATION,
});
/**
 * Triggers request to set LOCATION
 *
 * @function
 * @return {void} The {@link actionTypes.SET_LOCATION } action.
 */
export const setLocation = payload => ({
    payload,
    type: TYPES.SET_LOCATION,
});
/**
 * Triggers request to set LOCATION
 *
 * @function
 * @return {void} The {@link actionTypes.SET_LOCATION_BY_ID } action.
 */
export const setLocationById = payload => ({
    payload,
    type: TYPES.SET_LOCATION_BY_ID,
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
 * Triggers request to get all locations
 *
 * @function
 * @return {void} The {@link actionTypes.GET_LOCATIONS } action.
 */
export const getLocations = () => ({
    type: TYPES.GET_LOCATIONS,
});

