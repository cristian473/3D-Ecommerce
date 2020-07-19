import { GET_ORDERS } from '../constants/searchConstants';
const initialState = [];

function orderReducer(state = initialState, action) {

    if (action.type === GET_ORDERS) {
        return action.payload
    }

    return state;
}

export default orderReducer;