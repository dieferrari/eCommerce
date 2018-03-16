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
        const {user, location}=this.props
        console.log(location)
        const { from } = location.state || { from: '/'}
        
        return (
            <Login user={user} handleSubmit={this.handleSubmit} from={from} location={location}/>
        )
    }
}
const mapStateToProps=(state, ownProps)=>({
    user:state.user.user,
    location: ownProps.location

})
const mapDispatchToProps=(dispatch)=>({
    loggedUser:(credentials)=>dispatch(loggedUser(credentials))
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer)