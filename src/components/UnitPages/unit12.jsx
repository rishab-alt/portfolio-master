import React, { useState, useEffect } from "react";
import Navbar from "../NavBar";
import pdfUrl1 from "../Downloads/unit12/U12_Assignment1_Rish.pdf";
import pdfUrl2 from "../Downloads/unit12/U12_Assignment2_Rish.pdf";
import pdfUrl3 from "../Downloads/unit12/U12_Assignment3_Rish.pdf";
import pdfUrl4 from "../Downloads/unit12/U12_Assignment4_Rish.pdf";

const DownloadPage = () => {
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
                  In this unit, we learn the basics of software development as
                  well as use Visual Basics to program an application. The final
                  application below requires something to be installed, but the
                  link has some instructions.
                </p>
              </div>
              <div className="mt-4">
                <a
                  href="https://github.com/rishab-alt/currency-converter_vb"
                  className="block text-base py-2 px-4 bg-yellow-500 text-black rounded-md shadow-md hover:bg-yellow-400 focus:outline-none"
                >
                  Download Final Application Here!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 overflow-y-auto">
          {[
            { title: "Assignment 1", url: pdfUrl1 },
            { title: "Assignment 2", url: pdfUrl2 },
            { title: "Assignment 3", url: pdfUrl3 },
            { title: "Assignment 4", url: pdfUrl4 },
          ].map((assignment, index) => (
            <div
              key={index}
              className="max-w-md mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-lg mb-4"
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{assignment.title}</div>
                <p className="text-base text-gray-300">
                  Click the link below to download.
                </p>
                <div className="mt-4">
                  <a
                    href={assignment.url}
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
