import { GET_PRODUCTS , GET_SEARCH, DEL_PRODUCT} from '../constants/searchConstants';
import {initialState} from '../store/store'




function getData(state = initialState, action) {
    if (action.type === GET_PRODUCTS) {
        
        return {
            ...state,
            products: action.payload
        }                
    }
    if (action.type === GET_SEARCH){
        return {
            ...state,
            products: action.payload
        }
    }

    if (action.type === DEL_PRODUCT){
        return {
            ...state,
            products: state.products.filter(pro => pro.id !== action.payload)
        }
    }
    
  return state;
}

export default getData;