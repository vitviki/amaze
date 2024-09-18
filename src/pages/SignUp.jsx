import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="w-full flex justify-center my-10 sm:px-0 px-4">
      <div className="max-w-[500px] min-w-[200px] w-[500px] h-max flex flex-col border rounded-md px-4 py-5 shadow-lg">
        <h2 className="sm:text-2xl text-xl mb-5 ">Create Account</h2>
        <form className="w-full flex flex-col gap-3 mb-5">
          <input
            type="text"
            className="w-full border px-2 py-3 rounded-md"
            placeholder="Full Name"
          />
          <input
            type="number"
            className="w-full border px-2 py-3 rounded-md"
            placeholder="Mobile number"
          />
          <input
            type="email"
            className="w-full border px-2 py-3 rounded-md"
            placeholder="Email"
          />
          <input
            type="password"
            className="w-full border px-2 py-3 rounded-md mb-2"
            placeholder="Password"
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
          <Link className="text-blue-700">Sign In</Link>
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
