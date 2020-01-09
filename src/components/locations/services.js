import { LOCATION_URL } from './constants';

export const allLocation = () => {
    const token = localStorage.getItem('FBToken');
    const parameters = {
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
        method: 'GET',
        mode: 'cors',
    };
    return fetch(LOCATION_URL, parameters)
        .then(response => response.json())
        .then(json => json);
};
export const postNewLocation = async data => {
    const token = localStorage.getItem('FBToken');
    const parameters = {
        body: data,
        headers: {
            Authorization: token,
        },
        method: 'POST',
        mode: 'cors',
    };
    const response = await fetch(LOCATION_URL, parameters);
    const resData = await response.json();
    return resData;
};
export const locationById = id => {
    const token = localStorage.getItem('FBToken');
    const parameters = {
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
        method: 'GET',
        mode: 'cors',
    };
    return fetch(`${LOCATION_URL}/${id}`, parameters)
        .then(response => response.json())
        .then(json => json);
};
