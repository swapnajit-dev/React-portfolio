import React, { useRef, useState } from "react";

const Skill_js = () => {
  const [playState, setPlayState] = useState({}); // State to track play status for each item
  const [loadingState, setLoadingState] = useState({}); // State to track loading status for each video
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

  const handleVideoLoaded = (index) => {
    setLoadingState((prev) => ({ ...prev, [index]: false }));
  };

  const items = [
    {
      videoSrc: "/videos/javascript videos/javascript1.mp4",
      imgSrc: "/images/javascript/javascript1.png",
      name: "CYBERPUNK 2077",
    },
    {
      videoSrc: "/videos/javascript videos/javascript2.mp4",
      imgSrc: "/images/javascript/javascript2.png",
      name: "3D-BUS-CUSTOMISATION",
    },
    {
      videoSrc: "/videos/javascript videos/javascript3.mp4",
      imgSrc:"/images/javascript/javascript3.png",
      name: "3D-CUBE",
    },
    {
      videoSrc: "/videos/javascript videos/javascript4.mp4",
      imgSrc: "/images/javascript/javascript4.png",
      name: "3D-EARTH",
    },
    {
      videoSrc: "/videos/javascript videos/javascript5.mp4",
      imgSrc: "/images/javascript/javascript5.png",
      name: "DUO-ANIMATED-PAGE",
    },
    {
      videoSrc: "/videos/javascript videos/javascript6.mp4",
      imgSrc: "/images/javascript/javascript6.png",
      name: "APPLE-VISION-PRO",
    },
    {
      videoSrc: "/videos/javascript videos/javascript7.mp4",
      imgSrc: "/images/javascript/javascript7.png",
      name: "TILE-PUZZLE-GAME",
    },
    {
      videoSrc: "/videos/javascript videos/javascript8.mp4",
      imgSrc: "/images/javascript/javascript8.png",
      name: "ROCK-PAPER-SCISSOR",
    },
    {
      videoSrc: "/videos/javascript videos/javascript9.mp4",
      imgSrc: "/images/javascript/javascript9.png",
      name: "MEMORY-PUZZLE-GAME",
    },
    {
      videoSrc: "/videos/javascript videos/javascript10.mp4",
      imgSrc: "/images/javascript/javascript10.png",
      name: "BEATS-LANDING-PAGE",
    },
    {
      videoSrc: "/videos/javascript videos/javascript11.mp4",
      imgSrc: "/images/javascript/javascript11.png",
      name: "SIDCUP-FAMILY-GOLF",
    },
    {
      videoSrc: "/videos/javascript videos/javascript12.mp4",
      imgSrc: "/images/javascript/javascript12.png",
      name: "SPOTIFY-CLONE",
    },
  ];

  return (
    <div className="h-screen w-full px-10 py-5">
      <h1
        className="inline-block mb-9 text-transparent text-4xl font-extrabold font-sans mr-2 transition-all duration-500 hover:text-yellow-400 hover:shadow-lg hover:shadow-yellow-400"
        style={{ WebkitTextStroke: "0.3px #FFD700" }}
      >
        JAVASCRIPT
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
                  onLoadedData={() => handleVideoLoaded(index)}
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

export default Skill_js;
