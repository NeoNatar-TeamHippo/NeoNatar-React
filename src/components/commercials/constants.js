/** @constant */
export const ALL_COMMERCIALS = 'All Commercials';

/** @constant */
export const UPLOAD = 'Video Upload';

/** @constant */
export const FILE_TYPE = 'File types accepted include: .mp4';

/** @constant */
export const TABLE_VALUES = [
    {
        dataIndex: 'title',
        key: 'title',
        title: 'Title',
    },
    {
        dataIndex: 'description',
        key: 'description',
        title: 'Description',
    },
    {
        dataIndex: 'duration',
        key: 'duration',
        title: 'Video Length',
    },
];
/** @constant */
export const NEW = 'New';
export const BACK = 'Back';
export const NEW_VIDEO = 'New Video';

/** @constant */
export const NAME = 'commercials';

export const CREATE_COMMERCIAL = 'Create Video Commercial';

/** @constant */
export const CANCEL = 'Cancel';

const baseUrl = 'http://localhost:5000/neonatar/europe-west1/api';
export const COMMERCIALS_URL = `${baseUrl}/v1/commercials`;

