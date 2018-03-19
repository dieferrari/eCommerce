import React from 'react';
import Login from '../components/login';
import { loggedUser } from '../redux/actions/user';
import { mergeCarritos } from '../redux/actions/carrito';
import { Route,Link,Switch,Redirect } from 'react-router-dom';
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
        const {user,location}=this.props
        const { from } = location.state || { from: '/'}
        if (JSON.parse(localStorage.getItem('localCarrito')).length > 0){
            return (
                <div>
                    <Login user={user} handleSubmit={this.handleSubmitLocal} from={from} location={location}/>
                </div>
            )
        }else{ 
            return (
                <div>
                    <Login user={user} handleSubmit={this.handleSubmit} from={from} location={location}/>
                </div>
            )
        }
        
    }
}
const mapStateToProps=(state, ownProps)=>({
    user:state.user.user,
    location: ownProps.location

})
const mapDispatchToProps=(dispatch)=>({
    loggedUser:(credentials) =>dispatch(loggedUser(credentials)),
    mergeCarritos: (Lc) => dispatch(mergeCarritos(Lc))
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer)