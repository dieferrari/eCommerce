import React from 'react';
import { connect } from 'react-redux';
import Carrito from '../components/Carrito';
import { editCarrito, removeCarrito } from '../redux/actions/carrito';
// import { bindActionCreators } from 'redux';

class CarritoContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      localCarrito: JSON.parse(localStorage.getItem("localCarrito")),
      alertMessage: false,
    }

  this.handleChange = this.handleChange.bind(this);
  this.handleClick = this.handleClick.bind(this);
  }
  
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
  
  render(){
    
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


const mapStateToProps = state => ({
  carrito: state.user.carrito
})

const mapDispatchToProps = function(dispatch) {
	return {
    editCarrito: (value, index) => dispatch(editCarrito(value, index)),
    removeCarrito: (index) => dispatch(removeCarrito(index)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarritoContainer);
