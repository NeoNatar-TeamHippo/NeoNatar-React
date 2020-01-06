/** @constant */

export const NEXT = 'Next';
export const DONE = 'Done';
export const PREVIOUS = 'Previous';
const baseUrl = 'http://localhost:5000/neonatar/europe-west1';
export const CAMPAIGN_URL = `${baseUrl}/api/v1/campaign`;
export const TABLE_VALUES = [
    {
        dataIndex: 'name',
        key: 'name',
        title: 'Name',
    },
    {
        dataIndex: 'state',
        key: 'state',
        title: 'State',
    },
    {
        dataIndex: 'lga',
        key: 'lga',
        title: 'Local Govt',
    },
];
export const SELECT_OPTIONS = [
    {
        value: 1,
        title: 'a day',
    },
    {
        value: 2,
        title: '2 days',
    },
    {
        value: 3,
        title: '3 days',
    },
    {
        value: 5,
        title: '5 days',
    },
    {
        value: 7,
        title: '1 week',
    },
    {
        value: 14,
        title: '2 weeks',
    },
];