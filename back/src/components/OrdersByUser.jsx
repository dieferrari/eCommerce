import React from 'react';
import { Link } from 'react-router-dom';

export default ({ products }) => {
      
      var sumTotal = products.reduce(function(tot, record) {
          return tot + record.orderProduct.cantidad * record.price;
      },0);
    
    return(<div>
      {!products ? "Loading" :
      <div>
      {products.map(product=>(
        <div key={product.id}>
            <Link to={`/products/${product.id}`}>
              <p>Product Name:{product.name}</p>   
              <div>
                <img src={product.imgURL} alt=""/>  
              </div> 
            </Link>
            <p>Precio: {product.price}</p>
            <p>Cantidad: {product.orderProduct.cantidad}</p>
            <p>Total: {product.orderProduct.cantidad * product.price}</p>
        </div>
      ))}
      <p>Precio Final: {sumTotal}</p>
      </div>}
    </div>)
};