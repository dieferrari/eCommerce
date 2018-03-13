import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditReview from '../components/EditReview'

class EditReviewContainer extends React.Component {

    componentDidMount () {

    }

    render(){
        return (
            <EditReview />
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

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EditReviewContainer)