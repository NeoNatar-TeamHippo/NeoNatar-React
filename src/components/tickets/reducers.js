import * as TYPES from './actionType';

const initialState = {
    errors: {},
    ticketIdLoading: false,
    tickets: [],
    ticketsById: { messages: [] },
    ticketsLoading: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPES.LOADING_TICKETS:
            return { ...state, ticketsLoading: true };
        case TYPES.LOADING_TICKET_BY_ID:
            return { ...state, ticketIdLoading: true };
        case TYPES.SET_TICKET:
            return { ...state, tickets: payload, ticketsLoading: false };
        case TYPES.SET_TICKET_BY_ID:
            return { ...state, ticketIdLoading: false, ticketsById: payload };
        case TYPES.UPDATE_TICKET_MESSAGE:
            return { ...state,
                ticketIdLoading: false,
                ticketsById: { messages: [...state.ticketsById.messages, payload] } };
        case TYPES.SET_ERRORS:
            return { ...state, errors: payload, ticketsLoading: false };
        case TYPES.CLEAR_ERRORS:
            return { ...state, errors: {}, ticketsLoading: false };
        default:
            return state;
    }
};
