import { takeLatest, put, all, call } from 'redux-saga/effects';
import { deleteCommercialRequest, setCommercial, loadingCommercial } from './actions';
import {
    postCommercialService, deleteCommercialById, getCommercialService
} from './services';
import { openNotification } from '../utils/functions';
import { next, setVideoDetails, setCommercialId, setDuration } from '../campaigns/actions';

import { GET_COMMERCIALS, POST_COMMERCIALS, REMOVE_COMMERCIALS } from './actionTypes';

/**
 * Handles requesting the list of videos from the database
 *
 * @return {Void} - void
 */
function* requestAllCommercials() {
    try {
        yield put(loadingCommercial());
        const res = yield call(getCommercialService);
        console.log(res.data);
        if (res.status === 'success') {
            yield put(setCommercial(res.data));
        } else {
            console.error(res.message);
        }
    } catch (error) {
        console.error(error);
    }
}

/**
 * Handles requesting to post videos to the backend
 *
 * @param {Object} action - the data sent from the action creator
 * @return {Void} - void
 */

function* postNewCommercial(data) {
    try {
        yield put(loadingCommercial());
        const res = yield call(postCommercialService, data);
        if (res.status === 'success') {
            yield put(next());
            openNotification('Uploaded successfully', 'Video', 'success');
            const videoDetails = {
                title: res.data.title,
                url: res.data.url,
            };
            yield put(setCommercialId(res.data.id));
            yield put(setDuration(res.data.duration));
            yield put(setVideoDetails(videoDetails));
            yield call(requestAllCommercials);
        } else {
            console.log(res.message);
        }
    } catch (error) {
        console.error(error);
    }
}

/**
 * Handles requesting to post videos to the backend
 *
 * @param {Object} action - the data sent from the action creator
 * @return {Void} - void
 */
function* requestDeleteCommercialById({ payload }) {
    try {
        yield put(loadingCommercial());
        const res = yield call(deleteCommercialById, payload);
        if (res.status === 'success') {
            yield put(deleteCommercialRequest(payload));
        } else {
            console.log(res.message);
        }
    } catch (error) {
        console.error(error);
    }
}

/**
 * @function
 * Watches for the {@link actionTypes.REQUEST_VIDEOS REQUEST_VIDEOS} action.
 * Triggers request to pull the videos from database
 *
 * @return {void}
 */

function* watchRequestAllCommercials() {
    yield takeLatest(GET_COMMERCIALS, requestAllCommercials);
}

/**
 * @function
 * Watches for the {@link actionTypes.REQUEST_VIDEO_UPLOAD REQUEST_VIDEO_UPLOAD} action.
 * Triggers request to update product item
 *
 * @return {void}
 */
function* watchRequestToPostNewCommercial() {
    yield takeLatest(POST_COMMERCIALS, postNewCommercial);
}

/**
 * @function
 * Watches for the {@link actionTypes.REQUEST_ADD_USER REQUEST_ADD_USER} action.
 * Triggers request to update product item
 *
 * @return {void}
 */
function* watchRequesToDeleteCommercial() {
    yield takeLatest(REMOVE_COMMERCIALS, requestDeleteCommercialById);
}

export default function* () {
    yield all([
        watchRequestAllCommercials(),
        watchRequestToPostNewCommercial(),
        watchRequesToDeleteCommercial(),
    ]);
}
