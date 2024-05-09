import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const About = ({ darkMode, toggleDarkMode }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-gray-100 dark:bg-gray-800 text-black`}>
      {/* Navigation */}
      <nav className={`bg-white shadow ${darkMode ? 'dark:bg-gray-900' : ''}`}>
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo/Brand */}
          <Link to="/" className="text-3xl font-bold">My Portfolio</Link>
          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="block md:hidden text-gray-600 hover:text-gray-800 focus:outline-none"
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
          <button onClick={toggleDarkMode} className="px-3 py-1 bg-yellow-500 text-black rounded-md shadow-md hover:bg-yellow-400 focus:outline-none">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
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
      <div className="container mx-auto p-4 flex justify-center items-center">
        <div className="max-w-md p-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
          <h1 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>About Me</h1>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>I'm passionate about coding and creating innovative solutions. With a background in web development, I strive to continuously learn and improve my skills. My goal is to contribute to meaningful projects and make a positive impact in the tech community.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
