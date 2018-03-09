import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUserOrders } from '../redux/actions/userOrders';
import UserOrders from '../components/UserOrder';

class UserOrderContainer extends React.Component {

	componentDidMount() {
    const { fetchUserOrders, userId} = this.props;
    fetchUserOrders(userId);
	}

	render () {
        const {userOrders} = this.props;
		return (
			<UserOrders
				userOrders={userOrders}
			/>
		)
	}

}

const mapStateToProps = (state, ownProps) => ({
    userOrders: state.userOrders,
    userId: ownProps.match.params.id,
  })
  
  const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUserOrders
  }, dispatch);

  export default connect(mapStateToProps, mapDispatchToProps)(UserOrderContainer);