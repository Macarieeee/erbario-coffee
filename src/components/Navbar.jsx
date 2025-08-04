import React, { useState } from 'react';
import logo from '../assets/icon.png';
import { FaBars, FaTimes, FaRegCalendarAlt } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 text-sm text-text">
      {/* Top bar */}
<div className="py-2 px-4 border-b border-gray-200">
  <div className="max-w-7xl mx-auto flex justify-between items-center text-[12px] sm:text-sm whitespace-nowrap w-full">
     <a
      href="https://www.google.com/maps?q=Strada+General+Nicolae+Haralambie+30,+București+040587"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      📍 Strada General Nicolae Haralambie 30
    </a>

    <a href="tel:+40731144159" className="hover:underline">
      📞 0731 144 159
    </a>
  </div>
</div>



      {/* Navbar principal */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <a href="#home">
          <img src={logo} alt="Rare Garden Logo" className="h-12 w-auto object-contain" />
        </a>

        {/* Hamburger button – doar pe mobil */}
        <button
          className="md:hidden text-2xl text-primary focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Meniu – desktop */}
        <ul className="hidden md:flex space-x-6 items-center text-lg font-medium">
          <li><a href="#home" className="hover:text-primary transition">Home</a></li>
          <li><a href="#about" className="hover:text-primary transition">About</a></li>
          <li><a href="#menu" className="hover:text-primary transition">Menu</a></li>
          <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
          <li>
            <a
              href="#rezervare"
              className="flex items-center gap-2 px-4 py-1.5 border-2 rounded-[8px] transition duration-300
                         border-[#93ba63] text-[#93ba63]
                         hover:bg-[#93ba63] hover:text-[#2b450b]"
            >
              <FaRegCalendarAlt size={18} />
              Book a Table
            </a>
          </li>
        </ul>

        {/* Meniu – mobil */}
        {menuOpen && (
          <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 text-lg font-medium md:hidden z-40">
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#menu" onClick={() => setMenuOpen(false)}>Menu</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            <li>
              <a
                href="#rezervare"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-1.5 border-2 rounded-[8px] transition duration-300
                           border-[#93ba63] text-[#93ba63]
                           hover:bg-[#93ba63] hover:text-[#2b450b]"
              >
                <FaRegCalendarAlt size={18} />
                Book a Table
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
