import { GET_PRODUCTS, GET_SEARCH, ADD_PRODUCT_CART, REM_PRODUCT_CART, DEL_PRODUCT, ADD_PRODUCT, GET_PRODUCTS_BY_CATEGORY, GET_PRODUCT_DETAIL, CHANGE_EDIT, EDITING_FALSE } from '../constants/searchConstants';
// import {initialState} from '../store/store'
import { useSelector } from 'react-redux'
import { GET_CART, CLEAR_CART } from '../constants/searchConstants'
const initialState = [];



export function getData(state = initialState, action) {
    if (action.type === GET_PRODUCTS) {
        
        return action.payload

    }
    if (action.type === GET_SEARCH) {

        return action.payload

    }

    if (action.type === GET_PRODUCTS_BY_CATEGORY) {
        return action.payload
    }


    if (action.type === DEL_PRODUCT) {

        return state.filter(pro => pro.id !== action.payload)

    }

    if (action.type === ADD_PRODUCT) {
        return state.concat(action.payload)
    }

    if (action.type === CHANGE_EDIT) {

        state[action.payload].isEditing = true;

        return state

    }
    if (action.type === EDITING_FALSE) {
        state.splice(action.playload, 1, action.newProduct)
        console.log(state)
        return state
    }

    return state;
}

export function Detail(state = initialState, action) {

    if (action.type === GET_PRODUCT_DETAIL) {

        return action.payload

    }

    return state

}

export function CartReducers(state = initialState, action) {

    if (action.type === ADD_PRODUCT_CART) {

        return state.concat(action.payload)

    }

    if (action.type === REM_PRODUCT_CART) {

        return action.payload
    }

    if (action.type === GET_CART) {
        return action.payload
    }

    if (action.type === CLEAR_CART) {
        return action.payload
    }
    return state

}