import React from 'react';

export default ({ product }) => (
  <div>
    <img src={product.img}/>
    <h3>{product.name}</h3>
    <h4>{product.price}</h4>
    <h5>{product.stock}</h5>
    <p>{product.description}</p>

  </div>

);