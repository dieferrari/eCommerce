import React from 'react';

export default ({ product }) => (
  <div>
    <h1>Single Product</h1>
    {!product ? "Loading" :
    <div>
    <img src={product.imgURL}/>
    <h3>{product.name}</h3>
    <h4>{product.price}</h4>
    <h5>{product.stock}</h5>
    <p>{product.description}</p>
    </div>
    }
  </div>

);