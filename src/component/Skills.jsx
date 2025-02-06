import React from 'react';

const Skills = () => {
  return (
    <div className="h-auto w-auto px-10 py-5 overflow-x-auto">
      <div>
        <h1 className="text-4xl font-bold mb-4 border-b-2 border-white pb-2">Skills</h1>
      </div>

      <div className="flex items-start justify-between space-x-10">
        {/* Languages Section */}
        <div className="flex flex-col items-center relative">
          <h1 className="text-xl font-semibold mb-2 border-b-2 border-white pb-2 w-full text-center">Languages</h1>
          <div className="border-l-4 border-white h-full flex flex-col items-start w-full">
            <div className="flex items-center justify-between w-full mb-4">
              <hr className="border-t-2 border-white w-24" />
              <img
                src="./public/images/c.png"
                alt="C"
                className="w-24 h-24 rounded-full border-4 border-[#FFD700] shadow-md hover:shadow-[0_0_15px_5px_#FFD700] md:hover:shadow-[0_0_25px_10px_#FFD700] transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-between w-full mb-4">
              <hr className="border-t-2 border-white w-24" />
              <img
                src="./public/images/c++.png"
                alt="C++"
                className="w-24 h-24 rounded-full border-4 border-[#FFD700] shadow-md hover:shadow-[0_0_15px_5px_#FFD700] md:hover:shadow-[0_0_25px_10px_#FFD700] transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-between w-full mb-4">
              <hr className="border-t-2 border-white w-24" />
              <img
                src="./public/images/python.jpg"
                alt="Python"
                className="w-24 h-24 rounded-full border-4 border-[#FFD700] shadow-md hover:shadow-[0_0_15px_5px_#FFD700] md:hover:shadow-[0_0_25px_10px_#FFD700] transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-between w-full mb-4">
              <hr className="border-t-2 border-white w-24" />
              <img
                src="./public/images/java.png"
                alt="Java"
                className="w-24 h-24 rounded-full border-4 border-[#FFD700] shadow-md hover:shadow-[0_0_15px_5px_#FFD700] md:hover:shadow-[0_0_25px_10px_#FFD700] transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-between w-full mb-4">
              <hr className="border-t-2 border-white w-24" />
              <img
                src="./public/images/js.png"
                alt="JavaScript"
                className="w-24 h-24 rounded-full border-4 border-[#FFD700] shadow-md hover:shadow-[0_0_15px_5px_#FFD700] md:hover:shadow-[0_0_25px_10px_#FFD700] transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-between w-full mb-4">
              <hr className="border-t-2 border-white w-24" />
              <img
                src="./public/images/php.png"
                alt="PHP"
                className="w-24 h-24 rounded-full border-4 border-[#FFD700] shadow-md hover:shadow-[0_0_15px_5px_#FFD700] md:hover:shadow-[0_0_25px_10px_#FFD700] transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Front-End Section */}
        <div className="flex flex-col items-center relative">
          <h1 className="text-xl font-semibold mb-2 border-b-2 border-white pb-2 w-full text-center">Front-End</h1>
          <div className="border-l-4 border-white h-full flex flex-col items-start w-full">
            <div className="flex items-center justify-between w-full mb-4">
              <hr className="border-t-2 border-white w-24" />
              <img
                src="./public/images/html.png"
                alt="HTML"
                className="w-24 h-24 rounded-full border-4 border-[#FFD700] shadow-md hover:shadow-[0_0_15px_5px_#FFD700] md:hover:shadow-[0_0_25px_10px_#FFD700] transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-between w-full mb-4">
              <hr className="border-t-2 border-white w-24" />
              <img
                src="./public/images/css.jpg"
                alt="CSS"
                className="w-24 h-24 rounded-full border-4 border-[#FFD700] shadow-md hover:shadow-[0_0_15px_5px_#FFD700] md:hover:shadow-[0_0_25px_10px_#FFD700] transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-between w-full mb-4">
              <hr className="border-t-2 border-white w-24" />
              <img
                src="./public/images/gsap.png"
                alt="GSAP"
                className="w-24 h-24 rounded-full border-4 border-[#FFD700] shadow-md hover:shadow-[0_0_15px_5px_#FFD700] md:hover:shadow-[0_0_25px_10px_#FFD700] transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-between w-full mb-4">
              <hr className="border-t-2 border-white w-24" />
              <img
                src="./public/images/react.png"
                alt="React"
                className="w-24 h-24 rounded-full border-4 border-[#FFD700] shadow-md hover:shadow-[0_0_15px_5px_#FFD700] md:hover:shadow-[0_0_25px_10px_#FFD700] transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-between w-full mb-4">
              <hr className="border-t-2 border-white w-24" />
              <img
                src="./public/images/angular.jpg"
                alt="Angular"
                className="w-24 h-24 rounded-full border-4 border-[#FFD700] shadow-md hover:shadow-[0_0_15px_5px_#FFD700] md:hover:shadow-[0_0_25px_10px_#FFD700] transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-between w-full mb-4">
              <hr className="border-t-2 border-white w-24" />
              <img
                src="./public/images/loco.jpg"
                alt="Locomotive"
                className="w-24 h-24 rounded-full border-4 border-[#FFD700] shadow-md hover:shadow-[0_0_15px_5px_#FFD700] md:hover:shadow-[0_0_25px_10px_#FFD700] transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-between w-full mb-4">
              <hr className="border-t-2 border-white w-24" />
              <img
                src="./public/images/three.png"
                alt="Three.js"
                className="w-24 h-24 rounded-full border-4 border-[#FFD700] shadow-md hover:shadow-[0_0_15px_5px_#FFD700] md:hover:shadow-[0_0_25px_10px_#FFD700] transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-between w-full mb-4">
              <hr className="border-t-2 border-white w-24" />
              <img
                src="./public/images/tailwind.png"
                alt="Tailwind CSS"
                className="w-24 h-24 rounded-full border-4 border-[#FFD700] shadow-md hover:shadow-[0_0_15px_5px_#FFD700] md:hover:shadow-[0_0_25px_10px_#FFD700] transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-between w-full mb-4">
              <hr className="border-t-2 border-white w-24" />
              <img
                src="./public/images/boot.jpg"
                alt="Bootstrap"
                className="w-24 h-24 rounded-full border-4 border-[#FFD700] shadow-md hover:shadow-[0_0_15px_5px_#FFD700] md:hover:shadow-[0_0_25px_10px_#FFD700] transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Back-End Section */}
        <div className="flex flex-col items-center relative">
          <h1 className="text-xl font-semibold mb-2 border-b-2 border-white pb-2 w-full text-center">Back-End</h1>
          <div className="border-l-4 border-white h-full flex flex-col items-start w-full">
            <div className="flex items-center justify-between w-full mb-4">
              <hr className="border-t-2 border-white w-24" />
              <img
                src="./public/images/node logo.png"
                alt="Node.js"
                className="w-24 h-24 rounded-full border-4 border-[#FFD700] shadow-md hover:shadow-[0_0_15px_5px_#FFD700] md:hover:shadow-[0_0_25px_10px_#FFD700] transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-between w-full mb-4">
              <hr className="border-t-2 border-white w-24" />
              <img
                src="./public/images/express.png"
                alt="Express.js"
                className="w-24 h-24 rounded-full border-4 border-[#FFD700] shadow-md hover:shadow-[0_0_15px_5px_#FFD700] md:hover:shadow-[0_0_25px_10px_#FFD700] transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-between w-full mb-4">
              <hr className="border-t-2 border-white w-24" />
              <img
                src="./public/images/django.png"
                alt="Django"
                className="w-24 h-24 rounded-full border-4 border-[#FFD700] shadow-md hover:shadow-[0_0_15px_5px_#FFD700] md:hover:shadow-[0_0_25px_10px_#FFD700] transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Database Section */}
        <div className="flex flex-col items-center relative">
          <h1 className="text-xl font-semibold mb-2 border-b-2 border-white pb-2 w-full text-center">Database</h1>
          <div className="border-l-4 border-white h-full flex flex-col items-start w-full">
            <div className="flex items-center justify-between w-full mb-4">
              <hr className="border-t-2 border-white w-24" />
              <img
                src="./public/images/sql.png"
                alt="MySQL"
                className="w-24 h-24 rounded-full border-4 border-[#FFD700] shadow-md hover:shadow-[0_0_15px_5px_#FFD700] md:hover:shadow-[0_0_25px_10px_#FFD700] transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-between w-full mb-4">
              <hr className="border-t-2 border-white w-24" />
              <img
                src="./public/images/download.jpg"
                alt="MongoDB"
                className="w-24 h-24 rounded-full border-4 border-[#FFD700] shadow-md hover:shadow-[0_0_15px_5px_#FFD700] md:hover:shadow-[0_0_25px_10px_#FFD700] transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
