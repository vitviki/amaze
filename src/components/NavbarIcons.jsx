import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiUser, CiShoppingCart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiCircleRemove } from "react-icons/ci";
import { openSideBar } from "../redux/features/hamburgerMenu/hamburgerSlice";
import { useEffect, useState } from "react";
import { logoutUser } from "../redux/features/user/userSlice";
import { toast } from "react-toastify";

const CartModal = () => {
  const { cart } = useSelector((state) => state.user);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    for (let item in cart) {
      total += cart[item].price;
    }

    setCartTotal(total);
  }, [cart]);

  return (
    <div className="max-w-[434px] w-max max-h-[434px] overflow-y-scroll absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white right-0 top-8 flex flex-col gap-6 z-20">
      {!Object.keys(cart).length === 0 ? (
        <>Cart is Empty</>
      ) : (
        <>
          <h2 className="text-sm">SHOPPING CART</h2>
          <div className="flex flex-col gap-8 w-full">
            {Object.entries(cart).map(([key, value]) => (
              <div key={key} className="flex gap-4">
                <img
                  src={value.photo}
                  alt={value.title}
                  width={72}
                  height={96}
                  className="object-cover rounded-md"
                />
                <div className="flex flex-col justify-between w-full">
                  {/* top section */}
                  <div>
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-medium truncate ...">
                        {value.title.slice(0, 20)}
                      </h3>
                      <p className="p-1 bg-gray-50">₹{value.price}</p>
                    </div>
                  </div>

                  {/* bottom section */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                      Quantity: {value.quantity}
                    </span>
                    <CiCircleRemove
                      className="text-xl text-black"
                      title="remove"
                    />
                  </div>
                </div>
                <hr />
              </div>
            ))}

            {/* BOTTOM SECTION */}
            <div className="w-full">
              <div className="flex justify-between w-full items-center font-medium">
                <span>Subtotal</span>
                <span>₹{cartTotal}</span>
              </div>
              <p className="text-gray-500 text-sm mt-2 mb-4">
                *Shipping and taxes calculated at checkout
              </p>
              <div className="flex justify-between w-full text-sm items-center">
                <button className="rounded-md py-3 px-4 rind-1 ring-gray-300 bg-black text-white ">
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const NavbarIcons = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, cart } = useSelector((state) => state.user);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleUserProfileClick = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    setIsProfileOpen((prev) => !prev);

    if (isCartOpen) {
      setIsCartOpen(false);
    }
  };

  const handleCartOpenClick = () => {
    if (isProfileOpen) {
      setIsProfileOpen(false);
    }

    setIsCartOpen((prev) => !prev);
  };

  const handleLogout = () => {
    if (!user) {
      return;
    }

    dispatch(logoutUser());
    signOut(auth);
    toast.info("Logged Out");
    setIsProfileOpen(false);
  };

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
      <div className="relative">
        <CiUser
          className="text-white md:text-3xl text-2xl cursor-pointer"
          title={user ? user.username : "Login"}
          onClick={handleUserProfileClick}
        />
        {isProfileOpen && (
          <div className="absolute px-7 py-4 rounded-md top-8 bg-white left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
            <div className="cursor-pointer" onClick={handleLogout}>
              Logout
            </div>
          </div>
        )}
      </div>
      <div onClick={handleCartOpenClick} className="relative cursor-pointer">
        <CiShoppingCart
          className="text-white md:text-3xl text-2xl"
          title="Cart"
        />
        {Object.keys(cart).length !== 0 && (
          <div className="absolute -top-4 -right-4 w-6 h-6 bg-white rounded-full text-black text-sm flex items-center justify-center">
            {Object.keys(cart).length}
          </div>
        )}
        {isCartOpen && <CartModal />}
      </div>
    </div>
  );
};

export default NavbarIcons;
