import * as TYPES from './actionType';

const initialState = {
    campaigns: [],
    campaignsLoading: false,
    errors: {},
};
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPES.LOADING_CAMPAIGNS:
            return { ...state, campaignsLoading: true };
        case TYPES.SET_CAMPAIGN:
            return { ...state, campaigns: payload, campaignsLoading: false };
        case TYPES.SET_ERRORS:
            return { ...state, campaignsLoading: false, errors: payload };
        case TYPES.CLEAR_ERRORS:
            return { ...state, campaignsLoading: false, errors: {} };
        default:
            return state;
    }
};