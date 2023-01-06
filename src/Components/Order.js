import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Order = () => {

  const navigate = useNavigate();

  return (
    <div>
        <div>Order Confirmed!!!</div>
        <button onClick={() => navigate('/')}> Go Back </button>
    </div>
    
  )
}
 
export default Order