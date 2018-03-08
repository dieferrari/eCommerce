import React from 'react';
import { Link } from 'react-router-dom';

export default ({ product }) => 
{
  if (!product) return <h3>Loading</h3>
  
  return (
  <div>
    <h1>Single Product</h1>
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
    <h3>Reviews:</h3>
    {product.reviews.map(review => (
        <div>
          <Link to={`/user/${review.AuthorId}`}>Nombre</Link>
          {/* Cambiar "Nombre" por review.name   */}
          <h3>Rate: {review.rate}/5</h3>
          <p>{review.text}</p>
        </div>
    ))}
  </div>
  )
}
