import React from 'react';
import { Route,Switch, Redirect } from 'react-router-dom';
import RegisterContainer from '../containers/register-container';
import LoginContainer from '../containers/login-container';
import ProductsContainer from '../containers/ProductsContainer';
import SingleProductContainer from '../containers/SingleProductContainer';
import CategoryContainer from '../containers/CategoryContainer';
import CarritosContainer from '../containers/CarritoContainer';
import SingleCategoryContainer from '../containers/SingleCategoryContainer';
import AdminApp from './AdminApp';
import HeaderContainer from '../containers/HeaderContainer';
import UserApp from './UserApp';
import { connect } from 'react-redux';
import { Userlogged } from '../redux/actions/user'
import RouteHook from 'react-route-hook';

class App extends React.Component{

  render(){
    return (
      <div>
        <HeaderContainer location={this.props.location}/>
        <Switch>
          <RouteHook onEnter={this.props.Userlogged}
            exact
            path="/register"
            component={RegisterContainer}
          />
          <RouteHook onEnter={this.props.Userlogged}
            exact 
            path="/products"
            component={ProductsContainer}
          />
          <RouteHook onEnter={this.props.Userlogged} 
            path="/products/:id"
            component={SingleProductContainer}
          />
          <RouteHook onEnter={this.props.Userlogged}
            exact 
            path="/category"
            component={CategoryContainer}
          />
          <RouteHook onEnter={this.props.Userlogged}
            exact
            path="/carrito"
            component={CarritosContainer}
          />
            <RouteHook onEnter={this.props.Userlogged} 
            path="/categories/:id"
            component={SingleCategoryContainer}
          />
            <RouteHook onEnter={this.props.Userlogged} 
            path="/admin"
            component={AdminApp}
          />
          <RouteHook onEnter={this.props.Userlogged}
            exact
            path="/login"
            component={LoginContainer}
          />
          <RouteHook onEnter={this.props.Userlogged}
          path="/user"
          component={UserApp}
        />
        <Redirect from='/' to='/products' />
        </Switch>
      </div>
    )
  }
}
const mapStateToProps = (state,ownProps) => ({
  match:ownProps.match,
  user:state.user.user,
  location: ownProps.location
})

const mapDispatchToProps = dispatch => {
return {
    Userlogged: ()=> dispatch(Userlogged())
}
}
export default connect(mapStateToProps, mapDispatchToProps)(App)