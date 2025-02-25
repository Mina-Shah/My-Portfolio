import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="h-16 flex justify-between items-center px-5">
        <div className="flex items-center space-x-2">
          <a
            onClick={() => navigate("/home")}
            className="cursor-pointer font-bold text-2xl text-yellow-500 md:ml-20 lg:ml-20 lg:text-3xl"
          >
            MinaShah
          </a>
        </div>
        <div className="hidden lg:block">
          <a
            href="images/Resume MIna Shah.jpg"
            className="ml-96 px-3 py-1 border font-medium rounded-md hover:bg-neutral-800 transition"
          >
            Resume
          </a>
        </div>

        <div>
          <div className="lg:hidden ml-48 md:ml-96">
            <button onClick={toggleNavbar} className="text-yellow-500 transition">
              {menuOpen ? <X /> : <Menu size={28} />}
              
            </button>
          </div>

          {menuOpen && (
            <div className="bg-neutral-900 h-screen lg:hidden fixed right-0 z-20 w-60 flex flex-col justify-center items-center">
              <ul className=" space-y-8 text-yellow-500">
                <li className=" hover:text-white">
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li className=" hover:text-white">
                  <NavLink to="/about">About</NavLink>
                </li>
                <li className=" hover:text-white">
                  <NavLink to="/projects">Projects</NavLink>
                </li>
                <li className="hover:text-white">
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                  <a
                    href="images/Resume MIna Shah.jpg"
                    className="px-2 py-1 text-white border rounded-sm text-sm hover:bg-neutral-800 transition"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="">
          <ul className="text-yellow-500 hidden lg:mr-40 lg:justify-center lg:items-center lg:flex lg:gap-9 lg:text-xl">
            <li className="lg:hover:text-white">
              <NavLink to="/home">Home</NavLink>
            </li>
            <li className=" hover:text-white">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="lg:hover:text-white">
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li className="lg:hover:text-white">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
