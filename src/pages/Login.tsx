import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const existingUser = JSON.parse(localStorage.getItem("users") || "[]");
    const matchedUser = existingUser.find(
      (user: any) => user.username == username && user.password == password,
    );
    if (matchedUser) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      alert("Invalid Username or Password");
    }
  };
  return (
    <div className="h-screen flex justify-center items-center bg-[#55D6C2]">
      <div className="w-[900px] h-[600px] bg-[#F2F5FF] p-8 shadow-md">
        <h1 className="text-4xl font-bold italic text-center mt-8 mb-16">
          Helpdesk System
        </h1>

        <form
          onSubmit={handleLogin}
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
              className="w-[11vw] bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl text-lg font-medium mb-8"
            >
              Sign In
            </button>
          </div>

          <div className="flex justify-between w-[70%] border-black gap-6 text-lg">
            <Link to="/forgotpassword" className="text-red-800 hover:underline">
              Forgot password
            </Link>
            <Link to="/signup" className="text-black hover:underline">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
