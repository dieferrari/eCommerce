import React from 'react';
import {Link, Redirect } from 'react-router-dom'

export default ({handleSubmit,user, from,location}) => (
    <div className="d-flex justify-content-center">
        {user.id? <Redirect to={from} />:(<form onSubmit={handleSubmit} method="POST">
            <div className="form-group">
                <label >Email address</label>
                <input name="email" type="email" className="form-control" placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" className="form-control" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button><Link to={{pathname: '/register', state: { from: location }}}><button className="btn btn-primary">Register</button></Link> 
        </form>)}
    </div>
);