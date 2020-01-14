/** @constant */
export const FOOTER_TEXT = 'NEONATAR ©2018, TEAM HIPPO';

/** @constant */
export const INLINE = 'inline';
/** @constant */
export const THEME = 'light';

/** @constant */
export const SIDE_BAR = 'side-bar';
/** @constant */
export const LOGOUT_TEXT = 'LOG OUT';

/** @constant */
export const ADMIN_SIDE_MENU_ITEMS = [
    { iconType: 'dashboard', label: 'Overview', link: '/dashboard' },
    // @TODO: dont forget to remove this from admin part, an admin is not meant to create a campaign
    { iconType: 'video-camera', label: 'New Campaign', link: '/dashboard/new-campaigns' },
    { iconType: 'environment', label: 'Locations', link: '/dashboard/locations' },
    { iconType: 'play-square', label: 'Videos', link: '/dashboard/commercials' },
    { iconType: 'sound', label: 'Campaigns', link: '/dashboard/campaigns' },
    { iconType: 'credit-card', label: 'Tickets', link: '/dashboard/tickets' },
    { iconType: 'team', label: 'Users' },
    { iconType: 'user', label: 'Staff' },
];

/** @constant */
export const CLIENT_SIDE_MENU_ITEMS = [
    { iconType: 'dashboard', label: 'Overview', link: '/dashboard' },
    { iconType: 'video-camera', label: 'New Campaign', link: '/dashboard/new-campaigns' },
    { iconType: 'play-square', label: 'Videos', link: '/dashboard/commercials' },
    { iconType: 'environment', label: 'Locations', link: '/dashboard/locations' },
    { iconType: 'pushpin', label: 'Saved Locations', link: '/dashboard/savedLocations' },
    { iconType: 'credit-card', label: 'Tickets', link: '/dashboard/tickets' },
];
