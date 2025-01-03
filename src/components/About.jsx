import React from "react";

const About = () => {
  return (
    <div className=" text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="mt-10 text-3xl sm:text-4xl font-bold text-yellow-400 mb-8 text-center sm:text-left border-b-2 border-yellow-400 pb-2 animate-fadeIn">
          About Me
        </h1>
        <p className="leading-tight text-base sm:text-lg lg:text-xl text-gray-300 mb-8 text-justify sm:text-left animate-slide-in-up">
          I'm <span className="font-semibold text-slate-300">Mina Shah</span>, a passionate frontend web developer from Karachi, Pakistan, with a keen eye for design and a strong foundation 
          in modern web technologies. My journey into web development began with a curiosity for how websites function, 
          and over the years, it has evolved into a full-fledged career and passion.
        </p>
        <p className="leading-tight text-base sm:text-lg lg:text-xl text-gray-300 text-justify sm:text-left animate-slide-in-up">
          I’m always excited to collaborate on new projects or discuss innovative ideas.
        </p>
      </div>
    </div>
  );
};

export default About;
