import { takeEvery, put, call, fork } from 'redux-saga/effects';
import * as TYPES from './actionTypes';
import { updateTransactions, loadTransactions } from './actions';
import { REQUEST_TRANSACTIONS } from './actionTypes';
import { allTransactions } from './services';

/**
 * Handles requesting the list of videos from the database
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

function* getTicketsEffect({ payload }) {
    yield fork(requestAllTransactions, payload);
}

export default function* actionWatcher() {
    yield takeEvery(TYPES.REQUEST_TRANSACTIONS, getTicketsEffect);
}
