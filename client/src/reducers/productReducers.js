import { GET_PRODUCTS , GET_SEARCH, DEL_PRODUCT, ADD_PRODUCT, GET_PRODUCTS_BY_CATEGORY, GET_PRODUCT_DETAIL} from '../constants/searchConstants';
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

    if (action.type === GET_PRODUCTS_BY_CATEGORY){
        return action.payload
    }


    if (action.type === DEL_PRODUCT){
        
        return state.filter(pro => pro.id !== action.payload)
        
    }

    if (action.type === GET_PRODUCT_DETAIL){
        
        return action.payload
        
    }

    if (action.type === ADD_PRODUCT){
        return state.concat(action.payload)
    }
    
  return state;
}

export default getData;