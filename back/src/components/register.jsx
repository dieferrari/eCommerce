import React from 'react';
import {Link} from 'react-router-dom'

export default ({ user , handleSubmit}) => (
    <div>
        <div className="d-flex justify-content-center">
            <a href={`/api/users/auth/google`}>
                <img src="./google.png" width="300px" height="50px" />
            </a>
        </div>
        
        <div className="d-flex justify-content-center">
            <a href={`/api/users/auth/facebook`}>
                <img src="./fb.png" width="300px" height="50px" />
            </a> 
        </div>

     

        <div className="d-flex justify-content-center">
        <form onSubmit={(e)=>handleSubmit(e)} method="POST">

            <div className="form-group">
                <input name="firstname" type="text" className="form-control" placeholder="Firstname"/>
            </div>
            <div className="form-group">
                <input name="lastname" type="text" className="form-control" placeholder="Lastname"/>
            </div>
            <div className="form-group">
                <input name="email" type="email" className="form-control" placeholder="E-mail"/>
            </div>
            <div className="form-group">
                <input type="password" name="password" className="form-control" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
        </form>
    </div>
</div>

);