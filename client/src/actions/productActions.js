import { GET_PRODUCTS } from '../constants/searchConstants';
import { DEL_PRODUCT, GET_PRODUCTS_BY_CATEGORY } from '../constants/searchConstants';
import axios from 'axios'


export function getProducts (){
  return (dispatch, getState) => {
    axios.get("http://localhost:3001/products")
        .then (response =>{
          
            dispatch ({type: GET_PRODUCTS, payload: response.data})
        })
  };
}

export function getProductsByCategory (id){
  
  return (dispatch, getState) => {
    axios.get("http://localhost:3001/products/category/"+ id)
        .then (response =>{
          console.log(response)
            dispatch ({type: GET_PRODUCTS_BY_CATEGORY, payload: response.data})
        })
  };
}




//  fetch("http://localhost:3001/products")
//       .then(response => response.json())
//       .then(json => {
//         console.log(json)
//         dispatch({ type: GET_PRODUCTS, payload: json });
//       });