/** @constant */
export const LOCATIONS = 'Locations: ';
/** @constant */
export const APPROVED = 'Approved: ';
/** @constant */
export const EXPIRES = 'Expires: ';
/** @constant */
export const PENDING = 'Pending';
/** @constant */
export const PEND = 'pending';
/** @constant */
export const APPROVECAMPAIGN = 'Approve Campaign';
/** @constant */
export const ALLCAMPAIGNS = 'All Campaigns';
/** @constant */
export const ALL = 'All';
/** @constant */
export const APPROVE = 'Approved';
/** @constant */
export const HORIZONTAL = 'horizontal';

/** @constant */

export const NEXT = 'Next';
export const DONE = 'Done';
export const PREVIOUS = 'Previous';
export const TOTAL = 'Total:';
export const RELOAD = 'Reload';
export const VIEW = 'View';
export const PROCEED = 'Proceed';
const baseUrl = 'https://europe-west1-neonatar.cloudfunctions.net';
export const CAMPAIGN_URL = `${baseUrl}/api/v1/campaign`;
export const NAIRASIGN = '&#8358;';
export const CAMPAIGN_LENGTH_TEXT = ' How long should your campaign last ?';
export const SELECT_A_LOCATION = 'Please select locations to get a total';
export const CHOOSE_A_TITLE = 'Input campaign title:';
export const CHOOSE_PREVIOUS_VIDEO = 'Choose from previous videos:';
export const REVIEW_TEXT = " It's currently under review and will be posted once approved";
export const YOU_CAN_VIEW = ' You can view the status';
export const OR_GO_TO = ' or got to campaign section';
export const HERE = 'here';
export const CHOOSE_SAVED_LOCATION = 'Choose from saved location';
export const REFERENCE_VALUE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=';
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
        title: 'a day',
        value: 1,
    },
    {
        title: '2 days',
        value: 2,
    },
    {
        title: '3 days',
        value: 3,
    },
    {
        title: '5 days',
        value: 5,
    },
    {
        title: '1 week',
        value: 7,
    },
    {
        title: '2 weeks',
        value: 14,
    },
];
