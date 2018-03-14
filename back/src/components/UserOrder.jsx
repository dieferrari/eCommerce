import React from 'react';
import { Link } from 'react-router-dom';
import OrdersByUser from './OrdersByUser';

export default ({ userOrders }) => {
  return(<div>
    {console.log('fffffff',userOrders)}
    <h1>Tus Ordenes</h1>
    {!userOrders ? "Loading" :
    <div>
    {userOrders.map(userOrder=>{
      return(
        <div key={userOrder.id}>
        <h2>Order ID: {userOrder.id}</h2>
        <h3>Status: {userOrder.status}</h3>
        <h4>Fecha de creacion: {userOrder.createdAt}</h4>
        <OrdersByUser products={userOrder.products}/>
        </div>
      )
    })}
    </div>}
  </div>
)};

  