import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchSingleProduct, addProductReview  } from '../redux/actions/singleProduct';
import {addCarrito} from '../redux/actions/carrito';
import SingleProduct from '../components/SingleProduct';
import { Userlogged } from '../redux/actions/user'
class SingleProductContainer extends React.Component {
	constructor(props){
	super(props);
		this.state = {
			cantidad:1,
		}
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	}


	componentDidMount() {
		this.props.fetchSingleProduct(this.props.id)
	
	}

	handleChange(value){
		if(value <= this.props.product.stock && value > 0){
			this.setState({cantidad : value})
		}
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
				user={this.props.user}
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
		user: state.user.user
	}
}

const mapDispatchToProps = function(dispatch) {
	return {
		fetchSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
		addCarrito: (product) => dispatch(addCarrito(product)),
		Userlogged:()=>dispatch(Userlogged()),
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
