
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import pdfUrl1 from '../Downloads/Unit 9 Assignment 1_Rish.pdf'

const DownloadPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-gray-100 dark:bg-gray-800 text-black`}>
      {/* Navigation */}
      <nav className={`bg-white shadow ${darkMode ? 'dark:bg-gray-900' : ''}`}>
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo/Brand */}
          <Link to="/" className="text-yellow-500 text-3xl font-bold">My Portfolio</Link>
          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="block md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {/* Nav Links */}
          <div className="hidden md:flex md:items-center md:w-auto">
            <div className="text-lg">
              <Link to="/" className={`block mt-4 md:inline-block md:mt-0 mr-4 hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-black'}`}>Home</Link>
              <Link to="/about" className={`block mt-4 md:inline-block md:mt-0 mr-4 hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-black'}`}>About</Link>
              <Link to="/projects" className={`block mt-4 md:inline-block md:mt-0 mr-4 hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-black'}`}>Projects</Link>
              <Link to="/contact" className={`block mt-4 md:inline-block md:mt-0 hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-black'}`}>Contact</Link>
            </div>
          </div>
          {/* Dark Mode Toggle Button */}
          
        </div>
        {/* Collapsible Menu */}
        <div className={`md:hidden ${showMenu ? 'block' : 'hidden'} text-center`}>
          <div className="text-lg">
            <Link to="/" className={`block mt-4 mr-4 hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-black'}`}>Home</Link>
            <Link to="/about" className={`block mt-4 mr-4 hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-black'}`}>About</Link>
            <Link to="/projects" className={`block mt-4 mr-4 hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-black'}`}>Projects</Link>
            <Link to="/contact" className={`block mt-4 mr-4 hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-black'}`}>Contact</Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto py-8 flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-1/2 p-4">
          <img className="w-full object-cover" src="https://www.svgrepo.com/show/373589/excel.svg" alt="Placeholder" />
        </div>
        {/* Downloads Section */}
        <div className="w-full md:w-1/2 p-4 overflow-y-auto">
          {/* Assignment Cards */}
          <div className="max-w-lg mx-auto bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg mb-4">
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
          <div className="max-w-lg mx-auto bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg mb-4">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Assignment 2</div>
              <p className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Click the link below to download.
              </p>
              <div className="mt-4">
                <a href="" className={`block text-base py-2 px-4 bg-yellow-500 text-black rounded-md shadow-md hover:bg-yellow-400 focus:outline-none ${darkMode ? 'dark:bg-gray-800 dark:text-white' : ''}`}>Download Link 1</a>
              </div>
            </div>
          </div>
          <div className="max-w-lg mx-auto bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg mb-4">
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
          <div className="max-w-lg mx-auto bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg mb-4">
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
