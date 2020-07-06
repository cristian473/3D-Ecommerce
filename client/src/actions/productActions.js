import { GET_PRODUCTS } from '../constants/searchConstants';
import { REM_PRODUCT_CART, GET_PRODUCTS_BY_CATEGORY, GET_PRODUCT_DETAIL, ADD_PRODUCT_CART } from '../constants/searchConstants';
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

export function getProductDetail (id){
  return (dispatch, getState) => {
    axios.get("http://localhost:3001/products/" + id)
        .then (response =>{
          console.log(response)
            dispatch ({type: GET_PRODUCT_DETAIL, payload: response.data})
        })
  };
}

export function getProductById (id){
  
  return axios.get("http://localhost:3001/products/" + id)
                      .then (response => {
                        return response.data
          })
          
  
        
  };


export function addProductCart (id){
  
  return (dispatch, getState) => {
    axios.get("http://localhost:3001/products/"+ id)
        .then (response =>{
          console.log(response)
          
            dispatch ({type: ADD_PRODUCT_CART, payload: response.data})
        })
  };
}

export function delProductCart(index){

  return (dispatch) =>{
        var products = JSON.parse(localStorage.getItem('productsInCart') || "[]");
        var newProducts = products.splice(index, 1)
        console.log(newProducts)
        localStorage.removeItem('productsInCart')
        localStorage.setItem('productsInCart', JSON.stringify(products))

        dispatch({type: REM_PRODUCT_CART, payload: products})


  }
}


//  fetch("http://localhost:3001/products")
//       .then(response => response.json())
//       .then(json => {
//         console.log(json)
//         dispatch({ type: GET_PRODUCTS, payload: json });
//       });