import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import * as TYPES from './actionType';
import { setUser, loadingNavBar } from './actions';
import { setUnAuthenticated } from '../signin/actions';
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
function* logout() {
    try {
        yield put(setUnAuthenticated());
        yield put(push('/signin'));
    } catch (error) {
        console.log(error);
    }
}
function* logOutProfile() {
    yield call(logout);
}
function* postUserProfile({ payload }) {
    yield call(userProfile, payload);
}
export default function* actionWatcher() {
    yield takeEvery(TYPES.LOADING_USER, postUserProfile);
    yield takeEvery(TYPES.LOGOUT_USER, logOutProfile);
}
