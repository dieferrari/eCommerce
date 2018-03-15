import React from 'react';
import {Route,Link,Switch,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser,deslogUser } from '../redux/actions/user';
import SingleUser from '../components/SingleUser';
import { fetchUserOrders } from '../redux/actions/userOrders'
import UserOrders from '../components/UserOrder';
import UserCheckout from '../components/UserCheckout';
import {postOrders} from '../redux/actions/orders'

class SingleUserContainer extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.checkoutHandleSubmit=this.checkoutHandleSubmit.bind(this)
    }
	componentDidMount() {
    //va a volar
    this.props.fetchUserOrders(this.props.id)
	}
	handleSubmit(e){
		e.preventDefault()
		this.props.deslogUser()
    }
    checkoutHandleSubmit(e){
        e.preventDefault()
         const body={
             userId:this.props.user.id,
             userDirection:e.target[1].value,
             userMail:e.target[0].value,
             products:this.props.carrito.map(prod=>{
                 return{id:prod.id,cantidad:prod.carrito.cantidad}
             })}
             console.log(body)
             this.props.postOrders(body)
         }
	render () {
        
        const {match,user,userOrders,carrito}=this.props
        console.log('Entrooooo')
        console.log('eeeeeeee',user)
		return (
            <Switch>
                <Route exact
            path={`${match.path}`}
            render={
                ()=><SingleUser
				handleSubmit={this.handleSubmit}
                user={user}/>
                  }/>
            <Route 
            path={`${match.path}/orders`}
            render={
                ()=><UserOrders
				userOrders={userOrders}/>}/>
            <Route
            path={`${match.path}/checkout`}
            render={
                 ()=><UserCheckout user={user}
                    carrito={carrito} 
                    handleSubmit={this.checkoutHandleSubmit}/>}
        />
            </Switch>
		)
	}
}

const mapStateToProps = function(state, ownProps) {
	return {
        userOrders: state.userOrders,
        user: state.user.user,
        carrito:state.user.carrito,
        id: ownProps.match.params.id,
        match:ownProps.match
	}
}

const mapDispatchToProps = (dispatch)=>({
    fetchUser:(id)=>dispatch(fetchUser(id)),
    deslogUser:()=>dispatch(deslogUser()),
    fetchUserOrders:(id)=>dispatch(fetchUserOrders(id)),
    postOrders:(body)=>dispatch(postOrders(body))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleUserContainer)