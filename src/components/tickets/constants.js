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
export const VERTICAL = 'vertical';

/** @constant */
export const CREATETICKET = 'Create Ticket';

/** @constant */
export const CREATE = 'Create';

/** @constant */
export const TITLEMESSAGE = 'Please input the title for your ticket';

/** @constant */
export const TITLE = 'title';

/** @constant */
export const PRIORITYMESSAGE = 'Please select the priority of your ticket';

/** @constant */
export const PRIORITY = 'priority';

/** @constant */
export const HIGHOPTION = 'high';

/** @constant */
export const LOWOPTION = 'low';

/** @constant */
export const MEDIUMOPTION = 'medium';

/** @constant */
export const FORMITEMLAYOUT = {
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
const baseUrl = 'http://localhost:5000/neonatar/europe-west1/api';
export const TICKET_URL = `${baseUrl}/v1/tickets`;
export const NEW_TICKET_URL = `${baseUrl}/v1/tickets/new`;
export const PENDING_TICKET_URL = `${baseUrl}/v1/tickets/pending`;
export const RESOLVED_TICKET_URL = `${baseUrl}/v1/tickets/resolved`;

