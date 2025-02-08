import React, { useState } from "react";
import periodicTable from "../assets/PerioadicTable.jpeg";
import inorganicImage from "../assets/Inorganic.jpeg";
import { FaDownload } from "react-icons/fa";
import { QuickMenu } from "./QuickMenu";

const images = [
  {
    id: 1,
    src: inorganicImage,
    title: "Inorganic Tips",
    description: `විශය නිර්දේශය තුල ඔබ දැනගත යුතු  ,මතක තබා ගත යුතු කොටස් වලට අදාල කෙටි සටහන.

                    ✦ අකාබනික රසායනය
                    ✦ කාබනික රසායනය
                    ✦ සමතුලිතතාවය`,
  },
  {
    id: 2,
    src: periodicTable,
    title: "Periodic Table",
    description: `✦ ඒකක පරිවර්තනය\n✦ සුලභ ලඝු අගයන්\n✦ ආවර්තීය විචලන\n✦ ගණනයේදී භාවිතා කරන දත්තයන්`,
  },
];

const Other = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const downloadImage = (imageSrc, imageName) => {
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = imageName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <button
        className="block md:hidden p-4 bg-[#E63946] text-white hover:bg-[#E63946]"
        onClick={toggleSidebar}
      >
        Menu
      </button>
      <div className="flex flex-1 flex-col md:flex-row">
        <QuickMenu isVisible={isSidebarVisible} />
        <main className="flex-1 p-4 overflow-y-auto">
        <div className="relative flex items-center mb-8">
            <div className="flex-grow border-t-4 border-black"></div>
              <h1 className="px-4 text-3xl md:text-5xl font-extrabold text-center text-[#1e1e1e] uppercase tracking-wide drop-shadow-lg">
                    Gallery
              </h1>
            <div className="flex-grow border-t-4 border-black"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {images.map((image) => (
              <div
                key={image.id}
                className="relative w-full bg-[#1e1e1e] shadow-2xl rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 transform hover:scale-105 border-8 border-[#1e1e1e] flex flex-col"
              >
                <a href={image.src} target="_blank" rel="noopener noreferrer">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-80 object-cover"
                  />
                </a>
                <div className="p-6 text-center flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-gray-100 mb-3">
                    {image.title}
                  </h3>
                  <p className="text-md text-gray-100 flex-grow">
                    {image.description.split("\n").map((line, index) => (
                      <span key={index} className="block">{line}</span>
                    ))}
                  </p>
                  <button
                    className="mt-4 px-4 py-2 bg-[#E63946] text-white rounded hover:bg-blue-700"
                    onClick={() =>
                      downloadImage(image.src, image.title.replace(/\s+/g, "_") + ".jpg")
                    }
                  >
                    <FaDownload className="inline-block mr-2" /> Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Other;
