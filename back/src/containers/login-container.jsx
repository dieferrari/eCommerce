import React from 'react';
import Login from '../components/login';
import { loggedUser } from '../redux/actions/user';
import store from '../redux/store';


export default class LoginContainer extends React.Component{
    constructor(){
    super();
        this.state = {}
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault()
        store.dispatch(loggedUser({
            email:event.target[0].value,
            password:event.target[1].value,
        }))
    }
    render () {
        return (
            <Login handleSubmit={this.handleSubmit}/>
        )
    }
}