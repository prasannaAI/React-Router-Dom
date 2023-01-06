import React from 'react';
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth';

export const Navbar = () => {

    const navStyle = ({isActive}) => {
        return{
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline', 
        }
          
    }

    const auth = useAuth()
  return (
    <nav className='primary'>
    <NavLink style={navStyle} to="/"> Home </NavLink>
    <NavLink style={navStyle} to='/About'> About </NavLink>
    <NavLink style={navStyle} to='/Products'> Products </NavLink>
    <NavLink style={navStyle} to='/Profile'> Profile </NavLink>
    {
      !auth.user && (
        <NavLink style={navStyle} to='/login'> Login </NavLink>
      )
    }

    </nav>
  )
}
export default Navbar;
