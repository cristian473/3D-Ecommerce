import { GET_PRODUCTS } from '../constants/searchConstants';
import { DEL_PRODUCT } from '../constants/searchConstants';
import axios from 'axios'


export const getProducts =()=> {
  return function(dispatch) {
    return fetch("http://localhost:3001/products")
      .then(response => response.json())
      .then(json => {
        console.log(json)
        dispatch({ type: GET_PRODUCTS, payload: json });
      });
  };
}

export const delProduct= () =>{
    return async function(dispatch) {
      return axios.delete("http://localhost:3001/delete/1" )
        .then(response => response.json())
        .then(json => {
          console.log(json)
          dispatch({ type: DEL_PRODUCT, payload: json });
        });
    };
  }