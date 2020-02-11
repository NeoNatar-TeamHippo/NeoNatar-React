/** @constant */
export const ICONS = {
    BELL: 'bell',
    LOGOUT: 'logout',
    SEARCH: 'search',
};

/** @constant */
export const VERTICAL = 'vertical';

/** @constant */
export const LOGOUT_TEXT = 'LOG OUT';

/** @constant */
export const SETTINGS = 'Settings';

/** @constant */
export const TRANSACTIONS = 'Transactions';

const baseUrl = 'https://europe-west1-neonatar.cloudfunctions.net/api';
/** @constant */
export const USER_PROFILE = `${baseUrl}/v1/auth`;
export const NOTIFICATION_URL = `${baseUrl}/v1/notifications`;
