import { Link } from 'wouter'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProductCart, getProductById } from '../../actions/productActions';
import { ADD_PRODUCT } from '../../constants/searchConstants';
import '../style.css';

const Order = props => {
  const dispatch = useDispatch();

  return (
    <div className='Product'>
      <div  >
        <p>{props.orderId}</p>
        <p>{props.userId}</p>
        <p>{props.status}</p>
      </div>
    </div>
  )
}

export default Order