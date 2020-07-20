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

            var productsInCart = JSON.parse(localStorage.getItem('productsInCart') || "[]");
            
            result.images = '';

         
            

            if (!productsInCart.find(encontrado => encontrado.id == result.id)){
                result.stock=1;
                productsInCart.push(result)
            }
            
            productsInCart.map(element => {
              if (element.id === result.id ){
                element.stock++
              }
            })

            console.log(productsInCart)

            // productsInCart.push(result)

            //  productsInCart.map(element =>{
                  
            //   var cantidad = productsInCart.filter(elemento => elemento.id === element.id);
            //     element.stock = cantidad.length;

            //   if (!products.find(encontrado => encontrado.id == element.id)){
            //     products.push(element)
            //   }
              
            //})

            

            localStorage.setItem('productsInCart', JSON.stringify(productsInCart))
            
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