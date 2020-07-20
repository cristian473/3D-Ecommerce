import React, {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../actions/orderActions';
import axios from 'axios';


const OrderLog = () => {

    const dispatch = useDispatch();
    const order = useSelector(store => store.orders);

    const getProductsOrders =(id)=>{
        var name = ''
       
        var concaten = (item) =>{
            
            return <p>{item.data.name}</p>
        }
        axios.get("http://localhost:3001/products/" + id)
                .then(response => {
                    concaten(response)
            });

        
       
         
    }

    //el useEffect dispatchea las acctions antes de que se renderize el componente
    useEffect(() => dispatch(getOrders()), []);   // Ejecuta la accion getProducts de actions/productActions

    console.log(order)
    return (

        <section >
            <div className="orderTable">
                {order && order.map(element =>
                    <div className='Product'>
                        <div  >
                        <h4>orden N°: {element[0].orderId}</h4>
                        <p>Items</p>
                            {element[1].map(product =>(
                               <div>
                                   <p>{product.amount} {product.name}</p>
                                    <p></p>
                                </div>
                            ))}
                            <p>usuario: {element[2][0].username}</p>
                            <p>direccion: {element[0].address}</p>
                            <p>telefono :{element[0].tel}</p>
                            <p>email: {element[0].email}</p>
                            <p>estado de la orden: {element[0].status}</p>
                        </div>
                    </div>
                )}
            </div>
          </section>  


            

    )
}
export default OrderLog

