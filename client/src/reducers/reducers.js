import {combineReducers} from 'redux'
import getData from './productReducers'
import getDataCategories from './crudCategoryReducers'

export const reducers = combineReducers({
    products: getData,
    categories: getDataCategories
})