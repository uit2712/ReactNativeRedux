import { FETCH_GOOGLE_DRIVE_FILES_BEGIN, FETCH_GOOGLE_DRIVE_FILES_SUCCESS, FETCH_GOOGLE_DRIVE_FILES_FAILURE } from "../actions/googleDriveFilesActions";


const initialState = {
    gdFiles: [],
    loading: false,
    error: null
};

export default googleDriveFilesReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_GOOGLE_DRIVE_FILES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_GOOGLE_DRIVE_FILES_SUCCESS:
            return {
                ...state,
                loading: false,
                gdFiles: action.payload.gdFiles
            };
        case FETCH_GOOGLE_DRIVE_FILES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                gdFiles: []
            };
        default: return state;
    }
}