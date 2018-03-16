import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Col, Row } from 'reactstrap';

// Create our number formatter.
var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  // the default value for minimumFractionDigits depends on the currency
  // and is usually already 2 Copy Paste For The Win
});


export default ({localCarrito, handleChange, handleClick, alertMessage}) => (
    <div>
      <h1>Carrito</h1>
      {!localCarrito ? "loading" : 
       
        <ListGroup>
       
          {localCarrito.map((product, index) => (
            <ListGroupItem key={product.id}>
            {console.log(product)}
              <Row>
                  <div className="d-inline-flex p-2">
                    <img src={product.imgURL} style={{width:"100px", height:"100px"}} alt=""/>
                  </div>
                <Col>
                  <div>
                    <h3>{product.name}</h3>
                    {product.stock == 0 ? <small><h6 className= "text-danger">Out of Stock</h6></small> : <small><h6 className= "text-success">In Stock</h6></small>}
                    <br/>
                    <br/>
                    <button onClick={()=>handleClick(index,product.id)} type="button" className="btn btn-sm btn-outline-danger">Remove</button>
                  </div>
                </Col>
                <Col>
                  <div>
                    <h4>{formatter.format(product.price)}</h4>
                  </div>
                </Col>
                <Col>
                  <div>

                  {/* <div className="btn-group">
                    <button onClick={()=>handleClickDropdown()} type="button" className="btn btn-outline-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {product.cantidad}
                    </button>
                    <div className="dropdown-menu">
                      <a onClick={()=>handleChange(1)} className="dropdown-item" href="#">1</a>
                      <a className="dropdown-item" href="#">2</a>
                      <a className="dropdown-item" href="#">3</a>
                      <a className="dropdown-item" href="#">4</a>
                      <a className="dropdown-item" href="#">5</a>
                      <a className="dropdown-item" href="#">6</a>
                      <a className="dropdown-item" href="#">7</a>
                      <a className="dropdown-item" href="#">8</a>
                      <a className="dropdown-item" href="#">9</a>
                      <a className="dropdown-item" href="#">+10</a>
                    </div>
                  </div> */}
                    
                    <button onClick={()=>handleChange(product.stock, product.cantidad-1, index,product.id)} type="button" name="resta" className="btn btn-outline-secondary">-</button>
                    <input onChange={(evt) => handleChange(product.stock, evt.target.value, index,product.id)} value={product.cantidad} />
                    
                    <button onClick={()=>handleChange(product.stock, product.cantidad+1, index,product.id)} type="button" name="suma" className="btn btn-outline-secondary">+</button>
                    <br/>
                    { alertMessage === index ? <h6 className= "text-danger"><small>Hay solo {product.stock} en stock</small></h6> : <br/>}
                  </div>
                </Col>
              </Row>
              
            </ListGroupItem>
          ))
          }
        </ListGroup>
      }
      <br/>
      <br/>
      <Link to={`/user/checkout`}><button className={"col-1 btn btn-success"} >Go to checkout!</button></Link>
    </div>
  );