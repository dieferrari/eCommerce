import React from 'react';
import {Route,Redirect,Switch, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchProducts} from '../redux/actions/products'
import {fetchCategories} from '../redux/actions/category'
import {fetchOrders} from '../redux/actions/orders'
import {fetchAllUsers} from '../redux/actions/allUsers'
import AdminProductContainer from '../containers/AdminProductContainer';
import AdminCategoryContainer from '../containers/AdminCategoryContainer';
import AdminOrdersContainer from '../containers/AdminOrdersContainer'
import AdminUsersContainer from '../containers/AdminUsersContainer'
import RouteHook from 'react-route-hook';
import { Userlogged } from '../redux/actions/user'
class AdminApp extends React.Component{

componentDidMount(){
    this.props.fetchProducts();
    this.props.fetchCategories();
    this.props.fetchOrders();
    this.props.fetchAllUsers();
    this.props.Userlogged()
}

   render (){
       if(!this.props.user.isAdmin){
           return (<div>
               <h1>Espacio solo para Administradores</h1>
               </div>)}
       return (
        <div>
        <Switch>
            <Route
            path={`${this.props.match.path}/products`}
            component={AdminProductContainer}
        />
         <Route 
            path={`${this.props.match.path}/categories`}
            component={AdminCategoryContainer}
        />
        
         <Route 
            path={`${this.props.match.path}/orders`}
            component={AdminOrdersContainer}
        />
        <Route 
            path={`${this.props.match.path}/users`}
            component={AdminUsersContainer}
        />
        <Redirect from="/" to={`${this.props.match.url}/categories`} />
        </Switch>
    </div>
       )
   }

}//fin de admin app
const mapStateToProps = (state,ownProps) => ({
    match:ownProps.match,
    user:state.user.user
})

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    fetchCategories:()=> dispatch(fetchCategories()),
    fetchOrders:()=>dispatch(fetchOrders()),
    fetchAllUsers:()=>dispatch(fetchAllUsers()),
    Userlogged:()=>dispatch(Userlogged()),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminApp)

