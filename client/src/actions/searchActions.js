import { GET_PRODUCTS } from '../constants/searchConstants';

export function getProducts(searchKeyword) {
  return function(dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=20dac387&s=" + searchKeyword)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: GET_PRODUCTS, payload: json });
      });
  };
}