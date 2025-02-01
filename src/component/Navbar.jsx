import React, { useState } from 'react';
import logo from '../assets/JanithLiaya1.png';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // Hamburger and Close icons

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar Container */}
      <div className="flex items-center justify-between bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg px-6 py-4">
        {/* Logo Section */}
        <div>
          <img src={logo} alt="logo" className="w-36 md:w-48" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          <NavLink
            to="/JanithGamage_Portfolio"
            className="text-lg font-semibold text-white hover:text-red-500 transition duration-300 ease-in-out"
          >
            Home
          </NavLink>
          <NavLink
            to="/class"
            className="text-lg font-semibold text-white hover:text-red-500 transition duration-300 ease-in-out"
          >
            Study Materials
          </NavLink>
          <NavLink
            to="/aboutme"
            className="text-lg font-semibold text-white hover:text-red-500 transition duration-300 ease-in-out"
          >
            Contact Me
          </NavLink>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            className="text-3xl text-white focus:outline-none transition-transform transform hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 w-full md:hidden transition-all duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          <ul className="flex flex-col items-center space-y-6 py-6 text-white">
            <li className="text-lg font-semibold">
              <NavLink
                to="/"
                className="hover:text-red-500 transition duration-300 ease-in-out"
              >
                Home
              </NavLink>
            </li>
            <li className="text-lg font-semibold">
              <NavLink
                to="/class"
                className="hover:text-red-500 transition duration-300 ease-in-out"
              >
                Study Materials
              </NavLink>
            </li>
            <li className="text-lg font-semibold">
              <NavLink
                to="/aboutme"
                className="hover:text-red-500 transition duration-300 ease-in-out"
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
