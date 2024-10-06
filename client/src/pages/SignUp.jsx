import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/register",
        {
          name,
          number,
          email,
          password,
        }
      );

      if (response.status === 200) {
        toast.success("Signup successful");
        navigate("/login");
      }
    } catch (err) {
      if (err.message.includes("email-already-in-use")) {
        toast.error(
          "Email already in use. Please try again with a different email address"
        );
      } else {
        toast.error(err.message);
      }
    }
  };

  return (
    <div className="w-full flex justify-center my-10 sm:px-0 px-4">
      <div className="max-w-[500px] min-w-[200px] w-[500px] h-max flex flex-col border rounded-md px-4 py-5 shadow-lg">
        <h2 className="sm:text-2xl text-xl mb-5 ">Create Account</h2>
        <form
          className="w-full flex flex-col gap-3 mb-5"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="w-full border px-2 py-3 rounded-md"
            placeholder="Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            className="w-full border px-2 py-3 rounded-md"
            placeholder="Mobile number"
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <input
            type="email"
            className="w-full border px-2 py-3 rounded-md"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full border px-2 py-3 rounded-md mb-2"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="w-full sm:text-sm text-xs mb-3 text-gray-800">
            *To verfiy your number, we will send you a text message with a
            temporary code. Message and data rates may apply.
          </p>
          <button className="w-full rounded-md flex items-center justify-center py-2 bg-yellow-400">
            Sign Up
          </button>
        </form>
        <hr />
        <p className="w-full text-sm mb-3 text-gray-800 mt-4">
          Already have an account?{" "}
          <Link className="text-blue-700" to="/login">
            Sign In
          </Link>
        </p>
        <p className="w-full text-xs mb-3 text-gray-600">
          By creating an account or logging in, you agree to Amaze's{" "}
          <Link to="#" className="text-blue-700 underline">
            Conditions of Use
          </Link>{" "}
          and{" "}
          <Link to="#" className="text-blue-700 underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
