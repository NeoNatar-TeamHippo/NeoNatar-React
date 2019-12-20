/** @constant */
export const LOCATION = '/location';
/** @constant */
export const OUR_LOCATION = 'Our Locations';
/** @constant */
export const ADD_SELECTED = 'Add Selected';
/** @constant */
export const SORT = 'SORT  |';
/** @constant */
export const FILTER = 'FILTER';
/** @constant */
export const RELOAD = 'Reload';
/** @constant */
export const PERWEEK = '/week';
/** @constant */
export const NAIRA = 'N';
/** @constant */
export const STATE = 'State:';
/** @constant */
export const LOCAL_GOVERNMENT = 'Local Government:';
/** @constant */
export const ADDRESS = 'Address:';
/** @constant */
export const NO_SAVED_LOCATION = 'No saved locations';
/** @constant */
const baseUrl = 'https://europe-west1-neonatar.cloudfunctions.net/api';
export const LOCATION_URL = `${baseUrl}/v1/locations`;

export const TABLE_VALUES = [
    {
        dataIndex: 'name',
        key: 'name',
        title: 'Name',
    },
    {
        dataIndex: 'address',
        key: 'address',
        title: 'Address',
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
