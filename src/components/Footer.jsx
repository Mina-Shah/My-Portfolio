import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 text-black dark:text-white transition-colors duration-300">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Mina Asif.
        </p>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/Mina-Shah"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-teal-500"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mina-asif-253875347/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-teal-500"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your.shahmina814@gmail.com"
            className="hover:underline hover:text-teal-500"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
