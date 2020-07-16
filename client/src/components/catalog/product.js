import {Link} from 'wouter'
import React from 'react'
import {  useDispatch } from 'react-redux';
import { getProductById } from '../../actions/productActions';
import '../style.css';

const Product = props =>{

    const dispatch = useDispatch();

      
      const addCart = event =>{
          

        const id = event.target.value

        getProductById(id).then(function(result){

            var products = JSON.parse(localStorage.getItem('productsInCart') || "[]");
            products.push(result);

            localStorage.setItem('productsInCart', JSON.stringify(products))
            
        })

        
      }
      
      return(
           
              <div className='Product'>
                  <div  >
                      <Link to = {'/producto/'+ props.id}><img src = {props.image}></img></Link>
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