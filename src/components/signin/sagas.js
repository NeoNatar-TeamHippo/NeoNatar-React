import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import * as TYPES from './actionType';
import { loadingUI, setAuthenticated, clearErrors } from './actions';
import { signInService } from './services';

import { loadingUser } from '../navbar/actions';
import { openMessage } from '../utils/functions';

function* userSignIn(userData) {
    try {
        yield put(clearErrors());
        yield put(loadingUI());
        const res = yield call(signInService, userData);
        if (res.status === 'success') {
            const authorization = `Bearer ${res.data}`;
            localStorage.setItem('FBToken', authorization);
            yield put(setAuthenticated());
            yield put(loadingUser());
            yield put(push('/dashboard'));
        } else {
            yield put(clearErrors());
            yield put(openMessage(res.message, 5, 'error'));
        }
    } catch (error) {
        switch (error.status) {
            case 500:
                yield put(clearErrors());
                yield put(openMessage('Server error please try again', 5, 'error'));
                break;
            default:
                break;
        }
    }
}
function* postUserEffect({ payload }) {
    yield call(userSignIn, payload);
}

export default function* actionWatcher() {
    yield takeEvery(TYPES.USER_SIGNIN, postUserEffect);
}
