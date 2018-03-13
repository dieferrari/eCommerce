import React from 'react';
import {Link} from 'react-router-dom';

export default ({user,handleSubmit})=>(
    <div>
        {!user?'Loading..':(
        <form onSubmit={(e)=>handleSubmit(e)}>
            <h1>¿Seguro quieres volver {user.isAdmin?'Usuario':'Admin'} a {user.fullName} ?</h1>
            <button type='submit'>Si, obvio</button><br/><br/>
            <Link to={`/admin/users`}><input type='button' value='Cancelar'/></Link>
        </form>)}
    </div>
)