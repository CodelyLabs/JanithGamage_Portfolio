import React, { useState } from 'react';
import { QuickMenu } from './QuickMenu';

export const MarkingSchemes = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Map of years to Google Drive links
  const markingSchemeLinks = {
    '2024': 'https://drive.google.com/file/d/1VM3JuWmLmiCpJl6EaEaWBIfCVlvYBLXE/view?usp=drive_link',
    '2023': 'https://drive.google.com/file/d/your-link-for-2023',
    '2022': 'https://drive.google.com/file/d/your-link-for-2022',
    '2021': 'https://drive.google.com/file/d/your-link-for-2021',
    '2020': 'https://drive.google.com/file/d/your-link-for-2020',
    '2019': 'https://drive.google.com/file/d/your-link-for-2019',
    '2018': 'https://drive.google.com/file/d/your-link-for-2018',
    '2017': 'https://drive.google.com/file/d/your-link-for-2017',
    '2016': 'https://drive.google.com/file/d/your-link-for-2016',
    '2015': 'https://drive.google.com/file/d/your-link-for-2015',
    '2014': 'https://drive.google.com/file/d/your-link-for-2014',
    '2013': 'https://drive.google.com/file/d/your-link-for-2013',
    '2012': 'https://drive.google.com/file/d/your-link-for-2012',
    '2011': 'https://drive.google.com/file/d/your-link-for-2011',
    '2010': 'https://drive.google.com/file/d/your-link-for-2010',
  };

  // Sort years in descending order
  const sortedYears = Object.keys(markingSchemeLinks).sort((a, b) => b - a);

  return (
    <div className="flex flex-col min-h-screen "> {/*bg-gradient-to-br from-[#FFEBEB] to-[#FFE4E4]*/}
          {/* Mobile menu button */}
          <button
            className="block md:hidden p-4 bg-[#E63946] text-white  shadow-lg hover:bg-[#D62839] transition duration-300"
            onClick={toggleSidebar}
          >
            Menu
          </button>
    
          {/* Main content container */}
          <div className="flex flex-1 flex-col md:flex-row">
            {/* Side Panel */}
            <QuickMenu isVisible={isSidebarVisible} />
    
            {/* Main content area */}
            <main className="flex-1 p-6">
              <div className="relative flex items-center mb-8">
                <div className="flex-grow border-t-4 border-black"></div>
                  <h1 className="px-4 text-3xl md:text-5xl font-extrabold text-center text-[#1e1e1e] uppercase tracking-wide drop-shadow-lg">
                    Marking Schemes
                  </h1>
                <div className="flex-grow border-t-4 border-black"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {sortedYears.map((year) => (
                  <div
                    key={year}
                    className="relative p-6 rounded-xl shadow-xl backdrop-blur-md bg-[#1e1e1e] border border-white/20 transition transform hover:scale-105 hover:shadow-2xl duration-300"
                  >
                    <a
                      href={markingSchemeLinks[year]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center text-3xl font-bold text-white bg-gradient-to-r from-[#E63946] to-[#D62839] py-3 rounded-lg shadow-md hover:shadow-xl transition duration-300"
                    >
                      {year}
                    </a>
                    <p className="text-center text-sm text-white/80 mt-2">
                      Download Here.
                    </p>
                  </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};
