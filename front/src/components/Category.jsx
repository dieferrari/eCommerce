import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Col } from 'reactstrap';

export default ({ categories }) => (
    <div>
      <h1>Categories</h1>
      {!categories ? "Loading" :
      <div>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
        <ListGroup>
          {categories.map(catego=>(
          //conn React-Bootstrap:
          
          <ListGroupItem key={catego.id}>
            <Link to={`/categories/${catego.id}`}>
            {catego.name}
            </Link>
          </ListGroupItem>
          
          // Sin React-Bootstrap:
          // <p key={catego.id}>
          // <Link to={`/categories/${catego.id}`}>
          //   {catego.name}
          // </Link>
          // </p>
          
          ))}
        </ListGroup>
        </Col>  
      </div>}
    </div>
  );