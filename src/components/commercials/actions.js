import {
    UPDATE_COMMERCIALS,
    REQUEST_COMMERCIALS,
    CREATE_COMMERCIALS,
    REQUEST_CREATE_COMMERCIALS
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
