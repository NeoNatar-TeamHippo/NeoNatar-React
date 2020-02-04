import * as TYPES from './actionType';

/**
 * Triggers request to load CAMPAIGNS
 *
 * @function
 * @return {void} The {@link actionTypes.LOADING_CAMPAIGNS } action.
 */
export const loadingCampaigns = () => ({
    type: TYPES.LOADING_CAMPAIGNS,
});

/**
 * Triggers request to load CAMPAIGNS by ID
 *
 * @function
 * @return {void} The {@link actionTypes.LOADING_CAMPAIGNS_BY_ID } action.
 */
export const loadingCampaignById = () => ({
    type: TYPES.LOADING_CAMPAIGN_BY_ID,
});

/**
 * Triggers request to set CAMPAIGN
 *
 * @function
 * @return {void} The {@link actionTypes.SET_CAMPAIGN } action.
 */
export const setCampaign = payload => ({
    payload,
    type: TYPES.SET_CAMPAIGN,
});

/**
 * Triggers request to set Single CAMPAIGN
 *
 * @function
 * @return {void} The {@link actionTypes.SET_CAMPAIGN_BY_ID } action.
 */
export const setCampaignById = payload => ({
    payload,
    type: TYPES.SET_CAMPAIGN_BY_ID,
});

/**
 * Triggers request to get all CAMPAIGNs
 *
 * @function
 * @return {void} The {@link actionTypes.GET_CAMPAIGNS } action.
 */
export const getCampaigns = payload => ({
    payload,
    type: TYPES.GET_CAMPAIGNS,
});

/**
 * Triggers request to get approve CAMPAIGN
 *
 * @function
 * @return {void} The {@link actionTypes.APPROVING_CAMPAIGN } action.
 */
export const approvingCampaign = () => ({
    type: TYPES.APPROVING_CAMPAIGN,
});

/**
 * Triggers request to get all CAMPAIGNs
 *
 * @function
 * @return {void} The {@link actionTypes.DISAPPROVING_CAMPAIGN } action.
 */
export const disapprovingCampaign = () => ({
    type: TYPES.DISAPPROVING_CAMPAIGN,
});

/**
 * Triggers request to set message after an actin is completed is sucessfully posted
 *
 * @function
 * @return {void} The {@link actionTypes.POST_SUCCESS } action.
 */
export const postSuccess = payload => ({
    payload,
    type: TYPES.POST_SUCCESS,
});

/**
 * Triggers request to get single campaign
 *
 * @function
 * @return {void} The {@link actionTypes.GET_CAMPAIGN_BY_ID } action.
 */
export const getCampaignById = payload => ({
    payload,
    type: TYPES.GET_CAMPAIGN_BY_ID,
});

/*
* Triggers request to set errors after a bad request
 *
 * @function
 * @return {void} The {@link actionTypes.SET_ERRORS } action.
 */
export const setErrors = payload => ({
    payload,
    type: TYPES.SET_ERRORS,
});

/**
 * Triggers request to clear errors after a success
 *
 * @function
 * @return {void} The {@link actionTypes.CLEAR_ERRORS } action.
 */
export const clearErrors = () => ({
    type: TYPES.CLEAR_ERRORS,
});

/**
 * Triggers request to approve campaign
 *
 * @function
 * @return {void} The {@link actionTypes.APPROVE_CAMPAIGN } action.
 */
export const approveCampaign = payload => ({
    payload,
    type: TYPES.APPROVE_CAMPAIGN,
});

/**
 * Triggers request to approve campaign
 *
 * @function
 * @return {void} The {@link actionTypes.DISAPPROVE_CAMPAIGN } action.
 */
export const disapproveCampaign = payload => ({
    payload,
    type: TYPES.DISAPPROVE_CAMPAIGN,
});

/**
 * Triggers request to set campaign title
 *
 * @function
 * @return {void} The {@link actionTypes.SET_TITLE } action.
 */
export const setTitle = payload => ({
    payload,
    type: TYPES.SET_TITLE,
});

export const setVideoDetails = payload => ({
    payload,
    type: TYPES.SET_VIDEO_DETAILS,
});

export const setCampaignLocation = payload => ({
    payload,
    type: TYPES.SET_CAMPAIGN_LOCATIONS,
});

export const setAmount = payload => ({
    payload,
    type: TYPES.SET_AMOUNT,
});

export const setDuration = payload => ({
    payload,
    type: TYPES.SET_DURATION,
});

export const next = () => ({
    type: TYPES.NEXT,
});

export const previous = () => ({
    type: TYPES.PREVIOUS,
});

export const resetFormState = () => ({
    type: TYPES.RESET_FORM_STATE,
});

export const createCampaign = payload => ({
    payload,
    type: TYPES.CREATE_CAMPAIGN,
});

export const setCommercialId = payload => ({
    payload,
    type: TYPES.SET_COMMERCIAL_ID,
});
