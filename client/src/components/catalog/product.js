import {Link} from 'wouter'
import React, { useEffect }from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import { addProductCart, getProductById } from '../../actions/productActions';
import { ADD_PRODUCT } from '../../constants/searchConstants';
import '../style.css';

const Product = props =>{

    const dispatch = useDispatch();

      
      const addCart = event =>{
          

        const id = event.target.value
        // dispatch (addProductCart(id));

        // 

        getProductById(id).then(function(result){

            var products = JSON.parse(localStorage.getItem('productsInCart') || "[]");
            products.push(result);

            localStorage.setItem('productsInCart', JSON.stringify(products))
            
        })

        
      }
      
      return(
           
              <div className='Product'>
                  <div  >
                      <Link to = {'/producto/'+ props.id}><img src = {props.image} className="clip-ellipse"></img></Link>
                      <h2>{props.name}</h2>
                      <p>{props.description}</p>
                      <h4>Precio: ${props.price}</h4>
                      <p>Stock: {props.stock}</p>
                      <button value = {props.id} onClick={addCart}>Agregar al carrito</button>
                  </div>
              </div>
      )
  }

export default Product