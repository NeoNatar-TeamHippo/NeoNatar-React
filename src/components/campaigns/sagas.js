import { takeEvery, call, put } from 'redux-saga/effects';
import * as TYPES from './actionType';
import {
    loadingCampaigns,
    setCampaign,
    setErrors
} from './actions';
import { allCampaigns, createCampaigns } from './services';

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
function* postNewCampaignWithData(data) {
    try {
        yield put(loadingCampaigns());
        const res = yield call(createCampaigns, data);
        if (res.status === 'success') {
            console.log('success');
        } else {
            console.log('error getting data');
        }
    } catch (error) {
        console.log('something went wrong');
    }
}
function* getCampaignsEffect() {
    yield call(getAllCampaigns);
}
function* postCampaignEffect({ payload }) {
    yield call(postNewCampaignWithData, payload);
}

export default function* actionWatcher() {
    yield takeEvery(TYPES.GET_CAMPAIGNS, getCampaignsEffect);
    yield takeEvery(TYPES.CREATE_CAMPAIGN, postCampaignEffect);
}
