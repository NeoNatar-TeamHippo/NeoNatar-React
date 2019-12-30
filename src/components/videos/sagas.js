import { takeLatest, put, all, call } from 'redux-saga/effects';

import { uploadVideos, updateVideos } from './actions';
import { REQUEST_VIDEOS, REQUEST_VIDEO_UPLOAD } from './actionTypes';
import { allVideos, postVideos } from './services';

/**
 * Handles requesting the list of videos from the database
 *
 * @return {Void} - void
 */
function* requestAllVideos() {
    try {
        const res = yield call(allVideos);
        console.log(res);
        if (res.status === 'success') {
            yield put(updateVideos(res.data));
        } else {
            // eslint-disable-next-line no-console
            console.log(res.message);
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log({ message: 'Something went wrong please try again' }, error);
    }
}

/**
 * Handles requesting to post videos to the backend
 *
 * @param {Object} action - the data sent from the action creator
 * @return {Void} - void
 */
function* requesVideoUpload(data) {
    try {
        const response = yield call(postVideos, data);
        console.log(response);
        console.log(data);
        if (response.status === 'success') {
            yield put(uploadVideos(response.data));
        } else {
            // eslint-disable-next-line no-console
            console.log(response.message);
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log({ message: 'Something went wrong please try again' }, error);
    }
}

/**
 * @function
 * Watches for the {@link actionTypes.REQUEST_VIDEOS REQUEST_VIDEOS} action.
 * Triggers request to pull the videos from database
 *
 * @return {void}
 */

function* watchRequestAllVideos() {
    yield takeLatest(REQUEST_VIDEOS, requestAllVideos);
}

/**
 * @function
 * Watches for the {@link actionTypes.REQUEST_ADD_USER REQUEST_ADD_USER} action.
 * Triggers request to update product item
 *
 * @return {void}
 */
function* watchRequesToUploadVideo() {
    yield takeLatest(REQUEST_VIDEO_UPLOAD, requesVideoUpload);
}

export default function* () {
    yield all([
        watchRequestAllVideos(),
        watchRequesToUploadVideo(),
    ]);
}
