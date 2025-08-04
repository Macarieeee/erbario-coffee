import React from 'react';
import { FaLeaf, FaUtensils, FaPercentage } from 'react-icons/fa';
import { GiChefToque } from 'react-icons/gi';

const features = [
  {
    icon: <FaLeaf size={28} />,
    title: 'Fresh Food',
    description: 'The freshest and highest quality produce available.',
  },
  {
    icon: <GiChefToque size={28} />,
    title: "Chef’s Special",
    description: 'The freshest and highest quality produce available.',
  },
  {
    icon: <FaUtensils size={28} />,
    title: 'Exquisite Culinary',
    description: 'The freshest and highest quality produce available.',
  },
  {
    icon: <FaPercentage size={28} />,
    title: 'No Hidden Fees',
    description: 'The freshest and highest quality produce available.',
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="bg-[#e9fdd2] py-20 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Why choose us</h2>
      <p className="text-gray-600 mb-12 text-sm md:text-base">
        Crafting memories bite by bite for remarkable experiences
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center px-4">
            <div className="bg-transparent rounded-full border border-green-700 w-24 h-24 flex items-center justify-center text-green-700 mb-4">
              {item.icon}
            </div>
            <h3 className="text-md font-semibold text-gray-900 mb-1">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
