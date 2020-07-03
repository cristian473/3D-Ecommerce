import React, { useState, useEffect }from 'react'
import axios from 'axios'
import Product from './product'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { getProducts, getProductsByCategory, getProductDetail } from '../../actions/productActions';
import { getCategories } from '../../actions/crudCategoryActions';




const Details = props =>{

    
  const id = props.params.id
  const dispatch = useDispatch();
  const products = useSelector(store => store.products);
   
    useEffect(() => dispatch(getProductDetail(id)),[]);
    // useEffect(() => dispatch(getCategories()),[]);
    
    
    console.log(products)
    return(
         
            <div >
                <div >
                    <img width="60px" src = {products.images}></img>
                    <h2>{products.name}</h2>
                    <p>{products.description}</p>
                    <h4>Precio: ${products.price}</h4>
                    <p>Stock: {products.stock}</p>
                    <button>Comprar</button>
                </div>
            </div>
    )
}
    

    


    export default Details
