import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Col } from 'reactstrap';

export default ({localCarrito, userCarrito}) => (
    <div>
      <h1>Carrito</h1>
      {!localCarrito ? "loading" : 
      <ListGroup>
        {localCarrito.map(product => {
          <ListGroupItem key={product.id}>
          {console.log(product.name)}
            <Col>
              <div>
                <img src="" alt=""/>
              </div>
            </Col>
            <Col>
              <div>
                <h3>{product.name}</h3>
              </div>
            </Col>
          </ListGroupItem>
        })
        }
      </ListGroup>
      }
    </div>
  );