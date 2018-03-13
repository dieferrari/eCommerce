import React from 'react'
import {Link} from 'react-router-dom'


export default () => (
	<div>
		<nav  className="navbar navbar-light bg-light justify-content-between">
			<a className="navbar-brand">e-Commerce</a>
			
			<ul className="nav nav-pills">
  			<li className="nav-item">
   				<Link className="nav-link active" to={`/`}>All Products</Link>
  			</li>
  			<li className="nav-item dropdown">
   				<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categories</a>
    			<div className="dropdown-menu">
						<a className="dropdown-item" href="#">Action</a>
						<a className="dropdown-item" href="#">Another action</a>
						<a className="dropdown-item" href="#">Something else here</a>
					<div className="dropdown-divider"></div>
						<a className="dropdown-item" href="#">Separated link</a>
    			</div>
  			</li>
  			<li className="nav-item">
    			<Link className="nav-link" to={`/carrito`}>Cart <span>(5)</span></Link> 
  			</li>
  			<li className="nav-item">
    			<a className="nav-link disabled" href="#">Disabled</a>
  			</li>
			</ul>
				
				
			<form className="form-inline">
					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
					<button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
			</form>
			<Link to={`/login`}>
					Login / Register
			</Link>
		</nav>
	</div>
)