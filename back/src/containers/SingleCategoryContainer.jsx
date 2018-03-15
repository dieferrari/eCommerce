import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleCategory } from '../redux/actions/singleCategory';
import SingleCategory from '../components/SingleCategory';
import { Userlogged } from '../redux/actions/user'
class SingleCategoryContainer extends React.Component {

	componentDidMount() {
	this.props.fetchSingleCategory(this.props.id)
	
	}

	render () {
		return (
			<SingleCategory
				category={this.props.category}
			/>
		)
	}

}

const mapStateToProps = function(state, ownProps) {
	return {
		category: state.singleCategory,
		id: ownProps.match.params.id,
	}
}

const mapDispatchToProps = function(dispatch) {
	return {
		fetchSingleCategory: (id) => dispatch(fetchSingleCategory(id)),
		Userlogged:()=>dispatch(Userlogged()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCategoryContainer)
