
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/catalog/product'
import Catalog from './components/catalog/catalog.jsx'
import { Route } from 'wouter'
import Provider from 'react-redux'
import Navbar from './components/navBar'
import Details from './components/catalog/details'
import Banner from './components/banner'
import Results from './components/search/searchResults'
import CrudCategory from './components/CRUD/CrudCategory'
import CrudProduct from './components/CRUD/CrudProduct'
import Login from './components/login/login.js'
import store from './store/store'
import Cart from './components/cart/cart'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path='/' component={Banner} />
      <Route path='/Catalogo' component={Catalog} />
      <Route path='/producto/:id' component={Details} />
      <Route path = '/cart' component={Cart}/>

      <Route path='/products/search' component={Results} />

        <Route path='/admin' component={CrudCategory}/>
        <Route path='/admin' component={CrudProduct}/>

        <Route path='/login' component={Login}/>
      </div>
  );
}

export default App;