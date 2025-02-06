import React, { useRef, useState } from "react";

const Skill_node = () => {
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
      videoSrc: "/videos/node vid/node1.mp4",
      imgSrc: "/images/Node/node1.png",
      name: "REAL-TIME-CHESS",
    },
    {
      videoSrc: "/videos/node vid/node2.mp4",
      imgSrc: "/images/Node/node2.png",
      name: "FORM-REGISTER",
    },
    {
      videoSrc: "/videos/node vid/node3.mp4",
      imgSrc:"/images/Node/node3.png",
      name: "FORM-REGISTER-2",
    },
    {
      videoSrc: "/videos/node vid/node4.mp4",
      imgSrc: "/images/Node/node4.png",
      name: "WATCH-LANDING-PAGE",
    },
    {
      videoSrc: "/videos/node vid/node5.mp4",
      imgSrc: "/images/Node/node5.png",
      name: "USER-MANAGEMENT",
    },
    {
      videoSrc: "/videos/node vid/node6.mp4",
      imgSrc: "/images/Node/node6.png",
      name: "USER-MANAGEMENT-2",
    },
    {
      videoSrc: "/videos/node vid/node7.mp4",
      imgSrc: "/images/Node/node7.png",
      name: "REAL-TIME-CHAT",
    }
  ];

  return (
    <div className="h-screen w-full px-10 py-5">
    <h1
      className="inline-block mb-9 text-transparent text-4xl font-extrabold font-sans mr-2 transition-all duration-500 hover:text-yellow-400 hover:shadow-lg hover:shadow-yellow-400"
      style={{ WebkitTextStroke: "0.3px #FFD700" }}
    >
      NODE
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

export default Skill_node