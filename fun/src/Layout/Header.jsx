import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
        <NavLink to="/profile" 
        style={({isActive})=>{ color : isActive ? "red" : "yellow"}}
        >Profile</NavLink>
        <NavLink to="" 
        style={({isActive})=>{ color : isActive ? "red" : "yellow"}}
        >Counter</NavLink>
        <NavLink to="/bgChanger" 
        style={({isActive})=>{ color : isActive ? "red" : "yellow"}}
        >Bg Changer</NavLink>
        <NavLink to="/passgen" 
        style={({isActive})=>{ color : isActive ? "red" : "yellow"}}
        >Password</NavLink>
        <NavLink to="/login" 
        style={({isActive})=>{ color : isActive ? "red" : "yellow"}}
        >Login</NavLink>
        
    </div>
  )
}

export default Header