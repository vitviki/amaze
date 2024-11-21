import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Navbar, Footer } from "./components";
import {
  Home,
  Login,
  SignUp,
  Wishlist,
  Category,
  Product,
  Search,
} from "./pages";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function App() {
  const { user, wishlist, cart } = useSelector((state) => state.user);

  const updateWishlist = async () => {
    if (!user) return;
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.put(
        "https://amaze-hhv9.onrender.com/api/users/update-wishlist",
        {
          userId: user.id,
          wishList: wishlist,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      toast.error("Unable to process. Please try again");
      console.log(error);
    }
  };

  const updateCart = async () => {
    if (!user) {
      return;
    }
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.put(
        "https://amaze-hhv9.onrender.com/api/users/update-cart",
        {
          userId: user.id,
          cart: cart,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      toast.error("Unable to process. Please try again");
    }
  };

  useEffect(() => {
    updateWishlist();
  }, [wishlist]);

  useEffect(() => {
    updateCart();
  }, [cart]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/wisthlist" element={<Wishlist />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/search/:searchTerm" element={<Search />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
