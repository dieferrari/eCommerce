import React from 'react';
import Login from '../components/login';
import { loggedUser } from '../redux/actions/user';
import { mergeCarritos } from '../redux/actions/carrito';
import {Route,Link,Switch,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';


 class LoginContainer extends React.Component{
    constructor(){
    super();
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleSubmitLocal = this.handleSubmitLocal.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault()
        this.props.loggedUser({
            email:event.target[0].value,
            password:event.target[1].value,
        })
    }
    handleSubmitLocal(event) {
        console.log('RUUUUNIIIING')
        event.preventDefault()
        this.props.loggedUser({
            email:event.target[0].value,
            password:event.target[1].value,
        })
        .then(() => this.props.mergeCarritos(JSON.parse(localStorage.getItem('localCarrito')))
        .then(()=> localStorage.removeItem('localCarrito'))
    )
    }
    render () {
        const {user}=this.props
        if (JSON.parse(localStorage.getItem('localCarrito')).length > 0){
            return (
                <div>
                    <Login user={user} handleSubmit={this.handleSubmitLocal}/>
                </div>
            )
        }else{ 
            return (
                <div>
                    <Login user={user} handleSubmit={this.handleSubmit}/>
                </div>
            )
        }
        
    }
}
const mapStateToProps=(state)=>({
    user:state.user.user,

})
const mapDispatchToProps=(dispatch)=>({
    loggedUser:(credentials) =>dispatch(loggedUser(credentials)),
    mergeCarritos: (Lc) => dispatch(mergeCarritos(Lc))
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer)