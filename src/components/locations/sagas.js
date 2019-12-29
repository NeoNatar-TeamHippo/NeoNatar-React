import { takeEvery, call, put } from 'redux-saga/effects';
import * as TYPES from './actionType';
import { setErrors, setLocation, loadingLocation, setLocationById } from './actions';
import { allLocation, locationById, postNewLocation } from './services';

function* postNewLocationWithData(data) {
    try {
        yield put(loadingLocation());
        const res = yield call(postNewLocation, data);
        if (res.status === 'success') {
            yield put(setLocation(res.data));
        } else {
            console.log('error getting data');
        }
    } catch (error) {
        yield put(setErrors({ message: 'Something went wrong please try again' }));
    }
}
function* getAllLocations() {
    try {
        yield put(loadingLocation());
        const res = yield call(allLocation);
        if (res.status === 'success') {
            yield put(setLocation(res.data));
        } else {
            console.log('error getting data');
        }
    } catch (error) {
        yield put(setErrors({ message: 'Something went wrong please try again' }));
    }
}
function* getLocationsEffect() {
    yield call(getAllLocations);
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
    yield takeEvery(TYPES.GET_LOCATIONS, getLocationsEffect);
    yield takeEvery(TYPES.GET_LOCATIONS_BY_ID, getLocationsByIdEffect);
    yield takeEvery(TYPES.NEW_LOCATIONS, postLocationEffect);
}
