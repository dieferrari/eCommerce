import React from 'react';
import { Link } from 'react-router-dom';

export default ({ categories }) => (
    <div>
      <h1>Categories</h1>
      {!categories ? "Loading" :
      <div>
      {categories.map(catego=>{
        return(<p key={catego.id}>{catego.name}</p>)
      })}
      </div>}
    </div>
  );