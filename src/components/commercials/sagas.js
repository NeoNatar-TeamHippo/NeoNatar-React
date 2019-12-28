import { takeLatest, put, all, call } from 'redux-saga/effects';

import { createCommercials, updateCommercials, throwError } from './actions';
import { REQUEST_COMMERCIALS, REQUEST_CREATE_COMMERCIALS } from './actionTypes';
import { allCommercials, postCommercials } from './services';

/**
 * Handles requesting the list of commercials from the database
 *
 * @return {Void} - void
 */
function* requestAllCommercials() {
    try {
        const res = yield call(allCommercials);
        if (res.status === 'success') {
            yield put(updateCommercials(res.data));
        } else {
            yield put(throwError(res.message));
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

/**
 * Handles requesting commercials updates to the backend
 *
 * @param {Object} action - the data sent from the action creator
 * @return {Void} - void
 */
function* requestCreateCommercials(data) {
    try {
        const response = yield call(postCommercials, data);
        console.log(response);
        if (response.status === 'success') {
            yield put(createCommercials(response.data));
        } else {
            // eslint-disable-next-line no-console
            console.log('ERROR', { message: 'Something went wrong please try again' });
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

/**
 * @function
 * Watches for the {@link actionTypes.REQUEST_COMMERCIALS REQUEST_COMMERCIALS} action.
 * Triggers request to pull the commercials from database
 *
 * @return {void}
 */

function* watchRequestAllCommercials() {
    try {
        yield takeLatest(REQUEST_COMMERCIALS, requestAllCommercials);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

/**
 * @function
 * Watches for the {@link actionTypes.REQUEST_ADD_USER REQUEST_ADD_USER} action.
 * Triggers request to update product item
 *
 * @return {void}
 */
function* watchRequestCreateCommercials() {
    try {
        yield takeLatest(REQUEST_CREATE_COMMERCIALS, requestCreateCommercials);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

export default function* () {
    yield all([
        watchRequestAllCommercials(),
        watchRequestCreateCommercials(),
    ]);
}
