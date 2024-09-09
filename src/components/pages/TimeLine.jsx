import React, { useState, useEffect } from 'react';
import Navbar from '../NavBar';
import { motion } from 'framer-motion';

const TimelinePage = () => {

  const timelineEvents = [
    { date: '2024', content: 'Successfully completed the BTEC First Certificate course in IT and Creative Technology ' },
    { date: '2024', content: 'Finished a work placement at Yes Manchester' },
    { date: '2023', content: 'Graduated from secondary school with GCSE qualifications' },
    { date: '2018', content: 'Discovered a passion for programming and cybersecurity' },
  ];

  return (
    <div className={`min-h-screen flex flex-col  bg-gray-900`}>
      <Navbar
      />

      {/* Content */}
      <div className="flex-grow flex flex-col items-center py-8 px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mt-12 md:mt-16 mb-8 text-yellow-500 text-center">My Life!</h1>
        <div className="relative flex flex-col items-center w-full max-w-3xl">
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
              <div className={`relative bg-gray-800 text-white rounded-lg shadow-lg p-4 md:p-6 max-w-md w-full  transition-all duration-300`}>
                <div className={`absolute top-1/2 transform -translate-y-1/2 ${index % 2 === 0 ? 'left-0 -ml-4' : 'right-0 -mr-4'} bg-yellow-500 w-4 h-4 rounded-full`}></div>
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
