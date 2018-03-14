import React from 'react';
import { Route,Switch } from 'react-router-dom';
import RegisterContainer from '../containers/register-container';
import LoginContainer from '../containers/login-container';
import ProductsContainer from '../containers/ProductsContainer';
import SingleProductContainer from '../containers/SingleProductContainer';
import CategoryContainer from '../containers/CategoryContainer';
import UserOrderContainer from '../containers/UserOrderContainer';
import CarritoContainer from '../containers/CarritoContainer';
import SingleUserContainer from '../containers/SingleUserContainer';
import SingleCategoryContainer from '../containers/SingleCategoryContainer';
import UserCheckoutContainer from '../containers/UserCheckoutContainer'
import AdminApp from './AdminApp';
import UserApp from './UserApp';
import Header from '../components/Header'

export default () => (
    <div>
      <Header/>
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
          component={CarritoContainer}
        />
          <Route 
          path="/categories/:id"
          component={SingleCategoryContainer}
        />
          <Route 
          path="/user"
          component={UserApp}
        />
        
          <Route 
          path="/admin"
          component={AdminApp}
        />

        <Route
          exact
          path="/login"
          component={LoginContainer}
        />
       {/* <Route
          exact
          path="/check"
          component={UserCheckoutContainer}
        />
        <Route 
          path="/user/:id"
          component={SingleUserContainer}
        />
        <Route 
          path="/user/:id/orders"
          component={UserOrderContainer}
        />*/}
      </Switch>
    </div>
);
