import React from 'react';
import {Link} from 'react-router-dom';

export default ({register,handleDeleteSubmit,linkTo})=>(
    <div>
        {!register?'Loading..':(
        <form onSubmit={(e)=>handleDeleteSubmit(e)}>
            <h1>¿Seguro quieres eliminar {register.name||register.fullName} ?</h1>
            <button type='submit'>Si, al pingo</button><br/><br/>
            <Link to={`${linkTo}/${register.id}`}><input type='button' value='Cancelar'/></Link>
        </form>)}
    </div>
)