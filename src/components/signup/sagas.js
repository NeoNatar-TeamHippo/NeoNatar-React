import { takeEvery, call, put } from 'redux-saga/effects';
import { USER_SIGNUP } from './actionType';
import { setErrors, loadingUI, setAuthenticated, setUnAuthenticated, clearErrors } from './actions';
import { signUpService } from './services';

function* userSignUp(userData, history) {
    try {
        yield put(loadingUI());
        const res = yield call(signUpService, userData);
        if (res.status === 'success') {
            const authorization = `Bearer ${res.data}`;
            yield [
                put(setAuthenticated(authorization)),
                put(clearErrors()),
            ];
            history.push('/signin');
        } else {
            yield [
                put(setErrors({ message: res.message })),
                put(setUnAuthenticated()),
            ];
        }
        return res.data;
    } catch (error) {
        yield [
            put(setErrors({ message: 'Something went wrong please try again' })),
            put(setUnAuthenticated()),
        ];
    }
}
function* postUserEffect({ payload, history }) {
    yield call(userSignUp, payload, history);
}
export default function* actionWatcher() {
    yield takeEvery(USER_SIGNUP, postUserEffect);
}
