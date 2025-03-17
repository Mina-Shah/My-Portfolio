import { Outlet, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="mt-5 h-16 flex items-center justify-between px-4 md:px-10 lg:px-20">
        <div className="lg:ml-48 flex items-center">
          <a
            onClick={() => navigate("/home")}
            className="cursor-pointer font-bold text-2xl text-yellow-500 lg:text-3xl"
          >
            MinaAsif
          </a>
        </div>

        <div>
          <button
            onClick={() => navigate("/contact")}
            className="lg:mr-52 px-3 py-2 bg-yellow-500 text-black font-semibold rounded-3xl shadow-md hover:bg-yellow-600 transition"
          >
            Contact Me
          </button>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
