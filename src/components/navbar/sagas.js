import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import * as TYPES from './actionType';
import { setUser, loadingNavBar, allNotifications, clearNotifications } from './actions';
import { getUserProfile, getAllNotifications, markReadRequest } from './services';

import { setUnAuthenticated } from '../signin/actions';

function* userProfile() {
    try {
        yield put(loadingNavBar());
        const token = localStorage.getItem('FBToken');
        const res = yield call(getUserProfile, token);
        if (res.status === 'success') {
            const userDetails = res.data;
            yield put(setUser(userDetails));
        }
    } catch (error) {
        console.log(error);
    }
}
function* notificationsRequest() {
    try {
        const token = localStorage.getItem('FBToken');
        const res = yield call(getAllNotifications, token);
        if (res.status === 'success') {
            const notifications = res.data;
            yield put(allNotifications(notifications));
        }
    } catch (error) {
        console.log(error);
    }
}
function* marKReadNotifications(data) {
    try {
        const token = localStorage.getItem('FBToken');
        const res = yield call(markReadRequest, token, data);
        console.log(res);
        if (res.status === 'success') {
            yield put(clearNotifications());
            // yield call(notificationsRequest);
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
function* postUserProfile() {
    yield call(userProfile);
}
function* callnotificationsRequestEffect() {
    yield call(notificationsRequest);
}
function* callmarkAsReadEffect({ payload }) {
    yield call(marKReadNotifications, payload);
}

export default function* actionWatcher() {
    yield takeEvery(TYPES.LOADING_USER, postUserProfile);
    yield takeEvery(TYPES.GET_NOTIFICATIONS, callnotificationsRequestEffect);
    yield takeEvery(TYPES.CALL_MARK_READ, callmarkAsReadEffect);
    yield takeEvery(TYPES.LOGOUT_USER, logOutProfile);
}
