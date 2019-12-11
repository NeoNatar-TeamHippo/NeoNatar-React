import { takeEvery, call, put } from 'redux-saga/effects';
import * as TYPES from './actionType';
import { setErrors, setUser, loadingUI, clearErrors } from './actions';
import { getUserProfile } from './services';

function* userProfile() {
    try {
        // yield put(loadingUI());
        const res = yield call(getUserProfile);
        if (res.status === 'success') {
            const userDetails = res.data;
            console.log('sagas', userDetails);
            yield put(setUser(userDetails));
            yield put(clearErrors());
        }
        // else {
        //     yield put(setErrors({ message: res.message }));
        // }
    } catch (error) {
        console.log(error);
        // yield put(setErrors({ message: 'Something went wrong please try again' }));
    }
}
function* postUserProfile() {
    yield call(userProfile);
}
export default function* actionWatcher() {
    yield takeEvery(TYPES.LOADING_USER, postUserProfile);
}
