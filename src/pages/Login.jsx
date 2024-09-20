import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
        toast.success("Login successful");
      })
      .catch((err) => {
        if (err.message.includes("auth/invalid-credential")) {
          toast.error("Invalid credentials. Please try again");
        } else {
          toast.error(err.message);
        }
      });
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