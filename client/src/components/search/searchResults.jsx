import React  from 'react'
import Product from '../catalog/product'
import axios from 'axios'
import {useSelector} from 'react-redux'
import { getSearch } from '../../actions/searchActions';

const Results = () =>{
    const search = useSelector (store => store.search)
    console.log(search)
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