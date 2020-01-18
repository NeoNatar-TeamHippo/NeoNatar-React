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
 * Triggers request to get all locations
 *
 * @function
 * @return {void} The {@link actionTypes.GET_LOCATIONS } action.
 */
export const getLocations = () => ({
    type: TYPES.GET_LOCATIONS,
});

/**
 * Triggers request to get all locations
 *
 * @function
 * @return {void} The {@link actionTypes.NEW_LOCATIONS } action.
 */
export const newLocations = payload => ({
    payload,
    type: TYPES.NEW_LOCATIONS,
});

