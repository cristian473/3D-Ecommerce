import { DEL_PRODUCT, ADD_PRODUCT, UPDATE_PRODUCT, EDITING_FALSE,GET_PRODUCTS } from '../constants/searchConstants';
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

export function addProduct (product, idCategory){
    
    return (dispatch) =>{
        axios.post('http://localhost:3001/products/', product)
            .then(response=>{
                axios.post('http://localhost:3001/products/add/'+ response.data.newProduct.id +'/'+ idCategory)
                .then(response =>{
                    
                    dispatch({type:ADD_PRODUCT, payload: response.data.pc})
                })
                
            })
    }
}

export function updateProduct (id, newProduct, index, idCategory){
    return(dispatch) => {
        axios.put('http://localhost:3001/products/update/'+ id, newProduct)
        .then(response =>{
            axios.post('http://localhost:3001/products/add/'+ response.data.productUpdated.id +'/'+ idCategory)
            .then(response =>{
                
                dispatch ({type: EDITING_FALSE, payload: index, newProduct: response.data.pc})
                
            })

            
        })
        
    }
}