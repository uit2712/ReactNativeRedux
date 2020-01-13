import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import multiplyReducer from "./multiplyReducer";
import googleDriveReducer from "./googleDriveReducer";

export default reducer = combineReducers({
    counter: counterReducer,
    multiply: multiplyReducer,
    googleDrive: googleDriveReducer
})