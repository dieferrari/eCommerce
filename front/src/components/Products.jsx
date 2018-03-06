import React from 'react'
import {Link} from 'react-router-dom'

export default ({products}) => (
    <div>
        <h2>Productos</h2>
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <Link to={`/products/${product.id}`}>
                    <img src={product.img} alt=""/>
                    </Link>
                    <h3>{product.name}</h3>
                    <h4>{product.price}</h4>
                </div>
            ))}
        </div>
    </div>
);