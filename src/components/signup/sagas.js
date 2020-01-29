import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import * as TYPES from './actionType';
import { setErrors, loadingUI, setAuthenticated, clearErrors } from './actions';
import { signUpService } from './services';

import { loadingUser } from '../navbar/actions';
import { openMessage } from '../utils/functions';

function* userSignUp(userData) {
    try {
        yield put(clearErrors());
        yield put(loadingUI());
        const res = yield call(signUpService, userData);
        if (res.status === 'success') {
            const authorization = `Bearer ${res.data}`;
            localStorage.setItem('FBToken', authorization);
            yield put(setAuthenticated());
            yield put(loadingUser());
            yield put(push('/signin'));
        } else {
            yield put(openMessage(res.message, 5, 'error'));
            yield put(setErrors({ message: res.message }));
        }
    } catch (error) {
        switch (error.status) {
            case 500:
                yield put(setErrors({ message: 'Server error please try again' }));
                break;
            default:
                yield put(setErrors({ message: 'Something went wrong please try again' }));
                break;
        }
    }
}

function* postUserEffect({ payload }) {
    yield call(userSignUp, payload);
}

export default function* actionWatcher() {
    yield takeEvery(TYPES.USER_SIGNUP, postUserEffect);
}
