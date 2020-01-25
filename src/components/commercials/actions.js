import * as TYPES from './actionTypes';

/**
 * Triggers request to load Commercial
 *
 * @function
 * @return {void} The {@link actionTypes.LOADING_COMMERCIAL } action.
 */
export const loadingCommercial = () => ({
    type: TYPES.LOADING_COMMERCIAL,
});

/**
 * Triggers request to get Commercial
 *
 * @function
 * @return {void} The {@link actionTypes.GET_COMMERCIALS } action.
 */
export const getCommercial = () => ({
    type: TYPES.GET_COMMERCIALS,
});

/**
 * Triggers request to get Commercial
 *
 * @function
 * @return {void} The {@link actionTypes.SET_COMMERCIALS } action.
 */
export const setCommercial = payload => ({
    payload,
    type: TYPES.SET_COMMERCIALS,
});

/**
 * Triggers request to post Commercial
 *
 * @function
 * @return {void} The {@link actionTypes.POST_COMMERCIALS } action.
 */
export const postCommercial = payload => ({
    payload,
    type: TYPES.POST_COMMERCIALS,
});

/**
 * Triggers request to delete a Commercial
 *
 * @function
 * @return {void} The {@link actionTypes.DELETE_COMMERCIALS } action.
 */
export const deleteCommercialRequest = payload => ({
    payload,
    type: TYPES.DELETE_COMMERCIALS,
});

/**
 * Triggers request to delete a Commercial
 *
 * @function
 * @return {void} The {@link actionTypes.REMOVE_COMMERCIALS } action.
 */
export const removeCommercial = payload => ({
    payload,
    type: TYPES.REMOVE_COMMERCIALS,
});
export const setVisible = payload => ({
    payload,
    type: TYPES.SET_VISIBLE,
});
