import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Projects from "./Projects";
import About from "./About";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="mt-20 flex flex-col items-center justify-center text-center p-5 animate-slide-in-up w-full max-w-6xl mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2000 }}
         // pagination={{ clickable: true }}
        //  navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full max-w-3xl"
        >
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold md:mt-28 lg:mt-36 mb-4">
                Frontend Developer.
              </h1>
              <p className="text-base md:text-lg lg:text-xl px-4">
                Hi, I am Mina Shah, a frontend developer crafting seamless and
                engaging web experiences.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-lg w-full lg:h-96 sm:h-80 md:h-80 object-cover" src="images/p1.PNG" alt="Mockup 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-lg w-full lg:h-96 sm:h-80 md:h-80 object-cover" src="images/p4.PNG" alt="Mockup 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-lg w-full lg:h-96 sm:h-80 md:h-80 object-cover" src="images/p6.PNG" alt="Mockup 3" />
          </SwiperSlide>
        </Swiper>

        <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6 w-full justify-center">
          <a
            href="images/Resume MIna Shah.jpg"
            className="text-white border border-white text-lg px-6 py-3 rounded-lg shadow-lg hover:bg-neutral-800 transition duration-300 text-center w-full sm:w-auto"
          >
            Resume
          </a>
          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-3 bg-yellow-500 text-black text-lg font-semibold rounded-lg shadow-md hover:bg-yellow-600 w-full sm:w-auto"
          >
            Contact Me
          </button>
        </div>
      </div>

      <About />
      <Projects />
    </>
  );
};

export default Home;
