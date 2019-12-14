import { takeEvery, call, put } from 'redux-saga/effects';
import * as TYPES from './actionType';
import { setUser, loadingNavBar } from './actions';
import { getUserProfile } from './services';

function* userProfile(token) {
    try {
        yield put(loadingNavBar());
        const res = yield call(getUserProfile, token);
        if (res.status === 'success') {
            const userDetails = res.data;
            yield put(setUser(userDetails));
        }
    } catch (error) {
        console.log(error);
    }
}
function* postUserProfile({ payload }) {
    yield call(userProfile, payload);
}
export default function* actionWatcher() {
    yield takeEvery(TYPES.LOADING_USER, postUserProfile);
}
