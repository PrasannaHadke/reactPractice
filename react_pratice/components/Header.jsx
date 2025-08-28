import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <nav>
        <ul className="flex gap-6 justify-center text-gray-700 font-medium">
          <li>
            <NavLink
              to="counter"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                  : 'hover:text-blue-500 transition'
              }
            >
              Counter
            </NavLink>
          </li>
          <li>
            <NavLink
              to="background-color"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                  : 'hover:text-blue-500 transition'
              }
            >
              Background Color
            </NavLink>
          </li>
          <li>
            <NavLink
              to="fetch-api-props"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                  : 'hover:text-blue-500 transition'
              }
            >
              Fetch API Props
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
