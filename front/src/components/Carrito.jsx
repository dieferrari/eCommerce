import React from 'react';
import { Link } from 'react-router-dom';

export default ({ Carrito }) => (
    <div>
      <h1>Carrito</h1>
      {!Carrito ? "Loading" :
      <div>
      {Carrito.map(product=>{
        return(
        <Link to={"/products/" + product.id}>
        <p key={product.id}>{product.name}</p>
        </Link>
        )
      })}
      </div>}
    </div>
  );