import * as TYPES from './actionType';

const initialState = {
    campaignDetails: {
        amount: null,
        current: 0,
        duration: null,
        locations: [],
        title: null,
        videoDetails: {
            title: null,
            url: null,
        },
    },
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
        case TYPES.SET_TITLE:
            return { ...state, campaignDetails: { ...state.campaignDetails, title: payload } };
        case TYPES.SET_AMOUNT:
            return { ...state, campaignDetails: { ...state.campaignDetails, amount: payload } };
        case TYPES.SET_DURATION:
            return { ...state, campaignDetails: { ...state.campaignDetails, duration: payload } };
        case TYPES.SET_CAMPAIGN_LOCATIONS:
            return { ...state, campaignDetails: { ...state.campaignDetails, locations: payload } };
        case TYPES.NEXT:
            return {
                ...state,
                campaignDetails:
                    { ...state.campaignDetails, current: state.campaignDetails.current + 1 },
            };
        case TYPES.PREVIOUS:
            return {
                ...state,
                campaignDetails:
                    { ...state.campaignDetails, current: state.campaignDetails.current - 1 },
            };
        case TYPES.RESET_FORM_STATE:
            return {
                ...state,
                campaignDetails: {
                    amount: null,
                    current: 0,
                    duration: null,
                    locations: [],
                    title: null,
                    videoDetails: {
                        title: null,
                        url: null,
                    },
                },
            };
        case TYPES.SET_VIDEO_DETAILS:
            return {
                ...state,
                campaignDetails: {
                    ...state.campaignDetails,
                    videoDetails: {
                        title: payload.title,
                        url: payload.url,
                    },
                },
            };
        default:
            return state;
    }
};
