import React from 'react';

export default ({handleSubmit,category})=>(
    <div>{!category?'Loading...':(
        <div className="d-flex justify-content-center">
            <form onSubmit={(e)=>handleSubmit(e)}>
                <label><h3>Nombre de la categoria</h3></label><br/>
                <input className="form-control" type="text" defaultValue={category.name} name='name'/><br/>
                <button type="submit" value='Actualizar categorias' className="btn btn-primary">Actualizar</button>
            </form>
        </div>)}
    </div>
)