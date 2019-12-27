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
 * Triggers request to load new TICKETS
 *
 * @function
 * @return {void} The {@link actionTypes.LOADING_NEW_TICKETS } action.
 */
export const loadingNewTickets = () => ({
    type: TYPES.LOADING_NEW_TICKETS,
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
 * Triggers request to load pending TICKETS
 *
 * @function
 * @return {void} The {@link actionTypes.LOADING_PENDING_TICKETS } action.
 */
export const loadingPendingTickets = () => ({
    type: TYPES.LOADING_PENDING_TICKETS,
});
/**
 * Triggers request to load resolved TICKETS
 *
 * @function
 * @return {void} The {@link actionTypes.LOADING_RESOLVED_TICKETS } action.
 */
export const loadingResolvedTickets = () => ({
    type: TYPES.LOADING_RESOLVED_TICKETS,
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
 * Triggers request to set new TICKET
 *
 * @function
 * @return {void} The {@link actionTypes.SET_NEW_TICKET } action.
 */
export const setNewTicket = payload => ({
    payload,
    type: TYPES.SET_NEW_TICKET,
});
/**
 * Triggers request to set pending TICKET
 *
 * @function
 * @return {void} The {@link actionTypes.SET_PENDING_TICKET } action.
 */
export const setPendingTicket = payload => ({
    payload,
    type: TYPES.SET_PENDING_TICKET,
});
/**
 * Triggers request to set resolved TICKET
 *
 * @function
 * @return {void} The {@link actionTypes.SET_RESOLVED_TICKET } action.
 */
export const setResolvedTicket = payload => ({
    payload,
    type: TYPES.SET_RESOLVED_TICKET,
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
export const postTicketMessage = (payload, id) => ({
    id,
    payload,
    type: TYPES.POST_TICKET_MESSAGE,
});
/**
 * Triggers request to get all new tickets
 *
 * @function
 * @return {void} The {@link actionTypes.GET_NEW_TICKETS } action.
 */
export const getNewTickets = () => ({
    type: TYPES.GET_NEW_TICKETS,
});
/**
 * Triggers request to get all pending tickets
 *
 * @function
 * @return {void} The {@link actionTypes.GET_PENDING_TICKETS } action.
 */
export const getPendingTickets = () => ({
    type: TYPES.GET_PENDING_TICKETS,
});
/**
 * Triggers request to get all resolved tickets
 *
 * @function
 * @return {void} The {@link actionTypes.GET_RESOLVED_TICKETS } action.
 */
export const getResolvedTickets = () => ({
    type: TYPES.GET_RESOLVED_TICKETS,
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

