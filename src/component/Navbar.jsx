import React, { useState } from 'react';
import logo from '../assets/JanithLiaya1.png';
import { FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // Hamburger and Close icons

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Section: Logo and Social Icons */}
      <div className="relative flex justify-center items-center px-4 py-2">
        <img src={logo} alt="logo" className="w-32 md:w-52" />
        <div className="hidden md:flex space-x-6 ">
          <FaFacebookF className="h-6 w-6 cursor-pointer" />
          <FaTwitter className="h-6 w-6 cursor-pointer" />
          <FaLinkedin className="h-6 w-6 cursor-pointer" />
        </div>
        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            className="text-3xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Navigation Links for Mobile */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden bg-[#1C1C1C]`}
      >
        <ul className="flex flex-col space-y-4 text-slate-50 text-center py-4">
          <li className="cursor-pointer">
            <NavLink
              to="/JanithGamage_Portfolio/"
              className={({ isActive }) =>
                isActive ? 'text-[#E63946]' : 'hover:text-[#E63946]'
              }
            >
              Home
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink
              to="/class"
              className={({ isActive }) =>
                isActive ? 'text-[#E63946]' : 'hover:text-[#E63946]'
              }
            >
              Chemistry
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink
              to="/businesses"
              className={({ isActive }) =>
                isActive ? 'text-[#E63946]' : 'hover:text-[#E63946]'
              }
            >
              Business
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink
              to="/aboutme"
              className={({ isActive }) =>
                isActive ? 'text-[#E63946]' : 'hover:text-[#E63946]'
              }
            >
              About me
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Navigation Links for Desktop */}
      <div className="hidden md:flex justify-center items-center bg-[#1C1C1C] h-10">
        <ul className="flex flex-row space-x-10 text-slate-50">
          <li className="cursor-pointer">
            <NavLink
              to="/JanithGamage_Portfolio/"
              className={({ isActive }) =>
                isActive ? 'text-[#E63946]' : 'hover:text-[#E63946]'
              }
            >
              Home
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink
              to="/class"
              className={({ isActive }) =>
                isActive ? 'text-[#E63946]' : 'hover:text-[#E63946]'
              }
            >
              Chemistry
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink
              to="/businesses"
              className={({ isActive }) =>
                isActive ? 'text-[#E63946]' : 'hover:text-[#E63946]'
              }
            >
              Business
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink
              to="/aboutme"
              className={({ isActive }) =>
                isActive ? 'text-[#E63946]' : 'hover:text-[#E63946]'
              }
            >
              About me
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
