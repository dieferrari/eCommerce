import React from 'react';

export default (props) => (
  <div>
      <form onSubmit={props.handleSubmit} method="POST">
          <input type="text" name="firstname" placeholder="Username"></input>
          <input type="text" name="lastname" placeholder="Lastname"></input>
          <input type="text" name="email" placeholder="Email"></input>
          <input type="password" name="password" placeholder="password"></input>
          <button type="submit">Register</button>
      </form>
      <a href="http://localhost:3001/login">Login</a>
  </div>
);