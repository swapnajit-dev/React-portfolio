import React from "react";

const Education = () => {
  return (
    <section className="min-h-screen bg-[#060608] text-white px-5 md:px-14 py-16 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-yellow-500/10 blur-[120px] md:blur-[180px] rounded-full" />

      {/* Title */}
      <div className="relative z-10 mb-10 md:mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200">
          EDUCATION
        </h1>
        <div className="w-20 md:w-28 h-[3px] md:h-[4px] bg-yellow-500 rounded-full mt-2" />
      </div>

      {/* Card */}
      <div className="relative z-10 max-w-4xl mx-auto backdrop-blur-xl bg-white/[0.04] border border-yellow-500/20 rounded-2xl md:rounded-[32px] p-5 md:p-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between gap-6">

          <div>
            <span className="inline-block px-3 py-1 text-xs md:text-sm rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-300">
              MASTER'S DEGREE
            </span>

            <h2 className="mt-4 text-2xl md:text-5xl font-black">
              MCA
            </h2>

            <p className="text-yellow-300 text-lg mt-2">
              Nalanda Institute of Technology
            </p>

            <p className="text-white/60 text-sm md:text-base mt-1">
              Master of Computer Application
            </p>
          </div>

          <div className="flex md:flex-col items-center md:items-end gap-4 md:gap-3">
            <img
              src="/images/trans/c.jpg"
              className="w-14 h-14 md:w-24 md:h-24 rounded-full object-cover border border-yellow-500/30"
              alt="college"
            />

            <span className="text-xs md:text-sm px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300">
              2023 — 2025
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="mt-6 md:mt-10 text-white/70 text-sm md:text-lg leading-6 md:leading-8">
          Completed Master of Computer Application focusing on full-stack
          development, system design, database management, and scalable web
          applications. Built strong problem-solving and real-world software
          development experience through academic and personal projects.
        </p>

        {/* Stats */}
        <div className="mt-6 md:mt-10 flex flex-wrap gap-3">

          <div className="px-4 py-2 text-sm rounded-lg bg-white/5 border border-white/10">
            CGPA: <span className="text-yellow-400">9.00</span>
          </div>

          <div className="px-4 py-2 text-sm rounded-lg bg-white/5 border border-white/10">
            Full Stack Development
          </div>

          <div className="px-4 py-2 text-sm rounded-lg bg-white/5 border border-white/10">
            Software Engineering
          </div>

        </div>

        {/* Link */}
        <a
          href="https://www.thenalanda.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-6 md:mt-10 text-yellow-400 text-sm md:text-base hover:text-yellow-300"
        >
          Visit Institute →
        </a>

      </div>
    </section>
  );
};

export default Education;