import React, {  Fragment, useEffect } from 'react'
import AddProductForm from '../forms/AddProductForm'
import ProductTable from '../tables/ProductTable'
import { useDispatch, useSelector} from 'react-redux'
import {getProducts} from '../../actions/productActions'



const Crud = () => {
  const dispatch = useDispatch();
  const products = useSelector(store => store.products);
 
  useEffect(()=>dispatch(getProducts()),[]);

  return (
    <div className="containerProduct">
      
      <div className="flex-row">
        <div className="flex-large">
          {
             <Fragment>
              <h2>Agregar productos</h2>
                <AddProductForm/> 
            </Fragment>
          }
        </div>

        <div className="flex-large">
          <h2>Productos</h2>
          <ProductTable products={products} />
        </div>
      </div>
    </div>
  )
}


export default (Crud)