import React from 'react'
import store from '../redux/store'
import Products from '../components/Products'
import {fetchProducts} from '../redux/actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class ProductsContainer extends React.Component {


    render(){
        return <Products products={this.props.products} />
    }

}

const mapStateToProps = state => ({
    products: state.products,
    loading: state.loading
})

const mapDispatchToProps = dispatch => {
  return {
    recibeProducts: () => dispatch(fetchProducts()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)