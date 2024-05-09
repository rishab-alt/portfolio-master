import React from 'react';
import { Link } from 'react-router-dom';

const Contact = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      {/* Navigation Bar */}
      <nav className={`p-4 ${darkMode ? 'bg-gray-800' : 'bg-black'} text-white`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-xl">My Portfolio</div>
          <div className="flex items-center space-x-4">
            {/* Navigation Links */}
            <ul className="flex">
              <li className="mr-4">
                <Link to="/" className={`hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-white'}`}>Home</Link>
              </li>
              <li className="mr-4">
                <Link to="/about" className={`hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-white'}`}>About</Link>
              </li>
              <li className="mr-4">
                <Link to="/projects" className={`hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-white'}`}>Projects</Link>
              </li>
              <li>
                <Link to="/contact" className={`hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-white'}`}>Contact</Link>
              </li>
            </ul>
            {/* Dark Mode Toggle Button */}
            <button onClick={toggleDarkMode} className="px-3 py-1 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-700 focus:outline-none">
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {/* Card 1 */}
          <div className={`p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            <h2 className="text-2xl font-bold mb-4">Email Us</h2>
            <p className="text-lg">Send us an email at contact@example.com and we'll get back to you as soon as possible.</p>
          </div>
          {/* Card 2 */}
          <div className={`p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            <h2 className="text-2xl font-bold mb-4">Call Us</h2>
            <p className="text-lg">Reach out to us by phone at +1234567890 during our business hours.</p>
          </div>
          {/* Card 3 */}
          <div className={`p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            <h2 className="text-2xl font-bold mb-4">Visit Us</h2>
            <p className="text-lg">Come visit our office at 123 Main Street, City, Country during our working hours.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
