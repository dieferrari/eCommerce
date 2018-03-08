import React from 'react';

export default ({ user , handleSubmit}) => (
  <div>
      <form onSubmit={(e)=>handleSubmit(e)} method="POST">
          <input type="text" name="firstname" placeholder="Firstname"></input>
          <input type="text" name="lastname" placeholder="Lastname"></input>
          <input type="text" name="email" placeholder="Email"></input>
          <input type="password" name="password" placeholder="password"></input>
          <button type="submit">Register</button>
      </form>
      <a href="http://localhost:3000/login">Login</a>
      {console.log('user',user)}
  </div>
);