import React from 'react';
import {Route,Link,Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import AdminUsers from '../components/AdminUsers'
import AdminSingleUserContainer from './AdminSingleUserContainer'
//mirar INDEX.CSS
class AdminUsersContainer extends React.Component{
    constructor(props){
        super(props),
        this.state={
            usersStatus:'todos'
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({usersStatus:e.target.value})
    }
    render(){
        const {match,users}=this.props
        const{usersStatus}=this.state
        const usersFiltrados=usersStatus=='todos'?users:(
            users.filter(usuario=>{
                return usersStatus=='true'?usuario.isAdmin:!usuario.isAdmin
            }))
        
        return (
            <div>
                <Switch>
                <Route exact
             path={`${match.path}`}
             render={()=><AdminUsers handleChange={this.handleChange} users={usersFiltrados}/>} />
         <Route 
             path={`${match.path}/:id`}
         component={AdminSingleUserContainer}/>
                </Switch>
            </div>
            
        )
    }

}
const mapStateToProps=(state,ownProps)=>({
    users:state.allUsers,
    match:ownProps.match
})
const mapDispatchToProps=(dispatch)=>({
    
})

export default connect(mapStateToProps,mapDispatchToProps)(AdminUsersContainer)