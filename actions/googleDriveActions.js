export const FETCH_GOOGLE_DRIVE_FILES_BEGIN = 'FETCH_GOOGLE_DRIVE_FILES_BEGIN';
export const FETCH_GOOGLE_DRIVE_FILES_SUCCESS = 'FETCH_GOOGLE_DRIVE_FILES_SUCCESS';
export const FETCH_GOOGLE_DRIVE_FILES_FAILURE = 'FETCH_GOOGLE_DRIVE_FILES_FAILURE';

export const fetchGdFiles = (extensions = ['*']) => {
    return dispatch => {
        dispatch(beginFetchGdFiles());
        return fetch(`http://www.music-app-api.somee.com/api/google-drive-music-files/${extensions.join(',')}`)
            .then(response => response.json())
            .then(responseData => {
                dispatch(fetchGdFilesSuccess(responseData));
                return responseData;
            }).catch(error => {
                dispatch(fetchGdFilesFailed(error));
                return error;
            })
    }
}

const beginFetchGdFiles = () => ({
    type: FETCH_GOOGLE_DRIVE_FILES_BEGIN
});

const fetchGdFilesSuccess = (files = []) => ({
    type: FETCH_GOOGLE_DRIVE_FILES_SUCCESS,
    payload: {
        files
    }
});

const fetchGdFilesFailed = (error) => ({
    type: FETCH_GOOGLE_DRIVE_FILES_FAILURE,
    payload: {
        error
    }
});