import React from 'react';
import { Link } from 'react-router-dom';

export default ({ category }) => 
{
  if (!category) return <h3>Loading</h3>
  
  return (
  <div>
    <h1>{category.name}</h1>
    <div>

      {category.products.map(product => (
        <div>
          <img src={product.imgURL}/>
          <h1>{product.name}</h1>
          <h3>Price: ${product.price}</h3>
          <h4>Stock: {product.stock}</h4>
          <p>Description: {product.description}</p>
          <h4>Categories: </h4>
          {product.categories.map(category => (
            <div>
              <Link to={`/category/${category.id}`}>{ category.name }</Link>  
            </div>
        ))}
        </div>
      ))} 
      
    </div>
  </div>
  )
}