import { Link } from "react-router-dom";
import { RiLogoutBoxLine } from "react-icons/ri";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <span className="title">DASHBOARD</span>
      <hr />
      <div className="list">
        <Link to="/users">Users</Link>
        <Link to="/products">Products</Link>
      </div>
      <button className="logout">
        <RiLogoutBoxLine className="logout_button" />
        <p>Logout</p>
      </button>
    </div>
  );
};

export default Sidebar;
