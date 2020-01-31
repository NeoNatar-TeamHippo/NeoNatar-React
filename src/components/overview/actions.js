import * as TYPES from './actionType';

/**
 * Triggers request to set overviewLocationNumber
 *
 * @function
 * @return {void} The {@link actionTypes.SET_OVERVIEW_LOCATION_NUMBER } action.
 */
export const setOverviewLocationNumber = payload => ({
    payload,
    type: TYPES.SET_OVERVIEW_LOCATION_NUMBER,
});

/**
 * Triggers request to set OverviewApprovedCampaignNumber
 *
 * @function
 * @return {void} The {@link actionTypes.SET_OVERVIEW_APPROVED_CAMPAIGN_NUMBER } action.
 */
export const setOverviewApprovedCampaignNumber = payload => ({
    payload,
    type: TYPES.SET_OVERVIEW_APPROVED_CAMPAIGN_NUMBER,
});

/**
 * Triggers request to set OverviewPendingCampaignNumber
 *
 * @function
 * @return {void} The {@link actionTypes.SET_OVERVIEW_PENDING_CAMPAIGN_NUMBER } action.
 */
export const setOverviewPendingCampaignNumber = payload => ({
    payload,
    type: TYPES.SET_OVERVIEW_PENDING_CAMPAIGN_NUMBER,
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
