import React from 'react';
import { Link } from 'react-router-dom';

export const QuickMenu = ({ isVisible }) => {
  return (
    <aside
        className={`w-full md:w-64 bg-[#1e1e1e] p-4 flex flex-col md:flex-shrink-0 ${
            isVisible ? 'block' : 'hidden md:block'
        }`}
      
    >
      <h2 className="text-xl font-bold mb-4 text-white">Quick Menu</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/pastpapers" className="block p-2 bg-[#E63946] text-white rounded hover:bg-red-300 hover:text-black ">
            Past Papers
          </Link>
        </li>
        <li>
          <Link to="/markingschemes" className="block p-2 bg-[#E63946] text-white rounded hover:bg-red-300 hover:text-black ">
            Marking Schemes
          </Link>
        </li>
        <li>
          <Link to="/analysis" className="block p-2 bg-[#E63946] text-white rounded hover:bg-red-300 hover:text-black ">
            Analysis(විවරණ)
          </Link>
        </li>
        <li>
          <Link to="/resorcebooks" className="block p-2 bg-[#E63946] text-white rounded hover:bg-red-300 hover:text-black ">
            Resource Books
          </Link>
        </li>
        <li>
          <Link to="/classifiedmcq" className="block p-2 bg-[#E63946] text-white rounded hover:bg-red-300 hover:text-black ">
            Classified MCQ's
          </Link>
        </li>
        <li>
          <Link to="/gallery" className="block p-2 bg-[#E63946] text-white rounded hover:bg-red-300 hover:text-black ">
            Gallery
          </Link>
        </li>
      </ul>
    </aside>
  );
};
