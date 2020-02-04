import { takeEvery, call, put, take, fork } from 'redux-saga/effects';
import { eventChannel as EventChannel } from 'redux-saga';

import * as TYPES from './actionType';
import {
    approvingCampaign,
    disapprovingCampaign,
    loadingCampaignById,
    loadingCampaigns,
    postSuccess,
    setCampaign,
    setCampaignById,
    setErrors
} from './actions';
import {
    campaignById, approveCampaigns, disapproveCampaigns, createCampaigns
} from './services';

import { firebaseCampaigns } from '../utils/firebase';

function* getAllCampaignsListener(payload) {
    const { isAdmin, userId } = payload;
    yield put(loadingCampaigns());
    const channel = new EventChannel(emiter => {
        firebaseCampaigns.onSnapshot(snapshot => {
            emiter({ data: snapshot.docs || [] });
        });
        return () => {
            firebaseCampaigns.off();
        };
    });
    while (true) {
        const { data } = yield take(channel);
        const newData = data.map(element => ({
            ...element.data(),
            campaignId: element.id,
        }));
        let userCampaign;
        if (isAdmin) userCampaign = newData;
        if (!isAdmin) {
            userCampaign = newData.filter(campaign => campaign.createdBy === userId);
        }
        yield put(setCampaign(userCampaign));
    }
}
function* postNewCampaignWithData(data) {
    try {
        yield put(loadingCampaigns());
        const res = yield call(createCampaigns, data);
        console.log(res);
        if (res.status === 'success') {
            console.log('success');
        }
    } catch (error) {
        console.error(error);
    }
}
function* getCampaignsEffect({ payload }) {
    yield fork(getAllCampaignsListener, payload);
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
        console.log(res);
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

function* disapproveCampaign(payload) {
    try {
        yield put(disapprovingCampaign());
        const res = yield call(disapproveCampaigns, payload);
        console.log(res);
        if (res.status === 'success') {
            yield put(postSuccess({ message: 'Campaign is approved' }));
        } else {
            yield put(setErrors({ message: res.message }));
        }
    } catch (error) {
        yield put(setErrors({ message: 'Something went wrong please try again' }));
    }
}
function* disapproveCampaignEffect({ payload }) {
    yield call(disapproveCampaign, payload);
}

export default function* actionWatcher() {
    yield takeEvery(TYPES.GET_CAMPAIGNS, getCampaignsEffect);
    yield takeEvery(TYPES.GET_CAMPAIGN_BY_ID, getCampaignByIdEffect);
    yield takeEvery(TYPES.APPROVE_CAMPAIGN, approveCampaignEffect);
    yield takeEvery(TYPES.DISAPPROVE_CAMPAIGN, disapproveCampaignEffect);
    yield takeEvery(TYPES.CREATE_CAMPAIGN, postCampaignEffect);
}
