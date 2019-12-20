import { takeEvery, call, put } from 'redux-saga/effects';
import * as TYPES from './actionType';
import { setErrors, setSavedLocation, loadingSavedLocation, setSavedLocationById } from './actions';
import { allSavedLocation, savedlocationById, deleteSavedlocationById } from './services';

function* getAllSavedLocations() {
    try {
        yield put(loadingSavedLocation());
        const res = yield call(allSavedLocation);
        if (res.status === 'success') {
            yield put(setSavedLocation(res.data));
        } else {
            yield put(setErrors({ message: res.message }));
        }
    } catch (error) {
        yield put(setErrors({ message: 'Something went wrong please try again' }));
    }
}
function* getLocationsEffect() {
    yield call(getAllSavedLocations);
}

function* getSingleLocation(id) {
    try {
        yield put(loadingSavedLocation());
        const res = yield call(savedlocationById, id);
        if (res.status === 'success') {
            yield put(setSavedLocationById(res.data));
            yield call(getAllSavedLocations);
        } else {
            yield put(setErrors({ message: res.message }));
        }
    } catch (error) {
        yield put(setErrors({ message: 'Something went wrong please try again' }));
    }
}
function* deleteLocation(id) {
    try {
        yield put(loadingSavedLocation());
        console.log('id from sagas', id);
        const res = yield call(deleteSavedlocationById, id);
        if (res.status === 'success') {
            yield call(getAllSavedLocations);
        } else {
            yield put(setErrors({ message: res.message }));
        }
    } catch (error) {
        yield put(setErrors({ message: 'Something went wrong please try again' }));
    }
}
function* getLocationsByIdEffect({ payload }) {
    yield call(getSingleLocation, payload);
}
function* deleteLocationsByIdEffect({ payload }) {
    yield call(deleteLocation, payload);
}
export default function* actionWatcher() {
    yield takeEvery(TYPES.GET_SAVED_LOCATIONS, getLocationsEffect);
    yield takeEvery(TYPES.GET_SAVED_LOCATIONS_BY_ID, getLocationsByIdEffect);
    yield takeEvery(TYPES.DELETE_SAVED_LOCATION, deleteLocationsByIdEffect);
}
