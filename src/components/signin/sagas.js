import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import * as TYPES from './actionType';
import { setErrors, loadingUI, setAuthenticated, setUnAuthenticated, clearErrors } from './actions';
import { signInService } from './services';

function* userSignIn(userData) {
    try {
        yield put(loadingUI());
        const res = yield call(signInService, userData);
        if (res.status === 'success') {
            const authorization = `Bearer ${res.data}`;
            yield put(setAuthenticated(authorization));
            yield put(clearErrors());
            yield put(push('/dashboard'));
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
    yield call(userSignIn, payload);
}
export default function* actionWatcher() {
    yield takeEvery(TYPES.USER_SIGNIN, postUserEffect);
}
