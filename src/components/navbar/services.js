import { USER_PROFILE } from './constants';

const token = localStorage.getItem('FBToken');
export const getUserProfile = () => {
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
