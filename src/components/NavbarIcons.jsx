import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiUser, CiShoppingCart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { openSideBar } from "../redux/features/hamburgerMenu/hamburgerSlice";

const NavbarIcons = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.user);

  return (
    <div className="flex items-center gap-4 xl:gap-8">
      <RxHamburgerMenu
        className="lg:hidden flex text-white md:text-3xl text-2xl cursor-pointer"
        title="Menu"
        onClick={() => dispatch(openSideBar())}
      />
      <Link to="/wisthlist">
        <IoIosHeartEmpty
          className="text-white md:text-3xl text-2xl cursor-pointer"
          title="Wishlist"
        />
      </Link>
      <CiUser
        className="text-white md:text-3xl text-2xl cursor-pointer"
        title={user ? user.username : "Login"}
      />
      <CiShoppingCart
        className="text-white md:text-3xl text-2xl cursor-pointer"
        title="Cart"
      />
    </div>
  );
};

export default NavbarIcons;
