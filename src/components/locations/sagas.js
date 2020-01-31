import { takeEvery, call, put, fork, take } from 'redux-saga/effects';
import { eventChannel as EventChannel } from 'redux-saga';

import * as TYPES from './actionType';
import { setLocation, loadingLocation } from './actions';
import { postNewLocation } from './services';

import { openNotification } from '../utils/functions';
import { firebaseLocations } from '../utils/firebase';

function* startListener() {
    const channel = new EventChannel(emitter => {
        firebaseLocations.onSnapshot(snapshot => {
            emitter({ data: snapshot.docs || [] });
        });
        return () => {
            firebaseLocations.off();
        };
    });

    while (true) {
        const { data } = yield take(channel);
        const locations = data.map(doc => Object.assign({}, doc.data(), { locationId: doc.id }));
        yield put(setLocation(locations));
    }
}
function* postNewLocationWithData(data) {
    try {
        yield put(loadingLocation());
        const res = yield call(postNewLocation, data);
        if (res.status === 'success') {
            openNotification('Created Succesfully', 'New location', 'success');
        } else {
            console.log('error getting data');
        }
    } catch (error) {
        console.log('something went wrong');
    }
}
function* postLocationEffect({ payload }) {
    yield call(postNewLocationWithData, payload);
}
export default function* actionWatcher() {
    yield takeEvery(TYPES.NEW_LOCATIONS, postLocationEffect);
    yield fork(startListener);
}
