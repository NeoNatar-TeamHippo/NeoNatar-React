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
 * Triggers request to get all CAMPAIGNs
 *
 * @function
 * @return {void} The {@link actionTypes.GET_CAMPAIGNS } action.
 */
export const getCampaigns = () => ({
    type: TYPES.GET_CAMPAIGNS,
});
