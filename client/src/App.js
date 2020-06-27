  
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/product'
import Catalog from './components/catalog.jsx'
import {Route} from 'wouter'
import Navbar from './components/navBar'
import Details from './components/details'
import Banner from './components/banner'
import SearchBar from './components/SearchBar'
import AddCategory from './components/AddCategory'
import CrudProduct from './components/CrudProduct'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route path='/' component={Banner}/>
      <Route path='/catalogo' component={Catalog}/>
      <Route path='/producto/:id' component={Details}/>
      
      <Route path='/' component={SearchBar}/>
      <Route path='/admin' component={AddCategory}/>
      <Route path='/admin' component={CrudProduct}/>
    </div>
  );
}

export default App;