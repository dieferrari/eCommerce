import React from 'react'
import Products from '../components/Products'
import {fetchProducts} from '../redux/actions/products'
import {connect} from 'react-redux'
import { Userlogged } from '../redux/actions/user'
import { editCarrito,
    editUserCarrito, addCarrito } from '../redux/actions/carrito';

class ProductsContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            inputValue:'',
            localCarrito: JSON.parse(localStorage.getItem("localCarrito")),
			alertMessage: false,
			flagCantidad: 1,
			flagIndex:-1,
        }
        this.handleChange = this.handleChange.bind(this);
		this.handleCantidad = this.handleCantidad.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
        
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

    handleCantidad(stock, value, index) {
        console.log("CLICK CANTIDAD PRODUCTS, stock: "+stock+" value: "+value+" index: "+index)
        if(value <= stock && value > 0){
          this.setState({flagCantidad:value, flagIndex:index})
        } else if (value > 0) {
			this.setState({ alertMessage: index })
			setInterval(()=>{ this.setState({ alertMessage: false })}, 5000)
		}
	}
	
	handleSubmit(evt, product){
		// filtro por id de producto en el carrito
//me devuelve un arreglo vacio o de un objeto
// y si me trae algo llamo a editUserCarrito({id:obj.id,cantidad:obj.carrito.cantidad+value})
//si no trae nada llamo editUserCarrito({id:id,cantidad:value})
		evt.preventDefault()		
		console.log("CLICK SUBMIT PRODUCT  " + 'FLAGCANTIDAD: '+ this.state.flagCantidad)
		console.log('USEEEEEER',this.props.user.id)
		if(this.props.user.id){
			const foundProduct = this.props.carrito.filter( prod => prod.id === product.id)
			console.log('PRODUCTO ENCONTRADO:',foundProduct)
			if(foundProduct.length){
				this.props.editUserCarrito({id:foundProduct[0].id, cantidad: foundProduct[0].carrito.cantidad + this.state.flagCantidad})
			} else { this.props.editUserCarrito({id:product.id, cantidad:this.state.flagCantidad})}
		} else{
			this.props.addCarrito(product, this.state.flagCantidad)
		}
		this.state.flagCantidad = 1
	}
      
    render(){
        const inputValue=this.state.inputValue
        const productosFiltrados=this.props.products.filter(producto => producto.name.toLowerCase().match(inputValue.toLowerCase()))
        return (
        <div>  
        <Products 
            products={productosFiltrados} 
            handleChange={this.handleChange}
			handleCantidad = {this.handleCantidad} 
			handleSubmit = {this.handleSubmit}
			user={this.props.user}
			flagCantidad = {this.state.flagCantidad}
			flagIndex = {this.state.flagIndex}
			alertMessage = {this.state.alertMessage}
        />
        </div>)
    }

}

const mapStateToProps = state => ({
    products: state.products,
    loading: state.loading,
	user:state.user.user,
	carrito:state.user.carrito
})

const mapDispatchToProps = dispatch => {
  return {
    recibeProducts: () => dispatch(fetchProducts()),
    Userlogged:()=>dispatch(Userlogged()),
    editUserCarrito:(item)=>dispatch(editUserCarrito(item)),
	editCarrito: (value, index) => dispatch(editCarrito(value, index)),
	addCarrito: (product, value) => dispatch(addCarrito(product, value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)