import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center text-center p-5">      <img src="images/img.png" className="h-72 mt-8" alt="Background" />
      <h1 className="text-5xl font-bold mt-10 mb-4">Frontend Developer.</h1>
      <p className="text-lg mb-6">
        Hi, I am Mina Shah, a frontend developer crafting seamless and engaging web
        experiences.
      </p>
      <button
        className="bg-yellow-500 text-neutral-900 font-semibold px-6 py-2 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
        onClick={() => navigate("/projects")}
      >
        View My Projects
      </button>
    </div>
  );
};

export default Home;
