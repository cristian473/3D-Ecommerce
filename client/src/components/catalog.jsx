import React from 'react'
import axios from 'axios'
import Product from './product'

const categorySelected = '';

export default class Catalog extends React.Component{

    constructor(props){
        super(props)
         this.state={
            products: [{
                image:'img1',
                name:'name',
                description:'holahola',
                price: 200,
                stock: 20
            }],
            category: [{
                name:'zapatillas'
            }]
        }
        
        this.showProducts = this.showProducts.bind(this)
        this.showCategories = this.showCategories.bind(this)
    }

    async getAll(){
        const response =
      await axios.get("../../api/routes/index", 
      )

      this.setState({
          products: response.products.name,
          category: response.category.name
      })
    }

    async getProducts (e){
        const response =
      await axios.get("http://localhost:3000", 
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
    

    render(){
        const showCategories = this.showCategories()
        const showProducts = this.showProducts()
        return (
            <section>
                <select>{showCategories}</select>
                {showProducts}
            </section>
        )
    }

}