import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../style.css'
import { delProductCart } from '../../actions/productActions'
import { REM_PRODUCT_CART, GET_CART } from '../../constants/searchConstants'
import { sendOrderDetails } from '../../actions/orderActions'


const CheckOut = () => {

    const initialFormState = { direccion: '', telefono: '', correo: '' }
    const [contact, setContact] = useState(initialFormState)

    const handleInputChange = event => {

        const { name, value } = event.target
        setContact({ ...contact, [name]: value })
      }

    const dispatch = useDispatch();
    return (
      <div className="checkoutContainer">
        <form onSubmit={event => {
			event.preventDefault()
			dispatch(sendOrderDetails(contact))
            setContact(initialFormState)
            window.alert('Gracias por su compra');
            window.location = "http://localhost:3000/"
		}}>
          <input type="text" name="direccion" placeholder="Domicilio:" onChange={handleInputChange}/><br/>
          <input type="text" name="telefono" placeholder="Nro de telefono:" onChange={handleInputChange}/><br/>
          <input type="email" name="correo" placeholder="Email:" onChange={handleInputChange}/><br/>
          <button>Finalizar compra</button>
        </form>
        
      </div>

    )

    
  }

export default CheckOut