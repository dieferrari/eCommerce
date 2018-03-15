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
import HeaderContainer from '../containers/HeaderContainer';
import UserApp from './UserApp';
import { connect } from 'react-redux';
import { Userlogged } from '../redux/actions/user'
import RouteHook from 'react-route-hook';

class App extends React.Component{
componentDidMount(){
  this.props.Userlogged()
}
  componentWillReceiveProps(){
    this.props.Userlogged()
  }
  render(){
    return (
      <div>
        <HeaderContainer/>
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
          <RouteHook
            onChange={this.props.Userlogged}
            exact
            path="/login"
            component={LoginContainer}
          />
          <Route
          path="/user"
          component={UserApp}
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
  match:ownProps.match,
  user:state.user.user
})

const mapDispatchToProps = dispatch => {
return {
    Userlogged: ()=> dispatch(Userlogged())
}
}
export default connect(mapStateToProps, mapDispatchToProps)(App)