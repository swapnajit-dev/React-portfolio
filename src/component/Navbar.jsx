import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black w-full backdrop-blur-md bg-black/30 border-b border-black/20">
      <div className="h-[10vh] w-full flex items-center justify-between px-5 md:px-10">
        {/* Logo or Brand */}
        <div className="flex items-center">
          {/* SVG Logo with "DEV" */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 100"
            width="100"
            height="50"
          >
            <defs>
              <linearGradient
                id="gold-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "gold", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "darkgoldenrod", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="black" />
            <text
              x="50%"
              y="50%"
              fontFamily="Arial"
              fontSize="50"
              fill="url(#gold-gradient)"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              DEV
            </text>
          </svg>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="relative text-white text-md font-medium cursor-pointer group uppercase hover-glow group-hover:opacity-50"
          >
            Home
            <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
          to="/projects" className="relative text-white text-md font-medium cursor-pointer group uppercase hover-glow group-hover:opacity-50">
            Projects
            <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
          to="/skills" className="relative text-white text-md font-medium cursor-pointer group uppercase hover-glow group-hover:opacity-50">
            Skills
            <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
          to="/education" className="relative text-white text-md font-medium cursor-pointer group uppercase hover-glow group-hover:opacity-50">
            Education
            <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/contact"
            className="relative text-white text-md font-medium cursor-pointer group uppercase hover-glow group-hover:opacity-50"
          >
            Contact
            <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        <style jsx>
          {`
            .hover-glow:hover {
              text-shadow: 0 0 8px rgba(255, 255, 255, 0.8),
                0 0 16px rgba(255, 255, 255, 0.6),
                0 0 24px rgba(255, 255, 255, 0.4);
            }
            .group:hover .group-hover:opacity-50 {
              opacity: 0.5;
            }
          `}
        </style>

        <style jsx>
          {`
            .hover-glow:hover {
              text-shadow: 0 0 8px rgba(255, 255, 255, 0.8),
                0 0 16px rgba(255, 255, 255, 0.6),
                0 0 24px rgba(255, 255, 255, 0.4);
            }
          `}
        </style>
      </div>
      {/* Mobile Navigation */}
      {/* Mobile Navigation */}  
{isMenuOpen && (  
  <div className="flex flex-col items-center space-y-4 py-5 bg-black text-white md:hidden">  
    <Link to="/" className="text-lg font-medium cursor-pointer uppercase">Home</Link> {/* Corrected Link */}
    <Link to="/projects" className="text-lg font-medium cursor-pointer uppercase">Projects</Link> {/* Corrected Link */}  
    <Link to="/skills" className="text-lg font-medium cursor-pointer uppercase">Skills</Link>  
    <Link to="/education" className="text-lg font-medium cursor-pointer uppercase">Education</Link>  
    <Link to="/contact" className="text-lg font-medium cursor-pointer uppercase">Contact</Link>  
  </div>  
)}
    </div>
  );
};

export default Navbar;
