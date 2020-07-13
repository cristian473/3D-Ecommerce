import React, { useState, useEffect }from 'react'

import {  useDispatch, useSelector } from 'react-redux';
import { getProducts, getProductsByCategory, getProductDetail } from '../../actions/productActions';
import { getCategories } from '../../actions/crudCategoryActions';




const Details = props =>{

    
  const id = props.params.id
  const dispatch = useDispatch();
  const detail = useSelector(store => store.detail);
   
    useEffect(() => dispatch(getProductDetail(id)),[]);
    // useEffect(() => dispatch(getCategories()),[]);
    
    
    console.log()
    return(
         
            <div >
                <div className="details">
                    <img width="70%" src = {detail.images}></img>
                    <h2>{detail.name}</h2>
                    <p>{detail.description}</p>
                    <h4>Precio: ${detail.price}</h4>
                    <p>Stock: {detail.stock}</p>
                    <button>Comprar</button>
                </div>
            </div>
    )
}
    

    


    export default Details
