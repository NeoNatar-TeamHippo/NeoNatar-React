import { takeEvery, call, put } from 'redux-saga/effects';
import * as TYPES from './actionType';
import {
    approvingCampaign,
    loadingCampaignById,
    loadingCampaigns,
    postSuccess,
    setCampaign,
    setCampaignById,
    setErrors
} from './actions';
import {
    allCampaigns, campaignById, approveCampaigns, createCampaigns
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

function* getSingleCampaign(id) {
    try {
        yield put(loadingCampaignById());
        const res = yield call(campaignById, id);
        if (res.status === 'success') {
            yield put(setCampaignById(res.data));
        } else {
            yield put(setErrors({ message: res.message }));
        }
    } catch (error) {
        yield put(setErrors({ message: 'Something went wrong please try again' }));
    }
}
function* getCampaignByIdEffect({ payload }) {
    yield call(getSingleCampaign, payload);
}

function* approveCampaign(id) {
    try {
        yield put(approvingCampaign());
        const res = yield call(approveCampaigns, id);
        if (res.status === 'success') {
            yield put(postSuccess({ message: 'Campaign is approved' }));
        } else {
            yield put(setErrors({ message: res.message }));
        }
    } catch (error) {
        yield put(setErrors({ message: 'Something went wrong please try again' }));
    }
}
function* approveCampaignEffect({ payload }) {
    yield call(approveCampaign, payload);
}

export default function* actionWatcher() {
    yield takeEvery(TYPES.GET_CAMPAIGNS, getCampaignsEffect);
    yield takeEvery(TYPES.GET_CAMPAIGN_BY_ID, getCampaignByIdEffect);
    yield takeEvery(TYPES.APPROVE_CAMPAIGN, approveCampaignEffect);
    yield takeEvery(TYPES.CREATE_CAMPAIGN, postCampaignEffect);
}
