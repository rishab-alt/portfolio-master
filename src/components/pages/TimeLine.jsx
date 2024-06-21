import React, { useState, useEffect } from 'react';
import Navbar from '../NavBar';
import { motion } from 'framer-motion';

const TimelinePage = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);

  const timelineEvents = [
    { date: '2024', content: 'Successfully completed the BTEC First Certificate course in IT and Creative Technology ' },
    { date: '2024', content: 'Finished a work placement at Yes Manchester' },
    { date: '2023', content: 'Graduated from secondary school with GCSE qualifications' },
    { date: '2018', content: 'Discovered a passion for programming and cybersecurity' },
  ];

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <Navbar darkMode={darkMode} />

      {/* Content */}
      <div className="flex-grow flex flex-col items-center py-8 px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mt-12 md:mt-16 mb-8 text-yellow-500 text-center">My Life!</h1>
        <div className="relative flex flex-col items-center w-full max-w-4xl">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-yellow-500"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className={`w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-8`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <div className={`relative bg-gray-800 text-white rounded-lg shadow-lg p-6 md:p-8 max-w-md w-full transition-all duration-300 hover:shadow-xl ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}>
                <div className={`absolute top-1/2 transform -translate-y-1/2 ${index % 2 === 0 ? 'left-0 -ml-4' : 'right-0 -mr-4'} bg-yellow-500 w-4 h-4 rounded-full`}></div>
                <div className={`absolute top-1/2 transform -translate-y-1/2 ${index % 2 === 0 ? 'left-6' : 'right-6'} w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent ${index % 2 === 0 ? 'border-r-8 border-r-gray-800' : 'border-l-8 border-l-gray-800'}`}></div>
                <p className="text-lg md:text-xl mb-2 text-center">{event.content}</p>
                <p className="text-sm text-yellow-500 text-center">{event.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
