import React from 'react';
import { connect } from 'react-redux';
import Carrito from '../components/Carrito';
// import { bindActionCreators } from 'redux';

export default class CarritoContainer extends React.Component{
  render(){
    const localCarrito = JSON.parse(localStorage.getItem("localCarrito"))
    return (
      <div>
        <Carrito localCarrito = {localCarrito}/>
      </div>
    )
  }
}


// const mapStateToProps = state => ({
//   carrito: state.user.carrito
// })

// export default connect(mapStateToProps)(CarritoContainer);