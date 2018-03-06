import React from 'react';
import { Route,Switch } from 'react-router-dom';
import RegisterContainer from '../containers/register-container';
import LoginContainer from '../containers/login-container';
import ProductsContainer from '../containers/ProductsContainer';
import SingleProductContainer from '../containers/SingleProductContainer';
import CategoryContainer from '../containers/CategoryContainer';

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
          

        {/* <Route
          exact
          path="/login"
          component={LoginContainer}
        /> */}
      </Switch>
    </div>
);
