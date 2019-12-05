import { takeEvery, call, put } from 'redux-saga/effects';
import { USER_SIGNIN } from './actionType';
import { setErrors, loadingUI, setAuthenticated, setUnAuthenticated, clearErrors } from './actions';
import { signInService } from './services';

function* userSignIn(userData, history) {
    try {
        yield put(loadingUI());
        const res = yield call(signInService, userData);
        console.log(res);
        if (res.status === 'success') {
            const authorization = `Bearer ${res.data}`;
            yield put(setAuthenticated(authorization));
            yield put(clearErrors());
            history.push('/dashboard');
        } else {
            yield put(setErrors({ message: res.message }));
            yield put(setUnAuthenticated());
        }
    } catch (error) {
        console.log(error, 'from catch block');
        yield put(setErrors({ message: 'Something went wrong please try again' }));
        yield put(setUnAuthenticated());
    }
}
function* postUserEffect({ payload, history }) {
    yield call(userSignIn, payload, history);
}
export default function* actionWatcher() {
    yield takeEvery(USER_SIGNIN, postUserEffect);
}
