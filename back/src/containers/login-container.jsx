import React from 'react';
import Login from '../components/login';
import { loggedUser } from '../redux/actions/user';
import {Route,Link,Switch,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';


 class LoginContainer extends React.Component{
    constructor(){
    super();
    this.handleSubmit=this.handleSubmit.bind(this)
    }
    
    handleSubmit(event) {
        event.preventDefault()
        this.props.loggedUser({
            email:event.target[0].value,
            password:event.target[1].value,
        })
    }
    render () {
        const {user}=this.props
        // if(user.id){
        //   return  <Redirect to='/'/>
        // }
        return (
            <Login user={user} handleSubmit={this.handleSubmit}/>
        )
    }
}
const mapStateToProps=(state)=>({
    user:state.user.user,

})
const mapDispatchToProps=(dispatch)=>({
    loggedUser:(credentials)=>dispatch(loggedUser(credentials))
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer)