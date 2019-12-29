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
 * Fired by the {@link actions.requestCreateCommercials requestCreateCommercials}
 * action creator.
 *
 * @type {String}
 */

export const REQUEST_CREATE_COMMERCIALS = `${NAME}/REQUEST_CREATE_COMMERCIALS`;

/**
 * Fired by the {@link actions.throwError throwError}
 * action creator.
 *
 * @type {String}
 */

export const THROW_ERROR = `${NAME}/THROW_ERROR`;
