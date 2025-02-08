import React, { useState } from 'react';
import { QuickMenu } from './QuickMenu';

export const ClassifiedMCQ = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Map of years to Google Drive links
  const ClassifiedMCQLinks = {
    'Unit - 1 2 3': 'https://drive.google.com/file/d/1ivCuO1usvnc3-ylLQAQZT-4fktiplfAb/view?usp=drive_link',
    'Unit - 4 5': 'https://drive.google.com/file/d/1gMoKPhvGfkOCi0rWYGewViVewrxhbsgw/view?usp=drive_link',
    'Unit - 6': 'https://drive.google.com/file/d/1wHk6wWt433GQJeUu92KQ5AgLcLnmUjzi/view?usp=drive_link',
    'Unit - 7 8 9 10': 'https://drive.google.com/file/d/1qAiESUjIIm2SEetEpbjt7cfnHPbZ8Dwa/view?usp=drive_link',
    'Unit - 11 12 13': 'https://drive.google.com/file/d/1wV-0RqHQ88V7RnTjPv679j4rITGi-2lo/view?usp=drive_link',
    'Unit - 14': 'https://drive.google.com/file/d/13NEAi64wQ2KSZbazYGlnhHvVJu7xEDIM/view?usp=drive_link'
  };

  // Sort years in descending order
  const sortedYears = Object.keys(ClassifiedMCQLinks).sort((a, b) => b - a);

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
          <div className="relative flex items-center mb-8">
            <div className="flex-grow border-t-4 border-black"></div>
              <h1 className="px-4 text-3xl md:text-5xl font-extrabold text-center text-[#1e1e1e] uppercase tracking-wide drop-shadow-lg">
                    Classified MCQ
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
                  href={ClassifiedMCQLinks[year]}
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


