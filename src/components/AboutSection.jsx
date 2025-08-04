import React from 'react';
import aboutImage from '../assets/poza1.jpeg';
import { FaMapMarkerAlt, FaClock} from 'react-icons/fa';
import {
  FaLeaf,
  FaUtensils,
} from 'react-icons/fa';
import { GiSprout, GiFruitBowl } from 'react-icons/gi';

const AboutSection = () => {
  return (
    <section className="bg-[#f0fcd6] py-16 px-4 relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Textul din stânga */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The recipe behind our <br className="hidden md:block" /> culinary success
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-6">
            We are more than just a dining establishment; we are culinary artisans on a mission to create extraordinary experiences for our guests. A passionate food enthusiast with a dream of the world.
          </p>
          <button className="bg-[#3f774c] text-white px-6 py-2 rounded-md hover:bg-[#356741] transition">
            Learn More
          </button>
        </div>

        {/* Poza + cardul cu adresă/orar */}
        <div className="flex flex-col gap-6 items-center md:items-end">
          {/* Imagine */}
          <img
  src={aboutImage}
  alt="About section"
  className="rounded-xl shadow-lg w-full max-w-[400px] max-h-[300px] object-cover"
/>


          {/* Card adresă și orar */}
          <div className="bg-white shadow-md rounded-xl px-6 py-4 text-sm text-gray-800 w-full max-w-[400px] max-h-[300px]">
            <h3 className="font-semibold text-base mb-4">
              Visit us for the ultimate culinary adventure
            </h3>
            <div className="flex items-start gap-2 mb-3">
              <FaMapMarkerAlt className="text-[#3f774c] mt-2" />
              <a
                href="https://www.google.com/maps?q=Strada+General+Nicolae+Haralambie+30,+București"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Strada General Nicolae Haralambie 30, Tineretului, București
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-[#3f774c]" />
              <span>Everyday : 9:30 AM to 10 PM</span>
            </div>
          </div>
        </div>
      </div>
<div className="hidden md:block absolute bottom-[-80px] left-[20%] w-[180px] z-10 pointer-events-none">
  <img
    src={require('../assets/float-image-1-removebg-preview.png')}
    alt="Decor"
    className="w-full relative z-10"
  />

  {/* Iconițe flotante */}
  <div className="absolute top-7 -left-6 text-[#3f774c] text-xl animate-pulse">
    <FaUtensils />
  </div>
  <div className="absolute -top-4 left-24 text-[#3f774c] text-lg animate-pulse">
    <FaLeaf />
  </div>
  <div className="absolute top-16 -right-5 text-[#3f774c] text-xl rotate-[20deg] animate-pulse">
    <GiSprout />
  </div>
  <div className="absolute bottom-[-30px] left-12 text-[#3f774c] text-2xl animate-pulse">
    <GiFruitBowl  />
  </div>
</div>

    </section>
  );
};

export default AboutSection;
