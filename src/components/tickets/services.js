import { TICKET_URL } from './constants';

export const allTickets = async () => {
    const token = localStorage.getItem('FBToken');
    const parameters = {
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
        method: 'GET',
        mode: 'cors',
    };
    const response = await fetch(TICKET_URL, parameters);
    const data = await response.json();

    return data;
};

export const postTicket = async payload => {
    const token = localStorage.getItem('FBToken');
    const parameters = {
        body: JSON.stringify(payload),
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
        method: 'POST',
    };
    const response = await fetch(TICKET_URL, parameters);
    const data = await response.json();

    return data;
};

export const ticketById = async id => {
    const token = localStorage.getItem('FBToken');
    const parameters = {
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
        method: 'GET',
        mode: 'cors',
    };
    const response = await fetch(`${TICKET_URL}/${id}`, parameters);
    const data = await response.json();

    return data;
};

export const postTicketMessages = async payload => {
    const { id, content } = payload;
    const token = localStorage.getItem('FBToken');
    const parameters = {
        body: JSON.stringify({ body: content }),
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
        method: 'POST',
    };
    const response = await fetch(`${TICKET_URL}/${id}`, parameters);
    const data = await response.json();

    return data;
};

export const markTicketAsResolved = id => {
    const token = localStorage.getItem('FBToken');
    const parameters = {
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
        method: 'PATCH',
    };

    return fetch(`${TICKET_URL}/${id}`, parameters)
        .then(response => response.json())
        .then(json => json);
};
