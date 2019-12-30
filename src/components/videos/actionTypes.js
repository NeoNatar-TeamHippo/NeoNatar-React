import { NAME } from './constants';

/**
 * Fired by the {@link actions.updateVideos updateVideos}
 * action creator.
 *
 * @type {Array}
 */

export const UPDATE_VIDEOS = 'UPDATE_VIDEOS';

/**
 * Fired by the {@link actions.requestVideos requestVideos}
 * action creator.
 *
 * @type {Array}
 */

export const REQUEST_VIDEOS = `${NAME}/REQUEST_VIDEOS`;

/**
 * Fired by the {@link actions.uploadVideos uploadVideos}
 * action creator.
 *
 * @type {Array}
 */

export const UPLOAD_VIDEOS = `${NAME}/UPLOAD_VIDEOS`;

/**
 * Fired by the {@link actions.requestVideoUpload requestVideoUpload}
 * action creator.
 *
 * @type {Array}
 */

export const REQUEST_VIDEO_UPLOAD = `${NAME}/REQUEST_VIDEO_UPLOAD`;
