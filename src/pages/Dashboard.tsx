import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedin = localStorage.getItem("isLoggedIn");
    if (!isLoggedin) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="bg-gray h-screen flex flex-col">
      {<Navbar />}
      <div className="flex flex-1">
        {<Sidebar />}
        <main className="flex-1 bg-white p-6">
          <h2 className="text-4xl text-black  font-mono text-center mb-4">
            Dashboard
          </h2>

          {/* Create the tickes  */}
          <div className="flex justify-center gap-10 mt-10">
            <div className="text-black text-center p-6 h-[220px] w-[210px] rounded-xl shadow-xl bg-blue-500">
              <h2 className="text-md font-semibold mb-2">Total Tickets</h2>
              <p className="text-7xl mt-4 p-8">12</p>
            </div>

            <div className="text-black text-center p-6 h-[220px] w-[210px] rounded-xl shadow-xl bg-green-500">
              <h2 className="text-md font-semibold mb-2">Total Solved</h2>
              <p className="text-7xl mt-4 p-8">8</p>
            </div>

            <div className="text-black text-center p-6 h-[220px] w-[210px] rounded-xl shadow-xl bg-red-500">
              <h2 className="text-md font-semibold mb-2">
                Total Awaiting Approval
              </h2>
              <p className="text-7xl mt-4 p-3">2</p>
            </div>

            <div className="text-black text-center p-6 h-[220px] w-[210px] rounded-xl shadow-xl bg-yellow-300">
              <h2 className="text-md font-semibold mb-2">Total in Progress</h2>
              <p className="text-7xl mt-4 p-8">2</p>
            </div>
          </div>
        </main>
      </div>
      {<Footer />}
    </div>
  );
};

export default Dashboard;
