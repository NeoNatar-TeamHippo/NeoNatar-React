import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import * as TYPES from './actionType';
import { setErrors, loadingUI, setAuthenticated, setUnAuthenticated, clearErrors } from './actions';
import { signUpService } from './services';
import { loadingUser } from '../navbar/actions';

function* userSignUp(userData) {
    try {
        yield put(loadingUI());
        const res = yield call(signUpService, userData);
        if (res.status === 'success') {
            const authorization = `Bearer ${res.data}`;
            yield put(setAuthenticated(authorization));
            yield put(clearErrors());
            yield put(loadingUser(authorization));
            yield put(push('/signin'));
        } else {
            yield put(setErrors({ message: res.message }));
            yield put(setUnAuthenticated());
        }
    } catch (error) {
        yield put(setErrors({ message: 'Something went wrong please try again' }));
        yield put(setUnAuthenticated());
    }
}
function* postUserEffect({ payload }) {
    yield call(userSignUp, payload);
}
export default function* actionWatcher() {
    yield takeEvery(TYPES.USER_SIGNUP, postUserEffect);
}
