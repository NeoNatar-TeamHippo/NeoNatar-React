import { takeEvery, call, put } from 'redux-saga/effects';
import * as TYPES from './actionType';
import {
    setErrors, setSavedLocation, loadingSavedLocation, savedLocationResult,
    setSavedLocationById, submittingForm, submitedForm, deleteLocationResult
} from './actions';
import {
    allSavedLocation, savedlocationById, deleteSavedlocationById, locationOperationService,
    newSavedLocation
} from './services';

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
function* deleteLocation(id) {
    try {
        yield put(loadingSavedLocation());
        const res = yield call(deleteSavedlocationById, id);
        if (res.status === 'success') {
            yield put(submitedForm());
            yield put(deleteLocationResult(id));
        } else {
            yield put(setErrors({ message: res.message }));
        }
    } catch (error) {
        yield put(setErrors({ message: 'Something went wrong please try again' }));
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
            yield put(setErrors({ message: res.message }));
        }
    } catch (error) {
        yield put(setErrors({ message: 'Something went wrong please try again' }));
    }
}
function* locationOperationById(payload) {
    try {
        yield put(submittingForm());
        const { locations, queryType, savedLocationId } = payload;
        const res = yield call(locationOperationService, locations, savedLocationId, queryType);
        if (res.status === 'success') {
            yield put(submitedForm());
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
function* createNewLocationEffect({ payload }) {
    yield call(createNewLocation, payload);
}
function* locationOperationByIdEffect({ payload }) {
    yield call(locationOperationById, payload);
}
export default function* actionWatcher() {
    yield takeEvery(TYPES.GET_SAVED_LOCATIONS, getLocationsEffect);
    yield takeEvery(TYPES.GET_SAVED_LOCATIONS_BY_ID, getLocationsByIdEffect);
    yield takeEvery(TYPES.DELETE_SAVED_LOCATION, deleteLocationsByIdEffect);
    yield takeEvery(TYPES.NEW_SAVED_LOCATION, createNewLocationEffect);
    yield takeEvery(TYPES.LOCATION_OPERATION, locationOperationByIdEffect);
}
