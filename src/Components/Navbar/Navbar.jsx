import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // for icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide text-blue-400">
          <NavLink to="/">&lt; Atharva &gt;</NavLink>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-blue-400 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Nav Links (Desktop) */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-blue-400">
          <li>
            01.
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `ml-1 transition-colors duration-200 hover:text-blue-400 ${
                  isActive ? "text-blue-400" : "text-gray-300"
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            02.
            <NavLink
              to="/work"
              className={({ isActive }) =>
                `ml-1 transition-colors duration-200 hover:text-blue-400 ${
                  isActive ? "text-blue-400" : "text-gray-300"
                }`
              }
            >
              Work
            </NavLink>
          </li>
          <li>
            03.
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `ml-1 transition-colors duration-200 hover:text-blue-400 ${
                  isActive ? "text-blue-400" : "text-gray-300"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1nZ89_UehJXXUPj760qUG7vAM3zXxdz73/view?usp=sharing"
              target="_blank"
              className="px-4 py-2 border border-blue-400 rounded-md text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-6 py-6 bg-gray-800 text-blue-400 text-base font-medium shadow-lg animate-slideDown">
          <li>
            01.
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `ml-1 transition-colors duration-200 hover:text-blue-400 ${
                  isActive ? "text-blue-400" : "text-gray-300"
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            02.
            <NavLink
              to="/work"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `ml-1 transition-colors duration-200 hover:text-blue-400 ${
                  isActive ? "text-blue-400" : "text-gray-300"
                }`
              }
            >
              Work
            </NavLink>
          </li>
          <li>
            03.
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `ml-1 transition-colors duration-200 hover:text-blue-400 ${
                  isActive ? "text-blue-400" : "text-gray-300"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1nZ89_UehJXXUPj760qUG7vAM3zXxdz73/view?usp=sharing"
              target="_blank"
              className="px-4 py-2 border border-blue-400 rounded-md text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
