import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import NavbarIcons from "./NavbarIcons";
import AmazeLogo from "../assets/amaze_logo.png";
import NavbarCategoriesBar from "./NavbarCategories";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <nav className="lg:h-40 ">
      {/* Top Portion */}
      <div className="w-full bg-primary h-[70%] flex flex-col justify-center pb-3 sm:px-2 sm:py-5 md:gap-0 gap-5">
        <div className="max-w-[1400px] w-full h-full m-auto md:mt-0 mt-2 flex items-center 2xl:p-0 pr-3">
          {/* Left */}
          <div className="w-[25%]">
            <Link to="/">
              <img
                src={AmazeLogo}
                alt="logo"
                width={144}
                height={98}
                className="min-w-[144px]"
              />
            </Link>
          </div>

          {/* Right */}
          <div className="w-[75%] flex items-center justify-end lg:gap-14 gap-10">
            <div className="hidden sm:flex flex-1">
              <Searchbar />
            </div>
            <NavbarIcons />
          </div>
        </div>

        {/* Search bar for mobile devices */}
        <div className="sm:hidden flex mx-3">
          <Searchbar />
        </div>
      </div>

      {/* Bottom Portion */}
      <div className="h-[30%] w-full hidden lg:flex bg-secondary">
        <NavbarCategoriesBar />
      </div>

      {/* Sidebar */}
      <Sidebar />
    </nav>
  );
};

export default Navbar;
