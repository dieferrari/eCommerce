import React from 'react';
import {Route,Link,Switch,Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {editUser,deleteUser} from '../redux/actions/allUsers'
import AdminEditUser from '../components/AdminEditUser'
import AdminDelete from '../components/AdminDelete'

class AdminSingleUserContainer extends React.Component{
    constructor(props){
        super(props),
        this.state={redirectToNewPage:false}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
    }
    
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.editUser(this.props.id,{isAdmin:!this.props.user[0].isAdmin})
        this.setState({redirectToNewPage:true})
      }//handlesubmit

      handleDeleteSubmit(evt) {
        evt.preventDefault();
        this.props.deleteUser(this.props.id)
        this.setState({redirectToNewPage:true})

      }//handlesubmit

    render (){
        if (this.state.redirectToNewPage) {
            return (
            <Redirect to="/admin/users"/>
            )
          }
        const {match,user}=this.props
        return(
            <div>
                <Switch>
                    <Route path={`${match.path}/edit`} 
                    render={()=><AdminEditUser user={user.length>0?user[0]:false}
                      handleSubmit={this.handleSubmit} />}/> 
                    <Route path={`${match.path}/delete`}
                     render={()=><AdminDelete 
                    register={user.length>0?user[0]:false} linkTo='/user'
                    handleDeleteSubmit={this.handleDeleteSubmit}/>}/>
                </Switch>
            </div>
            
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    return(
    {
        user:state.allUsers.filter((user)=>user.id==ownProps.match.params.id),
        id:ownProps.match.params.id,
        match:ownProps.match
    }
)}
const mapDispatchToProps=(dispatch)=>({
    editUser: (id,body) => dispatch(editUser(id,body)),
    deleteUser:(id)=>dispatch(deleteUser(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(AdminSingleUserContainer)