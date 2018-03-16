import React from 'react';
import {Link} from 'react-router-dom';
// import { login, logout, isLoggedIn } from '../utils/Authservice';

// Create our number formatter.
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    // the default value for minimumFractionDigits depends on the currency
    // and is usually already 2 Copy Paste For The Win
  });


export default ({products, handleChange, handleCantidad, handleSubmit, flagCantidad, flagIndex, alertMessage}) => (
    // <div>
    // {!isLoggedIn() ? "no estas logeado perro" :
    <div style={{padding:'50px'}}>
        <h2>Productos</h2>
        <div className="form-group">
            <input style={{maxWidth: '35rem'}} type="text" className="form-control" id="formGroupExampleInput" onChange={(e)=>handleChange(e)} placeholder="Nombre del producto"/>      
        </div>
        <div className="container-fluid">
            <div className="row">
            {products.map((product, index) => (
                <div key={product.id} className="col-md-3" style={{ minWidth: '30', maxWidth: '30rem',margin: '30px' }}>
                  <Link to ={`/products/${product.id}`}>
                  <img style={{padding:"30px"}} className="responsive card-img-top" src={product.imgURL} alt="Card image cap"/>
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{formatter.format(product.price)}</p>
										{product.stock == 0 ? <small><h6 className= "text-danger">Out of Stock</h6></small> : <small><h6 className= "text-success">In Stock</h6></small>}
									</div>
                  <div>
                    <form onSubmit={(evt)=> handleSubmit(evt, product) }>
											<button onClick={()=>handleCantidad(product.stock, flagCantidad-1, index,product.id)} type="button" name="resta" className="btn btn-outline-secondary">-</button>
													<input onChange={(evt) => handleCantidad(product.stock, evt.target.value, index,product.id)} value={index == flagIndex ? flagCantidad : 1} />
													
													<button onClick={()=>handleCantidad(product.stock, flagCantidad+1, index,product.id)} type="button" name="suma" className="btn btn-outline-secondary">+</button>
													<br/>
													{ alertMessage === index ? <h6 className= "text-danger"><small>Hay solo {product.stock} en stock</small></h6> : <br/>}
													<br/>
													<button className="btn btn-success">Add to cart</button>
													
										</form>
                  </div>
                </div>
            ))}
            </div>
        </div>
    </div>
    // }
    // </div>
);