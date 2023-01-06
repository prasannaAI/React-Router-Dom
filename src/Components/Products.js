import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Products = () => {
  return (
    <div>
        <div>Products</div>
        <nav>
            <Link to='featured'> Featured </Link>
            <Link to='new'> New </Link>
        </nav>
        <Outlet />

    </div>
    
  )
}

export default Products
