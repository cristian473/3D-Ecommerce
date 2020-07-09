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

        <section >
            <div className="orderTable">
                {order && order.map(element =>
                    <div className='Product'>
                        <div  >
                            <p>{element.orderId}</p>
                            <p>{element.userId}</p>
                            <p>{element.status}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
export default OrderLog

