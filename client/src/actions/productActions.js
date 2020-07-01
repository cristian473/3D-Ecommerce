import { GET_PRODUCTS } from '../constants/searchConstants';
import { DEL_PRODUCT } from '../constants/searchConstants';
import axios from 'axios'

const header = {
    headers: {
        
    }
  }

export function getProducts (){
  return (dispatch, getState) => {
    axios.get("http://localhost:3001/products")
        .then (response =>{
            dispatch ({type: GET_PRODUCTS, payload: response.data})
        })
  };
}

// export const delProduct= (id) =>{
//     return async function(dispatch) {
//       return axios.delete("http://localhost:3001/delete/"+id )
//         .then(response => response.json())
//         .then(json => {
//           console.log(json)
//           dispatch({ type: DEL_PRODUCT, payload: json });
//         });
//     };
//   }

export function delProduct (id){
    return (dispatch) => {
        axios.delete("http://localhost:3001/products/delete/" + id)
            .then (response =>{
                
                dispatch ({type: GET_PRODUCTS, payload: response.data})
        })
};
}

//  fetch("http://localhost:3001/products")
//       .then(response => response.json())
//       .then(json => {
//         console.log(json)
//         dispatch({ type: GET_PRODUCTS, payload: json });
//       });