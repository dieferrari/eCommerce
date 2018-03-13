import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSingleProduct } from '../redux/actions/singleProduct';
import SingleProduct from '../components/SingleProduct';
import {fetchUser} from '../redux/actions/user'
import { fetchPost } from '../redux/actions/user'
import { EditReview} from '../components/ReviewForm'

class SingleProductContainer extends React.Component {
	constructor(){
		super()
		this.state = {
			user: {}
		}
	}

	componentDidMount() {
		this.props.fetchSingleProduct(this.props.id)
		this.props.fetchUser(102)
		.then(user => {
			this.setState({user})
		})
	}

	render () {
		return (
			<SingleProduct
				product={this.props.product}
				user={this.props.id}
				fetchPost={this.props.fetchPost}
				fetchUser={this.state.user}
			/>
		)
	}

}

const mapStateToProps = function(state, ownProps) {
	return {
		product: state.singleProduct,
		loading: state.loading,
		id: ownProps.match.params.id,
		review: state.review,
		user: state.user.id,
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchSingleProduct,
	fetchUser,
	fetchPost
}, dispatch)
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
