import React from 'react';
import {Link} from 'react-router-dom';

// Create our number formatter.
var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  // the default value for minimumFractionDigits depends on the currency
  // and is usually already 2
});

export default ({ product }) => (
  <div className="container">
    {!product.id ? "Loading" :
    (<div className="row">
      <div className="card-img-top col item-photo">
        <img style={{width:"400px", height:"200px"}} alt="Card image cap" src={product.imgURL}/>
      </div>
      <div className="col-xs-5 card-body" style={{border:"0px solid gray"}}>
        <h3 className="card-title">{product.name}</h3>
        <h6 className="title-price"><small>price</small></h6>
        <h4 style={{marginTop:"0px"}}>{formatter.format(product.price)}</h4>
        <br/>
        <h6>Stock: {product.stock}</h6>
        <br/>
        
        <h6><small>description</small></h6>
        <p className="card-text">{product.description}</p>
        <div className="section" style={{paddingBottom:"20px"}}>
          <h6 className="title-attr"><small>quantity</small></h6>                    
          <div>
              <button type="button" className="btn btn-outline-secondary">-</button>
              <input defaultValue="1" />
              <button type="button" className="btn btn-outline-secondary">+</button>
          </div>
        </div>  
        <a href="#" className="btn btn-success">Add to cart</a>

        {product.categories.map(cat => (
          <div key={cat.id}>
            <h6>Categories: {cat.name}</h6>
          </div>
        ))}
        <br/>
        <br/>
        <br/>
        <h6>Reviews:</h6>
        {console.log(product)}
        {product.reviews.map(rev => (
          <div key={rev.id}>
            <Link to={`/user/${rev.Author.id}`}><p>{rev.Author.fullName}</p> </Link>
            <p>Rate: {rev.rate}</p>
            <p className="card-text">{rev.text}</p>            
          </div>
        ))}
      </div>
    </div>
    )}
  </div>

);
