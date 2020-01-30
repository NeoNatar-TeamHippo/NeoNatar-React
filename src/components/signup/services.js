import { SIGN_UP_URL } from './constants';

export const signUpService = userData => {
    const REGISTER_API_ENDPOINT = SIGN_UP_URL;

    const parameters = {
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        mode: 'cors',
    };
    return fetch(REGISTER_API_ENDPOINT, parameters)
        .then(response => response.json())
        .then(json => json);
};
