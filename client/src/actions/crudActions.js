import { DEL_PRODUCT, ADD_PRODUCT } from '../constants/searchConstants';
import axios from 'axios'
//delete
export function delProduct (id){
    return (dispatch, getState) => {
        axios.delete("http://localhost:3001/products/delete/" + id)
            .then (response =>{
                
                dispatch ({type: DEL_PRODUCT, payload: id})
        })
};
}

export function addProduct (product){
    console.log(product)
    return (dispatch) =>{
        axios.post('http://localhost:3001/products',product)
            .then(response=>{
                dispatch({type:ADD_PRODUCT, payload: response.data})
            })
    }
}