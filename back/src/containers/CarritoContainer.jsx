import React from 'react';
import { connect } from 'react-redux';
import Carrito from '../components/Carrito';
import { editCarrito,
   removeCarrito,
   mergeCarritos,
   editUserCarrito,
   removeUserCarrito } from '../redux/actions/carrito';
// import { bindActionCreators } from 'redux';

class CarritoContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      localCarrito: JSON.parse(localStorage.getItem("localCarrito")),
      alertMessage: false,
    }
  //============================HANDLE LOCAL
  this.handleChange = this.handleChange.bind(this);
  this.handleClick = this.handleClick.bind(this);
  //============================HANDLE BASE DE DATOS
  this.handleUserChange = this.handleUserChange.bind(this);
  this.handleUserClick = this.handleUserClick.bind(this);
  }
  //============================CARRITO LOCAL
  handleChange(stock, value, index){    
    console.log("ME CLICKEAROOOOOOOOOON, stock: "+stock+" value: "+value+" index: "+index)
    if(value <= stock && value > 0){
      this.props.editCarrito(value, index);
      var newLocalCarrito = this.state.localCarrito;
      newLocalCarrito[index].cantidad = value;
      this.setState({localCarrito: newLocalCarrito})
    } else if (value > 0) {
        this.setState({ alertMessage: index })
        setInterval(()=>{ this.setState({ alertMessage: false })}, 5000)
    } 
  }
  handleClick(index){
    this.props.removeCarrito(index);
    var newLocalCarrito = this.state.localCarrito;
    newLocalCarrito.splice(index, 1);
    this.setState({localCarrito: newLocalCarrito})
  }
  //============================CARRITO BASE DE DATOS ARREGLAR INDEX COMO ID
  handleUserChange(stock, value,index,id){    
    console.log("HANDLE USER, stock: "+stock+" value: "+value+" index: "+index+" id: "+id)
    if(value <= stock && value > 0){
      //this.props.editUserCarrito({id:id,cantidad:value});
      console.log('EL VALOR ESTA BIEN')
    } else if (value > 0) {
        this.setState({ alertMessage: index })
        setInterval(()=>{ this.setState({ alertMessage: false })}, 5000)
    } 
  }
  
  handleUserClick(index,id){
   //this.props.removeUserCarrito(id)
   console.log('USER HANDLE CLICK',id)
  }
  //========================================================
  render(){
    const {user,carrito}=this.props
    const touchCarrito=carrito.map(prod=>(Object.assign({},prod,{cantidad:prod.carrito.cantidad}))
    )
    console.log(touchCarrito,'TTTTTTTTT')
    if(user.id){
      return (
        <div>
          <Carrito 
          localCarrito = {touchCarrito}
          handleChange = {this.handleUserChange}
          alertMessage = {this.state.alertMessage}
          handleClick = {this.handleUserClick}
          />
        </div>
      )
    }else{
      return (
        <div>
          <Carrito 
          localCarrito = {this.state.localCarrito}
          handleChange = {this.handleChange}
          alertMessage = {this.state.alertMessage}
          handleClick = {this.handleClick}
          />
        </div>
      )
    }
    
  }

}


const mapStateToProps = state => ({
  carrito: state.user.carrito,
  user:state.user.user
})

const mapDispatchToProps = function(dispatch) {
	return {
    editCarrito: (value, index) => dispatch(editCarrito(value, index)),
    removeCarrito: (index) => dispatch(removeCarrito(index)),
    mergeCarritos:(localCarrito)=>dispatch(mergeCarritos(localCarrito)),
   editUserCarrito:(item)=>dispatch(editUserCarrito(item)),
   removeUserCarrito:(id)=>dispatch(removeUserCarrito(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarritoContainer);
