import React from 'react';
import { Link } from 'react-router-dom';

export default ({ products }) => {
      
      var sumTotal = products.reduce(function(tot, record) {
          return tot + record.orderProduct.cantidad * record.price;
      },0);
    
    return(
    <div>
      {!products ? "Loading" :(
      <div>
        <table >
        <tbody>
            <tr>
                <th>Producto</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total/Producto</th>
            </tr>
            {products.map(prod=>(
              <tr key={prod.id}>
              <td>{prod.name}</td>
              <td>{prod.description}</td>
              <td>{`$ ${prod.price}`}</td>
              <td>{prod.orderProduct.cantidad}</td>
              <td>{`$ ${prod.orderProduct.cantidad*prod.price}`}</td>
          </tr>
            ))}
        </tbody>
        </table> 
        <p>Precio Final:$ {sumTotal}</p>
      </div>)}
    </div>
    )
};


