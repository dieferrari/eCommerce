import React from 'react';
import {Link} from 'react-router-dom'


export default ({ product }) => (
  <div>
    <h1>Single Product</h1>
    {!product.id ? "Loading" :
    (<div>
    <img src={product.imgURL}/>
    <h3>Nombre: {product.name}</h3>
    <h4>Precio: {product.price}</h4>
    <h4>Stock: {product.stock}</h4>
    <h4>Descripcion: {product.description}</h4>
    {product.categories.map(cat => (
      <div key={cat.id}>
        <h4>Categorias: {cat.name}</h4>
      </div>
    ))}
    <h3>Reviews:</h3>
    {product.reviews.map(rev => (
      <div key={rev.id}>
       <Link to={`/user/${rev.AuthorId}`}><p>{rev.Author.firstName}</p> </Link>
        <p>{rev.text}</p>
        <p>Rate: {rev.rate}</p>
      </div>
    ))}
    </div>
    )}
  </div>

);