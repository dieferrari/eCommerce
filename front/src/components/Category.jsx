import React from 'react';
import { Link } from 'react-router-dom';

export default ({ categories }) => (
    <div>
      <h1>Categories</h1>
      {!categories ? "Loading" :
      <div>
      {categories.map(catego=>(
        <p key={catego.id}>
        <Link to={`/categories/${catego.id}`}>
        {catego.name}
        </Link>
        </p>
      ))}
      </div>}
    </div>
  );