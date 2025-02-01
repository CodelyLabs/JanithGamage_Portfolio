import React, { useState, useRef, useEffect } from "react";
import periodicTable from "../assets/PerioadicTable.jpeg";
import inorganicImage from "../assets/Inorganic.jpeg";
import { FaTimes } from "react-icons/fa";
import { QuickMenu } from './QuickMenu'; // Import QuickMenu component

const images = [
  {
    id: 1,
    src: inorganicImage,
    title: "Inorganinc Tips",
    description: `✦ ඒකක පරිවර්තනය\n✦ සුලභ ලඝු අගයන්\n✦ ආවර්තීය විචලන\n✦ ගණනයේදී භාවිතා කරන දත්තයන්`,
  },
  {
    id: 2,
    src: periodicTable,
    title: "Periodic Table",
    description: `විශය නිර්දේශය තුල ඔබ දැනගත යුතු  ,මතක තබා ගත යුතු කොටස් වලට අදාල කෙටි සටහන.\n
                    ✦ අකාබනික රසායනය
                    ✦ කාබනික රසායනය
                    ✦ සමතුලිතතාවය`,
  },
];

const Other = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1); // State for zoom level
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // State for Sidebar visibility
  const imageRef = useRef(null); // Reference to image element

  // Handle clicking the image (shows popup)
  const openImagePopup = (image) => {
    setSelectedImage(image);
    setZoom(1); // Reset zoom when new image is opened
    document.body.style.overflow = "hidden"; // Disable background scrolling
  };

  // Close the popup
  const closeImagePopup = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto"; // Restore background scrolling
  };

  // Handle mouse wheel zooming
  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      // Scroll up -> zoom in
      setZoom((prevZoom) => Math.min(prevZoom + 0.1, 3)); // Zoom in
    } else {
      // Scroll down -> zoom out
      setZoom((prevZoom) => Math.max(prevZoom - 0.1, 1)); // Zoom out
    }
  };

  // Handle touch zooming on mobile devices
  const handleTouchMove = (e) => {
    if (e.touches.length === 2) {
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      setZoom((prevZoom) => Math.max(1, Math.min(prevZoom + distance / 100, 3)));
    }
  };

  // Close the popup when clicking outside the image
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeImagePopup();
    }
  };

  // Toggle the sidebar visibility (for mobile)
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Mobile menu button */}
      <button
        className="block md:hidden p-4 bg-[#E63946] text-white hover:bg-[#E63946]"
        onClick={toggleSidebar}
      >
        Menu
      </button>

      <div className="flex flex-1 flex-col md:flex-row">
        {/* Quick Menu Sidebar */}
        <QuickMenu isVisible={isSidebarVisible} />

        {/* Main content area */}
        <main className="flex-1 p-4 overflow-y-auto">
          {/* Title */}
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
            Gallery
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image) => (
              <div
                key={image.id}
                className="relative bg-white shadow-2xl rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 transform hover:scale-105"
                onClick={() => openImagePopup(image)}
              >
                {/* Enlarged Image */}
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-80 object-cover cursor-pointer"
                />

                {/* Card Content */}
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {image.title}
                  </h3>
                  <p className="text-md text-gray-700">
                    {image.description.split("\n").map((line, index) => (
                      <span key={index} className="block">{line}</span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={handleOverlayClick} // Close popup when clicking outside
        >
          <div
            className="relative p-4 bg-white rounded-lg max-w-3xl"
            onWheel={handleWheel} // Handle mouse scroll zoom
            onTouchMove={handleTouchMove} // Handle touch zoom
          >
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-red-500"
              onClick={closeImagePopup}
            >
              <FaTimes size={24} />
            </button>
            <img
              ref={imageRef}
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg transition-all"
              style={{
                transform: `scale(${zoom})`, // Apply zoom level via transform
                transition: "transform 0.3s ease-in-out",
                maxWidth: "90vw", // For larger popup on PC
                maxHeight: "90vh", // For larger popup on PC
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Other;
