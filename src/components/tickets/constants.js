/** @constant */
export const DATA = [
    {
        customerName: 'Omojola Faith',
        date: '18 December 2019',
        priority: 'high',
        ticketDetails: 'Campaign is paused',
        userAvatar: 'https://firebasestorage.googleapis.com/v0/b/neonatar.appspot.com/o/Headshot-Placeholder-1.png?alt=media&token=undefined',
    },
    {
        customerName: 'Omojola Faith',
        date: '18 December 2019',
        priority: 'low',
        ticketDetails: 'Campaign is paused',
        userAvatar: 'https://firebasestorage.googleapis.com/v0/b/neonatar.appspot.com/o/Headshot-Placeholder-1.png?alt=media&token=undefined',
    },
    {
        customerName: 'Omojola Faith',
        date: '18 December 2019',
        priority: 'medium',
        ticketDetails: 'Campaign is paused',
        userAvatar: 'https://firebasestorage.googleapis.com/v0/b/neonatar.appspot.com/o/Headshot-Placeholder-1.png?alt=media&token=undefined',
    },
    {
        customerName: 'Omojola Faith',
        date: '18 December 2019',
        priority: 'medium',
        ticketDetails: 'Campaign is paused',
        userAvatar: 'https://firebasestorage.googleapis.com/v0/b/neonatar.appspot.com/o/Headshot-Placeholder-1.png?alt=media&token=undefined',
    },
];

/** @constant */
export const NEWTICKET = 'New Tickets';

/** @constant */
export const ALL = 'All';

/** @constant */
export const PENDING = 'Pending';

/** @constant */
export const RESOLVED = 'Resolved';

/** @constant */
export const NEW = 'New';

/** @constant */
export const MAIL = 'mail';

/** @constant */
export const HORIZONTAL = 'horizontal';

/** @constant */
const baseUrl = 'http://localhost:5000/neonatar/europe-west1/api';
export const TICKET_URL = `${baseUrl}/v1/tickets`;
export const NEW_TICKET_URL = `${baseUrl}/v1/tickets/new`;
export const PENDING_TICKET_URL = `${baseUrl}/v1/tickets/pending`;
export const RESOLVED_TICKET_URL = `${baseUrl}/v1/tickets/resolved`;

