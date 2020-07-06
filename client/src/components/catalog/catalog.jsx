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
import { getProducts, getProductsByCategory } from '../../actions/productActions';
import { getCategories } from '../../actions/crudCategoryActions';




const Catalog = () =>{

    
    
  const dispatch = useDispatch();
  const products = useSelector(store => store.products);
    const categories = useSelector(store => store.categories);
   
    useEffect(() => dispatch(getProducts()),[]);
    useEffect(() => dispatch(getCategories()),[]);
        
          
    const handleCategoryChange = event =>{
		dispatch(getProductsByCategory(event.target.value))
	}   
    
    
    console.log(products)
    return(
         
            <section >
                <div className='shopSection'><h3>Categorias:</h3>

                
                <select onChange={handleCategoryChange} className='categorySelect'>
                {categories && categories.map(element => 
                    <option key = {element.id} value = {element.categoryId}>{element.name} </option>
                    )}
                    </select>
                </div>
                {products && products.map(element => 
                    <Product
                        id = {element.id}
                        image = {element.images}
                        name = {element.name}
                        description = {element.description}
                        price = {element.price}
                        stock = {element.stock}
                    />
                )}
            </section>
    )
}
    

    


    export default Catalog

