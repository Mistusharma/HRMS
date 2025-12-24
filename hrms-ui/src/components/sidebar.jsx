import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3 className="logo">HRMS</h3>

      <nav className="menu">
        <Link to="/">Dashboard</Link>
        <Link to="/attendance">Attendance</Link>
        <Link to="/employees">Employees</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
