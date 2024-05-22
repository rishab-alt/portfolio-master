import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
      {isLoading ? (
        // Loading Screen
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-500"></div>
        </div>
      ) : (
        <>
           {/* Navigation Bar */}
      <motion.nav
        className={`navbar bg-${darkMode ? 'black' : 'white'} text-yellow-500 p-4 fixed top-0 left-0 right-0 z-10`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <motion.div
            className="text-3xl font-bold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Rishab
          </motion.div>
          {/* Hamburger Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          {/* Desktop Navigation Menu */}
          <ul className="hidden md:flex">
            <motion.li
              className="mr-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a href="/" className="hover:text-yellow-300 font-semibold text-xl">Home</a>
            </motion.li>
            <motion.li
              className="mr-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a href="/about" className="hover:text-yellow-300 font-semibold text-xl">About</a>
            </motion.li>
            <motion.li
              className="mr-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a href="/projects" className="hover:text-yellow-300 font-semibold text-xl">Projects</a>
            </motion.li>
            <motion.li
              className="mr-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a href="/timeline" className="hover:text-yellow-300 font-semibold text-xl">Education</a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a href="/contact" className="hover:text-yellow-300 font-semibold text-xl">Contact</a>
            </motion.li>
          </ul>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <motion.div
        className={`md:hidden bg-${darkMode ? 'black' : 'white'} text-${darkMode ? 'white' : 'black'} py-4 absolute top-16 left-0 right-0 z-10`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ul className={`text-center ${isOpen ? '' : 'hidden'}`}>
          <motion.li
            className="mb-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="/" className="block py-2 px-4 hover:bg-yellow-500">Home</a>
          </motion.li>
          <motion.li
            className="mb-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="/about" className="block py-2 px-4 hover:bg-yellow-500">About</a>
          </motion.li>
          <motion.li
            className="mb-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="/projects" className="block py-2 px-4 hover:bg-yellow-500">Projects</a>
          </motion.li>
          <motion.li
            className="mb-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="/timeline" className="block py-2 px-4 hover:bg-yellow-500">Education</a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="/contact" className="block py-2 px-4 hover:bg-yellow-500">Contact</a>
          </motion.li>
        </ul>
      </motion.div>

          {/* Hero Section */}
          <motion.section
            id="home"
            className="hero flex flex-col justify-center items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="container mx-auto">
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
        </>
      )}

      {/* Custom Mouse */}
      <motion.div
        className="custom-mouse"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}

export default HomePage;
