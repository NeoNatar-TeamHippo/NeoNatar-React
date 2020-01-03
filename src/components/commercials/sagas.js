import { takeEvery, call, put } from 'redux-saga/effects';
import * as TYPES from './actionTypes';
import { getCommercial, deleteCommercialRequest, setCommercial, loadingCommercial } from './actions';
import { getCommercialService, postCommercialService, deleteCommercialById } from './services';
import { openNotification } from '../utils/functions';

function* getAllCommercials() {
    try {
        yield put(loadingCommercial());
        const res = yield call(getCommercialService);
        if (res.status === 'success') {
            yield put(setCommercial(res.data));
        } else {
            console.log('error getting data');
        }
    } catch (error) {
        console.log('error getting data');
    }
}
function* postNewCommercial(data) {
    try {
        yield put(loadingCommercial());
        const res = yield call(postCommercialService, data);
        if (res.status === 'success') {
            yield call(getAllCommercials);
            openNotification('Uploaded successfully', 'Video');
        } else {
            console.log('error getting data');
        }
    } catch (error) {
        console.log('something went wrong');
    }
}
function* deleteCommercial(id) {
    try {
        yield put(loadingCommercial());
        const res = yield call(deleteCommercialById, id);
        if (res.status === 'success') {
            yield put(deleteCommercialRequest(id));
            openNotification('Deleted Sucessfully', 'Video');
        } else {
            console.log('error getting data');
        }
    } catch (error) {
        console.log('something went wrong');
    }
}
function* getCommercialsEffect() {
    yield call(getAllCommercials);
}
function* postNewCommercialEffect({ payload }) {
    yield call(postNewCommercial, payload);
}
function* deleteCommercialEffect({ payload }) {
    yield call(deleteCommercial, payload);
}
export default function* actionWatcher() {
    yield takeEvery(TYPES.GET_COMMERCIALS, getCommercialsEffect);
    yield takeEvery(TYPES.POST_COMMERCIALS, postNewCommercialEffect);
    yield takeEvery(TYPES.REMOVE_COMMERCIALS, deleteCommercialEffect);
}
