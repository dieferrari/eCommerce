import React from 'react';
import { Route,Switch } from 'react-router-dom';
import RegisterContainer from '../containers/register-container';
import LoginContainer from '../containers/login-container';
import ProductsContainer from '../containers/ProductsContainer';
import SingleProductContainer from '../containers/SingleProductContainer';
import CategoryContainer from '../containers/CategoryContainer';
import CarritosContainer from '../containers/CarritosContainer';
import SingleUserContainer from '../containers/SingleUserContainer';
import SingleCategoryContainer from '../containers/SingleCategoryContainer';

export default () => (
    <div>
      <Switch>
        <Route
          exact
          path="/register"
          component={RegisterContainer}
        />
        <Route
          exact 
          path="/products"
          component={ProductsContainer}
        />
         <Route 
          path="/products/:id"
          component={SingleProductContainer}
        />
        <Route
          exact 
          path="/category"
          component={CategoryContainer}
        />
        <Route
          exact
          path="/carrito"
          component={CarritosContainer}
        />
          
          <Route 
          path="/category/:id"
          component={SingleCategoryContainer}
        />
          <Route 
          path="/user/:id"
          component={SingleUserContainer}
        />

        <Route
          exact
          path="/login"
          component={LoginContainer}
        />
      </Switch>
    </div>
);
