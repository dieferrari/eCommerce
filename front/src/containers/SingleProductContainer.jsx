import React from 'react';
import store from '../redux/store';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { fetchSingleProduct } from '../redux/actions/singleProduct';
import SingleProduct from '../components/SingleProduct';

class SingleProductContainer extends React.Component {

	componentDidMount() {
    this.props.fetchSingleProduct(this.props.id)
	}

	render () {
		return (
			<SingleProduct
				product={this.props.product}
			/>
		)
	}

}

const mapStateToProps = function(state, ownProps) {
	return {
		product: state.singleProduct.product,
		loading: state.loading,
		id: ownProps.match.params.id,
	}
}

const mapDispatchToProps = function(dispatch) {
	return {
		fetchSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
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
