import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import '../style.css'
import {delProductCart} from '../../actions/productActions'
import {REM_PRODUCT_CART, GET_CART} from '../../constants/searchConstants'



const Cart = () =>{
    const dispatch = useDispatch();
    const productsOfCart = useSelector(store => store.cart);
    // var productByCache = JSON.parse(localStorage.getItem('Usuario') || "[]");
        useEffect(() => {
            var productsInCart = JSON.parse(localStorage.getItem("productsInCart") || "[]");
            dispatch({type: GET_CART, payload: productsInCart})
        }, [])

    const deleteItemToCache = event =>{

        var remove = event.target.value
        dispatch(delProductCart(remove));
        
        
    }
    
   
    return(
        <table>

        {productsOfCart.length > 0 ? (
            productsOfCart.map((product, index) => (
               
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                {/* <td>{product.categories[0].name}</td> */}
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td><img className="image" src={product.image}/></td>
                <td>
                  <button
                    onClick={() => {
                      // () => dispatch((product.id))
                    }}
                  >
                    Editar
                  </button>
                  <button value={index}
                    onClick={deleteItemToCache}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No hay productos</td>
            </tr>
          )}

        </table>
    )

    


}

export default Cart