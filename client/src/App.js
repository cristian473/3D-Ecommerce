import React from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/product'
import Catalog from './components/catalog.jsx'
import {Route} from 'wouter'
import Navbar from './components/navBar'
import Details from './components/details'
import Banner from './components/banner'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route path='/' component={Banner}/>
      <Route path='/catalogo' component={Catalog}/>
      <Route path='/producto/:id' component={Details}/>
      
    </div>
  );
}

export default App;
