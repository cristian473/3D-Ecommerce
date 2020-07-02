import {combineReducers} from 'redux'
import getData from './productReducers'
import getDataCategories from './crudCategoryReducers'
import searchReducer from './searchReducer'

export const reducers = combineReducers({
    products: getData,
    categories: getDataCategories,
    search: searchReducer
})