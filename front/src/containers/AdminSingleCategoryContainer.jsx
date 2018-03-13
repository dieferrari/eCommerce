import React from 'react';
import {Route,Link,Switch,Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {editCategories,deleteCategories} from '../redux/actions/category'
import AdminCreateCategory from '../components/AdminCreateCategory'
import AdminDelete from '../components/AdminDelete'

class AdminSingleCategoryContainer extends React.Component{
    constructor(props){
        super(props),
        this.state={redirectToNewPage:false}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
    }
    
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.editCategories(this.props.id,{name:evt.target[0].value})
      }//handlesubmit
      handleDeleteSubmit(evt) {
        evt.preventDefault();
        this.props.deleteCategories(this.props.id)
        this.setState({redirectToNewPage:true})

      }

    render (){
        if (this.state.redirectToNewPage) {
            return (
            <Redirect to="/Category"/>
            )
          }
        const {category,match}=this.props
        return(
            <div>
                <Switch>
                    <Route path={`${match.path}/edit`} 
                    render={()=><AdminCreateCategory category={category}
                      handleSubmit={this.handleSubmit} />}/>
                    <Route path={`${match.path}/delete`}
                     render={()=><AdminDelete 
                    register={category} linkTo='/categories'
                    handleDeleteSubmit={this.handleDeleteSubmit}/>}/>
                </Switch>
            </div>
            
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    return(
    {
        category:state.category.category.filter((catego)=>catego.id==ownProps.match.params.id)[0],
        id:ownProps.match.params.id,
        match:ownProps.match
    }
)}
const mapDispatchToProps=(dispatch)=>({
    editCategories: (id,body) => dispatch(editCategories(id,body)),
    deleteCategories:(id)=>dispatch(deleteCategories(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(AdminSingleCategoryContainer)