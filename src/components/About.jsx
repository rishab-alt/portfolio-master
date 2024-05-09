import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const About = ({ darkMode, toggleDarkMode }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      {/* Navigation Bar */}
      <nav className={`p-4 ${darkMode ? 'bg-gray-800' : 'bg-black'} text-white`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-xl">My Portfolio</div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          {/* Navigation Links */}
          <ul className={`md:flex space-x-4 ${showMenu ? 'block' : 'hidden'}`}>
            <li>
              <Link to="/" className={`hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-white'}`}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={`hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-white'}`}>About</Link>
            </li>
            <li>
              <Link to="/projects" className={`hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-white'}`}>Projects</Link>
            </li>
            <li>
              <Link to="/contact" className={`hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-white'}`}>Contact</Link>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle Button */}
            <button onClick={toggleDarkMode} className="px-3 py-1 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-700 focus:outline-none">
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto p-4 flex justify-center items-center">
        <div className="max-w-md p-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-gray-800 dark:text-white">I'm passionate about coding and creating innovative solutions. With a background in web development, I strive to continuously learn and improve my skills. My goal is to contribute to meaningful projects and make a positive impact in the tech community.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
