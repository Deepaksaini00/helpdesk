import { FaBell, FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };
  const handleProfile = () => {
    navigate("/profile");
  };

  return (
    <nav className="w-full h-16 bg-[#55D6C2] flex items-center justify-between px-6 shadow-md">
      {/* Left: Logo */}
      <div className="text-white text-2xl italic font-bold">Helpdesk</div>

      {/* Right: Language, Notification, User */}
      <div className="flex items-center gap-4">
        {/* Language Switch */}
        <div className="flex gap-1">
          <button className="bg-white text-black px-2 py-1 text-sm font-semibold rounded shadow">
            BM
          </button>
          <button className="bg-black text-white px-2 py-1 text-sm font-semibold rounded shadow">
            BI
          </button>
        </div>

        {/* Notification Icon */}
        <button className="text-black hover:text-white">
          <FaBell size={20} />
        </button>

        {/* User Icon */}
        <button onClick={handleProfile} className="text-black hover:text-white">
          <FaUser size={20} />
        </button>

        {/* Logout Button */}
        <button onClick={handleLogout} className="text-black  hover:text-white">
          <FiLogOut size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
