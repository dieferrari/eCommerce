import React from 'react';
import { Link } from 'react-router-dom';

export default ({ category }) => (
    <div className="categories" key={category.id}>
    <Link to={'/products'}>
        <h1>{category.name}</h1>
    </Link>
    </div>
  );