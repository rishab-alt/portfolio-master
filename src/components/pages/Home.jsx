import React, { useState, useEffect } from 'react';
import Graphic from '../images/undraw_drink_coffee_v3au.svg';
import Nav from '../NavBar';
import { motion } from 'framer-motion';
import './css/Home.css'; // Import CSS file for styling

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(false);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Nav darkMode={darkMode} />
      <motion.section
        id="home"
        className="hero flex flex-col md:flex-row justify-between items-center text-center md:text-left p-6 mt-16 md:mt-24"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="w-full md:w-3/5 mb-10 md:mb-0">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            Welcome to My Portfolio
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
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
        <motion.div
          className="w-full md:w-2/5"
          initial={{ opacity: 0, y: 50 }} // Move the image up initially
          animate={{ opacity: 1, y: 0 }} // Animate to its original position
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <img src={Graphic} alt="Graphic" className="desktop-image" />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default HomePage;
