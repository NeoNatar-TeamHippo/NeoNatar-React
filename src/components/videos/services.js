import { COMMERCIALS_URL, TYPE } from './constants';

export const allVideos = () => {
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

export const postVideos = action => {
    const token = localStorage.getItem('FBToken');
    const { payload } = action;
    const parameters = {
        body: JSON.stringify(payload),
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
        method: 'POST',
        mode: 'cors',
    };
    return fetch(COMMERCIALS_URL, parameters)
        .then(response => response.json())
        .then(json => json);
};

export const deleteVideoById = id => {
    const token = localStorage.getItem('FBToken');
    const parameters = {
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
        method: 'DELETE',
        mode: 'cors',
    };
    return fetch(`${COMMERCIALS_URL}/${id}`, parameters)
        .then(response => response.json())
        .then(json => json);
};

export const updateVideoById = (data, id, queryType) => {
    const token = localStorage.getItem('FBToken');
    const parameters = {
        body: JSON.stringify({ locations: data }),
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
        method: 'PUT',
        mode: 'cors',
    };
    return fetch(`${COMMERCIALS_URL}/${id}${TYPE}${queryType}`, parameters)
        .then(response => response.json())
        .then(json => json);
};
