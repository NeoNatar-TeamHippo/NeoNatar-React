import {
    DELETE_VIDEO,
    UPDATE_VIDEOS,
    REQUEST_VIDEOS,
    UPLOAD_VIDEOS,
    REQUEST_VIDEO_UPLOAD,
    REQUEST_DELETE_VIDEO
} from './actionTypes';

/**
 * Triggers request to update videos items
 *
 * @function
 * @param {Object} payload An array of videos
 * @return {void} The {@link actionTypes.UPDATE_VIDEOS UPDATE_VIDEOS} action.
 */
export const updateVideos = payload => ({
    payload,
    type: UPDATE_VIDEOS,
});

/**
 * Triggers request to retrieve all videos from the database
 *
 * @function
 * @param {Object} payload An array of videos
 * @return {void} The {@link actionTypes.REQUEST_VIDEOS REQUEST_VIDEOS} action.
 */
export const requestVideos = payload => ({
    payload,
    type: REQUEST_VIDEOS,
});

/**
 * Triggers request to upload a video
 *
 * @function
 * @param {Object} payload An object of captured videos
 * @return {void} The {@link actionTypes.UPLOAD_VIDEOS UPLOAD_VIDEOS} action.
 */
export const uploadVideos = payload => ({
    payload,
    type: UPLOAD_VIDEOS,
});

/**
 * Triggers request to update videos item details in the database
 *
 * @function
 *
 * @param {Object} payload - the data sent with the action
 * @return {Object} The {@link actionTypes.REQUEST_VIDEO_UPLOAD REQUEST_VIDEO_UPLOAD}
 * action.
 */
export const requestVideoUpload = payload => ({
    payload,
    type: REQUEST_VIDEO_UPLOAD,
});

/**
 * Triggers request to delete videos item
 *
 * @function
 *
 * @param {Object} payload - the data sent with the action
 * @return {Object} The {@link actionTypes.DELETE_VIDEO DELETE_VIDEO}
 * action.
 */
export const deleteVideo = payload => ({
    payload,
    type: DELETE_VIDEO,
});

/**
 * Triggers request to delete video item details in the database
 *
 * @function
 *
 * @param {Object} payload - the data sent with the action
 * @return {Object} The {@link actionTypes.REQUEST_DELETE_VIDEO REQUEST_DELETE_VIDEO}
 * action.
 */
export const requestDeleteVideo = payload => ({
    payload,
    type: REQUEST_DELETE_VIDEO,
});
