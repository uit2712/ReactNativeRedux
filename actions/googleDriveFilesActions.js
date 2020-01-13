export const FETCH_GOOGLE_DRIVE_FILES_BEGIN = "FETCH_GOOGLE_DRIVE_FILES_BEGIN";
export const FETCH_GOOGLE_DRIVE_FILES_SUCCESS = "FETCH_GOOGLE_DRIVE_FILES_SUCCESS";
export const FETCH_GOOGLE_DRIVE_FILES_FAILURE = "FETCH_GOOGLE_DRIVE_FILES_FAILURE";

export const fetchGDFiles = (extensions = ['*']) => {
    return dispatch => {
        dispatch(fetchGDFilesBegin());
        return fetch(`http://www.music-app-api.somee.com/api/google-drive-music-files/${extensions.join(',')}`)
                .then(response => response.json())
                .then(responseData => {
                    dispatch(fetchGDFilesSuccess(responseData));
                    return responseData;
                })
                .catch(error => {
                    dispatch(fetchGDFilesFailure(error));
                    return error;
                });
    }
}

const fetchGDFilesBegin = () => ({
    type: FETCH_GOOGLE_DRIVE_FILES_BEGIN
});

const fetchGDFilesSuccess = (gdFiles = []) => ({
    type: FETCH_GOOGLE_DRIVE_FILES_SUCCESS,
    payload: { gdFiles }
});

const fetchGDFilesFailure = (error) => ({
    type: FETCH_GOOGLE_DRIVE_FILES_FAILURE,
    payload: { error }
});