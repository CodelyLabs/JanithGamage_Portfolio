import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/Janith Liaya (3.3).png";

function Footer() {
  return (
    <footer className="h-auto w-full bg-gradient-to-r from-gray-800 via-gray-900 to-black text-slate-50 p-4">
      {/* Main Footer Content */}
      <div className="flex flex-col lg:flex-row lg:space-x-10 justify-center items-center lg:items-start text-center lg:text-left">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center lg:items-start">
          <img src={logo} alt="logo" className="w-28 lg:w-32 mb-3" />
          <p className="text-sm text-gray-400">Your tagline or brief description</p>
        </div>

        {/* Quick Links */}
        <div className="text-sm space-y-2">
          <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="/chemistry/pastpapers" className="hover:text-[#FFD700] transition">Past Papers</a></li>
            <li><a href="/chemistry/markingscheme" className="hover:text-[#FFD700] transition">Marking Scheme</a></li>
            <li><a href="/chemistry/analysis" className="hover:text-[#FFD700] transition">Analysis</a></li>
            <li><a href="/chemistry/mcq" className="hover:text-[#FFD700] transition">Classified MCQs</a></li>
            <li><a href="/chemistry/resourcebooks" className="hover:text-[#FFD700] transition">Resource Books</a></li>
          </ul>
        </div>

        {/* Business & Contact */}
        <div className="text-sm space-y-2">
          <h4 className="font-semibold text-lg mb-2">More</h4>
          <p><a href="/business" className="hover:text-[#FFD700] transition">Business</a></p>
          <p><a href="/contact" className="hover:text-[#FFD700] transition">About Me</a></p>
        </div>

        {/* Social Media Links */}
        <div className="text-sm flex flex-col items-center lg:items-start">
          <h4 className="font-semibold text-lg mb-2">Follow Me</h4>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-blue-500 transition"><FaFacebook /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-xs text-gray-500 text-center mt-6">
        &copy; {new Date().getFullYear()} CodelyLabs. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
