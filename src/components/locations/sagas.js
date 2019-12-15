import { takeEvery, call, put } from 'redux-saga/effects';
import * as TYPES from './actionType';
import { setErrors, setLocation, loadingLocation, clearErrors, setLocationById } from './actions';
import { allLocation, locationById } from './services';

function* getAllLocations() {
    try {
        yield put(loadingLocation());
        const res = yield call(allLocation);
        if (res.status === 'success') {
            yield put(setLocation(res.data));
            yield put(clearErrors());
        } else {
            yield put(setErrors({ message: res.message }));
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
        console.log('id from sagas', id);
        const res = yield call(locationById, id);
        console.log(id, 'id from sags');
        if (res.status === 'success') {
            console.log(res.data, 'data from location y id sagas');
            yield put(setLocationById(res.data));
            yield put(clearErrors());
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
    yield takeEvery(TYPES.GET_LOCATIONS, getLocationsEffect);
    yield takeEvery(TYPES.GET_LOCATIONS_BY_ID, getLocationsByIdEffect);
}
