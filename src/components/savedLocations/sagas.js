import { takeEvery, call, put } from 'redux-saga/effects';
import * as TYPES from './actionType';
import { setErrors, setSavedLocation, loadingSavedLocation, setSavedLocationById } from './actions';
import { allSavedLocation, savedlocationById } from './services';

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
export default function* actionWatcher() {
    yield takeEvery(TYPES.GET_SAVED_LOCATIONS, getLocationsEffect);
    yield takeEvery(TYPES.GET_SAVED_LOCATIONS_BY_ID, getLocationsByIdEffect);
}
