/** @constant */
export const ALL_COMMERCIALS = 'All Commercials';

/** @constant */
export const UPLOAD = 'Video Upload';

/** @constant */
export const FILE_TYPE = 'File types accepted include: .mp4';

/** @constant */
export const TABLE_VALUES = [
    {
        align: 'left',
        dataIndex: 'title',
        key: 'title',
        title: 'Title',
    },
    {
        align: 'left',
        dataIndex: 'description',
        key: 'description',
        title: 'Description',
    },
    {
        align: 'center',
        dataIndex: 'duration',
        key: 'duration',
        title: 'Video Length',
    },
];
/** @constant */
export const NEW = 'New';

/** @constant */
export const BACK = 'Back';

/** @constant */
export const NEW_VIDEO = 'New Video';

/** @constant */
export const NAME = 'commercials';

export const CREATE_COMMERCIAL = 'Create Video Commercial';
/** @constant */
const baseUrl = 'https://europe-west1-neonatar.cloudfunctions.net/api';

/** @constant */
export const CANCEL = 'Cancel';

/** @constant */
export const COMMERCIALS_URL = `${baseUrl}/v1/commercials`;
