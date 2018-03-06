import React from 'react';
import { connect } from 'react-redux';
import Category from '../components/Category';
import {fetchCategories} from '../redux/actions'
import { bindActionCreators } from 'redux';
import { fetchCategories } from './store/actions';

class CategoryContainer extends React.Component{

  componentDidMount() {
    const {fetchCategories} = this.props;
    fetchCategories();
  }

  render(){
    const {categories} = this.props;
    return(
      <div>
        {categories.map(category => <Category  category={category}/>)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.category,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCategories,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Category);