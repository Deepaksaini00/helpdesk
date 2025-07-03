import { Link } from "react-router-dom";
import { FaTachometerAlt, FaTicketAlt, FaClipboardList } from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <aside className="min-h-full w-[18vw] bg-gray-300 p-4 space-y-4 ">
      <nav className="space-y-6 mt-4 font-bold">
        <Link
          to="/"
          className="flex items-center gap-3 text-lg  text-black hover:text-teal-600 cursor-pointer"
        >
          <FaTachometerAlt />
          Dashboard
        </Link>
        <Link
          to="/newticket"
          className="flex items-center gap-3 text-lg text-black hover:text-teal-600 cursor-pointer"
        >
          <FaTicketAlt />
          New Ticket
        </Link>
        <Link
          to="/mytickets"
          className="flex items-center gap-3 text-lg text-black hover:text-teal-600 cursor-pointer"
        >
          <FaClipboardList />
          My Ticket
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
