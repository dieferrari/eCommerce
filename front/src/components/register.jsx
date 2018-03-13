import React from 'react';
import {Link} from 'react-router-dom'

export default ({ user , handleSubmit}) => (
    <div>
        <div class="d-flex justify-content-center">
            <Link to={`http://localhost:3005/users/auth/google`}>
                <img src="./google.png" width="300px" height="50px" />
            </Link>
        </div>
        
        <div class="d-flex justify-content-center">
            <Link to ={`http://localhost:3005/users/auth/facebook`}>
                <img src="./fb.png" width="300px" height="50px" />
            </Link> 
        </div>

        <div class="d-flex justify-content-center">
        <form onSubmit={(e)=>handleSubmit(e)} method="POST">

            <div class="form-group">
                <input name="firstname" type="text" class="form-control" placeholder="Firstname"/>
            </div>
            <div class="form-group">
                <input name="lastname" type="text" class="form-control" placeholder="Lastname"/>
            </div>
            <div class="form-group">
                <input name="email" type="email" class="form-control" placeholder="E-mail"/>
            </div>
            <div class="form-group">
                <input type="password" name="password" class="form-control" placeholder="Password"/>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
    </div>
</div>

);