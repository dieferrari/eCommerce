import React from 'react';
import {Link} from 'react-router-dom';
export default ({handleSubmit,orden})=>(
    <div>
        {!orden?'Loading...':(
        <div>    
        <h1>Usuario: {orden.Owner.fullName}</h1>
        <h2>Order ID:{orden.id} </h2>
        <h3>Direccion de entrega: {orden.OwnerDirection}</h3>
        <h4>Creada: {orden.createdAt}</h4><br/><br/>
        
        <table >
        <tbody>
            <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th> Precio total del articulo </th>
            </tr>
            {orden.products.map(producto=>(
                    <tr key={producto.id}>
                        <td>{producto.name}</td>
                        <td>{producto.orderProduct.cantidad}</td>
                        <td>{producto.price}</td>
                        <td>{producto.price*producto.orderProduct.cantidad}</td>
                    </tr>))}
                    </tbody>
        </table>
        
        <br/>
        <h3>Estado</h3>
        <form onSubmit={(e)=>handleSubmit(e)}>
        {[['Creado','a'],['Procesando','b'],['Cancelado','c'],['Completado','d']].map(status=>{
            if(status[0].toLowerCase()==orden.status){
                return (<div key={status[1]}>
                    <input type="radio" name="status" value={status[0].toLowerCase()} defaultChecked='True'/>{status[0]}
                    </div>)
            }else{
                return (<div key={status[1]}>
                    <input type="radio" name="status" value={status[0].toLowerCase()}/>{status[0]}
                </div>)
            }
        })}
        <input type="submit" value='Actualizar'/>
        </form>
        </div>)}
    </div>
)