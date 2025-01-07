import { Typewriter } from 'react-simple-typewriter';
import profile from '../assets/2.png';
import sec2 from '../assets/un1.png';
import chem from '../assets/recta.svg';
import './Home.css';
import abMe from '../assets/3.png'

function Home() {
  return (
    <>
      {/* Main Hero Section */}
      <div
        className="flex w-full h-[41.5rem] relative"
        style={{
          background: 'linear-gradient(135deg, #E63946, #FF6F61, #FF8A75)',
        }}
      >
        {/* Left Section */}
        <div className="w-1/2 top-10 flex justify-center items-start flex-col relative">
          <p className="text-8xl text-slate-50 font-semibold ml-44 drop-shadow-md">
            JANITH <span className="text-[#FFB6A3]">GAMAGE</span>
          </p>
          <p className='text-3xl text-slate-50 font-semibold ml-44 drop-shadow-md'>Bsc(Hon's) Physical Science</p>
          <div className="text-[3rem] text-slate-50 font-bold mt-4 ml-44 drop-shadow-md">
            <Typewriter
              words={['Tuter', 'Businessmen', 'Human']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <img
            src={chem}
            alt="Decorative Shape"
            className="absolute top-60 left-0 object-contain animate-bounce"
          />
          {/* Decorative Dots */}
          <div className="absolute top-20 left-10 w-16 h-16 bg-white rounded-full opacity-20 blur-md"></div>
          <div className="absolute bottom-20 left-32 w-8 h-8 bg-white rounded-full opacity-30 blur-sm"></div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 h-full relative flex justify-center items-center">
          <div className="relative">
            {/* Rotating Gradient Rings */}
            <div className="absolute inset-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#FF8A75] to-[#E63946] blur-xl opacity-50 animate-spin-slow"></div>
            <div className="absolute inset-0 w-[250px] h-[250px] rounded-full bg-gradient-to-r from-[#FFB6A3] to-[#FF6F61] blur-md opacity-75 animate-spin-slower"></div>

            {/* Pulsing Glow */}
            <div className="absolute inset-0 w-[280px] h-[280px] rounded-full bg-[#FF8A75] opacity-30 blur-2xl animate-pulse"></div>

            {/* Floating Particles */}
            <div className="absolute w-4 h-4 bg-white rounded-full animate-floating opacity-70 top-10 left-10"></div>
            <div className="absolute w-3 h-3 bg-white rounded-full animate-floating opacity-50 top-20 right-12"></div>
            <div className="absolute w-5 h-5 bg-white rounded-full animate-floating opacity-60 bottom-8 left-20"></div>
            <div className="absolute w-3 h-3 bg-white rounded-full animate-floating opacity-40 bottom-12 right-20"></div>

            {/* Profile Image */}
            <img
              src={profile}
              alt="profilepic"
              className="relative z-10 max-w-[90%] max-h-[0%] transform transition-transform duration-500 mt-[-2.3rem]"
            />
          </div>
        </div>
      </div>

      {/* Secondary Section */}
      <div className="h-screen flex flex-row items-center bg-gradient-to-r from-[#fcfcfc] via-[#FFB6A3] to-[#f8f8f8] py-10 px-20">
        {/* Left Image Section */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={abMe}
            alt="Secondary Image"
            className="w-[60%] h-auto shadow-lg transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Right Text Section */}
        <div className="flex-1 text-center bg-white bg-opacity-70 backdrop-blur-md p-10 rounded-lg shadow-xl">
          <h2 className="text-4xl font-bold text-[#E63946] mb-4">About Me</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            incidunt iste quos assumenda tenetur pariatur, corrupti perferendis quis
            dicta nemo atque ratione sequi quo, esse optio ut amet voluptas? Unde
            optio sit tempora odio voluptas totam expedita asperiores, nulla hic
            reiciendis dignissimos eos ratione dolore tempore dolores deleniti nam
            eveniet perspiciatis voluptatum quidem quos officiis distinctio.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#FF6F61] text-white rounded-lg shadow-md font-medium text-lg transition-transform duration-300 hover:scale-110 hover:shadow-lg">
            Learn More
          </button>
        </div>
      </div>

    </>
  );
}

export default Home;

