import React from 'react';
import {Route,Link,Switch,Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import UserCheckout from '../components/UserCheckout';
import {postOrders} from '../redux/actions/orders'

class UserCheckoutContainer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user:{ "fullName": "Diego Ferrari",
            "id": 102,
            "firstName": "Diego",
            "lastName": "Ferrari",
            "isAdmin": false,
            "email": "diego@cc.cc"},
            carrito: [
                {
                    "id": 101,
                    "name": "Inspiron I5578",
                    "description": "Notebook 2 en 1 Dell Inspiron I5578 Intel Core i7 8GB 1TB",
                    "price": 23699,
                    "carrito": {
                        "cantidad": 1
                    }
                },
                {
                    "id": 102,
                    "name": "HP 15-bs022la",
                    "description": "Notebook HP 15-bs022la Intel Core i7 12GB 1TB",
                    "price": 19499,
                    "carrito": {
                        "cantidad": 1
                    }
                },
                {
                    "id": 103,
                    "name": "Acer Aspire",
                    "description": "Notebook Acer Aspire E5-575-76SD Intel Core i7",
                    "price": 16999,
                    "carrito": {
                        "cantidad": 1
                    }
                }
            ]
        };
        this.handleSubmit=this.handleSubmit.bind(this)
    }

   handleSubmit(e){
       e.preventDefault()
        const body={
            userId:this.state.user.id,
            userDirection:e.target[1].value,
            userMail:e.target[0].value,
            products:this.state.carrito.map(prod=>{
                return{id:prod.id,cantidad:prod.carrito.cantidad}
            })}
            console.log(body)
            this.props.postOrders(body)
        }
    render(){
        const {user,carrito}=this.state//PROPS
        return(
            <UserCheckout user={user}
             carrito={carrito} 
             handleSubmit={this.handleSubmit}/>
        )
    }
    
}
const mapStateToProps=(state)=>({
   // user=state.user.user,
    //carrito=state.user.carrito,
})
const mapDispatchToProps=(dispatch)=>({
    postOrders:(body)=>dispatch(postOrders(body))
})

export default connect(mapStateToProps,mapDispatchToProps)(UserCheckoutContainer)