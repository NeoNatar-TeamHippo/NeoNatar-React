import { put, take, fork } from 'redux-saga/effects';
import { eventChannel as EventChannel } from 'redux-saga';
import { firebaseLocations, firebaseCampaigns } from '../utils/firebase';

import { setOverviewApprovedCampaignNumber,
    setOverviewLocationNumber,
    setOverviewPendingCampaignNumber } from './actions';

function* startLocationListener() {
    const channel = new EventChannel(emiter => {
        firebaseLocations.onSnapshot(snapshot => {
            emiter({ data: snapshot.docs || [] });
        });
        return () => {
            firebaseLocations.off();
        };
    });
    while (true) {
        const { data } = yield take(channel);
        yield put(setOverviewLocationNumber(data.length));
    }
}

function* startCampaignListener() {
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
        const campaigns = data.map(element => ({
            ...element.data(),
            campaignId: element.id,
        }));
        const pendingCampaign = campaigns.filter(campaign => campaign.status === 'pending');
        const approvedCampaign = campaigns.filter(campaign => campaign.status === 'live');
        yield put(setOverviewPendingCampaignNumber(pendingCampaign.length));
        yield put(setOverviewApprovedCampaignNumber(approvedCampaign.length));
    }
}

export default function* actionWatcher() {
    yield fork(startLocationListener);
    yield fork(startCampaignListener);
}
