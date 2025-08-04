import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import logo from '../assets/icon.png'; // sau calea către logo

const Footer = () => {
  return (
    <footer className="bg-[#e6fbcc] text-[#2b450b] py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

        {/* Col 1: Logo + Nume */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="Rare Garden Logo" className="w-16 h-16 rounded-full object-cover mb-2" />
        </div>

        {/* Col 2: Navigație */}
        <div className="flex justify-center space-x-6 font-medium">
          <a href="#home" className="hover:underline">Acasă</a>
          <a href="#about" className="hover:underline">Despre</a>
          <a href="#menu" className="hover:underline">Meniu</a>
          <a href="#reservation" className="hover:underline">Rezervare</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>

        {/* Col 3: Contact + Social */}
        <div className="text-center md:text-right">
          <p className="mb-2"><a
      href="https://www.google.com/maps?q=Strada+General+Nicolae+Haralambie+30,+București+040587"
      target="_blank"
      rel="noopener noreferrer"
      className="underline"
    >
      Strada General Nicolae Haralambie 30
    </a></p>
          <p className="mb-4">Tel: <a href="tel:+40760622280" className="underline">0731 144 159</a></p>
          <div className="flex justify-center md:justify-end space-x-4 text-lg">
            <a href="https://www.instagram.com/erbario.coffee/" className="hover:text-[#3f7b54]"><FaInstagram /></a>
            <a href="https://www.facebook.com/erbario.coffee" className="hover:text-[#3f7b54]"><FaFacebookF /></a>
          </div>
        </div>
      </div>

      <hr className="my-6 border-[#3f7b54]" />

      <p className="text-center text-sm text-[#2b450b]">
        &copy; {new Date().getFullYear()} Erbario. Toate drepturile rezervate. Build and Designed by Macarie Mihai-Alexandru
      </p>
    </footer>
  );
};

export default Footer;
