import React from 'react';
import { Link } from 'react-router-dom';

export default ({ category }) => 
{
  if (!category.id) return <h3>Loading</h3>
  
  return (
  <div>
    <h1>{category.name}</h1>
    <div>

      {category.products.map(product => (
        <div key={product.id}>
          <img src={product.imgURL}/>
          <h1>{product.name}</h1>
          <h3>Price: ${product.price}</h3>
          <h4>Stock: {product.stock}</h4>
          <p>Description: {product.description}</p>          
        </div>
      ))} 
      
    </div>
  </div>
  )
}