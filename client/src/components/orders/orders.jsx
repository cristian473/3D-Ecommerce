import React, { useState, useEffect } from 'react'
import Order from './order'
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../actions/orderActions';
// import { getCategories } from '../../actions/crudCategoryActions';

const OrderLog = () => {

    const dispatch = useDispatch();
    const order = useSelector(store => store.orders);

    //el useEffect dispatchea las acctions antes de que se renderize el componente
    useEffect(() => dispatch(getOrders()), []);   // Ejecuta la accion getProducts de actions/productActions

    console.log(order)
    return (

      <table className="tableCategory">
      <thead>
        <tr>
          <th>Ordenes</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
      <div className="orderTable">
              {order && order.map(element =>
                <div className='Product'>
                  <h2>Ordenes</h2>
                  <tr key={element.orderId}>
                    <td>{element.orderId}</td>
                    <td>{element.userId}</td>
                    <td>{element.status}</td>
                  </tr>
                </div>
              )}
            </div>
      </tbody>
    </table>


            

    )
}
export default OrderLog

