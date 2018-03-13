import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchSingleProduct, addProductReview  } from '../redux/actions/singleProduct';
import {addCarrito} from '../redux/actions/carrito';
import SingleProduct from '../components/SingleProduct';

class SingleProductContainer extends React.Component {
	constructor(props){
	super(props);
		this.state = {
			cantidad:1,
			user: {
				id:101,
				firstName: 'Usuario',
				lastName: 'Estatico',
				email: 'estatico@cc.cc',
			  }
		}
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	}


	componentDidMount() {
		this.props.fetchSingleProduct(this.props.id)
	}

	handleChange(value){
				this.setState({cantidad : value})
	}

	handleSubmit(evt){
		evt.preventDefault()
		this.props.product.cantidad = this.state.cantidad
		this.props.addCarrito(this.props.product)
	}

	render () {

		return (
			<SingleProduct
				product={this.props.product}
				handleChange={this.handleChange}
				cantidad={this.state.cantidad}
				handleSubmit={this.handleSubmit}
				user={this.state.user.id}
				addProductReview={this.props.addProductReview}
			/>
		)
	}

}

const mapStateToProps = function(state, ownProps) {
	return {
		product: state.singleProduct,
		loading: state.loading,
		id: ownProps.match.params.id,
	}
}

const mapDispatchToProps = function(dispatch) {
	return {
		fetchSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
		addCarrito: (product) => dispatch(addCarrito(product)),
		addProductReview: (productId,user,values) => dispatch(addProductReview(productId,user,values))
	}
}

// const mapDispatchToProps = function(dispatch) {
// 	return bindActionCreators({fetchSingleProduct}, dispatch)
// }


export default connect(mapStateToProps, mapDispatchToProps)(SingleProductContainer)



// function connect(mapState, mapDispatch) {
// 	const stateProps = mapState(store.getState())
// 	const dispatchProps = mapDispatch(store.dispatch)
	
// 	const props = Object.assign({}, stateProps, dispatchProps)

// 	return function(Component) {
// 		return (
// 			<Wrapper childProps={props}>
// 				<Component />
// 			</Wrapper>	
// 		)
// 	}
// }

// class Wrapper extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				{React.cloneElement(this.props.children, this.props.childProps)}
// 			</div>
// 		)
// 	}
// }
