import React from 'react';
import {Link} from 'react-router-dom'

export default (props) => (
    <div class="d-flex justify-content-center">
        <form onSubmit={props.handleSubmit} method="POST">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input name="email" type="email" class="form-control" placeholder="Enter email"/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" name="password" class="form-control" placeholder="Password"/>
            </div>
            <button type="submit" class="btn btn-primary">Login</button> <Link to={`/register`}><button class="btn btn-primary">Register</button></Link> 
        </form>
    </div>
);