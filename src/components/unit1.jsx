import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
      {/* Navigation Bar */}
      <motion.nav
        className="navbar bg-black text-yellow-500 p-4 fixed top-0 left-0 right-0 z-10"
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
            My Portfolio
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
          <ul className={`hidden md:flex ${isOpen ? '' : 'hidden'}`}>
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
        className="md:hidden bg-black text-white py-4 fixed top-16 left-0 right-0 z-10"
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
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="/contact" className="block py-2 px-4 hover:bg-yellow-500">Contact</a>
          </motion.li>
        </ul>
      </motion.div>

      {/* Content */}
      <div className="flex-grow flex flex-col justify-center items-center mt-16">
        <div className="max-w-md mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img className="w-full" src="https://www.svgrepo.com/show/503798/world.svg" alt="Landscape" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-white mb-2">Online World</div>
            <p className="text-base text-gray-300">
              This is an exam unit in the online world. It involves learning about various aspects of the internet, including web development, cybersecurity, and digital marketing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
