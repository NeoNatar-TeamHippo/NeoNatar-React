import * as TYPES from './actionType';

const initialState = {
    errors: {},
    newTickets: [],
    pendingTickets: [],
    resolvedTickets: [],
    tickets: [],
    ticketsLoading: false,
};
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPES.LOADING_TICKETS:
            return { ...state, ticketsLoading: true };
        case TYPES.LOADING_NEW_TICKETS:
            return { ...state, ticketsLoading: true };
        case TYPES.LOADING_PENDING_TICKETS:
            return { ...state, ticketsLoading: true };
        case TYPES.LOADING_RESOLVED_TICKETS:
            return { ...state, ticketsLoading: true };
        case TYPES.SET_TICKET:
            return { ...state, tickets: payload, ticketsLoading: false };
        case TYPES.SET_NEW_TICKET:
            return { ...state, newTickets: payload, ticketsLoading: false };
        case TYPES.SET_PENDING_TICKET:
            return { ...state, pendingTickets: payload, ticketsLoading: false };
        case TYPES.SET_RESOLVED_TICKET:
            return { ...state, resolvedTickets: payload, ticketsLoading: false };
        case TYPES.SET_ERRORS:
            return { ...state, errors: payload, ticketsLoading: false };
        case TYPES.CLEAR_ERRORS:
            return { ...state, errors: {}, ticketsLoading: false };
        default:
            return state;
    }
};
