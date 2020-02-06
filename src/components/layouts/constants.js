/** @constant */
export const FOOTER_TEXT = 'NEONATAR ©2020, Built with ❤ from California';

/** @constant */
export const INLINE = 'inline';

/** @constant */
export const THEME = 'light';

/** @constant */
export const SIDE_BAR = 'side-bar';

/** @constant */
export const GO_TO_DASHBOARD = 'Go to dashboard';

/** @constant */
export const LOGOUT_TEXT = 'LOG OUT';

/** @constant */
export const SIGNIN = 'Sign In';

/** @constant */
export const SIGNUP = 'Sign Up';

/** @constant */
export const SETTINGS = 'Settings';

/** @constant */
export const TRANSACTIONS = 'Transactions';

/** @constant */
export const ADMIN_SIDE_MENU_ITEMS = [
    { iconType: 'dashboard', label: 'Overview', link: '/dashboard' },
    { iconType: 'environment', label: 'Locations', link: '/dashboard/locations' },
    { iconType: 'play-square', label: 'Videos', link: '/dashboard/commercials' },
    { iconType: 'sound', label: 'Campaigns', link: '/dashboard/campaigns/status/All' },
    { iconType: 'credit-card', label: 'Tickets', link: '/dashboard/tickets' },
    // { iconType: 'team', label: 'Staffs' },
];

/** @constant */
export const CLIENT_SIDE_MENU_ITEMS = [
    { iconType: 'dashboard', label: 'Overview', link: '/dashboard' },
    { iconType: 'video-camera', label: 'New Campaign', link: '/dashboard/new-campaigns' },
    { iconType: 'play-square', label: 'Videos', link: '/dashboard/commercials' },
    { iconType: 'environment', label: 'Locations', link: '/dashboard/locations' },
    { iconType: 'pushpin', label: 'Saved Locations', link: '/dashboard/savedLocations' },
    { iconType: 'sound', label: 'Campaigns', link: '/dashboard/campaigns/status/All' },
    { iconType: 'credit-card', label: 'Tickets', link: '/dashboard/tickets' },
];
