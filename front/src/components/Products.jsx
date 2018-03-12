import React from 'react'
import {Link} from 'react-router-dom'

export default ({products,handleChange}) => (
    <div style={{padding:'50px'}}>
        <h2>Productos</h2>
        <div class="form-group">
            <input style={{maxWidth: '35rem'}} type="text" class="form-control" id="formGroupExampleInput" onChange={(e)=>handleChange(e)} placeholder="Nombre del producto"/>      
        </div>
        <div className="container-fluid">
            <div className="card-group">
            {products.map(product => (
                <div className="card" style={{ minWidth: '35rem', maxWidth: '35rem',margin: '30px' }}>
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
);