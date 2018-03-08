import React from 'react'
import store from '../redux/store'
import Products from '../components/Products'
import {fetchProducts} from '../redux/actions/products'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class ProductsContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={inputValue:''}
        this.handleChange = this.handleChange.bind(this);
        
    }

    componentDidMount() {
        this.props.recibeProducts()
    }

    handleChange (evt) {
        const value = evt.target.value;
        this.setState({
          inputValue: value
        });
      }

    render(){
        const inputValue=this.state.inputValue
        const productosFiltrados=this.props.products.filter(producto => producto.name.toLowerCase().match(inputValue.toLowerCase()))
        return (
        <div>  
        <Products products={productosFiltrados} handleChange={this.handleChange} />
        </div>)
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