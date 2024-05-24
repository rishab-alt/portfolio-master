import React, { useState, useEffect } from 'react';
import Navbar from '../NavBar';
import pdfUrl1 from '../Downloads/unit9/Unit 9 Assignment 1_Rish.pdf';
import pdfUrl2 from '../Downloads/unit9/U9_Assignment_2 Rish.pdf';
import pdfUrl3 from '../Downloads/unit9/U9_Assignment_3_Rish.pdf';
import pdfUrl4 from '../Downloads/unit9/U9_Assignment_4 _Rish.pdf';
import excelFinal from '../Downloads/unit9/Spreadsheet project_current_final 2.xlsm' 


const DownloadPage = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);

  return (
    <div className={`bg-black text-white min-h-screen flex flex-col justify-center items-center`}>
      <Navbar darkMode={darkMode} />

      <div className="container mx-auto py-8 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4">
          <div className="max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg mb-4 bg-gray-800">
            <div className="p-4">
              <img className="w-full object-cover" src="https://www.svgrepo.com/show/373589/excel.svg" alt="Placeholder" />
              <div className="mt-4">
                <p className="text-base">
                  In this unit , we explore the use of Excel spreadsheets in daily life, aswell as this , looking at  functions like VLOOKUP, Filters, 
                  colour coding etc to make the spreadsheet standout. below is the final version of the spreadsheet produced
                </p>
              </div>
              <div className="mt-4">
                <a href={excelFinal} className="block text-base py-2 px-4 bg-yellow-500 text-black rounded-md shadow-md hover:bg-yellow-400 focus:outline-none">
                  Download Final Spreadsheet Here!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 overflow-y-auto">
          {[{ title: "Assignment 1", url: pdfUrl1 }, { title: "Assignment 2", url: pdfUrl2 }, { title: "Assignment 3", url: pdfUrl3 }, { title: "Assignment 4", url: pdfUrl4 }].map((assignment, index) => (
            <div key={index} className="max-w-lg mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-lg mb-4">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{assignment.title}</div>
                <p className="text-base">Click the link below to download.</p>
                <div className="mt-4">
                  <a href={assignment.url} className="block text-base py-2 px-4 bg-yellow-500 text-black rounded-md shadow-md hover:bg-yellow-400 focus:outline-none">
                    Download Link {index + 1}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DownloadPage;
