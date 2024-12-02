import React from 'react'
import logo from '../assets/Janith Liaya (3.3).png';
function Footer() {
  return (
    <div className='h-[10rem] w-full bg-[#1C1C1C] text-slate-50 '>
        <div className='flex space-x-10 mt-10'>
            <img src={logo} alt="logo" className='w-[10rem]'/>
           <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, reiciendis.</div>
           <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, voluptates?</div>
           <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, architecto!</div>
        </div>
    </div>
  )
}

export default Footer;