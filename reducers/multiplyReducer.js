import { DOUBLE_NUMBER, TRIPLE_NUMBER } from "../actions/multiplyActions";

const initialState = {
    result: 5
};

export default multiplyReducer = (state = initialState, action) => {
    switch(action.type) {
        case DOUBLE_NUMBER:
            return {
                ...state,
                result: state.result * 2
            }
        case TRIPLE_NUMBER:
            return {
                ...state,
                result: state.result * 3
            }
        default: return state;
    }
}