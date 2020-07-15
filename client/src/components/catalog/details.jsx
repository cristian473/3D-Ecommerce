import React, { useState, useEffect }from 'react'

import {  useDispatch, useSelector } from 'react-redux';
import { getProducts, getProductsByCategory, getProductDetail } from '../../actions/productActions';
import { getReviewsByProduct } from '../../actions/reviewActions';




const Details = props =>{

    
  const id = props.params.id
  const dispatch = useDispatch();
  const detail = useSelector(store => store.detail);
  const reviews = useSelector(store => store.review);
   
    useEffect(() => dispatch(getProductDetail(id)),[]);
    useEffect(() => dispatch(getReviewsByProduct(id)),[]);
    
    
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

                <div className="details">
                    {reviews.map(element=>{
                        return(<div>
                            <h2>{element.title}</h2>
                            <p>{element.description}</p>
                            <p>{element.stars}</p>
                        </div>)
                    })}
                </div>

            </div>
    )
}
    

    


    export default Details
