import React, { useRef, useState } from "react";

const Skill = () => {
  const [playState, setPlayState] = useState({}); // State to track play status for each item
  const [loadingState, setLoadingState] = useState({});
  const scrollContainer = useRef(null);

  const scrollLeft = () => {
    scrollContainer.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainer.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const handleMouseEnter = (index) => {
    if (window.innerWidth > 768) {
      setPlayState((prev) => ({ ...prev, [index]: true }));
    }
  };

  const handleMouseLeave = (index) => {
    if (window.innerWidth > 768) {
      setPlayState((prev) => ({ ...prev, [index]: false }));
    }
  };

  const handleClick = (index) => {
    if (window.innerWidth <= 768) {
      setPlayState((prev) => ({ ...prev, [index]: !prev[index] }));
    }
  };

  const items = [
    {
      videoSrc: "/videos/HTML and CSS/HTML1.mp4",
      imgSrc: "/images/HTML and CSS images/HTML3.png",
      name: "3D-IMAGE-GALLERY",
    },
    {
      videoSrc: "/videos/HTML and CSS/HTML2.mp4",
      imgSrc: "/images/HTML and CSS images/HTML2.png",
      name: "AMAZON-CLONE",
    },
    {
      videoSrc: "/videos/HTML and CSS/HTML3.mp4",
      imgSrc: "/images/HTML and CSS images/HTML4.png",
      name: "VIDEO-LOGIN-PAGE",
    },
    {
      videoSrc: "/videos/HTML and CSS/HTML4.mp4",
      imgSrc: "/images/HTML and CSS images/HTML5.png",
      name: "RGB-BACKGROUND",
    },
    {
      videoSrc: "/videos/HTML and CSS/HTML5.mp4",
      imgSrc: "/images/HTML and CSS images/HTML6.png",
      name: "BLUR-LOGIN-PAGE",
    },
    {
      videoSrc: "/videos/HTML and CSS/HTML6.mp4",
      imgSrc: "/images/HTML and CSS images/HTML7.png",
      name: "NETFLIX-CLONE",
    },
    {
      videoSrc: "/videos/HTML and CSS/HTML7.mp4",
      imgSrc: "/images/HTML and CSS images/HTML1.png",
      name: "ANIMATED-PENGUIN",
    },
    {
      videoSrc: "/videos/HTML and CSS/HTML8.mp4",
      imgSrc: "/images/HTML and CSS images/HTML8.png",
      name: "REGISTRATION-FORM",
    },
    {
      videoSrc: "/videos/HTML and CSS/HTML9.mp4",
      imgSrc: "/images/HTML and CSS images/HTML9.png",
      name: "CAN-ANIMATION",
    },
  ];

  return (
    <div
      className="h-screen w-full px-10 py-5 bg-gradient-to-r from-gray-900 via-gray-800 to-black"
      style={{
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text text-white">
        PROJECTS
      </h1>
      <hr className="mb-6" />
      
      <h1
        className="inline-block mb-9 text-transparent text-4xl font-extrabold font-sans mr-2 transition-all duration-500 hover:text-yellow-400 hover:shadow-lg hover:shadow-yellow-400"
        style={{ WebkitTextStroke: "0.3px #FFD700" }}
      >
        HTML & CSS
      </h1>

      <div className="relative w-full">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 focus:outline-none z-10"
        >
          &#8592;
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 focus:outline-none z-10"
        >
          &#8594;
        </button>

        {/* Scrollable Content */}
        <div
          ref={scrollContainer}
          className="relative h-full w-full overflow-x-auto flex gap-5"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="border-2 border-yellow-600 rounded-lg flex-shrink-0 relative w-full md:w-[30vw] h-[60vh] md:h-[40vh]"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onClick={() => handleClick(index)}
            >
              {loadingState[index] ? (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                  <p>Loading...</p>
                </div>
              ) : playState[index] ? (
                <video
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                >
                  <source src={item.videoSrc} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={item.imgSrc}
                  alt={`Project ${index}`}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute bottom-0 bg-gray-900 bg-opacity-60 text-white w-full text-center p-2">
                <h2 className="text-lg font-semibold">{item.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
