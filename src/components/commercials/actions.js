import { UPDATE_COMMERCIALS } from './actionTypes';

/**
 * Triggers request to update users items
 *
 * @function
 * @param {Object} payload An array of commercials
 * @return {void} The {@link actionTypes.UPDATE_COMMERCIALS UPDATE_COMMERCIALS} action.
 */
export const updateCommercials = payload => ({
    payload,
    type: UPDATE_COMMERCIALS,
});
