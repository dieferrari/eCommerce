import React from 'react'

export default ({user,carrito,handleSubmit})=>(
    <div>
        <h1>Confirmar Compra</h1>
        <table >
        <tbody>
            <tr>
                <th>Producto</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total/Producto</th>
                <th>Boton</th>
            </tr>
        {!carrito?'loading...':(carrito.map(prod=>(
                    <tr key={prod.id}>
                        <td>{prod.name}</td>
                        <td>{prod.description}</td>
                        <td>{`$ ${prod.price}`}</td>
                        <td>{prod.carrito.cantidad}</td>
                        <td>{`$ ${prod.carrito.cantidad*prod.price}`}</td>
                        <td>boton</td>
                    </tr>
        )))}
        </tbody>
        </table>
        <br/>
        <h3>Confirmacion de datos</h3>
        <br/>
        {!user?'Loading':(
            <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <label >e-Mail</label><br/>
                <input type="email" name='mail' defaultValue={user.email}/><br/><br/>
                <label >Direccion de entrega</label><br/>
                <input type="text" name='direccion'/>  <br/><br/>
                <input type="submit" value='Comprar'/>  
            </form>
            </div>
        )}
            
        
    </div>
)