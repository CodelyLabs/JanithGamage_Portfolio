import React from 'react';

const ImageCard = ({ children, imgSrc, className, altText = "Default alt text", ...props }) => {
  return (
    <div {...props} className={`relative max-w-xs overflow-hidden rounded-2xl shadow-lg group ${className}`}>
      {/* Image with decreased brightness by default and further decrease on hover */}
      <img
        src={imgSrc}
        alt={altText}
        className="transition-all group-hover:brightness-50 brightness-75 group-hover:scale-110 group-hover:blur-sm duration-200 w-full h-full object-cover"
      />
      
      {/* Gradient overlay for text visibility */}
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/100 to-transparent">
        <div className="p-4 text-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
