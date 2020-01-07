import { takeEvery, call, put, fork, take } from 'redux-saga/effects';
import { eventChannel as EventChannel } from 'redux-saga';
import * as TYPES from './actionType';
import { setErrors, setLocation, loadingLocation, setLocationById } from './actions';
import { locationById, postNewLocation } from './services';
import { openNotification } from '../utils/functions';
import { firebaseLocations } from "../utils/firebase";

function* startListener() {
    const channel = new EventChannel((emitter) => {
        firebaseLocations.onSnapshot(snapshot => {
            emitter({ data: snapshot.docs || [] });
        });
        return () => {
            firebaseLocations.off();
        };
    });

    while (true) {
        const { data } = yield take(channel);
        const locations = [];
        for (const doc of data) {
            const newObj = Object.assign({}, doc.data(), { locationId: doc.id });
            locations.push(newObj);
        }
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
function* getSingleLocation(id) {
    try {
        yield put(loadingLocation());
        const res = yield call(locationById, id);
        if (res.status === 'success') {
            yield put(setLocationById(res.data));
        } else {
            console.log('error getting data');
        }
    } catch (error) {
        yield put(setErrors({ message: 'Something went wrong please try again' }));
    }
}
function* getLocationsByIdEffect({ payload }) {
    yield call(getSingleLocation, payload);
}
function* postLocationEffect({ payload }) {
    yield call(postNewLocationWithData, payload);
}
export default function* actionWatcher() {
    yield takeEvery(TYPES.GET_LOCATIONS_BY_ID, getLocationsByIdEffect);
    yield takeEvery(TYPES.NEW_LOCATIONS, postLocationEffect);
    yield fork(startListener);
}
