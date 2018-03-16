import React from 'react'
import {Link} from 'react-router-dom'


export default ({categories,user,carrito,handleDeslogSubmit, location}) => (
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
						<a className="dropdown-item" href="#">Action</a>
						<a className="dropdown-item" href="#">Another action</a>
						<a className="dropdown-item" href="#">Something else here</a>
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
	</div>
)