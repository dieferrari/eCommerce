import React from 'react';
import {Link} from 'react-router-dom';

export default ({users,handleChange})=>(
    <div>
        <h1>Usuarios</h1>
        <form onChange={(e)=>handleChange(e)}>
        <input type="radio" name="status" value="todos" defaultChecked='true'/> Todos <br/>
        <input type="radio" name="status" value='true'/> Admin <br/>
        <input type="radio" name="status" value="false"/> Usuarios <br/>
        </form><br/><br/><br/>
        <table >
        <tbody>
            <tr>
                <th>Usuario</th>
                <th>ID</th>
                <th>Rol</th>
                <th>Volverlo Admin/Usuario</th>
                <th>Borrarlo</th>
            </tr>
        {!users?'loading...':(users.map(usuario=>(
                    <tr key={usuario.id}>
                        <td>{usuario.fullName}</td>
                        <td>{usuario.id}</td>
                        <td>{usuario.isAdmin?'Admin':'Usuario'}</td>
                        <td><Link to={`/admin/users/${usuario.id}/edit`}>Editarlo</Link></td>
                        <td><Link to={`/admin/users/${usuario.id}/delete`}>Borrarlo</Link></td>
                    </tr>
        )))}
        </tbody>
        </table>
    </div>
)