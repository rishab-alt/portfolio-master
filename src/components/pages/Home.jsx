import React, { useState, useEffect } from 'react';
import Graphic from '../images/undraw_drink_coffee_v3au.svg'
import Nav from '../NavBar'
import { motion } from 'framer-motion';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode] = useState(true);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Simulating a delay for loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // Close the mobile menu when the window is resized
      setIsOpen(false);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
      <Nav darkMode={darkMode} />
      {/* Hero Section */}
      <motion.section
  id="home"
  className="hero grid grid-cols-1 md:grid-cols-2 gap-4 items-center text-center md:text-left container mx-auto"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.5 }}
>
<div className="hero-image order-1 md:order-2 flex justify-center items-center mb-4 md:mb-0">
  <motion.img
    src={Graphic} // replace with the path to your SVG image
    alt="Illustration"
    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl h-auto object-contain p-4 md:p-6 lg:p-8"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
  />
</div>


  <div className="hero-content order-2 md:order-1">
    <motion.h1
      className="text-5xl font-bold mb-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
    >
      Welcome to My Portfolio
    </motion.h1>
    <motion.p
      className="text-2xl mb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
    >
      Showcasing my projects and skills
    </motion.p>
    <motion.a
      href="/projects"
      className="cta-btn bg-yellow-500 text-black py-3 px-8 rounded-full font-semibold hover:bg-yellow-400 hover:text-white transition duration-300"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
    >
      View Projects
    </motion.a>
  </div>
</motion.section>

    </div>
  );
}

export default HomePage;
