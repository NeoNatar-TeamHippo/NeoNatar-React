import { SAVED_LOCATION_URL, TYPE } from './constants';

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
export const deleteSavedlocationById = id => {
    const token = localStorage.getItem('FBToken');
    const parameters = {
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
        method: 'DELETE',
        mode: 'cors',
    };
    return fetch(`${SAVED_LOCATION_URL}/${id}`, parameters)
        .then(response => response.json())
        .then(json => json);
};
export const newSavedLocation = data => {
    const token = localStorage.getItem('FBToken');
    const parameters = {
        body: JSON.stringify(data),
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
        method: 'POST',
        mode: 'cors',
    };
    return fetch(`${SAVED_LOCATION_URL}`, parameters)
        .then(response => response.json())
        .then(json => json);
};
export const locationOperationService = (data, id, queryType) => {
    const token = localStorage.getItem('FBToken');
    const parameters = {
        body: JSON.stringify({ locations: data }),
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
        method: 'PATCH',
        mode: 'cors',
    };
    return fetch(`${SAVED_LOCATION_URL}/${id}${TYPE}${queryType}`, parameters)
        .then(response => response.json())
        .then(json => json);
};
