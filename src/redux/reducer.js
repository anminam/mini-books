/*
 * Reducer
 */
import {INCREMENT} from 'redux/actions'
export const initialState = {
    value: 0
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + action.addBy
            });
        default:
            return state;
    }
}

export default reducer;