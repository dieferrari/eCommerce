import React from 'react';
import { connect } from 'react-redux';
import Category from '../components/Category';
import { bindActionCreators } from 'redux';
import { fetchCategories } from '../redux/actions/category';

class CategoryContainer extends React.Component{

  componentDidMount() {
    const {fetchCategories} = this.props;
    fetchCategories();
  }

  render(){
    const {categories} = this.props;

    return(
      <div>
        <Category  categories={categories}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.category.category,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCategories,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);