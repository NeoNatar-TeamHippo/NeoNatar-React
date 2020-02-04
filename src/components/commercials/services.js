import { COMMERCIALS_URL } from './constants';

export const getCommercialService = async () => {
    const token = localStorage.getItem('FBToken');
    const parameters = {
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
        method: 'GET',
        mode: 'cors',
    };
    const response = await fetch(COMMERCIALS_URL, parameters);
    const resData = await response.json();

    return resData;
};

export const postCommercialService = async data => {
    const token = localStorage.getItem('FBToken');
    const parameters = {
        body: data,
        headers: {
            Authorization: token,
        },
        method: 'POST',
        mode: 'cors',
    };
    const response = await fetch(COMMERCIALS_URL, parameters);
    const resData = await response.json();

    return resData;
};

export const deleteCommercialById = async id => {
    const token = localStorage.getItem('FBToken');
    const parameters = {
        headers: {
            Authorization: token,
        },
        method: 'DELETE',
        mode: 'cors',
    };
    const response = await fetch(`${COMMERCIALS_URL}/${id}`, parameters);
    const resData = await response.json();

    return resData;
};
