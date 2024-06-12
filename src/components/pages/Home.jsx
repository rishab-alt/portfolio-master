import React, { useState } from 'react';
import Graphic from '../images/undraw_drink_coffee_v3au.svg';
import Nav from '../NavBar';
import { motion } from 'framer-motion';
import './css/Home.css';

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delayChildren: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-200 bg-gray-100 text-gray-800'>
      <Nav darkMode={darkMode} />
      <motion.section
        id="home"
        className="hero container flex flex-col md:flex-row justify-between items-center text-center md:text-left p-6 mt-16 md:mt-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div
          className="graphic-container w-full md:w-2/5 mb-10 md:mb-0"
        >
          <img
            src={Graphic}
            alt="Graphic"
            className="desktop-image"
          />
        </div>
        <motion.div
          className="content w-full md:w-3/5"
          variants={itemVariants}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={itemVariants}
            style={{ color: darkMode ? '#FFD700' : '#DAA520' }} // Darker gold accent color for the title
          >
            Welcome to My Portfolio
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            variants={itemVariants}
            style={{ color: darkMode ? '#ADD8E6' : '#5F9EA0' }} // Darker cyan accent color for the paragraph
          >
            Showcasing my projects and skills
          </motion.p>
          <motion.a
            href="/projects"
            className="cta-btn bg-indigo-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-indigo-500 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            variants={itemVariants}
          >
            View Projects
          </motion.a>
        </motion.div>
      </motion.section>
      <div className={`background-effect ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}></div>
    </div>
  );
};

export default HomePage;
