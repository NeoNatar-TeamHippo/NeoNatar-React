import { USER_PROFILE, NOTIFICATION_URL } from './constants';

export const getUserProfile = token => {
    const parameters = {
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
        method: 'GET',
        mode: 'cors',
    };

    return fetch(USER_PROFILE, parameters)
        .then(response => response.json())
        .then(json => json);
};
export const getAllNotifications = token => {
    const parameters = {
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
        method: 'GET',
        mode: 'cors',
    };

    return fetch(NOTIFICATION_URL, parameters)
        .then(response => response.json())
        .then(json => json);
};
export const markReadRequest = (token, data) => {
    const parameters = {
        body: JSON.stringify(data),
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
        method: 'POST',
        mode: 'cors',
    };

    return fetch(NOTIFICATION_URL, parameters)
        .then(response => response.json())
        .then(json => json);
};

