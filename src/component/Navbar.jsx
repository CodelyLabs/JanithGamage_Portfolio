import React, { useState } from 'react';
import logo from '../assets/JanithLiaya1.png';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // Hamburger and Close icons

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar Container */}
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="px-6  bg-white">
          <img src={logo} alt="logo" className="w-36 md:w-60" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-20 px-[25rem] py-9 bg-[#1C1C1C] ">
          <NavLink
            to="/JanithGamage_Portfolio"
            className="text-lg font-semibold text-white hover:text-red-500"
          >
            Home
          </NavLink>
          <NavLink
            to="/class"
            className="text-lg font-semibold text-white hover:text-red-500"
          >
            Study Materials
          </NavLink>
          <NavLink
            to="/aboutme"
            className="text-lg font-semibold text-white hover:text-red-500"
          >
            Contact Me
          </NavLink>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center px-6 py-4 bg-black">
          <button
            className="text-3xl text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="bg-black w-full md:hidden">
          <ul className="flex flex-col items-center space-y-6 py-6 text-white">
            <li className="text-lg font-semibold">
              <NavLink
                to="/JanithGamage_Portfolio"
                className="hover:text-red-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="text-lg font-semibold">
              <NavLink
                to="/class"
                className="hover:text-red-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Study Materials
              </NavLink>
            </li>
            <li className="text-lg font-semibold">
              <NavLink
                to="/aboutme"
                className="hover:text-red-500"
                onClick={() => setIsMenuOpen(false)}
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
