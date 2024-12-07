import { useState, useEffect } from 'react';
import profile from '../assets/profile.png';
import { Typewriter } from 'react-simple-typewriter';
import sec2 from '../assets/un1.png';
import chem from '../assets/recta.svg'

function Home() {

  return (
    <>
    <div className="flex w-full h-[35rem]">
      {/* Red Half */}
      <div className="w-2/4 h-full bg-[#E63946] flex justify-center items-center flex-col">
    
        <p className="text-8xl text-slate-50 font-semibold ml-20">
          JANITH <span>GAMAGE</span>
        </p>
        <div className="text-[3rem] text-slate-50 font-bold mt-4" >
        <img src={chem} alt="" className=''/>

          <Typewriter
            words={['Tuter', 'Businessmen', 'Human']}
            loop={0} // Number of loops; 0 for infinite
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
          
          </div>
          
      </div>
      {/* Triangle Shape with Image */}
      <div className="w-2/4 h-full relative flex justify-center items-center">
        {/* Background Triangle */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            clipPath: 'polygon(0% 0, 0 100%, 100% 100%)',
            backgroundColor: '#E63946',
          }}
        ></div>
        {/* Profile Image */}
        <img
          src={profile}
          alt="profilepic"
          className="relative z-10 max-w-1[120%] max-h-[100%] object-contain mt-14"
        />
      </div>

      
    </div>
    <div className='h-screen'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident incidunt iste quos assumenda tenetur pariatur, corrupti perferendis quis dicta nemo atque ratione sequi quo, esse optio ut amet voluptas? Unde optio sit tempora odio voluptas totam expedita asperiores, nulla hic reiciendis dignissimos eos ratione dolore tempore dolores deleniti nam eveniet perspiciatis voluptatum quidem quos officiis distinctio? Cumque blanditiis doloribus quia nulla in aliquam iure vel. Praesentium, optio assumenda cupiditate voluptatibus dignissimos rerum. Enim ipsa illum sed corporis cupiditate ratione totam alias sequi culpa, iste eius accusamus, quam eveniet deleniti a labore minima sunt natus itaque consequatur beatae officia, esse tempore!
        <img src={sec2} alt="" />
      </div>
    </>
  );
}

export default Home;
