const Footer = () => {
  return (
    <footer className="text-gray-300 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} Mina Asif.</p>
        <div className="mt-5 md:mt-0 lg:mt-0 ">
          <a href="/home" className="m-2 lg:m-5">
            Home
          </a>
          <a href="/about" className="m-2 lg:m-5">
            About
          </a> 
          <a href="/projects" className="m-2 lg:m-5">
            Projects
          </a>
          <a href="/contact" className="m-2 lg:m-5">
            Contact
          </a>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/Mina-Shah"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mina-asif-253875347/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your.shahmina814@gmail.com"
            className="hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
