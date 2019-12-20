import { takeLatest, call, put, all } from 'redux-saga/effects';

import { createCommercials, updateCommercials } from './actions';
import { REQUEST_COMMERCIALS, REQUEST_CREATE_COMMERCIALS } from './actionTypes';
import { allCommercials, addCommercialsService } from './services';

/**
 * Handles requesting the list of commercials from the database
 *
 * @return {Void} - void
 */

function* requestAllCommercials() {
    try {
        const res = yield call(allCommercials);
        const payload = yield Object.keys(res.data).map(
            key => res.data[key]
        );

        const length = payload.length - 1;

        if (payload[length].id) {
            yield put(updateCommercials(payload));
        } else {
            // eslint-disable-next-line no-console
            console.log('ERROR', { message: res.message });
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
function* requestCreateCommercials(action) {
    try {
        const res = yield call(addCommercialsService, action.payload);
        if (res.status === 'success') {
            // const authorization = `Bearer ${res.data}`;
            // yield put(setAuthenticated(authorization));
            yield put(createCommercials(res.data));
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
 * Triggers request to pull the users from database
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
