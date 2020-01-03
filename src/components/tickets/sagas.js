import { takeEvery, call, put, take, fork } from 'redux-saga/effects';
import { eventChannel as EventChannel } from 'redux-saga';
import moment from 'moment';
import * as TYPES from './actionType';
import {
    setErrors,
    setTicket,
    setTicketById,
    postingTicket,
    postingTicketMessage,
    postSuccess,
    loadingTicketById,
    loadingTickets,
    resolvingTicket
} from './actions';
import {
    allTickets,
    postTicket,
    postTicketMessages,
    markTicketAsResolved
} from './services';

import { firebaseTickets } from '../utils/firebase';

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
        const res = yield call(postTicket, payload);
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

function* postTicketMessage(payload) {
    try {
        yield put(postingTicketMessage());
        const res = yield call(postTicketMessages, payload);
        if (res.status === 'success') {
            yield put(postSuccess({ message: ' New Ticket Message Created succesfully' }));
        } else {
            yield put(setErrors({ message: res.message }));
        }
    } catch (error) {
        yield put(setErrors({ message: 'Something went wrong please try again' }));
    }
}

function* postTicketMessageEffect({ payload }) {
    yield call(postTicketMessage, payload);
}

function* getSingleTicket(id) {
    try {
        yield put(loadingTicketById());
        const doc = firebaseTickets.doc(id);
        const channel = new EventChannel(emiter => {
            doc.onSnapshot(snapshot => {
                emiter({ data: snapshot.data() || [] });
            });
            return () => {
                firebaseTickets.off();
            };
        });

        const { data } = yield take(channel);
        const { messages } = data;
        const newData = messages.map(message => {
            const { author, avatar, content, isAdmin, createdAt } = message;
            return ({
                author,
                avatar,
                content,
                datetime: moment(createdAt).fromNow(),
                isAdmin,
            });
        });
        data.messages = newData;
        yield put(setTicketById(data));
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

function* startTicketListener() {
    const channel = new EventChannel(emiter => {
        firebaseTickets.onSnapshot(snapshot => {
            emiter({ data: snapshot.docs || [] });
        });
        return () => {
            firebaseTickets.off();
        };
    });
    while (true) {
        const { data } = yield take(channel);
        const newData = data.map(element => ({
            ...element.data(),
            ticketId: element.id,
        }));
        const ticketData = newData.map(ticket => {
            const { createdAt } = ticket;
            return ({
                date: (new Date(createdAt)).toDateString(),
                ...ticket,
            });
        });
        yield put(setTicket(ticketData));
    }
}

export default function* actionWatcher() {
    yield takeEvery(TYPES.GET_TICKETS, getTicketsEffect);
    yield takeEvery(TYPES.GET_TICKETS_BY_ID, getTicketsByIdEffect);
    yield takeEvery(TYPES.POST_TICKET, postTicketEffect);
    yield takeEvery(TYPES.RESOLVE_TICKET, markTicketResolvedEffect);
    yield takeEvery(TYPES.POST_TICKET_MESSAGE, postTicketMessageEffect);
    yield fork(startTicketListener);
}
