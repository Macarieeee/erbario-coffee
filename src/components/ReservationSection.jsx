import React, { useState } from 'react';
import bgImage from '../assets/fundal-second.png';
import DatePicker from 'react-datepicker';
import { FaPhoneAlt } from 'react-icons/fa';

const ReservationSection = () => {
  const [date, setDate] = useState(new Date());

  return (
    <section
  className="w-full min-h-[600px] bg-cover bg-center flex items-center px-6 md:px-16 py-20 relative"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  <div className="absolute inset-0 bg-black/40 z-0"></div>

  <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Text stânga */}
        <div className="text-[#d6f8b8] max-w-lg">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Reserved for <br /> private dining
          </h2>
          <p className="mb-6 text-sm md:text-base">
            A passionate food enthusiast with a dream of the world to create extraordinary experiences.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="#learn-more"
              className="bg-[#d6f8b8] text-green-900 px-5 py-2 rounded-md font-medium hover:bg-[#c8efaa] transition"
            >
              Learn More
            </a>
            <a href="tel:+40731144159" className="flex items-center gap-2 text-white font-medium">
              <FaPhoneAlt />
              0731 144 159
            </a>
          </div>
        </div>

        {/* Formular rezervare */}
        <div className="bg-white rounded-2xl p-8 shadow-lg w-full max-w-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Book your table</h3>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-sm">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-sm">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-300"
                placeholder="you@example.com"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {/* Date picker */}
  <div>
    <label className="block mb-1 font-medium text-sm">Reservation Date</label>
    <DatePicker
      selected={date}
      onChange={(date) => setDate(date)}
      dateFormat="dd/MM/yyyy"
      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
    />
  </div>

  {/* Number of people */}
  <div>
    <label className="block mb-1 font-medium text-sm">Number of People</label>
    <select
      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
      defaultValue=""
    >
      <option value="" disabled>Select</option>
      {[...Array(10)].map((_, i) => (
        <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'person' : 'people'}</option>
      ))}
    </select>
  </div>
</div>

            <button
              type="submit"
              className="w-full bg-[#3f774c] text-white py-2 rounded-md hover:bg-[#356741] transition"
            >
              Reserve Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
