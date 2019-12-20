import { COMMERCIALS_URL } from './constants';

export const allCommercials = () => {
    const token = localStorage.getItem('FBToken');
    const parameters = {
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
        method: 'GET',
        mode: 'cors',
    };
    return fetch(COMMERCIALS_URL, parameters)
        .then(response => response.json())
        .then(json => json);
};

export const addCommercialsService = commercials => {
    const parameters = {
        body: JSON.stringify(commercials),
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        mode: 'cors',
    };
    return fetch(COMMERCIALS_URL, parameters)
        .then(response => response.json())
        .then(json => json);
};
