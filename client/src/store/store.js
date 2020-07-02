import { createStore, applyMiddleware } from "redux";
import getData from "../reducers/productReducers";
import thunk from "redux-thunk";
import Axios from "axios";



const initialState = {
  products: [],
  categories:[],
}

// En esta constante almacenamos el Store.


const store = createStore(getData, applyMiddleware(thunk));

// Exportamos el Store para usarlo en otro archivo.
export  {store, initialState}