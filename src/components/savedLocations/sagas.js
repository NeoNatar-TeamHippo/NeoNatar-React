import { takeEvery, call, put, fork, take } from 'redux-saga/effects';
import { eventChannel as EventChannel } from 'redux-saga';
import * as TYPES from './actionType';
import {
    setSavedLocation, loadingSavedLocation, savedLocationResult,
    submittingForm, submitedForm, deleteLocationResult
} from './actions';
import { deleteSavedlocationById, locationOperationService, newSavedLocation } from './services';
import { firebaseSavedLocations } from '../utils/firebase';

function* startListener() {
    const channel = new EventChannel(emitter => {
        firebaseSavedLocations.onSnapshot(snapshot => {
            emitter({ data: snapshot.docs || [] });
        });
        return () => {
            firebaseSavedLocations.off();
        };
    });

    while (true) {
        const { data } = yield take(channel);
        const loc = data.map(doc => Object.assign({}, doc.data(), { savedLocationId: doc.id }));
        yield put(setSavedLocation(loc));
    }
}

function* deleteLocation(id) {
    try {
        yield put(loadingSavedLocation());
        const res = yield call(deleteSavedlocationById, id);
        if (res.status === 'success') {
            yield put(submitedForm());
            yield put(deleteLocationResult(id));
        } else {
            console.log('error getting data');
        }
    } catch (error) {
        console.log('Something went wrong please try again');
    }
}
function* createNewLocation(data) {
    try {
        yield put(submittingForm());
        const res = yield call(newSavedLocation, data);
        if (res.status === 'success') {
            yield put(submitedForm());
            yield put(savedLocationResult(res.data));
        } else {
            console.log('error getting data');
        }
    } catch (error) {
        console.log('Something went wrong please try again');
    }
}
function* locationOperationById(payload) {
    try {
        yield put(submittingForm());
        const { locations, queryType, savedLocationId } = payload;
        const res = yield call(locationOperationService, locations, savedLocationId, queryType);
        if (res.status === 'success') {
            yield put(submitedForm());
        } else {
            console.log('error getting data');
        }
    } catch (error) {
        console.log('Something went wrong please try again');
    }
}
function* deleteLocationsByIdEffect({ payload }) {
    yield call(deleteLocation, payload);
}
function* createNewLocationEffect({ payload }) {
    yield call(createNewLocation, payload);
}
function* locationOperationByIdEffect({ payload }) {
    yield call(locationOperationById, payload);
}
export default function* actionWatcher() {
    yield fork(startListener);
    yield takeEvery(TYPES.DELETE_SAVED_LOCATION, deleteLocationsByIdEffect);
    yield takeEvery(TYPES.NEW_SAVED_LOCATION, createNewLocationEffect);
    yield takeEvery(TYPES.LOCATION_OPERATION, locationOperationByIdEffect);
}
