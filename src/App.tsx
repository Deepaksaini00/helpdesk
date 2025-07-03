import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import NewTicket from "./pages/NewTicket";
import { BrowserRouter } from "react-router-dom";
import MyTickets from "./pages/MyTickets";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <BrowserRouter>
      {/* <Router>i */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/newticket" element={<NewTicket />} />
        <Route path="/mytickets" element={<MyTickets />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
      {/* </Router> */}
    </BrowserRouter>
  );
}

export default App;
