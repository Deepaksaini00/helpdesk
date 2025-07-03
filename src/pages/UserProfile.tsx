import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const UserProfile: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedin = localStorage.getItem("isLoggedIn");
    if (!isLoggedin) navigate("/login");
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Sidebar + Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <main className="flex-1 bg-[#87E6DE] mx-14 my-7 py-3 px-10">
          <h2 className="text-2xl font-bold mb-10">User Profile</h2>

          <div className="flex w-fit gap-20 justify-center p-20">
            {/* Profile Card */}
            <div className="bg-white shadow-md  rounded-lg w-[370px] h-[400px] p-10 text-left relative">
              {/* Icon top-right */}
              <div className="absolute top-6 right-4 text-black text-lg cursor-pointer">
                📝
              </div>
              <div className="flex flex-col items-center mb-8">
                <div className="w-32 h-32 scroll-p-14 rounded-full bg-gray-300 flex items-center justify-center text-4xl mb-4">
                  👤
                </div>
              </div>
              <div className="text-sm font-semibold space-y-2">
                <p>Username</p>
                <p>Contact Number</p>
                <p>Email</p>
                <p>Department</p>
              </div>
            </div>

            {/* Feedback Box */}
            <div className="bg-white shadow-md rounded-lg w-[300px] h-[200px] p-6 text-center flex flex-col justify-between">
              <p className="text-md font-semibold mb-3">Give Your Feedback</p>
              <textarea
                placeholder="[Lorem Ipsum]"
                className="w-full h-10 p-2 border bg-gray-300  rounded mb-2 text-sm resize-none"
                rows={2}
              ></textarea>
              <div className="flex justify-center gap-1 text-xl text-gray-400 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <button className="bg-[#55D6C2] hover:bg-[#4bc6b4] text-black py-1 px-2 rounded ">
                Submit Feedback
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UserProfile;
