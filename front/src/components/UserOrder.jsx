import React from 'react';
import { Link } from 'react-router-dom';
import OrdersByUser from './OrdersByUser';

export default ({ userOrders }) => {
  return(<div>
    {console.log('fffffff',userOrders)}
    <h1>User Orders</h1>
    {!userOrders ? "Loading" :
    <div>
    {userOrders.map(userOrder=>{
      return(
        <div key={userOrder.id}>
        <p>Order ID: {userOrder.id}</p>
        <p>Status: {userOrder.status}</p>
        <p>Fecha de creacion: {userOrder.createdAt}</p>
        <OrdersByUser products={userOrder.products}/>
        </div>
      )
    })}
    </div>}
  </div>
)};

  