import React from 'react';
import {Link} from 'react-router-dom';

export default ({orders,handleChange})=>(
    <div>
        <h1>Ordenes</h1>
        <form onChange={(e)=>handleChange(e)}>
        <input type="radio" name="status" value="todos" defaultChecked='true'/> Todos <br/>
        <input type="radio" name="status" value="creado"/> Creado <br/>
        <input type="radio" name="status" value="procesando"/> Procesando <br/>
        <input type="radio" name="status" value="cancelado"/> Cancelado <br/>
        <input type="radio" name="status" value="completado"/> Completado
        </form><br/><br/><br/>
        <table >
        <tbody>
            <tr>
                <th>Usuario</th>
                <th>Order ID</th>
                <th>Estado</th>
                <th>Acciones</th>
            </tr>
        {!orders?'loading...':(orders.map(orden=>(
                    <tr key={orden.id}>
                        <td>{orden.Owner.fullName}</td>
                        <td>{orden.id}</td>
                        <td>{orden.status}</td>
                        <td><Link to={`/admin/orders/${orden.id}`}>Ver detalles - Editar</Link></td>
                    </tr>
        )))}
        </tbody>
        </table>
    </div>
)