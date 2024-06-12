import React, { useState, useEffect } from 'react';
import Github from '../images/Github';
import Linkedin from '../images/Linkedin';
import Instagram from '../images/Instagram';
import Navbar from '../NavBar';

const Contact = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://formspree.io/f/mvoejjlq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to send message.');
    });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center">
      <Navbar darkMode={darkMode} />
      <div className="min-h-screen flex flex-col justify-center items-center container mx-auto py-8 px-4 pt-20">
        <div className="max-w-md p-8 bg-gray-800 rounded-lg shadow-lg animate-fade-in text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
          <p className="text-lg">
            You can reach out to me via email at <a href="mailto:me@rishab.tech" className="text-yellow-500 underline">me@rishab.tech</a> or connect with me on social media:
          </p>
          <div className="flex justify-center mt-4">
            <a href="https://github.com/rishab-alt" className="text-2xl mr-4 hover:text-yellow-500">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/rishab-saddiq-9443291ab/" className="text-2xl mr-4 hover:text-yellow-500">
              <Linkedin />
            </a>
            <a href="https://www.instagram.com/rish_saddiq/" className="text-2xl mr-4 hover:text-yellow-500">
              <Instagram />
            </a>
          </div>
          <form onSubmit={handleSubmit} className="mt-8">
            <label className="block mb-2 text-sm font-bold">
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 bg-gray-700 text-white rounded"
              />
            </label>
            <label className="block mb-2 text-sm font-bold">
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 bg-gray-700 text-white rounded"
              />
            </label>
            <label className="block mb-2 text-sm font-bold">
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 bg-gray-700 text-white rounded"
              />
            </label>
            <button
              type="submit"
              className="mt-4 p-2 bg-yellow-500 text-black rounded hover:bg-yellow-600"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
