
import React from 'react'

import '../style.css';

const Order = props => {

  return (
    <div className='productOrder'>
      <div  >
        <p>{props.orderId}</p>
        <p>{props.userId}</p>
        <p>{props.status}</p>
      </div>
    </div>
  )
}

export default Order