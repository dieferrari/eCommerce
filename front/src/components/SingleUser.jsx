import React from 'react';
import { Link } from 'react-router-dom';

export default ({ user }) =>
{  
  if (!user) return <h3>Loading</h3>

  return (
    <div>
      <h1>{user.fullName}</h1>
      <div>
      <h2>{user.email}</h2>
      <div>  
        <Link>
          <img src="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1342761/580/386/m1/fpnw/wm0/cardboard-box-icon-01-.jpg?1465234338&s=ce34fb8219c58b48a7e22f2840e4e35e"/>
          <h3>Orders</h3>
        </Link>
      </div>

      <div>  
        <Link>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnmUmvGdHJoUn7OdpAMkYsW1Wc8ELK_kLnmoG_Lys7C1ACILZEqQ"/>
          <h3>Cart</h3>
        </Link>
      </div>
      </div>
    </div>
  )
}
