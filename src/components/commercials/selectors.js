import { NAME } from './constants';

/**
 * Selects the <tt>user</tt> key.
 *
 * @function
 * @param {Array} state - redux store state
 * @return {Number} the state data of the user table which contains user data
 * {@link module:commercials/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getCommercials = state => state[NAME].commercials;

