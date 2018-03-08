import React from 'react'
import {Link} from 'react-router-dom'

export default ({products,handleChange}) => (
    <div>
        <h2>Productos</h2>
        <div>
        <form >
         <input
            placeholder="Nombre del producto" onChange={(e)=>handleChange(e)}/>  
        </form>
        </div>
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <Link to={`/products/${product.id}`}>
                    <img src={product.imgURL} alt=""/>
                    </Link>
                    <h3>{product.name}</h3>
                    <h4>{product.price}</h4>
                </div>
            ))}
        </div>
    </div>
);