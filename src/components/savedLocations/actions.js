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
 * Triggers request to get all locations
 *
 * @function
 * @return {void} The {@link actionTypes.GET_SAVED_LOCATIONS } action.
 */
export const getSavedLocations = payload => ({
    payload,
    type: TYPES.GET_SAVED_LOCATIONS,
});

/**
 * Triggers request to delete location by id
 *
 * @function
 * @return {void} The {@link actionTypes.DELETE_SAVED_LOCATION } action.
 */
export const deleteSavedLocationByID = payload => ({
    payload,
    type: TYPES.DELETE_SAVED_LOCATION,
});
/**
 * Triggers request to add a new saved list
 *
 * @function
 * @return {void} The {@link actionTypes.NEW_SAVED_LOCATION } action.
 */
export const newSavedLocation = payload => ({
    payload,
    type: TYPES.NEW_SAVED_LOCATION,
});
/**
 * Triggers request to add a new saved list
 *
 * @function
 * @return {void} The {@link actionTypes.SAVED_LOCATION_RESULT } action.
 */
export const savedLocationResult = payload => ({
    payload,
    type: TYPES.SAVED_LOCATION_RESULT,
});
/**
 * Triggers request to delete a saved list
 *
 * @function
 * @return {void} The {@link actionTypes.DELETE_LOCATION_RESULT } action.
 */
export const deleteLocationResult = payload => ({
    payload,
    type: TYPES.DELETE_LOCATION_RESULT,
});
/**
 * Triggers request to add a new location list
 *
 * @function
 * @return {void} The {@link actionTypes.ADD_SAVED_LOCATION } action.
 */
export const addLocation = payload => ({
    payload,
    type: TYPES.ADD_SAVED_LOCATION,
});
/**
 * Triggers request to remove location list
 *
 * @function
 * @return {void} The {@link actionTypes.LOCATION_OPERATION } action.
 */
export const locationOperation = payload => ({
    payload,
    type: TYPES.LOCATION_OPERATION,
});
/**
 * Triggers request to remove location list
 *
 * @function
 * @return {void} The {@link actionTypes.SUBMITTING_FORM } action.
 */
export const submittingForm = payload => ({
    payload,
    type: TYPES.SUBMITTING_FORM,
});
/**
 * Triggers request to remove location list
 *
 * @function
 * @return {void} The {@link actionTypes.SUBMITED_FORM } action.
 */
export const submitedForm = payload => ({
    payload,
    type: TYPES.SUBMITED_FORM,
});

