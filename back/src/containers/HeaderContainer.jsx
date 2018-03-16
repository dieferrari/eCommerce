import React from 'react'
import {connect} from 'react-redux'
import { deslogUser } from '../redux/actions/user';
import Header from '../components/Header';
class HeaderContainer extends React.Component{
constructor(props){
    super(props)
    this.handleDeslogSubmit=this.handleDeslogSubmit.bind(this)
}

handleDeslogSubmit(e){
    e.preventDefault()
    this.props.deslogUser()
}

render(){
    const {categories,user,carrito, location}=this.props
    return(<Header handleDeslogSubmit={this.handleDeslogSubmit}
    user={user} carrito={carrito} categories={categories} location={location}
    />)
}
}
const mapStateToProps=(state, ownProps)=>({
    categories:state.category.category,
    user:state.user.user,
    carrito:state.user.carrito,
    location: ownProps.location
})
const mapDispatchToProps=(dispatch)=>({
    deslogUser:()=>dispatch(deslogUser())
})

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer)