import React, { useState } from 'react';

const Blackout = ({ onClick }) => {
  const [fadeOut, setFadeOut] = useState(false);

  const handleClick = () => {
    setFadeOut(true);
    setTimeout(() => onClick(), 500); // Wait for the fade-out animation to finish before calling onClick
  };

  return (
    <div
      className={`h-screen w-full bg-zinc-900 flex justify-center items-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <button
        onClick={handleClick} // Call the passed function when the button is clicked
        className="relative inline-block text-xl text-white border border-transparent rounded-full px-8 py-6 font-sans overflow-hidden transition-all duration-500 ease-in-out group shadow-md hover:shadow-[#FFD700]"
      >
        <span className="relative z-10">Click Me</span>
        <span className="absolute inset-0 bg-[#36454F] transition-all duration-500 ease-in-out group-hover:w-full group-hover:h-full w-0 h-full"></span>
      </button>
    </div>
  );
};

export default Blackout;
