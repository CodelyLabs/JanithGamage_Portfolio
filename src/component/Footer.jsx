import React from 'react';
import logo from '../assets/Janith Liaya (3.3).png';

function Footer() {
  return (
    <div className="h-auto w-full bg-gradient-to-r from-gray-800 via-gray-900 to-black text-slate-50 p-4">
      {/* Main Footer Content */}
      <div className="flex flex-col lg:flex-row lg:space-x-10 justify-center items-center lg:items-start text-center lg:text-left">
        
        {/* Logo */}
        <img
          src={logo}
          alt="logo"
          className="w-[8rem] lg:w-[10rem] mb-4 lg:mb-0"
        />

        {/* Chemistry Links */}
        <div className="text-sm lg:text-base max-w-[16rem] mx-2 mb-4 lg:mb-0">
          <h4 className="font-semibold mb-2">- Quick Links -</h4>
          <ul className="space-y-1">
            <li>
              <a href="/chemistry/pastpapers" className="hover:underline">
                Past Papers
              </a>
            </li>
            <li>
              <a href="/chemistry/markingscheme" className="hover:underline">
                Marking Scheme
              </a>
            </li>
            <li>
              <a href="/chemistry/analysis" className="hover:underline">
                Analysis
              </a>
            </li>
            <li>
              <a href="/chemistry/mcq" className="hover:underline">
                Classified MCQs
              </a>
            </li>
            <li>
              <a href="/chemistry/resourcebooks" className="hover:underline">
                Resource Books
              </a>
            </li>
          </ul>
        </div>

        {/* Business Links */}
        <div className="text-sm lg:text-base max-w-[16rem] mx-2 mb-4 lg:mb-0">
          <p>
            <a href="/business" className="hover:underline">Business</a>
          </p>
        </div>

        {/* Contact Us */}
        <div className="text-sm lg:text-base max-w-[16rem] mx-2">
          <p>
            <a href="/contact" className="hover:underline">About Me</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
