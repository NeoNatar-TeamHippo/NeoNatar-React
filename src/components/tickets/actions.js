import * as TYPES from './actionType';

/**
 * Triggers request to load TICKETS
 *
 * @function
 * @return {void} The {@link actionTypes.LOADING_TICKETS } action.
 */
export const loadingTickets = () => ({
    type: TYPES.LOADING_TICKETS,
});
/**
 * Triggers request to load TICKETS
 *
 * @function
 * @return {void} The {@link actionTypes.LOADING_TICKETS } action.
 */
export const loadingTicketById = () => ({
    type: TYPES.LOADING_TICKET_BY_ID,
});
/**
 * Triggers request to post a TICKET
 *
 * @function
 * @return {void} The {@link actionTypes.POSTING_TICKET } action.
 */
export const postingTicket = () => ({
    type: TYPES.POSTING_TICKET,
});
/**
 * Triggers request to post a TICKET MESSAGE
 *
 * @function
 * @return {void} The {@link actionTypes.POSTING_TICKET_MESSAGE } action.
 */
export const postingTicketMessage = () => ({
    type: TYPES.POSTING_TICKET_MESSAGE,
});
/**
 * Triggers request to mark a TICKET Resolved
 *
 * @function
 * @return {void} The {@link actionTypes.RESOLVING_TICKET } action.
 */
export const resolvingTicket = () => ({
    type: TYPES.RESOLVING_TICKET,
});
/**
 * Triggers request to set Single TCIKET
 *
 * @function
 * @return {void} The {@link actionTypes.SET_TICKET_BY_ID } action.
 */
export const setTicketById = payload => ({
    payload,
    type: TYPES.SET_TICKET_BY_ID,
});
/**
 * Triggers request to set TICKET
 *
 * @function
 * @return {void} The {@link actionTypes.SET_TICKET } action.
 */
export const setTicket = payload => ({
    payload,
    type: TYPES.SET_TICKET,
});
/**
 * Triggers request to post TICKET
 *
 * @function
 * @return {void} The {@link actionTypes.POST_TICKET } action.
 */
export const postTicket = payload => ({
    payload,
    type: TYPES.POST_TICKET,
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
 * Triggers request to set message after a ticket is sucessfully posted
 *
 * @function
 * @return {void} The {@link actionTypes.POST_SUCCESS } action.
 */
export const postSuccess = payload => ({
    payload,
    type: TYPES.POST_SUCCESS,
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
 * Triggers request to get all tickets
 *
 * @function
 * @return {void} The {@link actionTypes.GET_TICKETS } action.
 */
export const getTickets = () => ({
    type: TYPES.GET_TICKETS,
});
/**
 * Triggers request to get single tickets
 *
 * @function
 * @return {void} The {@link actionTypes.GET_TICKETS } action.
 */
export const getTicketsById = payload => ({
    payload,
    type: TYPES.GET_TICKETS_BY_ID,
});
/**
 * Triggers request to post ticket's message
 *
 * @function
 * @return {void} The {@link actionTypes.POST_TICKET_MESSAGE } action.
 */
export const postTicketMessage = payload => ({
    payload,
    type: TYPES.POST_TICKET_MESSAGE,
});
/**
 * Triggers request to mark ticket as resolved
 *
 * @function
 * @return {void} The {@link actionTypes.RESOLVE_TICKET } action.
 */
export const resolveTicket = payload => ({
    payload,
    type: TYPES.RESOLVE_TICKET,
});

