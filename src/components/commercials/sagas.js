import { takeLatest, put, all } from 'redux-saga/effects';
import axios from 'axios';

import { createCommercials, updateCommercials } from './actions';
import { REQUEST_COMMERCIALS, REQUEST_CREATE_COMMERCIALS } from './actionTypes';
import { LOCATION_URL } from './constants';

/**
 * Handles requesting the list of commercials from the database
 *
 * @return {Void} - void
 */
function* requestAllCommercials() {
    try {
        const response = yield fetch(LOCATION_URL).then(res => res.json());

        const data = yield Object.keys(response.commercials).map(
            key => response.commercials[key]
        );

        const length = data.length - 1;

        if (data[length].id) {
            yield put(updateCommercials(data));
        } else {
            // eslint-disable-next-line no-console
            console.log('ERROR', data);
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
        yield axios({
            data: action.payload,
            method: 'post',
            url: LOCATION_URL,
        });

        yield put(createCommercials(action));
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
