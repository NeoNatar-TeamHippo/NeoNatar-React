import { USER_PROFILE } from './constants';

export const getUserProfile = (token) => {
    // const token = localStorage.getItem('FBToken');
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
