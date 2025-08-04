import React from 'react';
import bgImage from '../assets/fundal-second.png';
import chef1 from '../assets/chef1.jpg'; // înlocuiește cu avatarurile tale
import chef2 from '../assets/chef2.jpg';
import chef3 from '../assets/chef3.jpg';

const ChefSection = () => {
  return (
    <section
      className="w-full h-[600px] bg-cover bg-center flex items-center justify-end px-4 md:px-16"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white rounded-3xl p-8 max-w-md shadow-lg text-left w-full md:w-[420px]">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">
          The flavor of magicians <br /> with every dish.
        </h2>
        <p className="text-gray-600 text-sm mb-6">
          We are culinary artisans on a mission to create best extraordinary experiences for our guests.
        </p>

        {/* Avatare + buton */}
        <div className="flex items-center gap-4">
          {/* Avatare */}
          <div className="flex -space-x-3">
            <img src={chef1} alt="chef" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src={chef2} alt="chef" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src={chef3} alt="chef" className="w-8 h-8 rounded-full border-2 border-white" />
            <div className="w-8 h-8 rounded-full bg-black text-white text-sm flex items-center justify-center font-semibold border-2 border-white">
              +
            </div>
          </div>

          {/* Buton */}
          <button className="bg-[#3f774c] text-white text-sm px-4 py-2 rounded-md hover:bg-[#356741] transition">
            Meet with Chef’s
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChefSection;
