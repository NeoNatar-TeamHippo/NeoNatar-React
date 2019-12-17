import * as TYPES from './actionType';

/**
 * Triggers request to load SAVED LOCATION
 *
 * @function
 * @return {void} The {@link actionTypes.LOADING_SAVED_LOCATION } action.
 */
export const loadingSavedLocation = () => ({
    type: TYPES.LOADING_SAVED_LOCATION,
});
/**
 * Triggers request to set SAVED LOCATION
 *
 * @function
 * @return {void} The {@link actionTypes.SET_SAVED_LOCATION } action.
 */
export const setSavedLocation = payload => ({
    payload,
    type: TYPES.SET_SAVED_LOCATION,
});
/**
 * Triggers request to set SAVED LOCATION BY ID
 *
 * @function
 * @return {void} The {@link actionTypes.SET_SAVED_LOCATION_BY_ID } action.
 */
export const setSavedLocationById = payload => ({
    payload,
    type: TYPES.SET_SAVED_LOCATION_BY_ID,
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
 * @return {void} The {@link actionTypes.GET_SAVED_LOCATIONS } action.
 */
export const getSavedLocations = () => ({
    type: TYPES.GET_SAVED_LOCATIONS,
});
/**
 * Triggers request to get all locations
 *
 * @function
 * @return {void} The {@link actionTypes.GET_SAVED_LOCATIONS_BY_ID } action.
 */
export const getSavedLocationsByID = payload => ({
    payload,
    type: TYPES.GET_SAVED_LOCATIONS_BY_ID,
});

