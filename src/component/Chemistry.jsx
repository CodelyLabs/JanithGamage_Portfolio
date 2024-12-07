import React from 'react';
import Card from './Card';

function Chemistry() {
  return (
    <>
      {/* Banner Section with Polygon Shape */}
      <div
        className="bg-red-500 text-white text-center relative h-48 flex items-center justify-center"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)',
        }}
      >
        <h1 className="font-bold text-6xl mb-6">Chemistry</h1>
      </div>

      {/* Card Section */}
      <div className="mt-8">
        <Card />
      </div>
    </>
  );
}

export default Chemistry;
