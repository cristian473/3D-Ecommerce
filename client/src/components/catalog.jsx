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
        
        this.showProducts = this.showProducts.bind(this)
        this.showCategories = this.showCategories.bind(this)
        this.getProducts = this.getProducts.bind(this)
        this.change = this.change.bind(this)
        
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response =>{
                this.setState({
                    products: response.data,
                    category: response.data
                    
                })
                console.log('cargue primera vez')
            })
            .catch(error => {
                console.log(error)
            })
    }

    getProducts(e){   
        axios.get("https://jsonplaceholder.typicode.com/posts?userId="+ e.target.value)
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
                image = {element.image}
                name = {element.title}
                description = {element.body}
                price = {element.id}
                stock = {element.stock}
            />
        )
    
    
    change(){
        this.setState({
            products: [{
                title:'100',
                body: 'jaja cambié xD'
            }]
        })
    }
    
    

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