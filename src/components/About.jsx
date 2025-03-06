import React from "react";
import htmlLogo from "/images/logos/html.png";
import cssLogo from "/images/logos/css.png";
import jsLogo from "/images/logos/js.png";
import tailwindLogo from "/images/logos/tailwind.png";
import viteLogo from "/images/logos/vite.png";
import webpackLogo from "/images/logos/webpack.png";
import reactLogo from "/images/logos/react.png";
import routerLogo from "/images/logos/react-router-dom.png";
import gitLogo from "/images/logos/git.png";
import githubLogo from "/images/logos/github.jpg";
import Footer from "./Footer";

const techStack = [
  { src: htmlLogo, alt: "HTML Logo", name: "HTML" },
  { src: cssLogo, alt: "CSS Logo", name: "CSS" },
  { src: jsLogo, alt: "JavaScript Logo", name: "JavaScript" },
  { src: tailwindLogo, alt: "Tailwind CSS Logo", name: "Tailwind CSS" },
  { src: viteLogo, alt: "Vite Logo", name: "Vite" },
  { src: webpackLogo, alt: "Webpack Logo", name: "Webpack" },
  { src: reactLogo, alt: "React Logo", name: "React" },
  { src: routerLogo, alt: "React Router Logo", name: "React Router" },
  { src: gitLogo, alt: "Git Logo", name: "Git" },
  { src: githubLogo, alt: "GitHub Logo", name: "GitHub" },
];

const About = () => {
  return (
    <>
    <section className="text-white min-h-screen flex flex-col items-center px-6 py-16">
      {/* About Me Section */}
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold text-yellow-400 border-b-4 border-yellow-500 pb-2 inline-block">
          About Me
        </h1>
        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          I'm <span className="font-semibold text-slate-200">Mina Shah</span>, a passionate frontend web developer from Karachi, Pakistan, with a keen eye for design and a strong foundation
          in modern web technologies. My journey into web development began with a curiosity for how websites function,
          and over the years, it has evolved into a full-fledged career and passion.
        </p>
        <p className="mt-4 text-lg text-gray-300 leading-relaxed">
          I’m always excited to collaborate on new projects or discuss innovative ideas.
        </p>
      </div>

      {/* Tech Stack Section */}
      <div className="max-w-4xl w-full mt-12">
        <h2 className="text-3xl text-slate-300 font-semibold text-center">
          Tech Stack
        </h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center animate-pulse">
          {techStack.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center group">
              <img
                src={tech.src}
                alt={tech.alt}
                className="h-12 transition-transform duration-300 transform group-hover:scale-110"
              />
              <p className="mt-2 text-sm text-gray-400">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
