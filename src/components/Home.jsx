import React, { useState } from 'react';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
      {/* Navigation Bar */}
      <nav className="navbar bg-black text-yellow-500 p-4 absolute top-0 left-0 right-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-3xl font-bold">My Portfolio</div>
          {/* Hamburger Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          {/* Desktop Navigation Menu */}
          <ul className="hidden md:flex">
            <li className="mr-4">
              <a href="/" className="hover:text-yellow-300 font-semibold text-xl">Home</a>
            </li>
            <li className="mr-4">
              <a href="/about" className="hover:text-yellow-300 font-semibold text-xl">About</a>
            </li>
            <li className="mr-4">
              <a href="/projects" className="hover:text-yellow-300 font-semibold text-xl">Projects</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-300 font-semibold text-xl">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white py-4 absolute top-16 left-0 right-0 z-10">
          <ul className="text-center">
            <li className="mb-4">
              <a href="/" className="block py-2 px-4 hover:bg-yellow-500">Home</a>
            </li>
            <li className="mb-4">
              <a href="/about" className="block py-2 px-4 hover:bg-yellow-500">About</a>
            </li>
            <li className="mb-4">
              <a href="/projects" className="block py-2 px-4 hover:bg-yellow-500">Projects</a>
            </li>
            <li>
              <a href="/contact" className="block py-2 px-4 hover:bg-yellow-500">Contact</a>
            </li>
          </ul>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="hero flex flex-col justify-center items-center text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-2xl mb-8">Showcasing my projects and skills</p>
          <a href="/projects" className="cta-btn bg-yellow-500 text-black py-3 px-8 rounded-full font-semibold hover:bg-yellow-400 hover:text-white transition duration-300">View Projects</a>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
