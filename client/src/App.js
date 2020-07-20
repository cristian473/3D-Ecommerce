
import React, {useEffect} from 'react';
import { Route } from 'wouter'
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import {ISLOGGED} from './constants/crudUserConstants'

import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

import Product from './components/catalog/product'
import Catalog from './components/catalog/catalog.jsx'
import Navbar from './components/navBar'
import Details from './components/catalog/details'
import Banner from './components/banner'
import Results from './components/search/searchResults'
import CrudCategory from './components/CRUD/CrudCategory'
import CrudProduct from './components/CRUD/CrudProduct'
import Login from './components/login/login.js'
import AddUserForm from './components/forms/AddUserForm.js'
import Cart from './components/cart/cart'
import OrderLog from './components/orders/orders'
import addReviewForm from './components/forms/AddReviewForm'
import UsersTable from './components/tables/usersTable';
import CheckOut from './components/cart/checkout';


function App() {
 {useEffect(() => {
        var isLogged = JSON.parse(localStorage.getItem("isLogin") || "[]");
        dispatch({type: ISLOGGED, payload: isLogged});
      }, [])}
  const dispatch = useDispatch();
  return (
  
      <div className="App">
      
        <Navbar />
        
        
        <Route path='/' component={Banner} />
        <Route path='/Catalogo' component={Catalog} />
        <Route path='/producto/:id' component={Details} />
        <Route path='/producto/:id' component={addReviewForm} />
        <Route path='/cart' component={Cart} />
        <Route path ='/cart/checkout' component={CheckOut} />
        <Route path='/products/search' component={Results} />
        <Route path='/admin' component={CrudCategory} />
        <Route path='/admin' component={CrudProduct} />
        <Route path='/admin' component={OrderLog} />
        <Route path ='/admin' component = {UsersTable}/>

        <Route path='/login' component={Login} />
        <Route path='/newUser' component={AddUserForm} />
      
      </div>
     
  );
}

export default App;