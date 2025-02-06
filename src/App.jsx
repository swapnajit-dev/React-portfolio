import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Blackout from './component/Blackout';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Skill from './component/Skill';
import Skill_js from './component/Skill_js';
import Skill_react from './component/Skill_react';
import Skill_node from './component/Skill_node';
import Skills from './component/Skills';
import Contact from './component/Contact';
import Education from './component/Education';

const App = () => {
  const [showBlackout, setShowBlackout] = useState(true);
  const [showComponents, setShowComponents] = useState(false);

  const handleButtonClick = () => {
    setShowBlackout(false);
    setShowComponents(true);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Hero />
        </>
      ),
    },
    {
      path: '/skills',
      element: (
        <>
         <Navbar />
          <Skills />
        </>
      ),
    },
    {
      path: '/contact',
      element: (
        <>
         <Navbar />
          <Contact />
        </>
      ),
    },
    {
      path: '/projects',
      element: (
        <>
        <Navbar />
          <Skill />
          <Skill_js />
          <Skill_react />
          <Skill_node />
        </>
      ),
    },
    {
      path: '/education',
      element: (
        <>
         <Navbar />
          <Education />
        </>
      ),
    },
  ]);

  return (
    <div className="bg-[#070707] text-white">
      
      {showBlackout && <Blackout onClick={handleButtonClick} />}
      {showComponents && (
        
        <>
        <RouterProvider router={router} />
          {/* <Education/> 
          <Skill />
          <Skill_js />
          <Skill_react />
          <Skill_node />
          <Skills/>
          <Contact/> */}
        </>
      )}
    </div>
  );
};

export default App;
