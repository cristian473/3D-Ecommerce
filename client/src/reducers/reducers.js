import { combineReducers } from 'redux'
import { getData, Detail, CartReducers } from './productReducers'
import getDataCategories from './crudCategoryReducers'
import searchReducer from './searchReducer'
import orderReducer from './orderReducer'
import getDataUser from './crudUserReducers'

export const reducers = combineReducers({
    products: getData,
    categories: getDataCategories,
    search: searchReducer,
    detail: Detail,
    cart: CartReducers,
    orders: orderReducer,
    users: getDataUser
})