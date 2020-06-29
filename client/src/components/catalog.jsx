import React, { useState }from 'react'
import axios from 'axios'
import Product from './product'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';




export default class Catalog extends React.Component{

    constructor(props){
        super(props)
         this.state={
            products: [],
            category: [],
            actualCategory: ''
        }
        
        // this.showProducts = this.showProducts.bind(this)
        // this.showCategories = this.showCategories.bind(this)
        // this.getProducts = this.getProducts.bind(this)
        
        
    }

    componentDidMount(){
        console.log('entre')
        axios.get("http://localhost:3001/products")
            .then(response =>{
                this.setState({
                    products: response.data,
                    category: response.data
                    
                })
                console.log(response);
                
            })
            .catch(error => {
                console.log(error)
            })
    }

    getProducts(e){   
        axios.get("http://localhost:3001/products/category/"+ e.target.value)
        .then (response =>{
            this.setState({
                products: response.data,
            })
            console.log(this.state)
            
        })

        .catch(error => {
            console.log(error)
        })

    }
    

    showCategories =() => 
        this.state.category.map(element => 
           <option key = {element.id} value = {element.userId}>{element.userId} </option>
        );
        

    showProducts=()=>
          
        this.state.products.map(element => 
            <Product
                image = {element.images}
                name = {element.title}
                description = {element.description}
                price = {element.price}
                stock = {element.id}
            />
        )
    
    

    render(){
        const showCategories = this.showCategories()
        const showProducts = this.showProducts()
        return (
            <section >
                <div className='shopSection'><h3>Categorias:</h3>
                <select className='categorySelect' onChange={(e)=>this.getProducts(e)}>{showCategories}</select>
                </div>
                {showProducts}
            </section>
           
        )
    }

}