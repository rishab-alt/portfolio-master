import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const About = ({ darkMode, toggleDarkMode }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
    {/* Navigation Bar */}
    <nav className={`p-4 ${darkMode ? 'bg-black' : 'bg-yellow-500'} text-white`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl">My Portfolio</div>
        <div className="flex items-center space-x-4">
          {/* Navigation Links */}
          <ul className="flex">
            <li className="mr-4">
              <Link to="/" className={`hover:text-yellow-300 ${darkMode ? 'text-white' : 'text-black'}`}>Home</Link>
            </li>
            <li className="mr-4">
              <Link to="/about" className={`hover:text-yellow-300 ${darkMode ? 'text-white' : 'text-black'}`}>About</Link>
            </li>
            <li className="mr-4">
              <Link to="/projects" className={`hover:text-yellow-300 ${darkMode ? 'text-white' : 'text-black'}`}>Project</Link>
            </li>
            <li>
              <Link to="/contact" className={`hover:text-yellow-300 ${darkMode ? 'text-white' : 'text-black'}`}>Contact</Link>
            </li>
          </ul>
          {/* Dark Mode Toggle Button */}
          <button onClick={toggleDarkMode} className={`px-3 py-1 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-700 focus:outline-none`}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
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
