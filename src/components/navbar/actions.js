import * as TYPES from './actionType';

/**
 * Triggers request to load UI
 *
 * @function
 * @return {void} The {@link actionTypes.LOADING_NAVBAR } action.
 */
export const loadingNavBar = () => ({
    type: TYPES.LOADING_NAVBAR,
});
export const allNotifications = payload => ({
    payload,
    type: TYPES.ALL_NOTIFICATIONS,
});
export const markAsRead = payload => ({
    payload,
    type: TYPES.MARK_AS_READ,
});
export const getNotification = () => ({
    type: TYPES.GET_NOTIFICATIONS,
});
export const callMarkRead = payload => ({
    payload,
    type: TYPES.CALL_MARK_READ,
});
export const clearNotifications = () => ({
    type: TYPES.CLEAR_NOTIFICATION,
});

/**
 * Triggers request to load UI
 *
 * @function
 * @return {void} The {@link actionTypes.LOADING_USER } action.
 */
export const loadingUser = () => ({
    type: TYPES.LOADING_USER,
});

/**
 * Triggers request to set user
 *
 * @function
 * @return {void} The {@link actionTypes.SET_USER } action.
 */
export const setUser = payload => ({
    payload,
    type: TYPES.SET_USER,
});

/**
 * Triggers request to logout user
 *
 * @function
 * @return {void} The {@link actionTypes.LOGOUT_USER } action.
 */
export const logoutUser = payload => ({
    payload,
    type: TYPES.LOGOUT_USER,
});
