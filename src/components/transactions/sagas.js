import { takeLatest, put, call } from 'redux-saga/effects';
import { updateTransactions, loadTransactions } from './actions';
import { REQUEST_TRANSACTIONS } from './actionTypes';
import { allTransactions } from './services';

/**
 * Handles requesting the list of transactions from the database
 *
 * @return {Void} - void
 */
function* requestAllTransactions() {
    try {
        yield put(loadTransactions());
        const res = yield call(allTransactions);
        console.log(res.data);
        if (res.status === 'success') {
            yield put(updateTransactions(res.data));
        } else {
            console.log(res.message);
        }
    } catch (error) {
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
