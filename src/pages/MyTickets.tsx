import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

import {
  FaSearch,
  FaStar,
  FaRegStar,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

const ticketData = [
  {
    ticketNo: 1234,
    subject: "Login issue",
    status: "In Progress",
    supportBy: "Tech support",
    date: "13/08/21",
    rating: 0,
  },
  {
    ticketNo: 1124,
    subject: "New ticket issue",
    status: "On hold",
    supportBy: "Operation Team",
    date: "14/08/21",
    rating: 0,
  },
  {
    ticketNo: 1224,
    subject: "New request",
    status: "Closed",
    supportBy: "Tech support",
    date: "13/08/21",
    rating: 4.5,
  },
  {
    ticketNo: 1244,
    subject: "Ticket submission",
    status: "In Progress",
    supportBy: "Operation Team",
    date: "14/08/21",
    rating: 0,
  },
  {
    ticketNo: 1114,
    subject: "Login issue",
    status: "In Progress",
    supportBy: "Tech support",
    date: "03/08/21",
    rating: 0,
  },
];

const getStatusStyle = (status: string) => {
  switch (status) {
    case "In Progress":
      return "bg-green-400";
    case "On hold":
      return "bg-blue-700";
    case "Closed":
      return "bg-gray-700";
    default:
      return "bg-gray-400";
  }
};

const MyTickets: React.FC = () => {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState(ticketData);

  useEffect(() => {
    const isLoggedin = JSON.stringify(localStorage.getItem("isLoggedIn"));
    if (!isLoggedin) {
      navigate("/login");
    }
    const savedTickets = JSON.parse(localStorage.getItem("tickets") || "[]");
    if (!savedTickets || savedTickets.length < 2) {
      const combined = [...savedTickets, ticketData].slice(0, 5);
      setTickets(combined);
    } else {
      setTickets(savedTickets);
    }
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1 h-ful bg-gray-300">
        <Sidebar />
        <main className="flex-1 p-6 bg-white">
          <h2 className="text-2xl font-semibold text-center mb-6">
            List of Ticket
          </h2>

          {/* Search & Filters */}
          <div className="flex items-center gap-6 mb-4">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Find ticket"
                className="w-full border rounded-md p-2 pl-4 pr-10 shadow-sm"
              />
              <FaSearch className="absolute top-3 right-3 text-gray-500" />
            </div>

            <div className="flex items-center">
              <label htmlFor="entries" className="mr-2">
                Show:
              </label>
              <select id="entries" className="border rounded px-2 py-1">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <span className="ml-2">Entries</span>
            </div>
          </div>

          {/* Ticket Table */}
          <div className="overflow-x-auto shadow rounded-md">
            <table className="w-full text-sm text-left bg-gray-100">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="py-2 px-4">Ticket No.</th>
                  <th className="py-2 px-4">Subject</th>
                  <th className="py-2 px-4">Status</th>
                  <th className="py-2 px-4">Support by</th>
                  <th className="py-2 px-4">Date</th>
                  <th className="py-2 px-4">Rate</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket) => (
                  <tr
                    key={ticket.ticketNo}
                    className="border-t border-gray-300"
                  >
                    <td className="py-2 px-4 text-blue-600 underline cursor-pointer">
                      {ticket.ticketNo}
                    </td>
                    <td className="py-2 px-4">{ticket.subject}</td>
                    <td className="py-2 px-4">
                      <span
                        className={`text-white px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                          ticket.status,
                        )}`}
                      >
                        {ticket.status}
                      </span>
                    </td>
                    <td className="py-2 px-4">{ticket.supportBy}</td>
                    <td className="py-2 px-4">{ticket.date}</td>
                    <td className="py-2 px-4 flex">
                      {Array.from({ length: 5 }).map((_, i) => {
                        const full = i + 1 <= Math.floor(ticket.rating);
                        const half = i + 0.5 === ticket.rating;
                        return full ? (
                          <FaStar key={i} className="text-yellow-400" />
                        ) : half ? (
                          <FaStar
                            key={i}
                            className="text-yellow-400 opacity-50"
                          />
                        ) : (
                          <FaRegStar key={i} className="text-gray-400" />
                        );
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-4 flex justify-end items-center gap-4 text-sm text-gray-600">
            Showing 1 to {tickets.length} of {tickets.length} entries
            <div className="flex gap-2 items-center text-xl">
              <FaAngleDoubleLeft />
              <span className="border px-2 py-1 bg-gray-300 rounded text-black">
                1
              </span>
              <FaAngleDoubleRight />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MyTickets;
