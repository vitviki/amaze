import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components";

import "./dashboardLayout.css";

const DashboardLayout = () => {
  return (
    <div className="dashboardLayout">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
