import React from 'react';
import heroImage from '../assets/fundal-main.jpg';
import { FaRegCalendarAlt } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay întunecat discret */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>


      {/* Conținut centrat */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl md:text-7xl font-serif font-bold text-[#e6fbcc] drop-shadow-lg">
          A symphony of flavors in every dish
        </h1>

        <p className="mt-4 text-lg md:text-xl text-[#FDF6EC] drop-shadow-sm">
          Takes great pride in crafting unforgettable dishes, and look forward to creating a memorable moment for you.
        </p>

    <a
  href="#rezervare"
  className="mt-8 px-4 py-1.5 border-2 rounded-[8px] transition duration-300
             border-[#e6fbcc] text-[#2b450b] bg-[#e6fbcc]
             hover:border-white hover:text-black hover:bg-white
             flex items-center gap-2"
>
  <FaRegCalendarAlt size={18} />
  Book a Table
</a>
      </div>
    </section>
  );
};

export default HeroSection;
