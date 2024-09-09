import React, { useState, useEffect } from "react";
import axios from "axios";
import Graphic from "../images/undraw_drink_coffee_v3au.svg";
import Nav from "../NavBar";
import { motion } from "framer-motion";
import "./css/Home.css";

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await axios.get(
          "https://official-joke-api.appspot.com/random_joke"
        );
        setJoke(`${response.data.setup} - ${response.data.punchline}`);
      } catch (error) {
        console.error("Error fetching the joke", error);
        setJoke("Failed to fetch a joke");
      }
    };

    fetchJoke();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
      },
    },
  };

  const graphicVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div
      className={`pt-2 min-h-screen flex flex-col justify-center items-center ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"
      } overflow-hidden`}
    >
      <Nav darkMode={darkMode} />
      <motion.section
        id="home"
        className="hero container flex flex-col md:flex-row justify-between items-center text-center md:text-left p-4 sm:p-6 mt-8 md:mt-16 lg:mt-24 xl:mt-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="graphic-container w-full md:w-2/5 lg:w-1/3 xl:w-1/4 mb-10 md:mb-0 flex justify-center">
          <motion.img
            src={Graphic}
            alt="Graphic"
            className="desktop-image w-full h-auto max-w-xs sm:max-w-sm md:max-w-md"
            variants={graphicVariants}
            initial="hidden"
            animate="visible"
          />
        </div>
        <motion.div
          className="content w-full md:w-3/5 lg:w-2/3 xl:w-3/4 flex flex-col items-center md:items-start"
          variants={itemVariants}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4"
            variants={itemVariants}
            style={{ color: darkMode ? "#FFD700" : "#DAA520" }}
          >
            Welcome to My Portfolio
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-8 text-center md:text-left px-2"
            variants={itemVariants}
            style={{ color: darkMode ? "#ADD8E6" : "#5F9EA0" }}
          >
            {joke}
          </motion.p>
          <motion.a
            href="/projects"
            className="cta-btn bg-indigo-600 text-white py-2 px-6 sm:py-3 sm:px-8 lg:py-4 lg:px-12 xl:py-5 xl:px-16 rounded-full font-semibold hover:bg-indigo-500 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            variants={itemVariants}
          >
            View Projects
          </motion.a>
        </motion.div>
      </motion.section>
      <div
        className={`background-effect ${
          darkMode ? "bg-gray-800" : "bg-gray-200"
        }`}
      ></div>
    </div>
  );
};

export default HomePage;
