import React from 'react';
import Register from '../components/register';
import { createUser,facebookUser } from '../redux/actions/user';
import {Route,Link,Switch,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

class RegisterContainer extends React.Component{
    constructor(props){
    super(props);    
    this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.createUser({
            firstName:event.target[0].value,
            lastName:event.target[1].value,
            email:event.target[2].value,
            password:event.target[3].value
        })
    }
    render () {
        const {user, location}=this.props
        console.log(location)
        const { from } = location.state || { from: '/'}
        return (
            <Register 
            user={user} 
            handleSubmit={this.handleSubmit}
            from={from}
            />
        )
    }
}
const mapStateToProps=(state,ownProps)=>({
    user:state.user.user,
    location: ownProps.location
})
const mapDispatchToProps=(dispatch)=>({
    createUser:(body)=>dispatch(createUser(body))
})

export default connect(mapStateToProps,mapDispatchToProps)(RegisterContainer)