import { motion } from "framer-motion";
import React, { useState } from "react";

const Hero = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="w-full h-screen flex flex-col md:flex-row items-center justify-center px-5 md:px-10"
      style={{
        background: "linear-gradient(135deg, #000000, #1a1a1a)",
      }}
    >
      {/* Left Section */}
      <div className="relative w-full md:w-2/3 flex flex-col items-center text-center px-5 md:px-10">
        <motion.img
          className="absolute top-10 left-10 h-[20px] w-[20px] md:h-[30px] md:w-[30px]"
          src="/comma1.svg"
          alt="Comma 1"
          animate={{ y: ["-10px", "10px"] }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
        />
        
        <h4
          className={`text-transparent text-lg md:text-2xl font-extrabold font-sans transition-all duration-500 mx-auto p-4 max-w-3xl ${
            isHover ? "text-[#95c11e]" : ""
          }`}
          style={{ WebkitTextStroke: "0.3px #FFD700" }}
        >
          "I'm Swapnajit, an aspiring software developer, currently exploring
          the world of web development. My journey includes mastering
          languages like Java, JavaScript, Python, and tools like React,
          Node.js, and Express.js. I aim to create impactful applications that
          improve the user experience."
        </h4>

        <motion.img
          src="/comma2.svg"
          alt="Comma 2"
          className="absolute bottom-10 right-10 h-[20px] w-[20px] md:h-[30px] md:w-[30px]"
          animate={{ y: ["-10px", "10px"] }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
        />
      </div>

      {/* Glowing Heading */}
      <div className="absolute top-14 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-3xl md:text-6xl font-extrabold text-[#FFD700]">
          SWAPNAJIT
        </h1>
      </div>

      {/* Right Section */}
      <div className="relative w-full md:w-1/3 flex justify-center items-center mt-5 md:mt-0">
        <div
          className="absolute inset-0 rounded-full border-4 md:border-8 border-[#FFD700] shadow-lg"
          style={{ boxShadow: "0 0 15px #FFD700" }}
        ></div>
        <img
          src="/images/DEV2.png"
          alt="Dev Image"
          className="relative z-10 rounded-full shadow-md hover:shadow-2xl hover:shadow-[#FFD700] transition-all duration-300 ease-in-out w-full h-full object-cover"
        />
      </div>

      {/* CV Section */}
      <div className=" flex flex-col items-center text-center mt-10 px-5 ">
        <h2 className="text-2xl md:text-4xl font-bold text-[#FFD700] mb-4">
          My CV
        </h2>
        <a
          href="./public/Swapnajit_resume_4.pdf"
          download = "Swapnajit_resume_4.pdf"
          className="px-6 py-3 bg-[#FFD700] text-black font-semibold rounded-lg shadow-md hover:bg-[#e6c200] transition-all"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Hero;