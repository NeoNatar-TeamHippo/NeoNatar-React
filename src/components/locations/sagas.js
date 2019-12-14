import { takeEvery, call, put } from 'redux-saga/effects';
import * as TYPES from './actionType';
import { setErrors, setLocation, loadingLocation, clearErrors } from './actions';
import { allLocation } from './services';

function* getAllLocations() {
    try {
        yield put(loadingLocation());
        const res = yield call(allLocation);
        if (res.status === 'success') {
            console.log(res.data, 'from sagas');
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
export default function* actionWatcher() {
    yield takeEvery(TYPES.GET_LOCATIONS, getLocationsEffect);
}
