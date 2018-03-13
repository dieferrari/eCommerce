import React from 'react';
import {Route,Link,Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {postCategories} from '../redux/actions/category'
import AdminCreateCategory from '../components/AdminCreateCategory'
import AdminSingleCategoryContainer from './AdminSingleCategoryContainer'

class AdminCategoryContainer extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }    
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.postCategories({name:evt.target[0].value})
      }
    
    render (){
        const {match}=this.props
        const category={name:''}
        return (
         <div>
         <Switch>
             <Route exact
             path={`${match.path}`}
             render={()=><AdminCreateCategory
               handleSubmit={this.handleSubmit} category={category}/>} />
         <Route 
             path={`${match.path}/:id`}
         component={AdminSingleCategoryContainer}/>
         </Switch>
     </div>
        )}
}
const mapStateToProps=(state,ownProps)=>({
    match:ownProps.match
})
const mapDispatchToProps=(dispatch)=>({
    postCategories: (category) => dispatch(postCategories(category)),
})
export default connect(mapStateToProps,mapDispatchToProps)(AdminCategoryContainer)