import React from 'react';
import { Link } from 'react-router-dom';

export default ({ user, handleSubmit }) =>{
  if (!user.id) return <h3>Loading</h3>
  return (
    <div>
      <h1>Bienvenido {user.firstName}</h1>
      <div>
      <h2>{user.email}</h2>
      {user.isAdmin ? 
        <div>
          <Link to={`/admin/users`}><button>Users</button></Link>
          <Link to={`/admin/orders`}><button>Orders</button></Link>
          <Link to={`/admin/categories`}><button>Categories</button></Link>
          <Link to={`/admin/products`}><button>Products</button></Link>
        </div>
        : ""}
        {!user.isAdmin ? 
        <div>
          <div>  
            <Link to={`/user/orders`}>
              <img src="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1342761/580/386/m1/fpnw/wm0/cardboard-box-icon-01-.jpg?1465234338&s=ce34fb8219c58b48a7e22f2840e4e35e"/>
              <h3>Mis ordenes</h3>
            </Link>
          </div>
          <div>  
            <Link to='/carrito'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnmUmvGdHJoUn7OdpAMkYsW1Wc8ELK_kLnmoG_Lys7C1ACILZEqQ"/>
              <h3>Carro de compras</h3>
            </Link>
          </div>
          <div>  
            <Link to={`/user/checkout`}>
              <img src="https://t3.ftcdn.net/jpg/00/30/30/64/240_F_30306492_54Fq37acp3NBQHlfSkQ1WQrpBS2yyOyt.jpg"/>
              <h3>Checkout</h3>
            </Link>
          </div>
        </div>
          : ""}
      </div>
    </div>
  )
}
