import { GET_PRODUCTS , GET_SEARCH, DEL_PRODUCT, ADD_PRODUCT} from '../constants/searchConstants';
// import {initialState} from '../store/store'
import {useSelector} from 'react-redux'
const initialState = [];
  


function getData(state = initialState, action) {
    if (action.type === GET_PRODUCTS) {
        
        return action.payload
           
    }
    if (action.type === GET_SEARCH){

        return action.payload
        
    }

    if (action.type === DEL_PRODUCT){
        return {
            ...state,
            products: state.products.filter(pro => pro.id !== action.payload)
        }
    }

    if (action.type === ADD_PRODUCT){

        return state.concat (action.payload)
    }
    
  return state;
}

export default getData;