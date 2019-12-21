/** @constant */
export const ALL_COMMERCIALS = 'All Commercials';

/** @constant */
export const UPLOAD = 'Upload';

/** @constant */
export const FILE_TYPE = 'File types accepted include: .mp4';

/** @constant */
export const DATA = [
    {
        briefDescription: 'Promo for subscribers to recharge N200 and get N2000...',
        key: '1',
        size: '10',
        videoDetails: 'MTN Pulse Dec Promo',
    },
    {
        briefDescription: 'Hackathon to discover mobile payment solutions for telecos subscribers',
        key: '2',
        size: '10',
        videoDetails: 'MTN Hackathon with ccHub',
    },
    {
        briefDescription: 'Wizkid concert at Eko Hotel scheduled for Dec 23rd, 2019...',
        key: '3',
        size: '100',
        videoDetails: 'Wizkid Concert with MTN',
    },
];

/** @constant */
export const NEW = 'New';

/** @constant */
export const NAME = 'commercials';

const baseUrl = 'https://europe-west1-neonatar.cloudfunctions.net/api';
export const COMMERCIALS_URL = `${baseUrl}/v1/commercials`;

/** @constant */
export const FORM_ITEM_LAYOUT = {
    labelCol: {
        sm: { span: 8 },
        xs: { span: 20 },
    },
    wrapperCol: {
        sm: { span: 16 },
        xs: { span: 20 },
    },
};
