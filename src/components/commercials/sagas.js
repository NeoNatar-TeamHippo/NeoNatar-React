import { takeLatest, put, all } from 'redux-saga/effects';

import { createCommercials, updateCommercials } from './actions';
import { REQUEST_COMMERCIALS, REQUEST_CREATE_COMMERCIALS } from './actionTypes';
import { COMMERCIALS_URL } from './constants';

/**
 * Handles requesting the list of commercials from the database
 *
 * @return {Void} - void
 */

function* requestAllCommercials() {
    const token = localStorage.getItem('FBToken');
    try {
        const parameters = {
            headers: {
                Authorization: token,
                'Content-Type': 'application/json',
            },
            method: 'GET',
            mode: 'cors',
        };
        const response = yield fetch(COMMERCIALS_URL, parameters)
            .then(res => res.json());

        const payload = yield Object.keys(response.data).map(
            key => response.data[key]
        );

        const length = payload.length - 1;

        if (payload[length].id) {
            yield put(updateCommercials(payload));
        } else {
            // eslint-disable-next-line no-console
            console.log('ERROR', { message: response.message });
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
    const token = localStorage.getItem('FBToken');
    const { payload } = action;
    try {
        const parameters = {
            body: JSON.stringify(payload),
            headers: {
                Authorization: token,
                'Content-Type': 'application/json',
            },
            method: 'POST',
            mode: 'cors',
        };
        const response = yield fetch(COMMERCIALS_URL, parameters)
            .then(res => res.json());

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
