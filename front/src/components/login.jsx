import React from 'react';

export default (props) => (
  <div>
      <form onSubmit={props.handleSubmit} method="POST">
          <input type="text" name="email" placeholder="Email"></input>
          <input type="password" name="password" placeholder="Password"></input>
          <button type="submit">Login</button>
      </form>
      <a href="http://localhost:3000/register">Register</a>
  </div>
);