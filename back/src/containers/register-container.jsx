import React from 'react';
import Register from '../components/register';
import { createUser,facebookUser } from '../redux/actions/user';
import store from '../redux/store';

export default class RegisterContainer extends React.Component{
    constructor(){
    super();
        this.state = store.getState()
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    componentDidMount(){
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState()
            );
          });
    }
    componentWillUnmount(){
        this.unsubscribe()
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
            <Register 
            user={this.state.user.user} 
            handleSubmit={this.handleSubmit}
            />
        )
    }
}