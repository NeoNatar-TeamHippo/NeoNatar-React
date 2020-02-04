import { takeEvery, call, put, take, fork } from 'redux-saga/effects';
import { eventChannel as EventChannel } from 'redux-saga';
import moment from 'moment';

import * as TYPES from './actionType';
import {
    setTicket,
    setTicketById,
    postingTicket,
    postingTicketMessage,
    postSuccess,
    loadingTicketById,
    loadingTickets,
    resolvingTicket
} from './actions';
import { postTicket, postTicketMessages, markTicketAsResolved } from './services';

import { firebaseTickets } from '../utils/firebase';

function* startTicketListener(payload) {
    const { isAdmin, userId } = payload;
    yield put(loadingTickets());
    const channel = new EventChannel(emiter => {
        if (isAdmin) {
            firebaseTickets.onSnapshot(snapshot => {
                emiter({ data: snapshot.docs || [] });
            });
        } else {
            firebaseTickets.where('createdBy', '==', userId).onSnapshot(snapshot => {
                emiter({ data: snapshot.docs || [] });
            });
        }
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
            const { createdAt, customerName, avatar } = ticket;

            return ({
                customerDetail: { avatar, customerName },
                date: (new Date(createdAt)).toDateString(),
                ...ticket,
            });
        });
        yield put(setTicket(ticketData));
    }
}

function* getTicketsEffect({ payload }) {
    yield fork(startTicketListener, payload);
}

function* postNewTicket(payload) {
    try {
        yield put(postingTicket());
        const res = yield call(postTicket, payload);
        if (res.status === 'success') {
            yield put(postSuccess({ message: 'ticket Created succesfully' }));
        } else {
            console.log(res.message);
        }
    } catch (error) {
        console.error(error);
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
            console.log(res.message);
        }
    } catch (error) {
        console.error(error);
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
                firebaseTickets.doc(id).off();
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
        console.error(error);
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
            console.log(res.message);
        }
    } catch (error) {
        console.error(error);
    }
}
function* markTicketResolvedEffect({ payload }) {
    yield call(markTicketResolved, payload);
}

export default function* actionWatcher() {
    yield takeEvery(TYPES.GET_TICKETS, getTicketsEffect);
    yield takeEvery(TYPES.GET_TICKETS_BY_ID, getTicketsByIdEffect);
    yield takeEvery(TYPES.POST_TICKET, postTicketEffect);
    yield takeEvery(TYPES.RESOLVE_TICKET, markTicketResolvedEffect);
    yield takeEvery(TYPES.POST_TICKET_MESSAGE, postTicketMessageEffect);
}
