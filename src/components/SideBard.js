import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { activeLink, normalLink } from "./sidebarStyles";

const SideBard = () => {
  function ActiveStylses(isActive) {
    if (isActive) return activeLink;
    return normalLink;
  }
  return (
    <div>
      <span className="flex items-center gap-x-3">
        <img src={Logo} alt="logo" className="w-10  ocject-cover" />
        <h1 className="uppercase text-xl text-[#002080] font-semibold">
          Hofan Institute
        </h1>
      </span>
      <span>
        <h1 className="uppercase text-gray-500 py-3">Dashboard</h1>
        <hr />
        <ul className="py-3 gap-y-6 text-sm ">
          <li>
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) => ActiveStylses(isActive)}
            >
              <AiOutlineHome />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/applied-students"
              className={({ isActive }) => ActiveStylses(isActive)}
            >
              <AiOutlineHome />
              Applied Students
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/approved-students"
              className={({ isActive }) => ActiveStylses(isActive)}
            >
              <AiOutlineHome />
              Approved Students
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/diploma"
              className={({ isActive }) => ActiveStylses(isActive)}
            >
              <AiOutlineHome />
              Diploma Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/certificate"
              className={({ isActive }) => ActiveStylses(isActive)}
            >
              <AiOutlineHome />
              Certificate Courses
            </NavLink>
          </li>
        </ul>
        <hr />
      </span>
      <span className="mt-3">
        <button className="px-4 py-2 bg-red-600 text-white text-sm mt-3">
          Sign Out
        </button>
      </span>
    </div>
  );
};

export default SideBard;
