import React from 'react';
import { connect } from 'react-redux';
import Carrito from '../components/Carrito';
import { bindActionCreators } from 'redux';

class CarritoContainer extends React.Component{
  render(){
    const { Carrito } = this.props;
    return(
      <div>
        <Carrito Carrito={Carrito}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  carrito: state.user.carrito
})

export default connect(mapStateToProps)(CarritoContainer);