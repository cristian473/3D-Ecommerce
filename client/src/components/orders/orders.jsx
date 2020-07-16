import React, {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../actions/orderActions';


const OrderLog = () => {

    const dispatch = useDispatch();
    const order = useSelector(store => store.orders);

    //el useEffect dispatchea las acctions antes de que se renderize el componente
    useEffect(() => dispatch(getOrders()), []);   // Ejecuta la accion getProducts de actions/productActions


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

