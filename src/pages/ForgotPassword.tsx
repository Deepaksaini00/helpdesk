import { Link } from "react-router-dom";
import React from "react";

const ForgotPassword: React.FC = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-[#55D6C2]">
      <div className="w-[900px] h-[600px] bg-[#F2F5FF] p-8 shadow-md ">
        <p className="text-xl text-center w-[27vw] mx-auto mb-12 mt-24">
          Don't worry, Enter your email below and we will send you a link to
          change password.
        </p>
        <form className="space-y-6 flex flex-col items-center">
          <div className="w-[58%]">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full border border-black px-4 py-3 rounded text-lg"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-[11vw] bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl text-lg font-medium mt-8"
            >
              Submit
            </button>
          </div>
          <Link to="/login">
            <button
              type="submit"
              className="w-[11vw] bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl text-lg font-medium"
            >
              Sign In
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
