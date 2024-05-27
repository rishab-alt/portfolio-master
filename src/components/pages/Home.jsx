import React, { useState, useEffect } from 'react';
import Nav from '../NavBar'
import { motion } from 'framer-motion';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode] = useState(true);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Simulating a delay for loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // Close the mobile menu when the window is resized
      setIsOpen(false);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
     
      <Nav /> 

          {/* Hero Section */}
          <motion.section
            id="home"
            className="hero flex flex-col justify-center items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="container mx-auto">
              <motion.h1
                className="text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              >
                Welcome to My Portfolio
              </motion.h1>
              <motion.p
                className="text-2xl mb-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              >
                Showcasing my projects and skills
              </motion.p>
              <motion.a
                href="/projects"
                className="cta-btn bg-yellow-500 text-black py-3 px-8 rounded-full font-semibold hover:bg-yellow-400 hover:text-white transition duration-300"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
              >
                View Projects
              </motion.a>
            </div>
          </motion.section>
    


    </div>
  );
}

export default HomePage;
