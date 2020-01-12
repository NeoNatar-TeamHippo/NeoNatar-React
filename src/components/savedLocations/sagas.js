import { takeEvery, call, put, fork, take } from 'redux-saga/effects';
import { eventChannel as EventChannel } from 'redux-saga';
import * as TYPES from './actionType';
import {
    setSavedLocation, loadingSavedLocation, savedLocationResult,
    setSavedLocationById, submittingForm, submitedForm, deleteLocationResult
} from './actions';
import {
    savedlocationById, deleteSavedlocationById, locationOperationService,
    newSavedLocation
} from './services';
import { firebaseSavedLocations } from '../utils/firebase'

function* startListener() {
    const channel = new EventChannel((emitter) => {
        firebaseSavedLocations.onSnapshot(snapshot => {
            emitter({ data: snapshot.docs || [] });
        });
        return () => {
            firebaseSavedLocations.off();
        };
    });

    while (true) {
        const { data } = yield take(channel);
        const savedLocations = [];
        for (const doc of data) {
            const newObj = Object.assign({}, doc.data(), { savedLocationId: doc.id });
            savedLocations.push(newObj);
        }
        yield put(setSavedLocation(savedLocations));
    }
}

function* getSingleLocation(id) {
    try {
        yield put(loadingSavedLocation());
        const res = yield call(savedlocationById, id);
        if (res.status === 'success') {
            yield put(setSavedLocationById(res.data));
        } else {
            console.log('error getting data');
        }
    } catch (error) {
        console.log('Something went wrong please try again');
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
function* getLocationsByIdEffect({ payload }) {
    yield call(getSingleLocation, payload);
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
    yield takeEvery(TYPES.GET_SAVED_LOCATIONS_BY_ID, getLocationsByIdEffect);
    yield takeEvery(TYPES.DELETE_SAVED_LOCATION, deleteLocationsByIdEffect);
    yield takeEvery(TYPES.NEW_SAVED_LOCATION, createNewLocationEffect);
    yield takeEvery(TYPES.LOCATION_OPERATION, locationOperationByIdEffect);
}
