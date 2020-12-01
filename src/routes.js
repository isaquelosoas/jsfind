import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Main from './pages/main';
import Product from './pages/products/product.js';

const Routes = () =>{
    <BrowserRouter>        
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/product/:id' component={Product}/>
        </Switch>
    </BrowserRouter>
}
export default Routes;