import { takeEvery, call, put, take, fork } from 'redux-saga/effects';
import * as TYPES from './actionTypes';
import { getCommercial, deleteCommercialRequest, setCommercial, loadingCommercial } from './actions';
import { getCommercialService, postCommercialService, deleteCommercialById } from './services';
import { openNotification } from '../utils/functions';
import { next, setVideoDetails } from '../campaigns/actions'
import { eventChannel as EventChannel } from 'redux-saga';
import { firebaseCommercials } from '../utils/firebase';

function* startListener() {
    const channel = new EventChannel((emitter) => {
        firebaseCommercials.onSnapshot(snapshot => {
            emitter({ data: snapshot.docs || [] });
        });
        return () => {
            firebaseCommercials.off();
        };
    });

    while (true) {
        const { data } = yield take(channel);
        const commercials = [];
        for (const doc of data) {
            const newObj = Object.assign({}, doc.data(), { commercialId: doc.id });
            commercials.push(newObj);
        }
        yield put(setCommercial(commercials));
    }
}
function* postNewCommercial(data) {
    try {
        yield put(loadingCommercial());
        const res = yield call(postCommercialService, data);
        console.log(res);
        if (res.status === 'success') {
            yield put(next());
            openNotification('Uploaded successfully', 'Video', 'success');
            const videoDetails = {
                title: res.data.title,
                url: res.data.url,
            }
            console.log(videoDetails, 'details to be used to update the state to be submitted to the backend');
            yield put(setVideoDetails(videoDetails));
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
            openNotification('Deleted Sucessfully', 'Video', 'success');
        } else {
            console.log('error getting data');
        }
    } catch (error) {
        console.log('something went wrong');
    }
}
function* postNewCommercialEffect({ payload }) {
    yield call(postNewCommercial, payload);
}
function* deleteCommercialEffect({ payload }) {
    yield call(deleteCommercial, payload);
}
export default function* actionWatcher() {
    yield fork(startListener);
    yield takeEvery(TYPES.POST_COMMERCIALS, postNewCommercialEffect);
    yield takeEvery(TYPES.REMOVE_COMMERCIALS, deleteCommercialEffect);
}
