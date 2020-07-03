import { createStore, applyMiddleware } from "redux";
import getData from "../reducers/productReducers";
import thunk from "redux-thunk";
import {reducers} from '../reducers/reducers'





// En esta constante almacenamos el Store.

const store = createStore(reducers, applyMiddleware(thunk));

// Exportamos el Store para usarlo en otro archivo.
export default store 