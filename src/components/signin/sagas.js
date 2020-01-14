import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import * as TYPES from './actionType';
import { setErrors, loadingUI, setAuthenticated, clearErrors } from './actions';
import { loadingUser } from '../navbar/actions';
import { signInService } from './services';

function* userSignIn(userData) {
    try {
        yield put(clearErrors());
        yield put(loadingUI());
        const res = yield call(signInService, userData);
        if (res.status === 'success') {
            const authorization = `Bearer ${res.data}`;
            yield put(setAuthenticated(authorization));
            yield put(loadingUser(authorization));
            yield put(push('/dashboard'));
        } else {
            yield put(setErrors({ message: res.message }));
        }
    } catch (error) {
        yield put(setErrors({ message: 'Something went wrong please try again' }));
    }
}
function* postUserEffect({ payload }) {
    yield call(userSignIn, payload);
}
export default function* actionWatcher() {
    yield takeEvery(TYPES.USER_SIGNIN, postUserEffect);
}
