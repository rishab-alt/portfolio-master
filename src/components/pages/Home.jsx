import React, { useState, useEffect } from 'react';
import Graphic_1 from '../images/undraw_drink_coffee_v3au.svg';
import Nav from '../NavBar'
import { motion } from 'framer-motion';

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
    <div className={`bg-${darkMode ? 'black' : 'white'} text-white min-h-screen flex flex-col`}>
     <Nav darkMode={darkMode}/>
      {/* Hero Section */}
      <motion.section
        id="home"
        className="hero flex flex-col md:flex-row justify-center items-center text-center mt-16 md:text-left md:mt-0 flex-grow"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <motion.div
            className="w-full md:w-5/12 p-4 md:p-8 mt-4 md:mt-0 mb-4 md:mb-0"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
          >
             
             <img src={Graphic_1} alt="Graphic" className="w-full md:w-96 lg:w-128 xl:w-144 h-auto mx-auto" />

          </motion.div>
          <div className="w-full md:w-7/12 p-4 md:p-8">
            <motion.h1
              className="text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
            >
              Welcome to My Portfolio
            </motion.h1>
            <motion.p
              className="text-2xl mb-8"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
            >
              Showcasing my projects and skills
            </motion.p>
            <motion.a
              href="/projects"
              className="cta-btn bg-yellow-500 text-black py-3 px-8 rounded-full font-semibold hover:bg-yellow-400 hover:text-white transition duration-300"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
            >
              View Projects
            </motion.a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
