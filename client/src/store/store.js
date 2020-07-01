import { createStore, applyMiddleware } from "redux";
import getData from "../reducers/productReducers";
import thunk from "redux-thunk";
import Axios from "axios";



var initialState = {
  products: [],
  categories: [],
}

// En esta constante almacenamos el Store.
Axios.get('http://localhost:3001/products')
  .then(response => {
    initialState.products = response.data
    console.log(initialState)
  })


const store = createStore(getData, applyMiddleware(thunk));

// Exportamos el Store para usarlo en otro archivo.
export { store, initialState }