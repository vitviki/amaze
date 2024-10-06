import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import {
  loginUser,
  setLoading,
  setWishlist,
  setCart,
} from "../redux/features/user/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://amaze-hhv9.onrender.com/api/users/login",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        localStorage.setItem("authToken", response.data.token);
        cookies.set("authToken", response.data.token, { path: "/" });

        // update the user state.
        dispatch(
          loginUser({
            uid: response.data.returnUser.id,
            username: response.data.returnUser.name,
            email: response.data.returnUser.email,
          })
        );
        dispatch(setWishlist(response.data.returnUser.wishList));
        dispatch(setCart(response.data.returnUser.cart));
        navigate("/");
        toast.success(`Welcome back, ${response.data.returnUser.name}`);
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(true));
      }
    } catch (err) {
      if (err.message.includes("invalid")) {
        toast.error("Invalid email or password. Please try again");
      } else {
        toast.error(err.message);
      }
    }
  };

  return (
    <div className="w-full flex justify-center gap-7 my-10 sm:px-0 px-4">
      <div className="max-w-[500px] min-w-[200px] w-[500px] h-max flex flex-col border rounded-md px-4 py-5 shadow-lg">
        <h2 className="sm:text-2xl text-xl mb-5 ">Sign In</h2>
        <form
          className="w-full flex flex-col gap-3 mb-5"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="w-full border px-2 py-3 rounded-md"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full border px-2 py-3 rounded-md mb-2"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full rounded-md flex items-center justify-center py-2 bg-yellow-400">
            Sign In
          </button>
        </form>
        <hr />
        <p className="w-full text-xs my-3 text-gray-600">
          By creating an account or logging in, you agree to Amaze's{" "}
          <Link to="#" className="text-blue-700 underline">
            Conditions of Use
          </Link>{" "}
          and{" "}
          <Link to="#" className="text-blue-700 underline">
            Privacy Policy
          </Link>
        </p>

        <p className="mt-5 mb-3 text-sm text-gray-800">New to Amaze?</p>

        <Link
          to="/sign-up"
          className="w-full flex justify-center items-center py-1 border rounded-xl"
        >
          Create your Amaze account
        </Link>
      </div>
    </div>
  );
};

export default Login;
