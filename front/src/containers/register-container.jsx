import React from 'react';
import Form from '../components/register';
import { createUser } from '../redux/actions/user';
import store from '../store';

export default class RegisterContainer extends React.Component{
    constructor(){
    super();
        this.state = {}
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault()
        store.dispatch(createUser({
            firstName:event.target[0].value,
            lastName:event.target[1].value,
            email:event.target[2].value,
            password:event.target[3].value
        }))
    }
    render () {
        return (
            <Form handleSubmit={this.handleSubmit}/>
        )
    }
}