import React from 'react';
import { Link } from 'react-router-dom';

export default ({ category }) => 
{
  if (!category.id) return <h3>Loading</h3>
  
  return (
  <div>
    <h1>{category.name}</h1>
    <div className='container-fluid'>
      <div className="row">
      {category.products.map(product => (
        <div key={product.id}className="col-md-3" style={{ minWidth: '30', maxWidth: '30rem',margin: '30px' }}>
          <img style={{padding:"30px"}} className="responsive card-img-top" src={product.imgURL}/>
          <div className="card-body">
            <h3 className="card-title">{product.name}</h3>
            <h5 className="card-text">Price: ${product.price}</h5>
            <h4>Stock: {product.stock}</h4>
            <p>Description: {product.description}</p>  
          </div>
                  
        </div>
      ))} 
      </div>
    </div>
  </div>
  )
}