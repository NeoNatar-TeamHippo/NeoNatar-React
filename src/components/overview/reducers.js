import * as TYPES from './actionType';

const initialState = {
    errors: {},
    overviewApprovedCampignNumber: [],
    overviewLoading: false,
    overviewLocationNumber: [],
    overviewPendingCampignNumber: [],
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPES.SET_OVERVIEW_LOCATION_NUMBER:
            return { ...state, overviewLoading: false, overviewLocationNumber: payload };
        case TYPES.SET_OVERVIEW_PENDING_CAMPAIGN_NUMBER:
            return { ...state, overviewLoading: false, overviewPendingCampignNumber: payload };
        case TYPES.SET_OVERVIEW_APPROVED_CAMPAIGN_NUMBER:
            return { ...state, overviewApprovedCampignNumber: payload, overviewLoading: false };
        case TYPES.SET_ERRORS:
            return { ...state, errors: payload, overviewLoading: false };
        case TYPES.CLEAR_ERRORS:
            return { ...state, errors: {}, overviewLoading: false };
        default:
            return state;
    }
};
