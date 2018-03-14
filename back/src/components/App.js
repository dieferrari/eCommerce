import React from 'react';
import { Route,Switch } from 'react-router-dom';
import RegisterContainer from '../containers/register-container';
import LoginContainer from '../containers/login-container';
import ProductsContainer from '../containers/ProductsContainer';
import SingleProductContainer from '../containers/SingleProductContainer';
import CategoryContainer from '../containers/CategoryContainer';
import UserOrderContainer from '../containers/UserOrderContainer';
import CarritosContainer from '../containers/CarritoContainer';
import SingleUserContainer from '../containers/SingleUserContainer';
import SingleCategoryContainer from '../containers/SingleCategoryContainer';
import UserCheckoutContainer from '../containers/UserCheckoutContainer'
import AdminApp from './AdminApp';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { Userlogged } from '../redux/actions/user'

class App extends React.Component{

  componentDidMount(){
    console.log(this.props.Userlogged())
  }
  render(){
    return (
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
            component={CarritosContainer}
          />
            
            <Route 
            path="/categories/:id"
            component={SingleCategoryContainer}
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
    )
  }
}
const mapStateToProps = (state,ownProps) => ({
  match:ownProps.match
})

const mapDispatchToProps = dispatch => {
return {
    Userlogged: ()=> dispatch(Userlogged())
}
}
export default connect(mapStateToProps, mapDispatchToProps)(App)