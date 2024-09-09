import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../NavBar';

const ProjectPage = () => {


  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center">
      <Navbar />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow flex flex-col justify-center items-center pt-20" // Adjust this padding-top value as needed
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-lg"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-sm rounded overflow-hidden shadow-lg my-2 mx-auto sm:mx-4 md:mx-2 lg:mx-4">
              <img className="w-full" src="https://www.svgrepo.com/show/503798/world.svg" alt="Landscape" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl text-white mb-2">Online World</div>
                <p className="text-base text-gray-300">
                  The exam unit on the online world is a comprehensive exploration encompassing web development, cybersecurity, and digital marketing. It dives deep into front-end (HTML) development, alongside database management systems. Modules cover threats, encryption, network security, ethical hacking, and defense strategies. Digital marketing components such as Email marketing, ads, and popups.
                </p>
              </div>
            </div>
          </div>


        </motion.div>

      </motion.div>
    </div>
  );
}

export default ProjectPage;
