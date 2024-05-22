import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './NavBar'

const AboutPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);

  


  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
      <Navbar darkMode={darkMode} />

      {/* Content */}
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="max-w-md p-4 md:p-8 bg-gray-800 rounded-lg shadow-lg animate-fade-in text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg md:text-xl">
            I'm passionate about coding and creating innovative solutions. With a background in web development, I strive to continuously learn and improve my skills. My goal is to contribute to meaningful projects and make a positive impact in the tech community.
          </p>
        </div>

        {/* Education Section */}
        <div className="max-w-md p-4 md:p-8 bg-gray-800 rounded-lg shadow-lg animate-fade-in text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Education</h2>
          <ul className="list-disc list-inside text-lg md:text-xl">
            <li className="mb-2">GCSE'S</li>
            <li className="mb-2">BTEC FIRST CERT IN IT AND CREATIVE TECH AT THE MANCHESTER COLLEGE </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
