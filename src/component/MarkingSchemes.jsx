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
    <div className="flex flex-col min-h-screen">
      {/* Mobile menu button */}
      <button
        className="block md:hidden p-4 bg-[#E63946] text-white hover:bg-[#E63946]"
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
          <h1 className="text-4xl md:text-3xl font-bold mb-4">Marking Schemes</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sortedYears.map((year) => (
              <div
                key={year}
                className="p-4 border border-l-8 border-l-red-500 bg-[#1e1e1e] rounded-tr-lg rounded-br-lg shadow hover:shadow-lg"
              >
                <a
                  href={markingSchemeLinks[year]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-3xl text-blue-300 hover:text-red-300"
                >
                  {year}
                </a>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};
