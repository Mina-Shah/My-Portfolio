const Footer = () => {
    return (
      <footer className="text-gray-300 py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <p className="text-sm">&copy; {new Date().getFullYear()} Mina Shah.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/Mina-Shah" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              GitHub
            </a>
            <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQE_bzPMlZsqTAAAAZV2pbRwfWDug3FeyHuzbaqeqXNu2d_TITyWfipkjd2RpfvfWyOWUAIk73JsL_7Y1Ci69jHq5Gw6tuZVOw8RDEOc9WzkxJG6J8aT01jqbT7UhDjNe5KaQxs=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmina-shah-253875347" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              LinkedIn
            </a>
            <a href="mailto:your.shahmina814@gmail.com" className="hover:text-white">
              Email
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  