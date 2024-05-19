import React, { useState, useEffect } from 'react';
import pdfUrl1 from '../Downloads/Unit 9 Assignment 1_Rish.pdf';
import { motion } from 'framer-motion';

const DownloadPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bg-${darkMode ? 'black' : 'white'} text-${darkMode ? 'white' : 'black'} min-h-screen flex flex-col justify-center items-center`}>
      {/* Navigation Bar */}
      <motion.nav
        className={`navbar bg-${darkMode ? 'black' : 'white'} text-yellow-500 p-4 absolute top-0 left-0 right-0 z-10`}
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
        className="md:hidden bg-black text-white py-4 absolute top-16 left-0 right-0 z-10"
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
      <div className="container mx-auto py-8 flex flex-col md:flex-row">
        {/* Card Section */}
        <div className="w-full md:w-1/2 p-4">
          <div className={`max-w-lg mx-auto bg-${darkMode ? 'gray-800' : 'white'} rounded-lg overflow-hidden shadow-lg mb-4`}>
            <div className="p-4">
              <img className="w-full object-cover" src="https://www.svgrepo.com/show/420913/computer-cpu-hardware-2.svg" alt="Placeholder" />
              <div className="mt-4">
                <p className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  This is a description of the image.
                </p>
              </div>
            </div>
          </div>
        </div>
      {/* Downloads Section */}
      <div className="w-full md:w-1/2 p-4 overflow-y-auto">
          {/* Assignment Cards */}
          <div className={`max-w-lg mx-auto bg-${darkMode ? 'gray-800' : 'white'} rounded-lg overflow-hidden shadow-lg mb-4`}>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Assignment 1</div>
              <p className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Click the link below to download.
              </p>
              <div className="mt-4">
                <a href={pdfUrl1} className={`block text-base py-2 px-4 bg-yellow-500 text-black rounded-md shadow-md hover:bg-yellow-400 focus:outline-none ${darkMode ? 'dark:bg-gray-800 dark:text-white' : ''}`}>Download Link 1</a>
              </div>
            </div>
          </div>
          <div className={`max-w-lg mx-auto bg-${darkMode ? 'gray-800' : 'white'} rounded-lg overflow-hidden shadow-lg mb-4`}>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Assignment 2</div>
              <p className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Click the link below to download.
              </p>
              <div className="mt-4">
                <a href="" className={`block text-base py-2 px-4 bg-yellow-500 text-black rounded-md shadow-md hover:bg-yellow-400 focus:outline-none ${darkMode ? 'dark:bg-gray-a800 dark:text-white' : ''}`}>Download Link 1</a>
              </div>
            </div>
          </div>
          <div className={`max-w-lg mx-auto bg-${darkMode ? 'gray-800' : 'white'} rounded-lg overflow-hidden shadow-lg mb-4`}>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Assignment 3</div>
              <p className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Click the link below to download.
              </p>
              <div className="mt-4">
                <a href="#" className={`block text-base py-2 px-4 bg-yellow-500 text-black rounded-md shadow-md hover:bg-yellow-400 focus:outline-none ${darkMode ? 'dark:bg-gray-800 dark:text-white' : ''}`}>Download Link 1</a>
              </div>
            </div>
          </div>
          <div className={`max-w-lg mx-auto bg-${darkMode ? 'gray-800' : 'white'} rounded-lg overflow-hidden shadow-lg mb-4`}>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Assignment 4</div>
              <p className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Click the link below to download.
              </p>
              <div className="mt-4">
                <a href="#" className={`block text-base py-2 px-4 bg-yellow-500 text-black rounded-md shadow-md hover:bg-yellow-400 focus:outline-none ${darkMode ? 'dark:bg-gray-800 dark:text-white' : ''}`}>Download Link 1</a>
              </div>
            </div>
          </div>
          {/* Add more cards here */}
        </div>
      </div>
    </div>
  );
}

export default DownloadPage;
