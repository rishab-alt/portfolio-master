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
    { date: '2024', content: 'Ongoing College Course BTEC FIRST CERT IN IT AND CREATIVE TECH' },
    { date: '2024', content: 'Work placement at Yes Manchester completed' },
    { date: '2023', content: 'Finished School and Left with GCSEs' },
    { date: '2018', content: 'Developed a love for programming and cyber security' },
  ];

  return (
<div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar darkMode={darkMode} />

      {/* Content */}
      <div className="flex-grow flex flex-col items-center justify-center py-8 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mt-8 mb-4 text-yellow-500 text-center">My Life!</h1>
        <div className="flex flex-col space-y-8 w-full max-w-lg items-center">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className="w-full flex justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <div className="bg-gray-800 text-white rounded-lg shadow-lg p-4 md:p-6 max-w-md w-full hover:shadow-xl transition-shadow duration-300 ease-in-out">
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
