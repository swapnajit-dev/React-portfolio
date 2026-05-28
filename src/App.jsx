import { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Blackout from "./component/Blackout";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Skill from "./component/Skill";
import Skill_js from "./component/Skill_js";
import Skill_react from "./component/Skill_react";
import Skill_node from "./component/Skill_node";
import Skills from "./component/Skills";
import Contact from "./component/Contact";
import Education from "./component/Education";
import Cursor from "./component/Cursor";

const App = () => {
  const [showBlackout, setShowBlackout] =
    useState(true);

  const [showComponents, setShowComponents] =
    useState(false);

  const [showCursor, setShowCursor] =
    useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setShowCursor(
        window.innerWidth >= 768
      );
    };

    checkDevice();

    window.addEventListener(
      "resize",
      checkDevice
    );

    return () =>
      window.removeEventListener(
        "resize",
        checkDevice
      );
  }, []);

  const handleButtonClick = () => {
    setShowBlackout(false);
    setShowComponents(true);
  };

  const router =
    createBrowserRouter([
      {
        path: "/",
        element: (
          <>
            <Navbar />
            <Hero />
          </>
        ),
      },

      {
        path: "/skills",
        element: (
          <>
            <Navbar />
            <Skills />
          </>
        ),
      },

      {
        path: "/contact",
        element: (
          <>
            <Navbar />
            <Contact />
          </>
        ),
      },

     {
  path: "/projects",
  element: (
    <>
      <Navbar />
      <Skill />
      <Skill_js />
      <Skill_react />
      <Skill_node />

     <div className="w-full flex items-center justify-center py-16 md:py-32">
  <h1
    className="
      text-4xl
      md:text-7xl
      font-extrabold
      uppercase
      tracking-[6px]
      md:tracking-[8px]
      text-transparent
      bg-clip-text
      bg-gradient-to-r
      from-cyan-400
      via-blue-500
      to-purple-500
      animate-pulse
      text-center
    "
  >
    Coming Soon...
  </h1>
</div>
    </>
  ),
},

      {
        path: "/education",
        element: (
          <>
            <Navbar />
            <Education />
          </>
        ),
      },
    ]);

  return (
    <div
      style={{
        paddingTop: "72px",
      }}
      className="
      bg-[#070707]
      text-white
      "
    >
      {showCursor && <Cursor />}

      {showBlackout && (
        <Blackout
          onClick={
            handleButtonClick
          }
        />
      )}

      {showComponents && (
        <RouterProvider
          router={router}
        />
      )}
    </div>
  );
};

export default App;