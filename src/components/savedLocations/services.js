import { SAVED_LOCATION_URL } from './constants';

export const allSavedLocation = () => {
    const token = localStorage.getItem('FBToken');
    const parameters = {
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
        method: 'GET',
        mode: 'cors',
    };
    return fetch(SAVED_LOCATION_URL, parameters)
        .then(response => response.json())
        .then(json => json);
};
export const savedlocationById = id => {
    const token = localStorage.getItem('FBToken');
    const parameters = {
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
        method: 'GET',
        mode: 'cors',
    };
    return fetch(`${SAVED_LOCATION_URL}/${id}`, parameters)
        .then(response => response.json())
        .then(json => json);
};
