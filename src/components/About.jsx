import { motion } from "framer-motion";

const techStack = [
  { name: "HTML", src: "images/logos/html.png", alt: "HTML Logo" },
  { name: "CSS", src: "images/logos/css.png", alt: "CSS Logo" },
  { name: "JavaScript", src: "images/logos/js.png", alt: "JS Logo" },
  { name: "React", src: "images/logos/react.png", alt: "React Logo" },
  { name: "React Router", src: "images/logos/react-router-dom.png", alt: "React Router DOM Logo" },
  { name: "Tailwind", src: "images/logos/tailwind.png", alt: "Tailwind Logo" },
  { name: "Vite", src: "images/logos/vite.png", alt: "Vite Logo" },
  { name: "Webpack", src: "images/logos/webpack.png", alt: "Webpack Logo" },
  { name: "Git", src: "images/logos/git.png", alt: "Git Logo" },
  { name: "Github", src: "images/logos/github.jpg", alt: "Github Logo" },

];

const loopTechStack = [...techStack, ...techStack];

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

      <div className="w-full mt-8 overflow-hidden relative">
      <h2 className="text-3xl text-slate-300 font-semibold text-center mt-8">
        Tech Stack
      </h2>

     
      {/* Scrolling Tech Stack */}
      <motion.div
        className="flex gap-10 mt-10 w-max flex-nowrap"
        animate={{ x: ["0%", "-50%"] }}  // Moves from Right to Left seamlessly
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {loopTechStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center group">
            <img
              src={tech.src}
              alt={tech.alt}
              className="h-12 transition-transform duration-300 transform group-hover:scale-110"
            />
            <p className="mt-2 text-sm text-gray-400">{tech.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
    </section>
    </>
  );
};

export default About;
