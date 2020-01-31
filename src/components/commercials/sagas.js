import { takeEvery, put, call, take, fork, select } from 'redux-saga/effects';
import { eventChannel as EventChannel } from 'redux-saga';
import * as TYPES from './actionTypes';
import { deleteCommercialRequest, setCommercial, loadingCommercial, setVisible } from './actions';
import {
    postCommercialService, deleteCommercialById, getCommercialService
} from './services';
import { openNotification } from '../utils/functions';
import { next, setVideoDetails, setCommercialId, setDuration } from '../campaigns/actions';

function* requestAllCommercials() {
    try {
        yield put(loadingCommercial());
        const res = yield call(getCommercialService);
        console.log(res);
        if (res.status === 'success') {
            yield put(setCommercial(res.data));
        } else {
            console.error(res.message);
        }
    } catch (error) {
        console.error(error);
    }
}

function* postNewCommercial({ data, resetFields }) {
    try {
        yield put(loadingCommercial());
        const res = yield call(postCommercialService, data);
        if (res.status === 'success') {
            yield call(resetFields);
            yield put(setVisible(false));
            yield put(next());
            openNotification('Uploaded successfully', 'Video', 'success');
            const videoDetails = {
                title: res.data.title,
                url: res.data.url,
            };
            yield put(setCommercialId(res.data.id));
            yield put(setDuration(res.data.duration));
            yield put(setVideoDetails(videoDetails));
            yield call(requestAllCommercials);
        } else {
            console.log(res.message);
        }
    } catch (error) {
        console.error(error);
    }
}
function* deleteCommercialByIdRequest(id) {
    try {
        yield put(loadingCommercial());
        const res = yield call(deleteCommercialById, id);
        if (res.status === 'success') {
            yield put(deleteCommercialRequest(id));
            openNotification('Deleted Successfully', 'Delete Video', 'success');
        } else {
            console.log(res.message);
        }
    } catch (error) {
        console.error(error);
    }
}

function* postCommercialEffect({ payload }) {
    yield call(postNewCommercial, payload);
}
function* getCommercialEffect({ payload }) {
    yield call(requestAllCommercials, payload);
}
function* deleteCommercialEffect({ payload }) {
    yield call(deleteCommercialByIdRequest, payload);
}
export default function* actionWatcher() {
    // yield fork(startListener);
    yield takeEvery(TYPES.POST_COMMERCIALS, postCommercialEffect);
    yield takeEvery(TYPES.GET_COMMERCIALS, getCommercialEffect);
    yield takeEvery(TYPES.REMOVE_COMMERCIALS, deleteCommercialEffect);
}

