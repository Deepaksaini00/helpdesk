import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import NewTicket from "./pages/NewTicket";
import MyTickets from "./pages/MyTickets";
import UserProfile from "./pages/UserProfile";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const defaultUser = {
      username: "testuser",
      email: "test@example.com",
      password: "test123",
    };

    const alreadyExists = existingUsers.some(
      (user: any) => user.email === defaultUser.email,
    );

    if (!alreadyExists) {
      localStorage.setItem(
        "users",
        JSON.stringify([...existingUsers, defaultUser]),
      );
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/newticket" element={<NewTicket />} />
        <Route path="/mytickets" element={<MyTickets />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
