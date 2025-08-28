import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="p-4 bg-gray-800 flex gap-4">
      <NavLink 
        to=""
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
          fontWeight: isActive ? "bold" : "normal"
        })}
      >
        BackGround Changer
      </NavLink>
      <NavLink 
        to="counter"
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
          fontWeight: isActive ? "bold" : "normal"
        })}
      >
        Counter
      </NavLink>
      <NavLink 
        to="passgen"
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
          fontWeight: isActive ? "bold" : "normal"
        })}
      >
        PassWord Generator
      </NavLink>
      
    </div>
  )
}

export default Header
