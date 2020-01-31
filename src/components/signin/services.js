import { SIGN_IN_URL } from './constants';

export const signInService = userData => {
    const SIGN_IN_ENDPOINT = SIGN_IN_URL;

    const parameters = {
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        mode: 'cors',
    };

    return fetch(SIGN_IN_ENDPOINT, parameters)
        .then(response => response.json())
        .then(json => json);
};
