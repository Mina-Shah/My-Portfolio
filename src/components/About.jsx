import React from "react";

const About = () => {
  return (
    <div className="text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="mt-10 text-3xl sm:text-4xl font-bold text-yellow-400 mb-8 text-center sm:text-left pb-2 animate-fade-in">
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
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl text-slate-500 mb-6 text-center sm:text-left">
          Tech Stack
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-5">
          {[
            { src: "images/logos/html.png", alt: "HTML Logo", name: "HTML" },
            { src: "images/logos/css.png", alt: "CSS Logo", name: "CSS" },
            { src: "images/logos/js.png", alt: "JavaScript Logo", name: "JavaScript" },
            { src: "images/logos/tailwind.png", alt: "Tailwind CSS Logo", name: "Tailwind CSS" },
            { src: "images/logos/vite.png", alt: "Vite Logo", name: "Vite" },
            { src: "images/logos/webpack.png", alt: "Webpack Logo", name: "Webpack" },
            { src: "images/logos/react.png", alt: "React Logo", name: "React" },
            { src: "images/logos/react-router-dom.png", alt: "React Router Logo", name: "React-Router-Dom"},
            { src: "images/logos/git.png", alt: "Git Logo", name: "Git" },
            { src: "images/logos/github.jpg", alt: "GitHub Logo", name: "GitHub" },
          ].map((tech) => (
            <div key={tech.name} className="flex flex-col items-center">
              <img
                src={tech.src}
                className="w-12 h-11 animate-pulse hover:animate-none"
                alt={tech.alt}
              />
              <p className="mt-2 text-sm text-gray-400">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
