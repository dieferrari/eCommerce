import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../redux/actions/user';
import SingleUser from '../components/SingleUser';


class SingleUserContainer extends React.Component {

	componentDidMount() {
    this.props.fetchUser(this.props.id)
	}

	render () {
		return (
			<SingleUser
				user={this.props.user}
			/>
		)
	}

}

const mapStateToProps = function(state, ownProps) {
	return {
		user: state.user.user,
    loading: state.loading,
		id: ownProps.match.params.id,
	}
}

const mapDispatchToProps = function(dispatch) {
	return {
		fetchUser: (id) => dispatch(fetchUser(id)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleUserContainer)