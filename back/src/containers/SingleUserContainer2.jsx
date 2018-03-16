import React from 'react';
import {Route,Link,Switch,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser,deslogUser } from '../redux/actions/user';
import SingleUser from '../components/SingleUser';
import { fetchUserOrders } from '../redux/actions/userOrders'
import UserOrders from '../components/UserOrder';
import UserCheckout from '../components/UserCheckout';
import {postOrders} from '../redux/actions/orders'
import RouteHook from 'react-route-hook';

class SingleUserContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            flag:false
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.checkoutHandleSubmit=this.checkoutHandleSubmit.bind(this)
    }
	componentDidMount() {
        this.props.fetchUserOrders()
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
             this.props.postOrders(body)
             this.setState({flag:true})
         }
	render () {
        
        const {match,user,userOrders,carrito}=this.props
		return (
            <Switch>
                <RouteHook exact
            path={`${match.path}`}
            render={
                ()=><SingleUser
				handleSubmit={this.handleSubmit}
                user={user}/>
                  }/>
            <RouteHook onEnter={this.props.fetchUserOrders}
            path={`${match.path}/orders`}
            render={
                ()=><UserOrders
				userOrders={userOrders}/>}/>
            <RouteHook
            path={`${match.path}/checkout`}
            render={
                 ()=><UserCheckout user={user} flag={this.state.flag}
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
        match:ownProps.match
	}
}

const mapDispatchToProps = (dispatch)=>({
    fetchUser:(id)=>dispatch(fetchUser(id)),
    deslogUser:()=>dispatch(deslogUser()),
    fetchUserOrders:()=>dispatch(fetchUserOrders()),
    postOrders:(body)=>dispatch(postOrders(body))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleUserContainer)