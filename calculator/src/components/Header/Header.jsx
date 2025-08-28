import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="flex space-x-4 p-4 bg-gray-100 shadow">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg text-white transition 
          ${isActive ? "bg-amber-700" : "bg-green-500 hover:bg-green-600"}`
        }
      >
        Calculator
      </NavLink>

      <NavLink
        to="/counter"
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg text-white transition 
          ${isActive ? "bg-amber-700" : "bg-green-500 hover:bg-green-600"}`
        }
      >
        Counter
      </NavLink>

      <NavLink
        to="/backgroundChanger"
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg text-white transition 
          ${isActive ? "bg-amber-700" : "bg-green-500 hover:bg-green-600"}`
        }
      >
        Background Changer
      </NavLink>
    </div>
  );
}

export default Header;
