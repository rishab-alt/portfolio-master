import React from "react";
import { motion } from "framer-motion";
import Graphic from "../images/undraw_page_not_found_re_e9o6.svg";
import Nav from "../NavBar";

const NotFound = () => {
  const darkMode = true; // Assuming dark mode is on by default; adjust as needed.

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
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

  return (
    <div
      className={`pt-2 min-h-screen flex flex-col justify-center items-center overflow-hidden ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"
      }`}
    >
      <motion.section
        className="container flex flex-col justify-center items-center text-center p-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* SVG Graphic */}
        <motion.img
          src={Graphic}
          alt="Page Not Found Graphic"
          className="w-4/5 max-w-xl mb-8" // Adjusted width here for a larger size
          variants={graphicVariants}
        />

        {/* Description */}
        <motion.h1
          className="text-3xl sm:text-4xl font-bold mb-4"
          style={{ color: darkMode ? "#FFD700" : "#DAA520" }}
        >
          Oops! Page Not Found
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl mb-6"
          style={{ color: darkMode ? "#ADD8E6" : "#5F9EA0" }}
        >
          We can't seem to find the page you're looking for.
        </motion.p>

        {/* Go Back Button */}
        <motion.a
          href="/"
          className="bg-yellow-500 text-white py-3 px-8 rounded-full font-semibold hover:text-white transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Go Back Home
        </motion.a>
      </motion.section>
    </div>
  );
};

export default NotFound;
