import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const NewTicket: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedin = localStorage.getItem("isLoggedIn");
    if (!isLoggedin) {
      navigate("/login");
    }
  }, [navigate]);

  const [ticketNo, setTicketNo] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTicket = {
      ticketNo,
      date,
      name,
      department,
      subject,
      category,
      description,
      type,
      priority,
    };

    const existingTickets = JSON.parse(localStorage.getItem("tickets") || "[]");
    localStorage.setItem(
      "tickets",
      JSON.stringify([...existingTickets, newTicket]),
    );

    alert("Ticket submitted successfully!");
    navigate("/mytickets");
  };
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Layout: Sidebar + Content */}
      <div className="flex flex-1 bg-gray-300">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 p-8 bg-white">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Create New Ticket
          </h2>

          {/* Ticket Form */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-2 gap-6 text-sm"
          >
            {/* Row 1: Ticket No. and Date */}
            <div>
              <label htmlFor="ticket_no" className="block font-medium mb-1">
                Ticket No.
              </label>
              <input
                type="text"
                id="ticket_no"
                value={ticketNo}
                onChange={(e) => setTicketNo(e.target.value)}
                className="w-full p-2.5 border rounded-md bg-gray-200"
                required
              />
            </div>

            <div>
              <label htmlFor="date" className="block font-medium mb-1">
                Date
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-2.5 border rounded-md bg-gray-200"
                required
              />
            </div>

            {/* Row 2: Name and Department */}
            <div>
              <label htmlFor="name" className="block font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2.5 border rounded-md bg-gray-200"
                required
              />
            </div>

            <div>
              <label htmlFor="department" className="block font-medium mb-1">
                Department
              </label>
              <input
                type="text"
                id="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full p-2.5 border rounded-md bg-gray-200"
                required
              />
            </div>

            {/* Subject - Full Width */}
            <div className="col-span-2">
              <label htmlFor="subject" className="block font-medium mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full p-2.5 border rounded-md bg-gray-200"
                required
              />
            </div>

            {/* Category + Description */}
            <div>
              <label htmlFor="category" className="block font-medium mb-1">
                Category
              </label>
              <input
                type="text"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2.5 border rounded-md bg-gray-200"
                required
              />
            </div>

            <div>
              <label htmlFor="description" className="block font-medium mb-1">
                Description
              </label>
              <textarea
                id="description"
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2.5 border rounded-md bg-gray-200 resize-none"
              ></textarea>
            </div>

            {/* Type + Priority */}
            <div>
              <label htmlFor="type" className="block font-medium mb-1">
                Type
              </label>
              <input
                type="text"
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full p-2.5 border rounded-md bg-gray-200"
                required
              />
            </div>

            <div>
              <label htmlFor="priority" className="block font-medium mb-1">
                Priority
              </label>
              <input
                type="text"
                id="priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full p-2.5 border rounded-md bg-gray-200"
                required
              />
            </div>

            {/* CAPTCHA + Submit */}
            <div className="col-span-2 flex flex-col md:flex-row items-center justify-between mt-4 gap-4">
              <div className="p-4 bg-white rounded-md w-full md:w-[60%]">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="text-xl mr-2" />
                  I'm not a robot
                </label>
              </div>

              <button
                type="submit"
                className="bg-teal-400 text-black px-6 py-4 rounded-md hover:bg-teal-500 w-full md:w-auto"
              >
                Submit
              </button>
            </div>
          </form>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NewTicket;
