import { GET_SEARCH, INPUT_CHANGE} from '../constants/searchConstants';
// import {initialState} from '../store/store'
const initialState = [];
  


function searchReducer(state = initialState, action) {
    
    if (action.type === GET_SEARCH){

        return action.payload
        
    }

    if (action.type === INPUT_CHANGE){
        return action.payload
    }
    
  return state;
}

export default searchReducer;