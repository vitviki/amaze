// import { RootState } from "@/app/redux/store";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
// import { closeMenu } from "@/app/redux/features/hamburgerMenu/hamburgerMenuSlice";
import { closeSideBar } from "../redux/features/hamburgerMenu/hamburgerSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const sideBarOpen = useSelector((state) => state.hamburger.sideBarOpen);

  return (
    <>
      {sideBarOpen ? (
        <div className="fixed z-10 bg-black bg-opacity-40 w-full h-screen inset-0 flex">
          <div className="lg:w-[25%] md:w-[40%] ms:w-[50%] w-[60%] bg-white h-full overflow-y-scroll flex flex-col gap-10">
            <Link
              to="/sign-in"
              className="bg-secondary w-full flex items-center gap-4 justify-center text-xl text-white py-3"
            >
              <FaUser />
              <h3>Hi, Sign In</h3>
            </Link>
            <div className="flex flex-col gap-4 px-8 mb-5">
              <div className="flex flex-col gap-5 justify-start">
                <h3 className="text-xl font-semibold">Trending</h3>
                <ul className="flex flex-col gap-8 font-light text-sm leading-5 font-mono tracking-wider">
                  <li>
                    <Link to="/">Best Sellers</Link>
                  </li>
                  <li>
                    <Link to="/">New Releases</Link>
                  </li>
                  <li>
                    <Link to="/">Movers & Shakers</Link>
                  </li>
                </ul>
              </div>
              <hr />
              <div className="flex flex-col gap-5 justify-start">
                <h3 className="text-xl font-semibold">Shop by Category</h3>
                <ul className="flex flex-col gap-8 font-light text-sm leading-5 font-mono tracking-wider">
                  <li>
                    <Link href="/">Mobile</Link>
                  </li>
                  <li>
                    <Link href="/">Computers</Link>
                  </li>
                  <li>
                    <Link href="/">TV & Appliances</Link>
                  </li>
                  <li>
                    <Link href="/">Men&apos;s Fashion</Link>
                  </li>
                  <li>
                    <Link href="/">Women&apos;s Fashion</Link>
                  </li>
                  <li>
                    <Link href="/">Sports & Fitness</Link>
                  </li>
                  hamburger
                  <li>
                    <Link href="/">Books</Link>
                  </li>
                  <li>
                    <Link href="/">Movies, Music & Video Games</Link>
                  </li>
                  <li>
                    <Link href="/">Books</Link>
                  </li>
                  <li>
                    <Link href="/">Beauty & Make-up</Link>
                  </li>
                </ul>
              </div>

              <hr />
              <div className="flex flex-col gap-5 justify-start">
                <h3 className="text-xl font-semibold">
                  Digital Content & Devices
                </h3>
                <ul className="flex flex-col gap-8 font-light text-sm leading-5 font-mono tracking-wider">
                  <li>
                    <Link href="/">Amazon miniTV</Link>
                  </li>
                  <li>
                    <Link href="/">Echo & Alexa</Link>
                  </li>
                  <li>
                    <Link href="/">Fire TV</Link>
                  </li>
                  <li>
                    <Link href="/">Amazon Prime Video</Link>
                  </li>
                  <li>
                    <Link href="/">Amazon Prime Music</Link>
                  </li>
                </ul>
              </div>

              <hr />
              <div className="flex flex-col gap-5 justify-start">
                <h3 className="text-xl font-semibold">
                  Digital Content & Devices
                </h3>
                <ul className="flex flex-col gap-8 font-light text-sm leading-5 font-mono tracking-wider">
                  <li>
                    <Link href="/">Amazon miniTV</Link>
                  </li>
                  <li>
                    <Link href="/">Echo & Alexa</Link>
                  </li>
                  <li>
                    <Link href="/">Fire TV</Link>
                  </li>
                  <li>
                    <Link href="/">Amazon Prime Video</Link>
                  </li>
                  <li>
                    <Link href="/">Amazon Prime Music</Link>
                  </li>
                </ul>
              </div>

              <hr />
              <div className="flex flex-col gap-5 justify-start">
                <h3 className="text-xl font-semibold">Help & Settings</h3>
                <ul className="flex flex-col gap-8 font-light text-sm leading-5 font-mono tracking-wider">
                  <li>
                    <Link href="/">Your Account</Link>
                  </li>
                  <li>
                    <Link href="/">Customer Service</Link>
                  </li>
                  <li>
                    <Link href="/">Sign In</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="lg:w-[75%] md:w-[80%] sm:w-[50%] w-[40%] h-full"
            onClick={() => dispatch(closeSideBar())}
          ></div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Sidebar;
