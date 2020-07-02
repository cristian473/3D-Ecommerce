
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
import store from './store/store'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path='/' component={Banner} />
      <Route path='/Catalogo' component={Catalog} />
      <Route path='/producto/:id' component={Details} />

      <Route path='/search=:search' component={Results} />

        <Route path='/admin' component={CrudCategory}/>
        <Route path='/admin' component={CrudProduct}/>
      </div>
  );
}

export default App;