import React from 'react';

export default ({handleSubmit,category})=>(
    <div>{!category?'Loading...':(
        <form onSubmit={(e)=>handleSubmit(e)}>
        <label >Nombre de la categoria</label><br/>
        <input type="text" defaultValue={category.name} name='name'/><br/><br/>
        <input type="submit" value='Actualizar categorias'/>
        </form>)}
    </div>
)