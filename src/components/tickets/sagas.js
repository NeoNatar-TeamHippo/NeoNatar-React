import { takeEvery, call, put } from 'redux-saga/effects';
import * as TYPES from './actionType';
import {
    setErrors,
    setTicket,
    setNewTicket,
    setPendingTicket,
    setResolvedTicket,
    setTicketById,
    postingTicket,
    postingTicketMessage,
    postSuccess,
    loadingTicketById,
    loadingTickets,
    loadingNewTickets,
    loadingPendingTickets,
    loadingResolvedTickets,
    resolvingTicket
} from './actions';
import {
    allTickets,
    postTicket,
    postTicketMessages,
    markTicketAsResolved,
    newTickets,
    pendingTickets,
    ticketById,
    resolvedTickets
} from './services';

function* getAllTickets() {
    try {
        yield put(loadingTickets());
        const res = yield call(allTickets);
        if (res.status === 'success') {
            yield put(setTicket(res.data));
        } else {
            yield put(setErrors({ message: res.message }));
        }
    } catch (error) {
        yield put(setErrors({ message: 'Something went wrong please try again' }));
    }
}

function* getTicketsEffect() {
    yield call(getAllTickets);
}

function* postNewTicket(payload) {
    try {
        yield put(postingTicket());
        const res = yield call(postTicket(payload));
        if (res.status === 'success') {
            yield put(postSuccess({ message: 'ticket Created succesfully' }));
        } else {
            yield put(setErrors({ message: res.message }));
        }
    } catch (error) {
        yield put(setErrors({ message: 'Something went wrong please try again' }));
    }
}

function* postTicketEffect({ payload }) {
    yield call(postNewTicket, payload);
}

function* postTicketMessage(payload, id) {
    try {
        yield put(postingTicketMessage());
        const res = yield call(postTicketMessages(payload, id));
        if (res.status === 'success') {
            yield put(postSuccess({ message: ' New Ticket Message Created succesfully' }));
        } else {
            yield put(setErrors({ message: res.message }));
        }
    } catch (error) {
        yield put(setErrors({ message: 'Something went wrong please try again' }));
    }
}

function* postTicketMessageEffect({ payload, id }) {
    yield call(postTicketMessage, payload, id);
}

function* getSingleTicket(id) {
    try {
        yield put(loadingTicketById());
        const res = yield call(ticketById, id);
        console.log(res);
        if (res.status === 'success') {
            yield put(setTicketById(res.data));
        } else {
            yield put(setErrors({ message: res.message }));
        }
    } catch (error) {
        yield put(setErrors({ message: 'Something went wrong please try again' }));
    }
}
function* getTicketsByIdEffect({ payload }) {
    yield call(getSingleTicket, payload);
}

function* markTicketResolved(id) {
    try {
        yield put(resolvingTicket());
        const res = yield call(markTicketAsResolved, id);
        if (res.status === 'success') {
            yield put(postSuccess({ message: 'Ticket Marked as Resolved' }));
        } else {
            yield put(setErrors({ message: res.message }));
        }
    } catch (error) {
        yield put(setErrors({ message: 'Something went wrong please try again' }));
    }
}
function* markTicketResolvedEffect({ payload }) {
    yield call(markTicketResolved, payload);
}

function* getNewTickets() {
    try {
        yield put(loadingNewTickets());
        const res = yield call(newTickets);
        if (res.status === 'success') {
            yield put(setNewTicket(res.data));
        } else {
            yield put(setErrors({ message: res.message }));
        }
    } catch (error) {
        yield put(setErrors({ message: 'Something went wrong please try again' }));
    }
}
function* getNewTicketsEffect() {
    yield call(getNewTickets);
}

function* getPendingTickets() {
    try {
        yield put(loadingPendingTickets());
        const res = yield call(pendingTickets);
        if (res.status === 'success') {
            yield put(setPendingTicket(res.data));
        } else {
            yield put(setErrors({ message: res.message }));
        }
    } catch (error) {
        yield put(setErrors({ message: 'Something went wrong please try again' }));
    }
}
function* getPendingTicketsEffect() {
    yield call(getPendingTickets);
}

function* getResolvedTickets() {
    try {
        yield put(loadingResolvedTickets());
        const res = yield call(resolvedTickets);
        if (res.status === 'success') {
            yield put(setResolvedTicket(res.data));
        } else {
            yield put(setErrors({ message: res.message }));
        }
    } catch (error) {
        yield put(setErrors({ message: 'Something went wrong please try again' }));
    }
}
function* getResolvedTicketsEffect() {
    yield call(getResolvedTickets);
}

export default function* actionWatcher() {
    yield takeEvery(TYPES.GET_TICKETS, getTicketsEffect);
    yield takeEvery(TYPES.GET_TICKETS_BY_ID, getTicketsByIdEffect);
    yield takeEvery(TYPES.POST_TICKET, postTicketEffect);
    yield takeEvery(TYPES.RESOLVE_TICKET, markTicketResolvedEffect);
    yield takeEvery(TYPES.POST_TICKET_MESSAGE, postTicketMessageEffect);
    yield takeEvery(TYPES.GET_NEW_TICKETS, getNewTicketsEffect);
    yield takeEvery(TYPES.GET_PENDING_TICKETS, getPendingTicketsEffect);
    yield takeEvery(TYPES.GET_RESOLVED_TICKETS, getResolvedTicketsEffect);
}
