import { takeEvery, call, put } from 'redux-saga/effects';
import * as TYPES from './actionType';
import {
    loadingCampaigns,
    setCampaign,
    setErrors
} from './actions';
import {
    allCampaigns
} from './services';

function* getAllCampaigns() {
    try {
        yield put(loadingCampaigns());
        const res = yield call(allCampaigns);
        if (res.status === 'success') {
            yield put(setCampaign(res.data));
        } else {
            yield put(setErrors({ message: res.message }));
        }
    } catch (error) {
        yield put(setErrors({ message: 'Something went wrong please try again' }));
    }
}

function* getCampaignsEffect() {
    yield call(getAllCampaigns);
}

export default function* actionWatcher() {
    yield takeEvery(TYPES.GET_CAMPAIGNS, getCampaignsEffect);
}
