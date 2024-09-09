import React, { useState, useEffect } from "react";
import pdfUrl1 from "../Downloads/unit3/U03_Assignment_1_ Rish.pdf";
import pdfUrl2 from "../Downloads/unit3/U03_Assignment_2_ Rish.pdf";
import pdfUrl3 from "../Downloads/unit3/U03_Assignment_3_Rish.pdf";
import Navbar from "../NavBar";

const DownloadPage = () => {
  const pdfUrls = [pdfUrl1, pdfUrl2, pdfUrl3];

  return (
    <div
      className={`bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center`}
    >
      <Navbar />
      <div className="container mx-auto pt-20 py-8 px-4 mt-16 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-1/2">
          <div className="max-w-md mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-lg mb-4">
            <div className="p-4">
              <img
                className="w-full object-cover"
                src="https://www.svgrepo.com/show/420902/computer-hardware-monitor-2.svg"
                alt="Placeholder"
              />
              <div className="mt-4">
                <p className="text-base text-gray-300">
                  In this unit, we explore the aspects of making a digital
                  portfolio, including designing and creating a portfolio using
                  web tools like Wix. The website you are seeing is coded myself
                  using a framework called React, which is common among websites
                  these days.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 overflow-y-auto">
          {pdfUrls.map((url, index) => (
            <div
              key={index}
              className="max-w-md mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-lg mb-4"
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Assignment {index + 1}
                </div>
                <p className="text-base text-gray-300">
                  Click the link below to download.
                </p>
                <div className="mt-4">
                  <a
                    href={url}
                    className="block text-base py-2 px-4 bg-yellow-500 text-black rounded-md shadow-md hover:bg-yellow-400 focus:outline-none"
                  >
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
};

export default DownloadPage;
