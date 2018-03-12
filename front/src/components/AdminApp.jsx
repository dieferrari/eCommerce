import React from 'react';
import {Route,Redirect,Switch, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchProducts} from '../redux/actions/products'
import {fetchCategories} from '../redux/actions/category'
import AdminProductContainer from '../containers/AdminProductContainer';
import AdminCategoryContainer from '../containers/AdminCategoryContainer';
import RouteHook from 'react-route-hook';
class AdminApp extends React.Component{

componentDidMount(){
    this.props.fetchProducts()
    this.props.fetchCategories();
}

   render (){
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
        {/*<Route 
            path={`${this.props.match.path}/user`}
            component={}
        />
        <Route 
            path={`${this.props.match.path}/orders`}
            component={}
        />*/}
       {/* <Route 
            path={`${this.props.match.path}/reviews`}
            component={}
        />*/}
        <Redirect from="/" to={`${this.props.match.url}/categories`} />
        </Switch>
    </div>
       )
   }

}//fin de admin app
const mapStateToProps = (state,ownProps) => ({
    match:ownProps.match
})

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    fetchCategories:()=> dispatch(fetchCategories()),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminApp)

