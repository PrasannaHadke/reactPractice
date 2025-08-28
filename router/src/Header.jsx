import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <div>
        <NavLink to='/Contacts'>Contacts</NavLink>
        <NavLink to='/Login'>Login</NavLink>
        <NavLink to='/SignIn'>SignIn</NavLink>
    </div>
  )
}

export default Header