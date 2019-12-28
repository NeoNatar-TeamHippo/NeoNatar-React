import {
    UPDATE_COMMERCIALS,
    REQUEST_COMMERCIALS,
    CREATE_COMMERCIALS,
    RESET_COMMERCIALS_STATE,
    REQUEST_CREATE_COMMERCIALS,
    THROW_ERROR,
} from './actionTypes';

/**
 * Triggers request to update commercials items
 *
 * @function
 * @param {Object} payload An array of commercials
 * @return {void} The {@link actionTypes.UPDATE_COMMERCIALS UPDATE_COMMERCIALS} action.
 */
export const updateCommercials = payload => ({
    payload,
    type: UPDATE_COMMERCIALS,
});

/**
 * Triggers request to retrieve all commercials from the database
 *
 * @function
 * @param {Object} payload An array of commercials
 * @return {void} The {@link actionTypes.REQUEST_COMMERCIALS REQUEST_COMMERCIALS} action.
 */
export const requestCommercials = payload => ({
    payload,
    type: REQUEST_COMMERCIALS,
});

/**
 * Triggers request to create a commercial
 *
 * @function
 * @param {Object} payload An object of captured commercials
 * @return {void} The {@link actionTypes.CREATE_COMMERCIALS CREATE_COMMERCIALS} action.
 */
export const createCommercials = payload => ({
    payload,
    type: CREATE_COMMERCIALS,
});

/**
 * Triggers request to reset commercials state
 *
 * @function
 * @param {Object} payload An object of captured commercials
 * @return {void} The {@link actionTypes.RESET_COMMERCIALS_STATE RESET_COMMERCIALS_STATE} action.
 */
export const resetCommercialsState = () => ({
    type: RESET_COMMERCIALS_STATE,
});

/**
 * Triggers request to update commercials item details in the database
 *
 * @function
 *
 * @param {Object} payload - the data sent with the action
 * @return {Object} The {@link actionTypes.REQUEST_CREATE_COMMERCIALS REQUEST_CREATE_COMMERCIALS}
 * action.
 */
export const requestCreateCommercials = payload => ({
    payload,
    type: REQUEST_CREATE_COMMERCIALS,
});

/**
 * Triggers request to update commercials item details in the database
 *
 * @function
 *
 * @param {Object} payload - the data sent with the action
 * @return {Object} The {@link actionTypes.THROW_ERROR THROW_ERROR}
 * action.
 */
export const throwError = payload => ({
    payload,
    type: THROW_ERROR,
});
