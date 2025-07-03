import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handlesignup = () => {
    // e.preventDefault();
    const newUser = { username, email, password };
    // Get existing users from localStorage
    const existingUser = JSON.parse(localStorage.getItem("users") || "[]");

    // Check if email already exists
    const alreadyexist = existingUser.some((user: any) => user.email == email);
    if (alreadyexist) {
      alert("Email is already registered. Try logging in.");
      return;
    }

    // Save new user
    localStorage.setItem("users", JSON.stringify([...existingUser, newUser]));
    localStorage.setItem("isLoggedIn", "true");

    // Redirect to dashboard
    navigate("/");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[#55D6C2]">
      <div className="w-[1000px] h-[700px] bg-[#F2F5FF] p-8  shadow-md">
        <h1 className="text-4xl font-bold italic text-center mt-8 mb-5">
          Helpdesk System
        </h1>
        <p className="text-2xl text-center mb-10">Sign up here</p>

        <form
          onSubmit={handlesignup}
          className="space-y-8 flex flex-col items-center"
        >
          <div className="w-[70%]">
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-black px-4 py-3 rounded text-lg"
              required
            />
          </div>

          <div className="w-[70%]">
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-black px-4 py-3 rounded text-lg"
              required
            />
          </div>
          <div className="w-[70%]">
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-black px-4 py-3 rounded text-lg"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-[11vw] bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl text-lg font-medium mb-6"
            >
              Sign Up
            </button>
          </div>

          <div className="flex justify-between w-[70%] border-black gap-6 text-lg">
            <Link to="/forgotpassword" className="text-red-800 hover:underline">
              Forgot password
            </Link>
            <Link to="/login" className="text-black hover:underline">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
