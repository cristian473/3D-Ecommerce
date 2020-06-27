
import React from 'react'
import axios from 'axios'
import Product from './product'


    
getAll = function(){
    const response =
  await axios.get("../../api/routes/index", 
  )

  this.setState({
      products: response.products.name,
      category: response.category.name
  })
}

getProducts = function(e) {
    const response =
  await axios.get("../../api/routes/index", 
  {params:{category: e.target.value}}
  )

  this.setState({
      ...this.state,
      products: response.products
  })

}


showCategories = () => 
    this.state.category.map(element => 
        <option onClick = {(e) => this.getProducts()} value = {element.name}>{element.name}</option>
    );


showProducts = () => 
    this.state.products.map(element => 
        <Product
            image = {element.image}
            name = {element.name}
            description = {element.description}
            price = {element.price}
            stock = {element.stock}
        />
    );

    
