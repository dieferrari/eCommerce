import React from 'react';
import store from '../redux/store';
import { connect } from 'react-redux';
import { fetchSingleCategory } from '../redux/actions/singleCategory';
import SingleCategory from '../components/SingleCategory';

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
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCategoryContainer)
