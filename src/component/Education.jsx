import { div } from "framer-motion/client";
import React from "react";

const Education = () => {
  return (
    <div className="h-screen w-full px-5 md:px-10 py-7 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400 border-b-4 border-yellow-400 pb-2">
        EDUCATION
      </h1>

      <div className="shadow-xl rounded-lg p-4 md:p-6 bg-gray-800 hover:shadow-2xl hover:scale-105 transition-all duration-300">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 space-y-4 md:space-y-0">
          <div>
            <h1
              className="inline-block mb-4 md:mb-6 text-transparent text-3xl md:text-4xl font-extrabold font-sans transition-all duration-500 hover:text-yellow-400 hover:shadow-lg hover:shadow-yellow-400"
              style={{ WebkitTextStroke: "0.3px #FFD700" }}
            >
              MCA
            </h1>
            <h3 className="text-lg md:text-xl font-semibold text-yellow-200">
              Nalanda Institute of Technology
            </h3>
            <h4 className="text-sm md:text-lg text-gray-300">
              Master of Computer Application (Computer Science & Engineering)
            </h4>
          </div>
          <div className="text-center md:text-right">
            <h4 className="text-sm mb-2 text-gray-400">2023 - 2025</h4>
            <img
            
              src="images/photo.jpg"
              className="w-12 h-12 md:w-16 md:h-16 object-contain mx-auto md:mx-0 rounded-full border-2 border-yellow-400 shadow-md"
              alt="Nalanda Institute of Technology Logo"
            />
          </div>
        </div>

        <div>
          <p className="mb-4 text-gray-300 text-sm md:text-base leading-6 md:leading-7">
            I am currently pursuing a Master of Computer Applications (MCA) at
            the Nalanda Institute of Technology. This program has provided me
            with a comprehensive understanding of computer science and software
            development principles, while also encouraging analytical thinking
            and problem-solving skills. Through academic projects and
            coursework, I have developed a strong foundation in computer
            applications and their real-world implementation.
          </p>
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-yellow-400">
              College Website:
            </h4>
            <a
              href="https://www.thenalanda.com/"
              className="text-[#FFD700] hover:underline hover:text-yellow-300 break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.thenalanda.com/
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
