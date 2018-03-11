import React from 'react';

export default ({categories,handleSubmit,product})=>
    (
    <div>
        <h1>Producto a base de datos</h1>
       {!product?'loading':(<form onSubmit={(e)=>handleSubmit(e)}>
            <label > Name: </label>
            <input type="text" name='name' defaultValue={product.name}/><br/><br/>
            <label > Description: </label>
            <input type="text" name='description' defaultValue={product.description} /><br/><br/>
            <label > Price: </label>
            <input type="text" name='price' defaultValue={product.price} /><br/><br/>
            <label > Stock: </label>
            <input type="text" name='stock' defaultValue={product.stock} /><br/><br/>
            <label > URL de imagen: </label>
            <input type="text" name='imgURL' defaultValue={product.imgURL} /><br/><br/>
            <label > Categorias </label>
            {categories.map((category)=>{
                if (product.categories.map(c=>c.id).indexOf(category.id)!=-1){
                    return (
                        <div key ={category.id}>
                            <input type="checkbox" defaultChecked='true' name="categorias" value={category.id}/>{category.name}
                        </div> 
                    )
                }
                else{
                    return (
                        <div key ={category.id}>
                            <input type="checkbox" name="categorias" value={category.id}/>{category.name}
                        </div>    
                    )
                }
                })}<br/>
            <input type="submit" name=''/>
        </form>)}
    </div>
)