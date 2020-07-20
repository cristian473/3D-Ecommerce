import React  from 'react'
import Product from '../catalog/product'
import {useSelector} from 'react-redux'


const Results = () =>{
    const search = useSelector (store => store.search)
  
    return(
            <div className="result">
               
                
                <ul className="wrapper">
                    {search.map((element, i) => (
                        <div key={i}>
                            <Product
                                image = {element.images}
                                name = {element.name}
                                description = {element.description}
                                price = {element.price}
                                stock = {element.stock}
                            />
                        </div>
                    ))}
                </ul>
            </div>
     
        )
    }


export default Results