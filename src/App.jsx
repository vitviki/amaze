import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase/firebase";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { loginUser, setLoading } from "./redux/features/user/userSlice";
import { Navbar, Footer } from "./components";
import { Home, Login, SignUp, Wishlist, Category, Product } from "./pages";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, []);

  const user = useSelector((state) => state.user.user);
  const isLoading = useSelector((state) => state.user.isLoading);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/wisthlist" element={<Wishlist />} />
        <Route path="/:categoryId" element={<Category />} />
        <Route path="/products/:productId" element={<Product />} />
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
