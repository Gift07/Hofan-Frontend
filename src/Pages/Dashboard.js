import React from "react";
import SideBard from "../components/SideBard";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="w-screen h-screen fixed flex font-poppins ">
        <div className="duration-500 p-4 w-72 pt-6 h-screen bg-white shadow z-20">
          <SideBard />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
