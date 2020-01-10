import { takeLatest, put, all, call } from 'redux-saga/effects';
import { deleteCommercialRequest, setCommercial, loadingCommercial } from './actions';
import { getCommercialService, postCommercialService, deleteCommercialById } from './services';
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
        if (res.status === 'success') {
            yield put(setCommercial(res.data));
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

function* postNewCommercial(data) {
    try {
        yield put(loadingCommercial());
        const res = yield call(postCommercialService, data);
        if (res.status === 'success') {
            yield call(requestAllCommercials);
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
function* requestDeleteCommercialById(id) {
    try {
        yield put(loadingCommercial());
        const res = yield call(deleteCommercialById, id);
        if (res.status === 'success') {
            yield put(deleteCommercialRequest(id.payload));
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
