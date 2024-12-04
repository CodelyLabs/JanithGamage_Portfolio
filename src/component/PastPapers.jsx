import React, { useState } from 'react';
import { QuickMenu } from './QuickMenu'; // Import the SidePanel component
import { Link } from 'react-router-dom';

export const PastPapers = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Mobile menu button */}
      <button
        className="block md:hidden p-4 bg-red-500 text-white hover:bg-red-500"
        onClick={toggleSidebar}
      >
        Menu
      </button>

      {/* Main content container */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Side Panel */}
        <QuickMenu isVisible={isSidebarVisible} />

        {/* Main content area */}
        <main className="flex-1 p-4 overflow-y-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Past Papers</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000'].map((year) => (
              <div key={year} className="p-4 border bg-[#1e1e1e] rounded shadow hover:shadow-lg">
                <Link to={`/pastpapers/${year}`} className="block text-center text-blue-300 hover:text-blue-500">
                  {year}
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};
