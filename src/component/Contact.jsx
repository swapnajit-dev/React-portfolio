import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#070707] text-white px-6 sm:px-10">
      <h1 className="text-5xl font-bold mb-6 text-[#FFD700] text-center">
        CONTACT
      </h1>
      <div className="w-24 h-1 bg-[#FFD700] mb-8"></div>

      <h2 className="text-2xl font-semibold text-[#FFD700] text-center mb-6">
        Connect Through Social Media
      </h2>

      {/* Social Media Links */}
      <div className="flex gap-6 flex-wrap justify-center">
        {[
          {
            href: "https://www.instagram.com/call_me_jeet_65",
            icon: faInstagram,
            color: "#c72b7e",
            borderColor: "#ff0095",
          },
          {
            href: "https://www.linkedin.com/in/swapnajit-sahoo-878854262",
            icon: faLinkedin,
            color: "#1c9ff1",
            borderColor: "#1c9ff1",
          },
          {
            href: "https://www.facebook.com/swapanjit.sahoo/",
            icon: faFacebook,
            color: "#0679e6",
            borderColor: "#0679e6",
          },
          {
            href: "https://github.com/swapnajit-dev",
            icon: faGithub,
            color: "#ffffff",
            borderColor: "#333",
          },
        ].map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex justify-center items-center rounded-full w-[60px] h-[60px] border-2 transition-all duration-300 hover:scale-125"
            style={{
              borderColor: item.borderColor,
              color: item.color,
              boxShadow: `0 0 10px ${item.borderColor}`,
            }}
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="text-2xl group-hover:rotate-[360deg] transition-transform duration-700"
            />
          </a>
        ))}
      </div>

      {/* Email Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact Me via Email:</h2>
        <a
          href="mailto:sahoswapnajit@gmail.com"
          className="text-lg font-bold text-[#FFD700] hover:text-[#ff9900] transition-all duration-300 transform hover:scale-110"
        >
          sahoswapnajit@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
