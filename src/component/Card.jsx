import ImageCard from "./ImageCard";
import bgImage from "../assets/image (1).png";
import markingImage from "../assets/image (3).png";
import analysisImage from "../assets/image (4).png";
import resourceImage from "../assets/image (5).png";
import mcqImage from "../assets/image (6).png";
import AOS from 'aos'; // Import AOS JavaScript
import 'aos/dist/aos.css'; // Import AOS CSS
import { useEffect } from 'react'; // Import useEffect hook
import { Link } from 'react-router-dom'



const Card = () => {
  
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {/* Card 1 */}
      <div className="Card" data-aos="fade-in">
        <ImageCard imgSrc={bgImage} className={"w-full h-[300px] sm:h-[400px] m-4"}>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Past</h1>
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">Papers</h1>
          <div className="space-x-4 mt-4">
            <button className="bg-white text-black rounded-full py-1 px-6 border-2 border-transparent transition-all duration-300 ease-in-out hover:shadow-[0_0_8px_2px_rgba(245,0,0,1)] hover:text-white hover:bg-transparent hover:border-red-400">
            <Link to="/pastpapers">View Details</Link>
            </button>
          </div>
        </ImageCard>
      </div>
      {/* Card 2 */}
      <div className="Card" data-aos="fade-in" data-aos-delay="200">
        <ImageCard imgSrc={markingImage} className={"w-full h-[300px] sm:h-[400px] m-4"}>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Marking</h1>
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">Schemes</h1>
          <div className="space-x-4 mt-4">
            <button className="bg-white text-black rounded-full py-1 px-6 border-2 border-transparent transition-all duration-300 ease-in-out hover:shadow-[0_0_8px_2px_rgba(245,0,0,1)] hover:text-white hover:bg-transparent hover:border-red-400">
            <Link to="/markingschemes">View Details</Link>
            </button>
          </div>
        </ImageCard>
      </div>
      {/* Card 3 */}
      <div className="Card" data-aos="fade-in" data-aos-delay="400">
        <ImageCard imgSrc={analysisImage} className={"w-full h-[300px] sm:h-[400px] m-4"}>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Analysis</h1>
          <h1 className="text-3xl sm:text-4xl font-bold mb-8"><p>(විවරණ)</p></h1>
          <div className="space-x-4 mt-4">
            <button className="bg-white text-black rounded-full py-1 px-6 border-2 border-transparent transition-all duration-300 ease-in-out hover:shadow-[0_0_8px_2px_rgba(245,0,0,1)] hover:text-white hover:bg-transparent hover:border-red-400">
              View Details
            </button>
          </div>
        </ImageCard>
      </div>
      {/* Card 4 */}
      <div className="Card" data-aos="fade-in" data-aos-delay="600">
        <ImageCard imgSrc={resourceImage} className={"w-full h-[300px] sm:h-[400px] m-4"}>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Resource</h1>
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">Books</h1>
          <div className="space-x-4 mt-4">
            <button className="bg-white text-black rounded-full py-1 px-6 border-2 border-transparent transition-all duration-300 ease-in-out hover:shadow-[0_0_8px_2px_rgba(245,0,0,1)] hover:text-white hover:bg-transparent hover:border-red-400">
              View Details
            </button>
          </div>
        </ImageCard>
      </div>
      {/* Card 5 */}
      <div className="Card" data-aos="fade-in" data-aos-delay="800">
        <ImageCard imgSrc={mcqImage} className={"w-full h-[300px] sm:h-[400px] m-4"}>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Classified</h1>
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">MCQs</h1>
          <div className="space-x-4 mt-4">
            <button className="bg-white text-black rounded-full py-1 px-6 border-2 border-transparent transition-all duration-300 ease-in-out hover:shadow-[0_0_8px_2px_rgba(245,0,0,1)] hover:text-white hover:bg-transparent hover:border-red-400">
              View Details
            </button>
          </div>
        </ImageCard>
      </div>
    </div>
  );
};

export default Card;
