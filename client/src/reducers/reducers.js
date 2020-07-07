import { combineReducers } from 'redux'
import { getData, Detail, CartReducers } from './productReducers'
import getDataCategories from './crudCategoryReducers'
import searchReducer from './searchReducer'

// creemos que esto es el STORE  //
export const reducers = combineReducers({
    products: getData,
    categories: getDataCategories,
    search: searchReducer,
    detail: Detail,
    cart: CartReducers
})