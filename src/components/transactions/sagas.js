import { takeLatest, put, call } from 'redux-saga/effects';

import { updateTransactions } from './actions';
import { REQUEST_TRANSACTIONS } from './actionTypes';
import { allTransactions } from './services';

/**
 * Handles requesting the list of transactions from the database
 *
 * @return {Void} - void
 */
function* requestAllTransactions() {
    try {
        const res = yield call(allTransactions);
        if (res.status === 'success') {
            yield put(updateTransactions(res.data));
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
 * Watches for the {@link actionTypes.REQUEST_TRANSACTIONS REQUEST_TRANSACTIONS} action.
 * Triggers request to pull the videos from database
 *
 * @return {void}
 */

export default function* watchRequestAllTransactions() {
    yield takeLatest(REQUEST_TRANSACTIONS, requestAllTransactions);
}
