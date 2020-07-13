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
                
                // var binary = {};
                // var bytes = [].slice.call(new Uint8Array(response.data.newProduct.images.data))
                // bytes.forEach(b => console.log(String.fromCharCode(b)));
                
                
                for (let i = 0; i < idCategory.length; i++) {
                    axios.post('http://localhost:3001/products/add/'+ response.data.newProduct.id +'/'+ idCategory[i])
                        .then(response =>{
                    
                        dispatch({type:ADD_PRODUCT, payload: response.data.pc})
                })
                    
                }
                
                
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