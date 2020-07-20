import { GET_ORDERS, CLEAR_CART } from '../constants/searchConstants';
// import { REM_PRODUCT_CART, GET_PRODUCTS_BY_CATEGORY, GET_PRODUCT_DETAIL, ADD_PRODUCT_CART } from '../constants/searchConstants';

import axios from 'axios'


export function getOrders() {
  return (dispatch) => {
    // esto simula el postman //
    axios.get("http://localhost:3001/order")
      .then(response => {
        // ejecuta el reducer
        dispatch({ type: GET_ORDERS, payload: response.data })
      })
  };
}

export function sendOrderDetails() {
  return (dispatch) => {

    var orderDetails = JSON.parse(localStorage.getItem('productsInCart') || "[]");
    var user =  JSON.parse(localStorage.getItem('isLogin') || "[]");

    axios.post("http://localhost:3001/order/" + user.userId, orderDetails)
      .then(response => {
        localStorage.removeItem('productsInCart');
        dispatch({ type: CLEAR_CART, payload: [] })
      })

  }
}