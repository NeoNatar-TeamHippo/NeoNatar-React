import { NEW_TICKET_URL, PENDING_TICKET_URL, RESOLVED_TICKET_URL, TICKET_URL } from './constants';

export const allTickets = () => {
    const token = localStorage.getItem('FBToken');
    const parameters = {
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
        method: 'GET',
        mode: 'cors',
    };
    return fetch(TICKET_URL, parameters)
        .then(response => response.json())
        .then(json => json);
};

export const newTickets = () => {
    const token = localStorage.getItem('FBToken');
    const parameters = {
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
        method: 'GET',
        mode: 'cors',
    };
    return fetch(NEW_TICKET_URL, parameters)
        .then(response => response.json())
        .then(json => json);
};

export const pendingTickets = () => {
    const token = localStorage.getItem('FBToken');
    const parameters = {
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
        method: 'GET',
        mode: 'cors',
    };
    return fetch(PENDING_TICKET_URL, parameters)
        .then(response => response.json())
        .then(json => json);
};

export const resolvedTickets = () => {
    const token = localStorage.getItem('FBToken');
    const parameters = {
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
        method: 'GET',
        mode: 'cors',
    };
    return fetch(RESOLVED_TICKET_URL, parameters)
        .then(response => response.json())
        .then(json => json);
};
