import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Projects from "./Projects";
import About from "./About";

const images = [
  "images/p1.PNG",
  "images/p4.PNG",
  "images/p6.PNG",
  "images/p2.PNG",
];

const loopImages = [...images, ...images];

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center p-5 animate-slide-in-up w-full max-w-6xl mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-20 md:mt-28 lg:mt-32 mb-4">
            Frontend Developer.
          </h1>
          <p className="text-sm tracking-wide md:text-lg lg:text-xl px-4 mb-2">
            <span>Hi! I am Mina Asif, a frontend developer.</span> <br />
            <span>Crafting seamless and engaging web experiences.</span>
          </p>
        </div>
        <div className="flex flex-row items-center gap-4 mt-6 justify-center mb-6 w-full">
          <Link
            to="/Mina_Asif__CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border border-white text-base sm:text-lg px-6 py-3 rounded-3xl shadow-lg hover:bg-neutral-800 transition duration-300 text-center w-auto"
          >
            Download CV
          </Link>

          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-3 bg-yellow-500 text-black text-base sm:text-lg font-semibold rounded-3xl shadow-md hover:bg-yellow-600 w-auto"
          >
            Contact Me
          </button>
        </div>

        <div className="relative overflow-hidden w-full max-w-3xl mx-auto mt-20">
          {/* Left Shadow */}
          <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-black/100 via-black/60 to-transparent z-10 pointer-events-none" />

          {/* Right Shadow */}
          <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-black/100 via-black/60 to-transparent z-10 pointer-events-none" />

          {/* Image Slider */}
          <motion.div
            className="flex gap-5 w-[200%]"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          >
            {loopImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Mockup ${index + 1}`}
                className="rounded-lg w-auto h-52 object-cover shadow-2xl"
              />
            ))}
          </motion.div>
        </div>
      </div>

      <About />
      <Projects />
    </>
  );
};

export default Home;
