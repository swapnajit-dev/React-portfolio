import React, { useRef, useState } from "react";

const Skill_react = () => {
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
    setPlayState((prev) => ({ ...prev, [index]: true }));
  };

  const handleMouseLeave = (index) => {
    setPlayState((prev) => ({ ...prev, [index]: false }));
  };

  const items = [
    {
      videoSrc: "/videos/React/react1.mp4",
      imgSrc: "/images/React img/react1.png",
      name: "LOREM-PICSUM-API",
    },
    {
      videoSrc: "/videos/React/react2.mp4",
      imgSrc: "/images/React img/react2.png",
      name: "RED-CHILI-MODEL",
    },
    {
      videoSrc: "/videos/React/react3.mp4",
      imgSrc:"/images/React img/react3.png",
      name: "TO-DO-LIST",
    },
    {
      videoSrc: "/videos/React/react4.mp4",
      imgSrc: "/images/React img/react4.png",
      name: "CARD-DOCS",
    },
    {
      videoSrc: "/videos/React/react5.mp4",
      imgSrc: "/images/React img/react5.png",
      name: "EMPLOYEE-MANAGEMENT-SYSTEM",
    },
    {
      videoSrc: "/videos/React/react6.mp4",
      imgSrc: "/images/React img/react6.png",
      name: "OOCHI-WEBPAGE",
    },
    {
      videoSrc: "/videos/React/react7.mp4",
      imgSrc: "/images/React img/react7.png",
      name: "STOPWATCH",
    },
    {
      videoSrc: "/videos/React/react8.mp4",
      imgSrc: "/images/React img/react8.png",
      name: "WEATHER-API",
    }
  ];

  return (
    <div className="h-screen w-full px-10 py-5 bg-gray-900">
      <h1
        className="inline-block mb-9 text-transparent text-4xl font-extrabold font-sans mr-2 transition-all duration-500 hover:text-yellow-400 hover:shadow-lg hover:shadow-yellow-400"
        style={{ WebkitTextStroke: "0.3px #FFD700" }}
      >
        REACT
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
              className="border-2 border-yellow-600 rounded-lg flex-shrink-0 relative w-full sm:w-[80vw] md:w-[40vw] lg:w-[30vw] h-[60vh] sm:h-[50vh] md:h-[40vh] lg:h-[40vh]"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
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

export default Skill_react;
