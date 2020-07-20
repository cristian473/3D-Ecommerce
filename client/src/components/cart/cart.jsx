import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../style.css'
import { delProductCart } from '../../actions/productActions'
import { REM_PRODUCT_CART, GET_CART } from '../../constants/searchConstants'
import { sendOrderDetails } from '../../actions/orderActions'
import {Link} from 'wouter'



const Cart = () => {
  const dispatch = useDispatch();
  const productsOfCart = useSelector(store => store.cart);

  useEffect(() => {
    var productsInCart = JSON.parse(localStorage.getItem("productsInCart") || "[]")

    dispatch({ type: GET_CART, payload: productsInCart })
  }, [])

  const addItem = event => {
    var productsInCart = JSON.parse(localStorage.getItem('productsInCart') || "[]");
    var add = event.target.value

    productsInCart[add].stock++;

    dispatch({ type: GET_CART, payload: productsInCart })
    localStorage.setItem('productsInCart', JSON.stringify(productsInCart))

  }

  const deleteItemToCache = event => {
    var remove = event.target.value
    dispatch(delProductCart(remove));
  }


  return (
    <div className="cartContainer">
      <table className="tableProducts">

        {productsOfCart.length > 0 ? (
          productsOfCart.map((product, index) => (


            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.price * product.stock}</td>
              <td><img className="image" src={product.image} /></td>
              <td>
                <button value={index}
                  onClick={deleteItemToCache}
                >
                  -
                      </button>
                {product.stock}
                <button value={index}
                  onClick={addItem}
                >
                  +
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
      <Link to='/cart/checkout'><button> Checkout </button></Link>
    </div>
  )
}

export default Cart