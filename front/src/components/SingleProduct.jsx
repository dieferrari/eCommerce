import React from 'react';
import {Link} from 'react-router-dom'
import ReviewForm from './ReviewForm'
import axios from 'axios'


export default ({ product, user, fetchPost, fetchUser }) => {

  const submit = (values) =>{
    fetchPost(product.id, values, fetchUser);
  }

  return(
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
    <ReviewForm onSubmit={submit}/>
    <h3>Reviews:</h3>
    {product.reviews.map(rev => (
      <div key={rev.id}>
       <Link to={`/user/${rev.Author.id}`}><p>{rev.Author.fullName}</p> </Link>
        <p>{rev.text}</p>
        <p>Rate: {rev.rate}</p>
        <Link to={`/product/${product.id}/review/${rev.id}/editReview`} product={product}>
          <button>Edit</button>
        </Link>
      </div>
    ))}
    </div>
    )}
  </div>
  )
};
