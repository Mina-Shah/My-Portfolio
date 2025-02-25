import React from "react";

const techStack = [
  "HTML", "CSS", "JavaScript", "Tailwind CSS", "Vite",
  "Webpack", "React", "React Router", "Git", "GitHub"
];

const About = () => {
  return (
    <div className="text-white min-h-screen flex flex-col items-center px-6 py-16">
      {/* About Me Section */}
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold text-yellow-400 border-b-4 border-yellow-500 pb-2 inline-block">
          About Me
        </h1>
        <p className="mt-6 text-lg text-gray-300 leading-relaxed text-left">
          I'm <span className="font-semibold text-slate-200">Mina Shah</span>, a passionate frontend web developer from Karachi, Pakistan. 
          I love creating responsive, user-friendly websites using modern web technologies. My journey into web development began with a curiosity for how websites function,
          and over the years, it has evolved into a full-fledged career and passion.
        </p>
        <p className="mt-4 text-lg text-gray-300 leading-relaxed text-left">
          I’m always excited to collaborate on new projects or discuss innovative ideas.
        </p>
      </div>

      {/* Tech Stack Section */}
      <div className="max-w-4xl w-full mt-12">
        <h2 className="text-3xl text-slate-300 font-semibold text-center">
          Tech Stack
        </h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-5 justify-center text-center">
          {techStack.map((tech, index) => (
            <div 
              key={tech} 
              className="border border-gray-500 rounded-xl px-4 py-2 text-gray-300 text-sm font-semibold transition-transform transform hover:scale-105"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
