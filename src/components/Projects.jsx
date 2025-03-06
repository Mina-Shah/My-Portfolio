import React from "react";
import Footer from "./Footer";

const Projects = () => {
  const images = [
    {
      src: "images/p1.PNG",
      alt: "Movie Website",
      title: "Movie Website",
      description: "A movie website created using React JS and Tailwind CSS, where I learned building components and utilizing utility classes.",
      url: "https://movie-website-using-react.netlify.app/"
    },
    {
      src: "images/p2.PNG",
      alt: "Menu Card",
      title: "Menu Card",
      description: "A responsive menu card built with HTML, CSS, and JavaScript. Learned to handle event listeners effectively.",
      url: "https://mina-menu.netlify.app"
    },
    {
      src: "images/p6.PNG",
      alt: "Ecommerce Website",
      title: "Ecommerce Website",
      description: "A fully responsive eCommerce website built with React JS, utilizing its component-based architecture for dynamic UI, and styled with Tailwind CSS for efficient, utility-first design.",
      url: "https://mina-ecommerce-website.netlify.app/"
    },
    {
      src: "images/p4.PNG",
      alt: "Responsive Landing Page",
      title: "Responsive Landing Page",
      description: "A responsive landing page built using React JS and Tailwind CSS, improving skills in component design.",
      url: "https://mina-responsive-landing-page-react.netlify.app"
    },
    {
      src: "images/p5.PNG",
      alt: "Form Validator",
      title: "Form Validator",
      description: "A form validation project using HTML, CSS, and JavaScript, emphasizing form handling techniques.",
      url: "https://mina-form-validator.netlify.app"
    },
    {
      src: "images/p3.PNG",
      alt: "Password Generator",
      title: "Password Generator",
      description: "A random password generator using HTML, CSS, and JavaScript to generate secure passwords.",
      url: "https://mina-password-generator.netlify.app"
    },
    {
      src: "images/p7.PNG",
      alt: "Paragraph Generator",
      title: "Paragraph Generator",
      description: "A random paragraph generator using HTML, CSS, and JavaScript to create dynamic text.",
      url: "https://mina-lorem-ipsum-project.netlify.app"
    },
    {
      src: "images/p8.PNG",
      alt: "Grocery List App",
      title: "Grocery List",
      description: "A grocery list application created using HTML, CSS, and JavaScript, focusing on handling event listeners.",
      url: "https://mina-grocery-bud.netlify.app"
    }
  ];

  return (
    <>
      <h1 className="text-4xl font-extrabold text-yellow-400 text-center mt-10">
        Curious To See My Work?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-20 p-10">
        {images.map((image, index) => (
          <div
            key={index}
            className="bg-neutral-900 drop-shadow-2xl flex flex-col items-center p-4 rounded-lg shadow-lg group transition-transform transform hover:scale-105 hover:shadow-2xl animate-slide-in-up relative"
          >
            {/* Image Section */}
            <div className="w-full h-60 flex justify-center items-center">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-40 lg:h-60 rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl"
              />
            </div>

            {/* Overlay Button */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
              <button
                className="bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold shadow-lg hover:bg-yellow-600"
                onClick={() => window.open(image.url, "_blank")}
              >
                View Project
              </button>
            </div>

            {/* Title and Description */}
            <h1 className="text-lg text-yellow-500 font-semibold text-center mt-4 opacity-100">
              {image.title}
            </h1>
            <p className="text-gray-300 text-sm mt-2 text-center">
              {image.description}
            </p>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
};

export default Projects;
