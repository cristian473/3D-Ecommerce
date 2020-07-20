import React, {  useEffect }from 'react'

import {  useDispatch, useSelector } from 'react-redux';
import { getProductDetail } from '../../actions/productActions';
import { getReviewsByProduct } from '../../actions/reviewActions';




const Details = props =>{

    
  const id = props.params.id
  const dispatch = useDispatch();
  const detail = useSelector(store => store.detail);
  const reviews = useSelector(store => store.review);
   
    useEffect(() => dispatch(getProductDetail(id)),[]);
    useEffect(() => dispatch(getReviewsByProduct(id)),[]);
    
    return(
      <div>
          <div className='detailScreen'>
            <div className='productoDetail'>
                <div className="details">
                    <img width="70%" src = {detail.images}></img>
                    <div className="detailsInfo">
                      <h2>{detail.name}</h2>
                      <p>{detail.description}</p>
                      <h4>Precio: ${detail.price}</h4>
                      <p>Stock: {detail.stock}</p>
                      <button>Comprar</button>
                    </div>
                </div>

                

            </div>
          </div>  
          <div className="detailsReview">
          {reviews.map(element=>{
              return(<div className="review">
                  <h2>{element.title}</h2>
                  <p>{element.description}</p>
                  <p className="estrella">{element.stars}</p>
              </div>)
          })}
      </div>
      </div>
    )
}
    

    


    export default Details
