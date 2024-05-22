import React, { useState, useEffect } from 'react';
import Navbar from '../NavBar';

const TimelinePage = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);

  const timelineEvents = [
    { date: '2024', content: 'Ongoing College Course BTEC FIRST CERT IN IT AND CREATIVE TECH' },
    { date: '2023', content: 'Finished School and Left with GCSEs' },
    { date: '2018', content: 'Developed a love for programming and cyber security' },
    // Add more events as needed
  ];

  return (
    <div className={`bg-${darkMode ? 'black' : 'white'} text-${darkMode ? 'white' : 'black'} min-h-screen flex flex-col`}>
      <Navbar darkMode={darkMode} />

      {/* Content */}
      <div className="flex-grow flex flex-col items-center py-8 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mt-8 mb-4 text-yellow-500">My Life!</h1>
        <div className="flex flex-col space-y-8 w-full max-w-lg">
          {timelineEvents.map((event, index) => (
            <div key={index} className={`flex items-start ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-full flex justify-${index % 2 === 0 ? 'end' : 'start'}`}>
                <div className={`bg-${darkMode ? 'gray-800' : 'gray-200'} text-${darkMode ? 'white' : 'black'} rounded-lg shadow-lg p-4 md:p-6 max-w-md w-full`} style={{ transitionDuration: '0.3s' }}>
                  <p className="text-lg md:text-xl mb-2">{event.content}</p>
                  <p className="text-sm text-gray-400 text-yellow-500">{event.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
