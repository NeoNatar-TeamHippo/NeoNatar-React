import { USER_PROFILE } from './constants';

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
