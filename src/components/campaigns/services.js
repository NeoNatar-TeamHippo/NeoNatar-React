import { CAMPAIGN_URL } from './constants';

export const allCampaigns = async () => {
    const token = localStorage.getItem('FBToken');
    const parameters = {
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
        method: 'GET',
        mode: 'cors',
    };
    const response = await fetch(CAMPAIGN_URL, parameters);
    const data = await response.json();
    return data;
};

export const campaignById = async id => {
    const token = localStorage.getItem('FBToken');
    const parameters = {
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
        method: 'GET',
        mode: 'cors',
    };
    const response = await fetch(`${CAMPAIGN_URL}/${id}`, parameters);
    const data = await response.json();
    return data;
};

export const approveCampaigns = async id => {
    const token = localStorage.getItem('FBToken');
    const parameters = {
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
        method: 'PUT',
        mode: 'cors',
    };
    const response = await fetch(`${CAMPAIGN_URL}/${id}/approved`, parameters);
    const data = await response.json();
    return data;
};
