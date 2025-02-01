import React from 'react';
import Card from './Card';

function Chemistry() {
  return (
    <>
      {/* Banner Section with Polygon Shape */}
      <div
        className="bg-[#E63946] text-white text-center relative h-48 flex items-center justify-center"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)',
        }}
      >
        <h1 className="font-bold text-6xl mb-6">Study Materials</h1>
      </div>

      {/* Description Section with Downward Polygon Shape */}
      <div
        className="bg-[#FFEBEB] text-[#2D2D2D] text-center py-4 "
        style={{
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 10%, 50% 0%, 0% 10%)',
        }}
      >
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <p className="text-xl font-medium mb-4">
            <span className="block font-bold">ආදරණීය දරුවනි,</span>
            <span className="block mt-4">
              නූතනයේ ඇති තරඟකාරීම විභාගය වන අපොස උසස් පෙළ විභාගය ජය ගැනීමට මෙහි ඇති මේවලම් ඉවහල් වනු ඇත.
            </span>
            <span className="block mt-4">
              ඉදිරියේ දී මුහුණදෙන විභාග සඳහා ඔබ වෙනුවෙන්ම සැකසූ මෙම වෙබ් පිටුව මගින් ඔබට අවශ්‍ය ප්‍රශ්න පත්‍ර, විවරණ, සම්පත් පොත්, ගුරු අත්පොත් , විශය කරුණු හා උසස් පෙල සම්බන්ධව වැදගත් කරුණු ලබා ගත හැක.
            </span>
            <span className="block mt-4">

            </span>
          </p>
        </div>
      </div>

      {/* Card Section */}
      <div className="mt-8">
        <Card />
      </div>
    </>
  );
}

export default Chemistry;
