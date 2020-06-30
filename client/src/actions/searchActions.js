import { GET_SEARCH } from '../constants/searchConstants';

export const getProducts = () => async (dispatch) => {
  return function(dispatch) {
     fetch("http://localhost:3001/products/search?keyword=" + 'torre')
      .then(response => response.json())
      .then(json => {
        console.log(dispatch)
        dispatch({ type: 'GET_PRODUCTS', payload: json });
      });
  };
}