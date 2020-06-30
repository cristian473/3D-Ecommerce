import React from 'react'
import Product from '../catalog/product'
import axios from 'axios'
import {connect} from 'react-redux'
import { getSearch } from '../../actions/searchActions';

const Results = ({products, categories}) =>{

    return(
            <div className="result">
                {console.log(products)}
                
                <ul className="wrapper">
                    {products.map((element, i) => (
                        <div key={i}>
                            {console.log(element.name)}
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

    const mapStateToProps = state =>({
        products: state.products,
        categories: state.categories
    })


    export default connect(mapStateToProps)(Results)