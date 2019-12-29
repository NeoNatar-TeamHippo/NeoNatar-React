/** @constant */
export const ALL_COMMERCIALS = 'All Commercials';

/** @constant */
export const UPLOAD = 'Upload';

/** @constant */
export const FILE_TYPE = 'File types accepted include: .mp4';

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
