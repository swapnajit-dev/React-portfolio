import { motion } from "framer-motion";
import { image } from "framer-motion/client";
import React, { useState } from "react";

const Hero = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="w-full h-screen flex flex-col md:flex-row mt-8 px-5 md:px-10"
      style={{
        background: "linear-gradient(135deg, #000000, #1a1a1a)", // Subtle gradient
      }}
    >
      {/* Left Section */}
      <div
        className="relative w-full md:w-2/3 h-2/3 md:h-screen px-5 md:px-10"
       
      >
        <motion.img
          className="absolute h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
          src="/comma1.svg"
          alt="Comma 1"
          animate={{
            y: ["-10px", "10px"], // Moves up and down
          }}
          transition={{
            repeat: Infinity, // Repeat infinitely
            duration: 1, // Duration of one cycle
            ease: "easeInOut", // Smooth ease-in-out transition
          }}
        />

        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center flex items-center">
          <h4
            className={`inline-block text-transparent text-xl md:text-3xl font-extrabold font-sans mr-2 transition-all duration-500 ${
              isHover ? "text-[#95c11e]" : ""
            }`}
            style={{
              WebkitTextStroke: "0.3px #FFD700",
            }}
          >
            "I'm Swapnajit, an aspiring software developer, currently exploring
            the world of web development. My journey includes mastering
            languages like Java, JavaScript, Python, and tools like React,
            Node.js, and Express.js. I aim to create impactful applications that
            improve the user experience."
          </h4>
        </div>

        <motion.img
          src="/comma2.svg"
          alt="Comma 2"
          className="absolute h-[30px] w-[30px] md:h-[50px] md:w-[50px] top-1/2 right-10 md:right-20"
          animate={{
            y: ["-10px", "10px"], // Moves up and down
          }}
          transition={{
            repeat: Infinity, // Repeat infinitely
            duration: 1, // Duration of one cycle
            ease: "easeInOut", // Smooth ease-in-out transition
          }}
        />
      </div>

      {/* Glowing Heading at the top with text */}
      <div className="absolute top-14 left-1/3 transform -translate-x-1/2 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#FFD700]">
          SWAPNAJIT
        </h1>
      </div>

      {/* Right Section */}
      <div className="relative w-full md:w-1/3 h-1/4 md:h-2/3 flex justify-center items-center mt-5 md:mt-0">
        <div
          className="absolute inset-0"
          style={{
            background: "#111", // Black backdrop
            border: "5px solid rgba(255, 215, 0, 0.8)", // Golden gradient border
            borderRadius: "50%", // Rounded border
            boxShadow: "0 0 10px #FFD700",
          }}
        ></div>
        <img
          src="public/images/Dev2.png"
          alt="Dev Image"
          className="relative z-10 rounded-full shadow-md hover:shadow-2xl hover:shadow-[#FFD700] transition-all duration-300 ease-in-out"
          style={{
            maxWidth: "100%", // Adjusted width
            maxHeight: "100%", // Adjusted height
            objectFit: "cover", // Ensures image scaling
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
