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
const baseUrl = 'https://europe-west1-neonatar.cloudfunctions.net/api/v1';
export const TICKET_URL = `${baseUrl}/v1/tickets`;
export const NEW_TICKET_URL = `${baseUrl}/v1/tickets/new`;
export const PENDING_TICKET_URL = `${baseUrl}/v1/tickets/pending`;
export const RESOLVED_TICKET_URL = `${baseUrl}/v1/tickets/resolved`;

