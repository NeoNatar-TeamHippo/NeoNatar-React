import { UPDATE_VIDEOS, UPLOAD_VIDEOS } from './actionTypes';

const initialState = {
    isVideoUploaded: false,
    videos: [],
};

export default (state = { ...initialState }, action) => {
    switch (action.type) {
        case UPDATE_VIDEOS: {
            const { payload: videos } = action;
            return {
                ...state,
                isVideoUploaded: false,
                videos: [...videos],
            };
        }

        case UPLOAD_VIDEOS: {
            const { videos } = state;
            const { payload: newVideo } = action;
            return {
                ...state,
                isVideoUploaded: true,
                videos: [...newVideo, ...videos],
            };
        }

        default:
            return state;
    }
};
