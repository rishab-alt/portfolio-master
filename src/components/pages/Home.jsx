import React, { useState, useEffect } from 'react';
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
    <div className={`min-h-screen flex flex-col justify-center items-center ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Nav darkMode={darkMode} />
      <motion.section
        id="home"
        className="hero container flex flex-col md:flex-row justify-between items-center text-center md:text-left p-6 mt-16 md:mt-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="graphic-container w-full md:w-2/5 mb-10 md:mb-0"
          variants={itemVariants}
          whileHover={{ scale: 1.1, rotate: 5 }} // Adjust the hover effect here
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <motion.img
            src={Graphic}
            alt="Graphic"
            className="desktop-image"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{
              scale: 1.1,
              rotate: 5, // Adjust the hover effect here
              transition: { type: 'spring', stiffness: 300 }
            }}
          />
        </motion.div>
        <motion.div
          className="content w-full md:w-3/5"
          variants={itemVariants}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={itemVariants}
          >
            Welcome to My Portfolio
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            variants={itemVariants}
          >
            Showcasing my projects and skills
          </motion.p>
          <motion.a
            href="/projects"
            className="cta-btn bg-yellow-500 text-black py-3 px-8 rounded-full font-semibold hover:bg-yellow-400 hover:text-white transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            variants={itemVariants}
          >
            View Projects
          </motion.a>
        </motion.div>
      </motion.section>
      <div className={`background-effect ${darkMode ? 'bg-black' : 'bg-white'}`}></div>
    </div>
  );
};

export default HomePage;
