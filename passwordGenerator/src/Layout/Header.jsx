import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="flex space-x-6 p-4 bg-gray-900 shadow-lg">
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          `px-4 py-2 rounded-lg text-white transition 
          ${isActive ? "bg-orange-600" : "hover:bg-gray-700"}`
        }
      >
        BackGround Changer
      </NavLink>

      <NavLink 
        to="/passgen" 
        className={({ isActive }) => 
          `px-4 py-2 rounded-lg text-white transition 
          ${isActive ? "bg-orange-600" : "hover:bg-gray-700"}`
        }
      >
        PassGen
      </NavLink>
      <NavLink 
        to="/passgen1" 
        className={({ isActive }) => 
          `px-4 py-2 rounded-lg text-white transition 
          ${isActive ? "bg-orange-600" : "hover:bg-gray-700"}`
        }
      >
        PassGen1
      </NavLink>
    </div>
  )
}

export default Header
