import React from 'react'
import {Link} from 'react-router-dom'
import { fetchCategories } from '../redux/actions/category';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Header extends React.Component {

	componentDidMount() {
		const {fetchCategories} = this.props;
		fetchCategories();
	}

	render(){
		const {categories,user,carrito,handleDeslogSubmit, location} = this.props;
		return(
	<div>
		<nav  className="navbar navbar-light bg-light justify-content-between">
			<a className="navbar-brand">e-Commerce</a>
			
			<ul className="nav nav-pills">
  			<li className="nav-item">
   				<Link className="nav-link active" to={`/products`}>All Products</Link>
  			</li>
  			<li className="nav-item dropdown">
   				<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categories</a>
    			<div className="dropdown-menu">
						{categories.map(category=>(
							<a key={category.id} className="dropdown-item" href={`/categories/${category.id}`}>{category.name}</a>
						))}
					<div className="dropdown-divider"></div>
						<a className="dropdown-item" href="/category">Todas las categorias</a>
    			</div>
  			</li>
  			<li className="nav-item">
    			<Link className="nav-link" to={`/carrito`}>Cart <span>{`(${carrito.length||'LC'})`}</span></Link> 
  			</li>
  			<li className="nav-item">
			  <Link className="nav-link" to={`/user`}>{user.id?'Mi Cuenta':''}<span></span></Link> 
  			</li>
			</ul>
			<form className="form-inline">
					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
					<button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
			</form>
			{user.id?(
				<Link onClick={(e)=>handleDeslogSubmit(e)} to='#'>
				Cerrar Sesion
				</Link>
			):(<Link to={{pathname: '/login', state: { from: location }}}>
					Login
			</Link>)}
		</nav>
	</div>)
	}
}

const mapStateToProps = state => ({
	categories: state.category.category,
  })
  
  const mapDispatchToProps = dispatch => bindActionCreators({
	fetchCategories,
  }, dispatch);

  export default connect(mapStateToProps, mapDispatchToProps)(Header);