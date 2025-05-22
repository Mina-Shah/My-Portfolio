import { Outlet, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="h-16 flex items-center justify-between px-4 md:px-10 lg:px-20">
        <div className="ml-5 lg:ml-80 md:ml-32 flex items-center">
          <a
            onClick={() => navigate("/home")}
            className="cursor-pointer font-bold text-2xl text-teal-400 lg:text-3xl"
          >
            MinaAsif
          </a>
        </div>
<ThemeToggle/>

        
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
