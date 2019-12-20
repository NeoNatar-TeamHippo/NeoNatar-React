import { NAME } from './constants';

/**
 * Fired by the {@link actions.updateCommercials updateCommercials}
 * action creator.
 *
 * @type {Array}
 */

export const UPDATE_COMMERCIALS = 'UPDATE_COMMERCIALS';

/**
 * Fired by the {@link actions.requestCommercials requestCommercials}
 * action creator.
 *
 * @type {Array}
 */

export const REQUEST_COMMERCIALS = `${NAME}/REQUEST_COMMERCIALS`;

/**
 * Fired by the {@link actions.createCommercials createCommercials}
 * action creator.
 *
 * @type {String}
 */

export const CREATE_COMMERCIALS = `${NAME}/CREATE_COMMERCIALS`;

/**
 * Fired by the {@link actions.resetCommercialsState resetCommercialsState}
 * action creator.
 *
 * @type {String}
 */

export const RESET_COMMERCIALS_STATE = `${NAME}/RESET_COMMERCIALS_STATE`;

/**
 * Fired by the {@link actions.requestCreateCommercials requestCreateCommercials}
 * action creator.
 *
 * @type {String}
 */

export const REQUEST_CREATE_COMMERCIALS = `${NAME}/REQUEST_CREATE_COMMERCIALS`;
