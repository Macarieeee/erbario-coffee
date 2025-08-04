import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import ChefSection from './components/ChefSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import ReservationSection from './components/ReservationSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <ChefSection />
      <WhyChooseUsSection />
      <ReservationSection />
      <Footer />
    </>
  );
}

export default App;
