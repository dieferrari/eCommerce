import React from 'react';
import {Link} from 'react-router-dom';
// import { login, logout, isLoggedIn } from '../utils/Authservice';


export default ({products,handleChange}) => (
    // <div>
    // {!isLoggedIn() ? "no estas logeado perro" :
    <div style={{padding:'50px'}}>
        <h2>Productos</h2>
        <div className="form-group">
            <input style={{maxWidth: '35rem'}} type="text" className="form-control" id="formGroupExampleInput" onChange={(e)=>handleChange(e)} placeholder="Nombre del producto"/>      
        </div>
        <div className="container-fluid">
            <div className="card-group">
            {products.map(product => (
                <div key={product.id} className="card" style={{ minWidth: '30', maxWidth: '30rem',margin: '30px' }}>
                  <Link to ={`/products/${product.id}`}>
                  <img style={{padding:"30px"}} className="responsive card-img-top" src={product.imgURL} alt="Card image cap"/>
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.price}</p>
                  </div>
                </div>
            ))}
            </div>
        </div>
    </div>
    // }
    // </div>
);