import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Projects from "./Projects";
import About from "./About";

const Home = () => {
  const navigate = useNavigate();
  
  return (
     <>
  <div className="flex flex-col items-center justify-center text-center p-5 animate-slide-in-up">     
     <img src="images/img.png" className="h-72 mt-8" alt="Background" />
      <h1 className="text-5xl font-bold mt-10 mb-4">Frontend Developer.</h1>
      <p className="text-lg mb-6 ">
        Hi, I am Mina Shah, a frontend developer crafting seamless and engaging web
        experiences.
      </p>
      <div className="flex space-x-4 mb-6">
          <button
            className="text-white border border-white px-6 py-2 rounded-lg shadow-lg hover:bg-neutral-800 transition duration-300"
            onClick={() => navigate("/projects")}
          >
            View My Projects
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-3 bg-yellow-500 text-black text-lg font-semibold rounded-lg shadow-md hover:bg-yellow-600"
          >
            Contact Me
          </button>
         </div>
         </div>
    <About/>
    <Projects/>
    </>
  );
};

export default Home;
