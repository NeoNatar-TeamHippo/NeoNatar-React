/** @constant */
export const LOCATION = '/location';
/** @constant */
export const OUR_LOCATION = 'Locations';
/** @constant */
export const ADD_SELECTED = 'Add Selected';
/** @constant */
export const SORT = 'SORT  |';
/** @constant */
export const FILTER = 'FILTER';
/** @constant */
export const RELOAD = 'Reload';
/** @constant */
export const PERWEEK = '/day';
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
export const NEW_LOCATION = 'New Location';
/** @constant */
export const CREATE_LOCATION = 'Create';
/** @constant */
export const UPLOAD_TEXT = 'Images';
/** @constant */
export const CREATE_NEW_LOCATION = 'Create New Location';
/** @constant */
const baseUrl = 'https://europe-west1-neonatar.cloudfunctions.net/api';
export const LOCATION_URL = `${baseUrl}/v1/locations`;
/** @constant */
export const TABLE_VALUES = [];
/** @constant */
export const FORM_ITEMS = [
    {
        formControlName: 'name',
        message: 'Name cannot be empty',
        placeholder: 'Name',
        required: true,
        type: 'text',
    },
    {
        formControlName: 'address',
        message: 'Address cannot be empty',
        placeholder: 'Address',
        required: true,
        type: 'textarea',
    },
    {
        formControlName: 'lga',
        message: 'Local Government area cannot be empty',
        placeholder: 'Local Government',
        required: true,
        type: 'text',
    },
    {
        formControlName: 'state',
        message: 'State cannot be empty',
        placeholder: 'State',
        required: true,
        type: 'text',
    },
    {
        formControlName: 'country',
        message: 'country cannot be empty',
        placeholder: 'Country',
        required: true,
        type: 'text',
    },
    {
        formControlName: 'trafficRate',
        message: 'please input a valid rate',
        placeholder: 'Traffic Rate',
        required: true,
        type: 'number',
    },
    {
        formControlName: 'price',
        message: 'please input a valid price',
        placeholder: 'Price',
        required: true,
        type: 'number',
    },
];
/** @constant */
export const FORM_ITEM_LAYOUT = {
    labelCol: {
        sm: { span: 8 },
        xs: { span: 24 },
    },
    wrapperCol: {
        sm: { span: 16 },
        xs: { span: 24 },
    },
};
/** @constant */
export const WRAPPER_COL = {
    sm: { offset: 8, span: 16 },
    xs: { offset: 0, span: 24 },
};
/** @constant */
export const SEARCH = 'SEARCH';
/** @constant */
export const RESET = 'RESET';
/** @constant */
export const NAIRASIGN = '&#8358;';
